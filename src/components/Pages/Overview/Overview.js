import React, { useContext } from 'react';
import Context from '../../Context/Context';
import classes from './Overview.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import About from './About/About';

const Overview = (prop) => {
   const context = useContext(Context);
   const userData = context.userData;
   const loader = context.errorMsg ? <p className={classes.errorMsg}>{context.errorMsg}</p> : <Spinner />;

   return (
      <section className={classes.main}>
         {userData ? <About /> : loader}
      </section>
   );
};

export default Overview;
