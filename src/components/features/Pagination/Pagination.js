import React from 'react';
import { Pagination as PaginationBar, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

import './Pagination.scss';

const Pagination = ({pagesNumber, currentPage, changeCurrentPage, paginationDisplay}) => {
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

    const paginationSize = (window.innerWidth > 768) ? "" : "sm"

    return (
        <PaginationBar className="pagination-bar" size={paginationSize} style={{display: paginationDisplay}}>
            <PaginationItem onClick={() => {changeCurrentPage(1); window.scroll(0, 0)}} disabled={isDisabled(1)}>
                <PaginationLink first />
            </PaginationItem>
            <PaginationItem onClick={() => {changeCurrentPage(previousPage); window.scroll(0, 0)}} disabled={isDisabled(1)}>
                <PaginationLink previous />
            </PaginationItem>
            {
                pages.map((page) => {
                    return (
                        <PaginationItem
                            onClick={() => {changeCurrentPage(page); window.scroll(0, 0)}}
                            active={checkActivePage(page)}
                            key={page}
                        >
                            <PaginationLink href="#home">{page}</PaginationLink>
                        </PaginationItem>
                    )
                })
            }
            <PaginationItem onClick={() => {changeCurrentPage(nextPage); window.scroll(0, 0)}} disabled={isDisabled(pagesNumber)}>
                <PaginationLink next />
            </PaginationItem>
            <PaginationItem onClick={() => {changeCurrentPage(pagesNumber); window.scroll(0, 0)}} disabled={isDisabled(pagesNumber)}>
                <PaginationLink last />
            </PaginationItem>
        </PaginationBar>
    )
}

Pagination.propTypes = {
    pagesNumber: PropTypes.number,
    currentPage: PropTypes.number,
    changeCurrentPage: PropTypes.func,
    paginationDisplay: PropTypes.string
}

export default Pagination;