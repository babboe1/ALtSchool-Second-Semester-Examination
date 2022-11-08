import React, { useState, useEffect } from 'react';
import Context from './components/Context/Context';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Pages/Overview/Overview';
import Header from './components/UI/Header/Header';
import PaginatedPages from './components/Paginate/PaginatedPages';
import Repo from './components/Pages/Repo/Repo';
import Readme from './components/Pages/Repositories/RepoTile/ViewRepoBtn/Readme/Readme';

const App = () => {
   const [userData, setUserData] = useState('');
   const [userRepos, setUserRepos] = useState('');
   const [ errorMsg, setErrorMsg ] = useState();
   const [ readme, setReadme ] = useState('');
   
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

   const value = {
      userData,
      userRepos,
      errorMsg,
      readme,
      setReadme,
   };

   const routeData = userRepos ? userRepos.data : [];
   const routeDataMap = routeData.map((item) => (
      <Route
         path={`repos/${item.name}`}
         key={item.id}
         element={ <Repo name={ item.name } about={ item.description } page={ item.homepage } url={ item.html_url} />}
      >
         <Route path="readme" element={ <Readme name={ item.name }/>} />
      </Route>
   ));

   return (
      <Context.Provider value={value}>
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<Overview />} />
               <Route
                  path="repos"
                  element={<PaginatedPages itemsPerPage={6} />}
               />
               {routeDataMap}
            </Routes>
         </main>
      </Context.Provider>
   );
};

export default App;
