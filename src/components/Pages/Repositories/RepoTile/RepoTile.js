import React from 'react';
import { Link } from 'react-router-dom';

import classes from './RepoTile.module.css';

const RepoTile = (props) => {
   return (
      <div className={classes['project-content']}>
         <div
            className={`${classes['project-blur']} ${classes['blur-bg5']}`}
         ></div>
         <div className={classes['project-tile']}>
            <h3 className={classes['project-tile__title']}>{props.name}</h3>
            <p className={classes['project-tile__text']}>{props.about}</p>
         </div>
         <div className={classes['project-tile__nav']}>
            <Link
               to={`/repo/:${props.name}`}
               className={classes['flip-card__action']}
            >
               view Repo
            </Link>
         </div>
      </div>
   );
};

export default RepoTile;
