import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const CartProductsList = ({cartProducts, removeFromCart}) => {
    return (
        <ul>
        {
            cartProducts.map((product) => <CartProduct cartProduct={product} removeFromCart={() => removeFromCart(product.id)} key={product.id} />)
        }
        </ul>
    )
}

export default CartProductsList;