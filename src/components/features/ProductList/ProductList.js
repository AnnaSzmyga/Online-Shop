import React from 'react';
import Product from '../Product/Product';

const ProductList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.products.map((product) => {
                        return <Product name={product.name} id={product.id} key={product.id} />
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList;