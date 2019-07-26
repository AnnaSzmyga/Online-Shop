import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';
import Button from '../../common/Button/Button';

const Cart = ({cartProducts, removeProduct, clearCart}) => {
    console.log(cartProducts);
    return (
        <div>Koszyk:
            <CartProductsList cartProducts={cartProducts} removeFromCart={removeProduct} />
            <Button buttonOutput="Wyczyść koszyk" onClickCallback={clearCart} />
        </div>
    )
}

export default Cart;