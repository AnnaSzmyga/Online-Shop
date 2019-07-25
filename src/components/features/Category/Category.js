import React from 'react';


const Category = ({category, onFilterCategory}) => {
    return (
        <li onClick={onFilterCategory}>{category.categoryOutput}</li>
    )
}

export default Category;