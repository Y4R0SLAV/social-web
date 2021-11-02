import React from 'react';
import s from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 9}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let start = 0; let finish = 0;

    if (currentPage <= (portionSize / 2 + 1)) {
      start = 1; finish = portionSize;
      
    }
    if (currentPage >= pagesCount - (portionSize / 2 - 1)) {
      start = pagesCount - portionSize + 1;
      finish = pagesCount;
    } 
    if (currentPage > (portionSize / 2 + 1) && currentPage < pagesCount - (portionSize / 2 - 1)){
      start = Math.ceil(currentPage - portionSize / 2);
      finish = currentPage + portionSize / 2 - ((portionSize + 1)% 2) ;
    }

    let pages = [];
    if (start < 1 ) start = 1;
    for (let i = start; i <= finish ; i++) {
      pages.push(i);
    }

    

    return <div>
          {pages
          .map( pageNumber => {
            return <span className={pageNumber === currentPage && s.selectedPage}
                        onClick={e => onPageChanged(pageNumber)}> {pageNumber} </span>
          })}
        </div>
}

export default Paginator;