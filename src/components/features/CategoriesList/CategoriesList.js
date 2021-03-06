import React from 'react';
import Category from '../Category/Category';
import PropTypes from 'prop-types';

import './CategoriesList.scss';

const CategoriesList = ({filterCategory, activeFilter, setActiveFilter, toggleActiveClassName}) => {
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
            categoryOutput: "Torty weselne"
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
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
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
    activeFilter: PropTypes.object,
    setActiveFilter: PropTypes.func,
    toogleActiveClassName: PropTypes.func
}

export default CategoriesList;