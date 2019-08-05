import React from 'react';
//import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { Fade } from 'reactstrap';

import './ProductPage.css';


const ProductPage = ({match, products, addProduct, ...props}) => {

      // const activeProduct = products.filter((product) => {product.id.toString() === match.params.id});


    let activeProduct;
    products.forEach((product) => {
        if (product.id.toString() === match.params.id) {
            console.log(product.name);
            activeProduct = product;
        }
    })
    console.log(activeProduct);

    return (
          <Fade timeout={100} className="product-page">
            <div className="go-back" onClick={props.history.goBack}>
              <i class="fas fa-arrow-left go-back__icon"></i>
              Powrót
            </div>
            <div className="product">
              <div className="product__image-box"><img className="product__image" src={activeProduct.image} alt={activeProduct.name}/></div>
              <div className="product__content">
                <h2 className="product__heading">{activeProduct.name}</h2>
                <p className="product__price">Cena: <span>{activeProduct.price}zł</span></p>
                <p className="product__description">{activeProduct.description}</p>
                <Button buttonOutput="Dodaj do koszyka" onClickCallback={() => addProduct(activeProduct)} />
              </div>
            </div>
          </Fade>
        )
}

export default ProductPage;
// <Link to={() => props.history.go(-1)}><span>Powrót</span></Link>


