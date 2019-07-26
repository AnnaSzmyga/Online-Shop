import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

import './Product.css';

const Product = ({product, addToCart}) => {
    return (
        <li className="productCard">
            <Link to={`/cakes/${product.id}`} className="productCard__link">
                <div className="productCard__linkImage" alt={product.name} style={{backgroundImage: `url(${product.image})`}}></div>
            </Link>
            <div>
                <h3 className="productCard__heading">{product.name}</h3>
                <p className="productCard__price">Cena: {product.price}zł</p>
                <Button buttonOutput="Dodaj do koszyka" onClickCallback={() => {addToCart(product)}} />
            </div>
        </li>
    )
}

export default Product;
