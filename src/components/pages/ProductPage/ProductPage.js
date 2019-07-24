import React from 'react';
import './ProductPage.css';


const ProductPage = ({match, products}) => {

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
            <p>Produkt ID: {match.params.id}</p>
            <p>Nazwa: {activeProduct.name}</p>
            <img src={activeProduct.image} className="ProductImage" alt={activeProduct.name} />
          </div>
        )
}

export default ProductPage;



