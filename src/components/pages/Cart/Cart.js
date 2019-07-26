import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';

const Cart = ({cartProducts, removeProduct}) => {
    console.log(cartProducts);
    return (
        <div>Cart
            <CartProductsList cartProducts={cartProducts} removeFromCart={removeProduct} />
        </div>
    )
}

export default Cart;