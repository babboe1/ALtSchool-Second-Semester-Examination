import React, { useContext } from 'react';
import Context from '../../Context/Context';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Repos.module.css';
import RepoTile from './RepoTile/RepoTile';

const Repositories = ({currentItems}) => {
   const context = useContext(Context);
   const repos = currentItems ? currentItems : null;
   // console.log(repos ? repos.length : null);

   const loader = context.errorMsg ? (
      <p className={classes.errorMsg}>{context.errorMsg}</p>
   ) : (
      <Spinner />
   );

   const repoTiles = repos
      ? repos.map((repo, index) => <RepoTile name={currentItems[index].name} about={currentItems[index].description} key={currentItems[index].id} />)
      : loader;

   return <div className={classes.repositories}>{repoTiles}</div>;
};

export default Repositories;
