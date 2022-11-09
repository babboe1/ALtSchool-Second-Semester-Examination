import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import classes from './Header.module.css';
import Logo from '../../../assets/images/Logo.png';
import Nav from '../Nav/Nav';
import MenuModal from '../../Modals/MenuModal/MenuModal';

const Header = () => {
   return (
      <header className={classes.header}>
         <Link to="/">
            <Image src={Logo} />
         </Link>

         <Nav />
         <MenuModal>
            {/* <Link to="/">
               <Image src={Logo} maxWidth="10rem"/>
            </Link> */}
            <Nav ulClass="flex" />
         </MenuModal>
      </header>
   );
};

export default Header;
