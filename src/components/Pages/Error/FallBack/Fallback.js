import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './FallBack.module.css';

const Fallback = (error) => {
   const navigate = useNavigate();
   return (
      <>
         <div role="alert" className={classes['main']}>
            <p className={classes['text']}>
               Looks like something went wrong!!!😥
            </p>
            <pre>{error.message}</pre>
            <a href='/' className={classes['myButton'] } onClick={() => navigate(-1)}>Go Back Home 😖</a>
         </div>
      </>
   );
};

export default Fallback;
