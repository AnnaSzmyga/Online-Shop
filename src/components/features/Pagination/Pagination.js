import React from 'react';
import { Pagination as PaginationBar, PaginationItem, PaginationLink } from 'reactstrap';
import './Pagination.css';

const Pagination = ({pagesNumber, currentPage, changeCurrentPage}) => {
    let pages = [];
    for (let i = 1; i < (pagesNumber + 1); i++) {
        pages.push(i);
    }
    let previousPage = (currentPage === 1) ? 1 : currentPage - 1;
    let nextPage = (currentPage === pagesNumber) ? pagesNumber : currentPage + 1;

    const checkActivePage = (page) => {
        return (currentPage === page) ? true : false;
    }
    const isDisabled = (page) => {
        return (currentPage === page) ? true : false;
    }

    return (
        <PaginationBar className="pagination-bar">
            <PaginationItem onClick={() => {changeCurrentPage(1)}} disabled={isDisabled(1)}><PaginationLink first /></PaginationItem>
            <PaginationItem onClick={() => {changeCurrentPage(previousPage)}} disabled={isDisabled(1)}><PaginationLink previous /></PaginationItem>
            {
                pages.map((page) => {
                    return (
                        <PaginationItem onClick={() => {changeCurrentPage(page)}} active={checkActivePage(page)} key={page}>
                            <PaginationLink>{page}</PaginationLink>
                        </PaginationItem>
                    )
                })
            }
            <PaginationItem onClick={() => {changeCurrentPage(nextPage)}} disabled={isDisabled(pagesNumber)}><PaginationLink next /></PaginationItem>
            <PaginationItem onClick={() => {changeCurrentPage(pagesNumber)}} disabled={isDisabled(pagesNumber)}><PaginationLink last /></PaginationItem>
        </PaginationBar>
    )
}

export default Pagination;