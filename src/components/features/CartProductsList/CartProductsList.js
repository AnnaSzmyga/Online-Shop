import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const CartProductsList = ({cartProducts}) => {
    return (
        <ul>
        {
            cartProducts.map((product) => <CartProduct cartProduct={product} key={product.id} />)
        }
        </ul>
    )
}

export default CartProductsList;