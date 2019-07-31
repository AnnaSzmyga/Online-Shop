import React from 'react';
import Product from '../Product/Product';

import { Row, Col } from 'reactstrap';
import './ProductList.css';

const ProductList = ({products, addToCart}) => {
    return (
        <div className="products">
            <Row>
                {
                    products.map((product) => {
                        return <Product product={product} addToCart={addToCart} key={product.id} />
                    })
                }
            </Row>
        </div>
    )
}

export default ProductList;