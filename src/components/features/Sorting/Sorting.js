import React from 'react';

import './Sorting.css';

const Sorting = ({products, onSortAscend, onSortDescend, onSortAZ, onSortZA}) => {
    return (
        <div className="sorting">
            <h3>Sortuj:</h3>
            <div className="sorting__title" onClick={onSortAZ}>Nazwa A-Z</div>
            <div className="sorting__title" onClick={onSortZA}>Nazwa Z-A</div>
            <div className="sorting__title" onClick={onSortAscend}>Cena rosnąco</div>
            <div className="sorting__title" onClick={onSortDescend}>Cena malejąco</div>
        </div>
    )
}

export default Sorting;