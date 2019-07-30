import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({category, onFilterCategory, activeSorting}) => {
    return (
        <li onClick={onFilterCategory}><Link to={`/category=${category.categoryName}`}>{category.categoryOutput}</Link></li>
    )
}

export default Category;

//<Link to={`/category=${category.categoryName}&sort_by=${activeSorting}`}>{category.categoryOutput}</Link>