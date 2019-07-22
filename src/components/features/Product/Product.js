import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <li><Link to={`${props.match.url}/products/${props.product.id}`}>{props.product.name}</Link></li>
    )
}

export default Product;