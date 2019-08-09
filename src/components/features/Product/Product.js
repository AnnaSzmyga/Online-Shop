import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';
import { Col, Fade } from 'reactstrap';
import './Product.scss';

const Product = ({product, addToCart}) => {
    const infoDisplay = (product.info === "") ? 'none' : "block";
    return (
        <Col sm="12" md="6">
            <Fade timeout={100}>
                <div className="product-card">
                    <Link to={`/cakes/${product.id}`} className="product-card__link">
                        <div className="product-card__image" alt={product.name} style={{backgroundImage: `url(/images/${product.image})`}}>
                            <div className="product-card__info" style={{display: infoDisplay}}>{product.info}</div>
                        </div>
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

Product.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func
}

export default Product;
