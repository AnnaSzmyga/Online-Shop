import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Category.scss';

const Category = ({category, onFilterCategory, activeFilter, toggleActiveClassName}) => {

    const categoryClassName = (activeFilter.activeCategory === category.categoryName) ? "category__link active-filter" : "category__link";
    return (
        <li className="category">
            <Link
                to={`/category=${category.categoryName}&sorting=${activeFilter.activeSorting}`}
                className={categoryClassName}
                onClick={(e) => {
                    onFilterCategory();
                    toggleActiveClassName(e);}
                }
            >
                {category.categoryOutput}
            </Link>
        </li>
    )
}

Category.propTypes = {
    category: PropTypes.object,
    onFilterCategory: PropTypes.func,
    activeFilter: PropTypes.object,
    setActiveFilter: PropTypes.func,
    toggleActiveClassName: PropTypes.func
}

export default Category;