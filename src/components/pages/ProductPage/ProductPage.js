import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

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
          <div>
            <div className="go-back" onClick={props.history.goBack}>
              Powrót
            </div>
            <p>Produkt ID: {match.params.id}</p>
            <p>Nazwa: {activeProduct.name}</p>
            <Button buttonOutput="Dodaj do koszyka" onClickCallback={() => addProduct(activeProduct)} />
            <img src={activeProduct.image} className="ProductImage" alt={activeProduct.name} />
          </div>
        )
}

export default ProductPage;
// <Link to={() => props.history.go(-1)}><span>Powrót</span></Link>


