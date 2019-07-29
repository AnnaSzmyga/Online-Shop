import React from 'react';
import { Link } from 'react-router-dom';

import './Sorting.css';

const Sorting = ({products, onSortAscend, onSortDescend, onSortAZ, onSortZA}) => {
    return (
        <div className="sorting">
            <h3>Sortuj:</h3>
            <div className="sorting__title" onClick={onSortAZ}>
                <Link to="/sort_by=name_asc">Nazwa A-Z</Link>
            </div>
            <div className="sorting__title" onClick={onSortZA}>
                <Link to="/sort_by=name_desc">Nazwa Z-A</Link>
            </div>
            <div className="sorting__title" onClick={onSortAscend}>
                <Link to="/sort_by=price_asc">Cena rosnąco</Link>
            </div>
            <div className="sorting__title" onClick={onSortDescend}>
                <Link to="/sort_by=price_desc">Cena malejąco</Link>
            </div>
        </div>
    )
}

export default Sorting;