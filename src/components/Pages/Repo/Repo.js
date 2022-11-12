import React, {useContext} from 'react';
import Image from '../../UI/Image/Image';
import RepoTile from '../Repositories/RepoTile/RepoTile';
import ViewRepoBtn from '../Repositories/RepoTile/ViewRepoBtn/ViewRepoBtn';
import classes from './Repo.module.css';
import githubImage from '../../../assets/icons/github.svg';
import RepoLinkBtn from '../Repositories/RepoTile/RepoLinkBtn/RepoLinkBtn';
import Context from '../../Context/Context';
import { Link } from 'react-router-dom';

const Repo = ( props ) => {
   const context = useContext(Context);
   return (
      <div className={ classes[ 'repositories' ] }>
         <Link to="/repos" className={classes['myButton']} >Go Back</Link>
         <RepoTile name={props.name} about={props.about}>
            <ViewRepoBtn
               sty="flip-card__action"
               text="Live Link"
               page={props.page}
            />
            <ViewRepoBtn
               sty="project-tile__link"
               image={
                  <Image
                     src={githubImage}
                     radius="50%"
                     maxWidth="30px"
                     alt="github icon"
                  />
               }
               text="Github"
               page={props.url}
            />
            <RepoLinkBtn
               port={props.port}
               setPort={props.setPort}
               act="README.md"
               name="readme"
            />
         </RepoTile>
         {context.readme}
         <div id="readme" className={classes['readmeBox']}></div>
      </div>
   );
};

export default Repo;
