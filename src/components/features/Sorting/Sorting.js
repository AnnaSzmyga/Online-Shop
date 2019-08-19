import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Sorting.scss';

const Sorting = ({onSortAscend, onSortDescend, onSortAZ, onSortZA, activeFilter, toggleActiveClassName}) => {
    const setClassName = (sortingName) => {
        return (activeFilter.activeSorting === sortingName) ? "sorting__item active-filter" : "sorting__item";
    }
    // if (activeFilter.activeSorting !== 'non') {

    // }

    return (
        <div className="sorting">
            <h3 className="sorting__heading">Sortuj:</h3>

            <Link to={`/category=${activeFilter.activeCategory}&sorting=sortAZ`}>
                <div className={setClassName("sortAZ")} onClick={(e) => {onSortAZ(); toggleActiveClassName(e)}}>Nazwa A-Z</div>
            </Link>
            <Link to={`/category=${activeFilter.activeCategory}&sorting=sortZA`}>
                <div className={setClassName("sortZA")} onClick={(e) => {onSortZA(); toggleActiveClassName(e)}}>Nazwa Z-A</div>
            </Link>
            <Link to={`/category=${activeFilter.activeCategory}&sorting=sortAscend`}>
                <div className={setClassName("sortAscend")} onClick={(e) => {onSortAscend(); toggleActiveClassName(e)}}>Cena rosnąco</div>
            </Link>
            <Link to={`/category=${activeFilter.activeCategory}&sorting=sortDescend`}>
                <div className={setClassName("sortDescend")} onClick={(e) => {onSortDescend(); toggleActiveClassName(e)}}>Cena malejąco</div>
            </Link>
        </div>
    )
}

Sorting.propTypes = {
    onSortAscend: PropTypes.func,
    onSortDescend: PropTypes.func,
    onSortAZ: PropTypes.func,
    onSortZA: PropTypes.func,
    activeFilter: PropTypes.object,
    toogleActiveClassNames: PropTypes.func
}

export default Sorting;

