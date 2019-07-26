import React from 'react';

const CartProduct = ({cartProduct}) => {
    return (
        <li>{cartProduct.name}</li>
    )
}

export default CartProduct;