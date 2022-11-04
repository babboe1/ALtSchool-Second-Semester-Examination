import React, { useState, useEffect } from 'react';
import Context from './components/Context/Context';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Overview from './components/Pages/Overview/Overview';
import Header from './components/UI/Header/Header';
import instance from './components/Axios/Axios';
import PaginatedPages from './components/Paginate/PaginatedPages';

const App = () => {
   const [userData, setUserData] = useState('');
   const [ userRepos, setUserRepos ] = useState( '' );
   const [errorMsg, setErrorMsg] = useState();
   useEffect(() => {
      axios
         .get('')
         .then((res) => {
            setUserData(res);
         })
         .catch( ( error ) => {
            setErrorMsg(error.message)
            console.log(error.message);
         });
      axios
         .get('/repos?per_page=100')
         .then((res) => {
            setUserRepos( res );
         })
         .catch( ( error ) => {
            setErrorMsg(error.message);
         });
      instance
         .get('/Loopstudio-Landing-Page')
         .then((res) => {
            // console.log(res);
         })
         .catch((error) => {
            setErrorMsg(error.message);
         });
      instance
         .get(
            '/Loopstudio-Landing-Page/contents/README.md',
         )
         .then((res) => {
            // console.log(res);
         })
         .catch((error) => {
            setErrorMsg(error.message);
         });
   }, [] );
   
   const value = {
      userData,
      userRepos,
      errorMsg
   }
   
   return (
      <Context.Provider value={value}>
         <Header />
         <main>
            <Route path="/overview">
               <Overview />
            </Route>
            <Route path="/repos">
               <PaginatedPages itemsPerPage={6} />
            </Route>
         </main>
      </Context.Provider>
   );
};

export default App;
