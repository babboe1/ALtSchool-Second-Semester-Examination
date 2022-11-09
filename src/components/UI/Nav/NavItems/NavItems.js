import React, { useContext } from 'react';
import classes from '../../Header/Header.module.css';
import NavItem from './NavItem/NavItem';
import overviewIcon from '../../../../assets/icons/overview.svg';
import repoIcon from '../../../../assets/icons/repo.svg';
import Context from '../../../Context/Context';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const NavItems = (props) => {
   const context = useContext(Context);
   const repoCount = context.userRepos.data ? (
      <p>
         Repositories{' '}
         <span className={classes['repo-count']}>
            {context.userRepos.data.length}
         </span>
      </p>
   ) : (
      ''
   );

   return (
      <>
         <ul className={classes[props.ulClass]}>
            <NavItem URL="/">
               <img src={overviewIcon} alt="icon" /> <p>Overview</p>
            </NavItem>
            <NavItem URL="/repos">
               <img src={repoIcon} alt="icon" />{' '}
               {repoCount}
            </NavItem>
            <NavItem URL="/test">
               <img src={overviewIcon} alt="icon" /> <p>404 Page</p>
            </NavItem>
         </ul>
         <DrawerToggle />
         <div className={classes['nav-bar__list--after']}></div>
      </>
   );
};

export default NavItems;
