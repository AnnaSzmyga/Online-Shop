import React from 'react';

import './Pagination.css';

const Pagination = ({pagesNumber, changeCurrentPage}) => {
    let pages = [];
    for (let i = 1; i < (pagesNumber + 1); i++) {
        pages.push(i);
    }
    console.log("liczba stron: " + pagesNumber);
    return (
        <div className="pagination">
            pagination
            {
                pages.map((page) => {
                    return <div onClick={() => {changeCurrentPage(page)}} key={page}>{page}</div>
                })
            }
        </div>
    )
}

export default Pagination;