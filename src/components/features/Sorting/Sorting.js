import React from 'react';
import { Link } from 'react-router-dom';

import './Sorting.css';

const Sorting = ({onSortAscend, onSortDescend, onSortAZ, onSortZA}) => {
    return (
        <div className="sorting">
            <h3 className="sorting__heading">Sortuj:</h3>
            <div className="sorting__item" onClick={onSortAZ}>Nazwa A-Z</div>
            <div className="sorting__item" onClick={onSortZA}>Nazwa Z-A</div>
            <div className="sorting__item" onClick={onSortAscend}>Cena rosnąco</div>
            <div className="sorting__item" onClick={onSortDescend}>Cena malejąco</div>
        </div>
    )
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
