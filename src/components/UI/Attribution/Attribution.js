import React from 'react';
import classes from './Attribution.module.css'

const Attribution = () => {
   return (
      <div className={classes['attribution']}>
         &copy; 2022 All rights reserved. Coded by
         <a href="https://github.com/babboe1"> babboeCodes</a>.
      </div>
   );
};

export default Attribution;