import React from 'react';
//import { Link } from 'react-router-dom';


const Category = ({category, onFilterCategory}) => {
    return (
        <li onClick={onFilterCategory}>{category.categoryOutput}</li>
    )
}

export default Category;

//<Link to={`/category=${category.categoryName}&sort_by=${activeSorting}`}>{category.categoryOutput}</Link>