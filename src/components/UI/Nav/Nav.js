import React from 'react';
import classes from '../Header/Header.module.css';
import NavItems from './NavItems/NavItems';

const Nav = () => {
   return (
      <nav className={classes['nav-bar']}>
         <NavItems />
      </nav>
   );
};

export default Nav;