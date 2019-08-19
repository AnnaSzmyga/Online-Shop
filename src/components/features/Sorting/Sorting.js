import React from 'react';
import PropTypes from 'prop-types';

import './Sorting.scss';

const Sorting = ({onSortAscend, onSortDescend, onSortAZ, onSortZA, toggleActiveClassName}) => {
    return (
        <div className="sorting">
            <h3 className="sorting__heading">Sortuj:</h3>
            <div className="sorting__item" onClick={(e) => {onSortAZ(); toggleActiveClassName(e)}}>Nazwa A-Z</div>
            <div className="sorting__item" onClick={(e) => {onSortZA(); toggleActiveClassName(e)}}>Nazwa Z-A</div>
            <div className="sorting__item" onClick={(e) => {onSortAscend(); toggleActiveClassName(e)}}>Cena rosnąco</div>
            <div className="sorting__item" onClick={(e) => {onSortDescend(); toggleActiveClassName(e)}}>Cena malejąco</div>
        </div>
    )
}

// const Sorting = ({onSortAscend, onSortDescend, onSortAZ, onSortZA, activeSorting, toggleActiveClassName}) => {

//     const setClassName = (sortingName) => {
//         return (activeSorting === sortingName) ? "sorting__item active-filter" : "sorting__item";
//     }

//     return (
//         <div className="sorting">
//             <h3 className="sorting__heading">Sortuj:</h3>
//             <div className={setClassName("sort-AZ")} onClick={(e) => {onSortAZ(); toggleActiveClassName(e)}}>Nazwa A-Z</div>
//             <div className={setClassName("sort-ZA")} onClick={(e) => {onSortZA(); toggleActiveClassName(e)}}>Nazwa Z-A</div>
//             <div className={setClassName("sort-Ascend")} onClick={(e) => {onSortAscend(); toggleActiveClassName(e)}}>Cena rosnąco</div>
//             <div className={setClassName("sort-Descend")} onClick={(e) => {onSortDescend(); toggleActiveClassName(e)}}>Cena malejąco</div>
//         </div>
//     )
// }

Sorting.propTypes = {
    onSortAscend: PropTypes.func,
    onSortDescend: PropTypes.func,
    onSortAZ: PropTypes.func,
    onSortZA: PropTypes.func,
    toogleActiveClassNames: PropTypes.func
}

export default Sorting;

