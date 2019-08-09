import React from 'react';
//import { Link } from 'react-router-dom';

import './Category.scss';

const Category = ({category, onFilterCategory}) => {
    return (
        <li className="category" onClick={onFilterCategory}>{category.categoryOutput}</li>
    )
}

export default Category;

//<Link to={`/category=${category.categoryName}&sort_by=${activeSorting}`}>{category.categoryOutput}</Link>