import React, { useContext, useEffect } from 'react';
import instance from '../../../../../Packages/Axios/Axios';
import Context from '../../../../../Context/Context';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const decode = (str) => {
   return decodeURIComponent(escape(window.atob(str)));
};

const Readme = (props) => {
   const context = useContext( Context );
   const readme =
      context.readme !== '' ? (
         <ReactMarkdown children={`${context.readme}`} remarkPlugins={[remarkGfm]} />
      ) : (
         <p>Readme not found</p>
      );
   useEffect(() => {
      instance
         .get(`/${props.name}/contents/README.md`)
         .then((res) => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            context.setReadme(decode(res.data.content));
         })
         .catch((error) => {
            // setErrorMsg(error.message);
            console.log(error.message);
         });
   }, [ props.name, context ] );
   console.log(readme);

   return <div>{readme}</div>;
};

export default Readme;
