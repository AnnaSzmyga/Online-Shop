import React from 'react';
import PropTypes from 'prop-types';

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
    onFilterCategory: PropTypes.func,
    toggleActiveClassName: PropTypes.func
}

export default Category;