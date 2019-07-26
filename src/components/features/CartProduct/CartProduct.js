import React from 'react';
import Button from '../../common/Button/Button';

const CartProduct = ({cartProduct, removeFromCart}) => {
    return (
        <li>
            <h3>{cartProduct.name}</h3>
            <Button buttonOutput="usuń z koszyka" onClickCallback={removeFromCart} />
            <Button />
        </li>
    )
}

export default CartProduct;