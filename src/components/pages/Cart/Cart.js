import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';

const Cart = ({cartProducts}) => {
    console.log(cartProducts);
    return (
        <div>Cart
            <CartProductsList cartProducts={cartProducts} />
        </div>
    )
}

export default Cart;