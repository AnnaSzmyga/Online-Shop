import React from 'react';
import Sorting from '../Sorting/Sorting';
import CategoriesList from '../CategoriesList/CategoriesList';

const Sidebar = ({products}) => {
    // let categories = [];
    // products.map((product) => {
    //     const {category} = product;
    //     categories.push(category);
    // })
    return (
        <div>
            <Sorting />
            <CategoriesList />
        </div>
    )
}

export default Sidebar;