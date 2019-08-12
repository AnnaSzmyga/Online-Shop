import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

import './Category.scss';

const Category = ({category, onFilterCategory, toggleActiveClassName}) => {
    return (
        <li
            className="category"
            onClick={(e) => {onFilterCategory(); toggleActiveClassName(e)}}
        >
            {category.categoryOutput}
        </li>
    )
}

Category.propTypes = {
    category: PropTypes.object,
    onFilterCategory: PropTypes.func
}

export default Category;

//<Link to={`/category=${category.categoryName}&sort_by=${activeSorting}`}>{category.categoryOutput}</Link>