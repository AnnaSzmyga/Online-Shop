import React from 'react';
import Product from '../Product/Product';

import './ProductList.css';

const ProductList = ({products, addToCart}) => {
    return (
        <div>
            <ul className="productList">
                {
                    products.map((product) => {
                        return <Product product={product} addToCart={addToCart} key={product.id} />
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;