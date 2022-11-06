import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import Context from '../Context/Context';
import Repositories from '../Pages/Repositories/Repositories';
import Spinner from '../UI/Spinner/Spinner';
import './Paginate.css';

const PaginatedPages = ({ itemsPerPage }) => {
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const context = useContext(Context);
   const repoData = context.userRepos.data;
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const repos = repoData ? repoData : [];

   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(repos.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(repos.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, repos]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % repos.length;
      console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`,
      );
      setItemOffset(newOffset);
   };

   return !repoData ? (
      <Spinner />
   ) : (
      <>
         <Repositories currentItems={currentItems} />
         <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item prev"
            nextClassName="page-item next"
            breakClassName="page-item"
            activeClassName="active-page"
         />
      </>
   );
};

export default PaginatedPages;
