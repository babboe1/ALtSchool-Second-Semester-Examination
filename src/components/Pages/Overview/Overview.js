import React, { useContext } from 'react';
import Context from '../../Context/Context';
import classes from './Overview.module.css';
import Spinner from '../../UI/Spinner/Spinner';
import About from './About/About';

const Overview = (prop) => {
   const context = useContext(Context);
   const userData = context.userData;
   const holder = (
      <div className={classes.holder}>
         <p className={classes.errorMsg}>{context.errorMsg}</p>
         <button
            className={classes['myButton']}
            onClick={() => {
               window.location.reload();
            }}
         >
            Refresh
         </button>
      </div>
   );
   const loader = context.errorMsg ? holder : <Spinner />;

   return (
      <section className={classes.main}>
         {userData ? <About /> : loader}
      </section>
   );
};

export default Overview;
