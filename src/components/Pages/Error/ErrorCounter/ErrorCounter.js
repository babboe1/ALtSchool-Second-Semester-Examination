import React, { useContext } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import Context from '../../../Context/Context';
import classes from './ErrorCounter.module.css'


const ErrorCounter = () => {
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
         <p className={classes["text"]}>To check for error boundary, click the button below!!!</p>
         <button className={classes['myButton']} onClick={throwCounterClickHandler}>
            Error in {context.count}😈
         </button>
      </div>
   );
};

export default ErrorCounter;
