import React, { useContext } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import Context from '../../../Context/Context';
import classes from './Error&404.module.css'


const Error404 = () => {
   const context = useContext( Context );
   const handleError = useErrorHandler();
   const throwCounterClickHandler = () => {
      try {
         if (context.count <= 1) {
            throw new Error('💥 KABOOM 💥');
         }
         context.setCount(context.count - 1);
      } catch (error) {
         context.setCountError( error );
         handleError( error );
      }
   };

   return (
      <div className={ classes[ "main" ] }>
         <p className={classes["text"]}>To check for error boundary & 404 page , click the button(s) below!!!</p>
         <div className ={classes['btnBox']}>
            <button className={classes['myButton']} onClick={throwCounterClickHandler}>
               Error in {context.count}😈
            </button>
            <Link to='/notFound' className={classes['myButton']}>
               404😈
            </Link>
         </div>
      </div>
   );
};

export default Error404;
