import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

import { Col, Fade } from 'reactstrap';
import './Product.css';

const Product = ({product, addToCart}) => {
    return (
        <Col sm="12" md="6">
            <Fade timeout={100}>
                <div className="product-card">
                    <Link to={`/cakes/${product.id}`} className="product-card__link">
                        <div className="product-card__image" alt={product.name} style={{backgroundImage: `url(${product.image})`}}></div>
                    </Link>
                    <div>
                        <h3 className="product-card__heading">{product.name}</h3>
                        <p className="product-card__price">Cena: {product.price}zł</p>
                        <Button buttonOutput="Dodaj do koszyka" onClickCallback={() => {addToCart(product)}} />
                    </div>
                </div>
            </Fade>
        </Col>
    )
}

export default Product;
