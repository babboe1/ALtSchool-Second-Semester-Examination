import React, { useContext } from 'react';
import classes from '../../Header/Header.module.css';
import NavItem from './NavItem/NavItem';
import overviewIcon from '../../../../assets/icons/overview.svg';
import repoIcon from '../../../../assets/icons/repo.svg';
import Context from '../../../Context/Context';

const NavItems = () => {
   const context = useContext(Context);
   const repoCount = context.userRepos.data ? context.userRepos.data.length : '';

   console.log(context.userRepos ? context.userRepos.data[0] : '');
   
   return (
      <>
         <ul className={classes['nav-bar__list']}>
            <NavItem URL="/overview">
               <img src={overviewIcon} alt="icon" /> <p>Overview</p>
            </NavItem>
            <NavItem URL="/repos">
               <img src={repoIcon} alt="icon" />{' '}
               <p>{`Repositories ${repoCount}`}</p>
            </NavItem>
         </ul>
         <div className={classes['nav-bar__list--after']}></div>
      </>
   );
};

export default NavItems;
