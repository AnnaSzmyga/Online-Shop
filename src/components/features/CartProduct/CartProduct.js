import React from 'react';
import Button from '../../common/Button/Button';


const CartProduct = ({cartProduct, removeFromCart, changeQuantity}) => {

    let quantity = cartProduct.quantity;
    const handleChange = (e) => {
        quantity = (e.target.value === "") ? e.target.value : parseInt(e.target.value);
        changeQuantity(cartProduct.id, quantity);
    }

    return (
        <li>
            <h3>{cartProduct.name}</h3>
            <input
                value={quantity}
                type="number"
                onChange={handleChange}
            />
            <p>Cena: {cartProduct.price}zł</p>
            <p>Suma: {cartProduct.quantity * cartProduct.price}zł</p>
            <button onClick={() => changeQuantity(cartProduct.id, cartProduct.quantity + 1)}>+</button>
            <button onClick={() => changeQuantity(cartProduct.id, cartProduct.quantity - 1)}>-</button>
            <Button buttonOutput="usuń z koszyka" onClickCallback={removeFromCart} />
        </li>
    )
}

export default CartProduct;