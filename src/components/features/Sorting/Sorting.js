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

Sorting.propTypes = {
    onSortAscend: PropTypes.func,
    onSortDescend: PropTypes.func,
    onSortAZ: PropTypes.func,
    onSortZA: PropTypes.func
}

export default Sorting;


// const Sorting = ({onSortAscend, onSortDescend, onSortAZ, onSortZA, activeCategory}) => {
//     return (
//         <div className="sorting">
//             <h3>Sortuj:</h3>
//             <div className="sorting__title" onClick={onSortAZ}>
//                 <Link to={`/category=${activeCategory}&sort_by=name_asc`}>Nazwa A-Z</Link>
//             </div>
//             <div className="sorting__title" onClick={onSortZA}>
//                 <Link to={`/category=${activeCategory}&sort_by=name_desc`}>Nazwa Z-A</Link>
//             </div>
//             <div className="sorting__title" onClick={onSortAscend}>
//                 <Link to={`/category=${activeCategory}&sort_by=price_asc`}>Cena rosnąco</Link>
//             </div>
//             <div className="sorting__title" onClick={onSortDescend}>
//                 <Link to={`/category=${activeCategory}&sort_by=price_desc`}>Cena malejąco</Link>
//             </div>
//         </div>
//     )
// }
