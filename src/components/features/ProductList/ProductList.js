import React from 'react';
import Product from '../Product/Product';

import './ProductList.css';

const ProductList = (props) => {
    return (
        <div>
            <ul className="productList">
                {
                    props.products.map((product) => {
                        return <Product product={product} key={product.id} />
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;