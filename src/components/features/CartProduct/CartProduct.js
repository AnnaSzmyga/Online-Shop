import React from 'react';
import Button from '../../common/Button/Button';

import './CartProduct.css';

const CartProduct = ({cartProduct, removeFromCart, changeQuantity}) => {

    let quantity = cartProduct.quantity;
    const handleChange = (e) => {
        quantity = (e.target.value === "") ? e.target.value : parseInt(e.target.value);
        changeQuantity(cartProduct.id, quantity);
    }

    return (
        <li className="cart-product">
            <div className="cart-product__first-row">
                <div className="cart-product__name-wrapper">
                    <div className="cart-product__image" style={{backgroundImage: `url(${cartProduct.image})`}}></div>
                    <h3 className="cart-product__name">{cartProduct.name}</h3>
                </div>
                <div className="cart-product__buttons">
                    <button className="cart-product__button-up" onClick={() => changeQuantity(cartProduct.id, cartProduct.quantity + 1)}>
                        <i className="fas fa-angle-up cart-product__icon"></i>
                    </button>
                    <input
                        className="cart-product__input"
                        value={quantity}
                        type="number"
                        onChange={handleChange}
                    />
                    <button className="cart-product__button-down" onClick={() => changeQuantity(cartProduct.id, cartProduct.quantity - 1)}>
                        <i className="fas fa-angle-down cart-product__icon"></i>
                    </button>
                    <Button className="cart-product__button-remove" buttonOutput="Usuń z koszyka" onClickCallback={removeFromCart} />
                </div>
            </div>
            <div className="cart-product__price-wrapper">
                <p className="cart-product__price">Cena: <span>{cartProduct.price}zł</span></p>
                <p className="cart-product__amount">Suma: <span>{cartProduct.quantity * cartProduct.price}zł</span></p>
            </div>
        </li>
    )
}

export default CartProduct;