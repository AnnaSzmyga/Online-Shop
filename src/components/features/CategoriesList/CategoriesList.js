import React from 'react';
import Category from '../Category/Category';
import PropTypes from 'prop-types';

import './CategoriesList.scss';

const CategoriesList = ({filterCategory, toggleActiveClassName}) => {
    const categories = [
        {
            categoryName: "traditional",
            categoryOutput: "Torty tradycyjne"
        },
        {
            categoryName: "kids",
            categoryOutput: "Torty dla dzieci"
        },
        {
            categoryName: "wedding",
            categoryOutput: "Torty ślubne"
        },
        {
            categoryName: "communion",
            categoryOutput: "Torty komunijne"
        },
        {
            categoryName: "christening",
            categoryOutput: "Torty na chrzciny"
        },
        {
            categoryName: "occasional",
            categoryOutput: "Torty okazjonalne"
        },
        {
            categoryName: "others",
            categoryOutput: "Inne słodkości"
        }
    ]
    return (
        <ul className="categories-list">
            {
                categories.map((category) =>
                    <Category
                        category={category}
                        onFilterCategory={() => filterCategory(category.categoryName)}
                        toggleActiveClassName={toggleActiveClassName}
                        key={category.categoryName}
                    />
                )
            }
        </ul>
    )
}

CategoriesList.propTypes = {
    filterCategory: PropTypes.func,
    toogleActiveClassName: PropTypes.func
}

export default CategoriesList;