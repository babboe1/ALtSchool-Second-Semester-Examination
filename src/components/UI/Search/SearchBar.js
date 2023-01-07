import React, { useContext, useRef } from 'react';
import Context from '../../Context/Context';
import classes from './SearchBar.module.css';

const SearchBar = () => {
   const searchRef = useRef(null);
   const context = useContext(Context);
   const allReposData = context.userRepos.data;
   let newPageItems = [];

   const onSearchHandler = (e) => {
      e.preventDefault();
      allReposData.forEach((item) => {
         if ( item.name.toLowerCase().includes( `${ searchRef.current.value.toLowerCase() }` ) ) {
            newPageItems.push(item);
         }
      } );
      context.setCurrentPageItems(newPageItems);
   };

   return (
      <div className={classes['search-bar']}>
         <label className={classes.label} htmlFor="search">
            {' '}
            Search
         </label>
         <form onSubmit={onSearchHandler} className={classes['search-box']}>
            <input ref={searchRef} type="text" placeholder=" " />
            <button type="reset"></button>
         </form>
      </div>
   );
};

export default SearchBar;
