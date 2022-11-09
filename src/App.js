import React, { useState, useEffect } from 'react';
import Context from './components/Context/Context';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Pages/Overview/Overview';
import Header from './components/UI/Header/Header';
import PaginatedPages from './components/Paginate/PaginatedPages';
import Repo from './components/Pages/Repo/Repo';
import Readme from './components/Pages/Repositories/RepoTile/ViewRepoBtn/Readme/Readme';
import Backdrop from './components/Modals/Backdrop/Backdrop';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorCounter from './components/Pages/Error/ErrorCounter/ErrorCounter';
import Fallback from './components/Pages/Error/FallBack/Fallback';

const App = () => {
   const [userData, setUserData] = useState('');
   const [userRepos, setUserRepos] = useState('');
   const [errorMsg, setErrorMsg] = useState();
   const [readme, setReadme] = useState('');
   const [menuModal, setMenuModal] = useState(false);
   const [ count, setCount ] = useState( 2 );
   const [ countError, setCountError ] = useState( null );

   useEffect(() => {
      axios
         .get('')
         .then((res) => {
            setUserData(res);
         })
         .catch((error) => {
            setErrorMsg(error.message);
            console.log(error.message);
         });
      axios
         .get('/repos?per_page=100')
         .then((res) => {
            setUserRepos(res);
         })
         .catch((error) => {
            setErrorMsg(error.message);
         });
   }, []);

   const showMenuModal = () => {
      setMenuModal(!menuModal);
   };
   const removeMenuModal = () => {
      setMenuModal(false);
   };

   const onError = (error, errorInfo) => {
      setCountError(error);
      console.log(error, errorInfo);
   };

   const value = {
      userData,
      userRepos,
      errorMsg,
      readme,
      setReadme,
      menuModal,
      showMenuModal,
      removeMenuModal,
      count,
      setCount,
      countError,
      setCountError,
   };

   const routeData = userRepos ? userRepos.data : [];
   const routeDataMap = routeData.map((item) => (
      <Route
         path={`repos/${item.name}`}
         key={item.id}
         element={
            <Repo
               name={item.name}
               about={item.description}
               page={item.homepage}
               url={item.html_url}
            />
         }
      >
         <Route path="readme" element={<Readme name={item.name} />} />
      </Route>
   ));

   return (
      <ErrorBoundary FallbackComponent={()=>Fallback(countError)} onError={onError}>
         <Context.Provider value={value}>
            <Header />
            <Backdrop click={() => setMenuModal(false)} />
            <main>
               <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route
                     path="repos"
                     element={<PaginatedPages itemsPerPage={6} />}
                  />
                  {routeDataMap}
                  <Route path="/error" element={<ErrorCounter />} />
               </Routes>
            </main>
         </Context.Provider>
      </ErrorBoundary>
   );
};

export default App;
