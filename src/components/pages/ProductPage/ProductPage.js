import React from 'react';
import Button from '../../common/Button/Button';
import Ornament from '../../common/Ornament/Ornament';
import { Fade } from 'reactstrap';
import PropTypes from 'prop-types';

import './ProductPage.scss';


const ProductPage = ({products, addProduct, ...props}) => {

  // const activeProduct = products.filter((product) => {product.id.toString() === match.params.id});


  let activeProduct;
  products.forEach((product) => {
      if (product.id.toString() === props.match.params.id) {
          activeProduct = product;
      }
  })

  return (
    <Fade timeout={100} className="product-page">
      <div className="go-back" onClick={props.history.goBack}>
        <i className="fas fa-arrow-left go-back__icon"></i>
        Powrót
      </div>
      <div className="product">
        <div className="product__image-box"><img className="product__image" src={`/images/${activeProduct.image}`} alt={activeProduct.name}/></div>
        <div className="product__content">
          <h2 className="product__heading">{activeProduct.name}</h2>
          <Ornament />
          <p className="product__price">Cena: <span>{activeProduct.price}zł</span></p>
          <p className="product__description">{activeProduct.description}</p>
          <Button buttonOutput="Dodaj do koszyka" onClickCallback={() => addProduct(activeProduct)} />
        </div>
      </div>
    </Fade>
  )
}

ProductPage.propTypes = {
  products: PropTypes.array,
  addProduct: PropTypes.func
}

export default ProductPage;