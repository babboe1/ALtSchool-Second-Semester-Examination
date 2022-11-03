import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import classes from './Header.module.css';
import Logo from '../../../assets/images/Logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
   return (
      <header className={classes.header}>
         <Link to="/">
            <Image src={Logo}/>
         </Link>

         <Nav />
      </header>
   );
};

export default Header;
