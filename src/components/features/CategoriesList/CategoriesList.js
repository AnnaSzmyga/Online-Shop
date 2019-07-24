import React from 'react';
import Category from '../Category/Category';

const CategoriesList = (props) => {
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
        <div>
            <ul>
                {
                    categories.map((category) => <Category category={category} />)
                }
            </ul>
        </div>
    )
}

export default CategoriesList;