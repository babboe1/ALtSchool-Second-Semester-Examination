import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../../Header/Header.module.css';

const NavItem = (props) => {
   return (
      <li onMouseOver={props.hover}>
         <NavLink to={props.URL}>
            <span className={classes['nav-bar__link']}>{props.children}</span>
         </NavLink>
      </li>
   );
};

export default NavItem;