import React from 'react';
import s from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);  
    
    let pages = [];
    for (let i = 1; i <= pagesCount ; i++) {
      pages.push(i);
    }

    return <div>
          {pages.map( pageNumber => {
            return <span className={pageNumber === currentPage && s.selectedPage}
                        onClick={e => onPageChanged(pageNumber)}> {pageNumber} </span>
          })}
        </div>
}

export default Paginator;