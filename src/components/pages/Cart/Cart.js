import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';
import Button from '../../common/Button/Button';

import './Cart.css';


const Cart = ({cartProducts, removeProduct, clearCart, changeQuantity, ...props}) => {
    const calculateAmount = () => {
        let amount = 0;
        cartProducts.forEach((product) => {
            amount += product.quantity * product.price;
        });
        return amount;
    }
    let peymentClassName;
    const showPayment = () => {
        peymentClassName = "show";
    };
    return (
        <div classname="cart">
            <h2 className="page-heading">Koszyk</h2>
            <p className="cart__info">Twój koszyk jest pusty.</p>
            <div className="cart__buttons-wrapper">
                <div className="go-back" onClick={props.history.goBack}>
                    <i class="fas fa-arrow-left go-back__icon"></i>
                    Powrót
                </div>
                <Button className="cart__button" buttonOutput="Wyczyść koszyk" onClickCallback={clearCart} />
            </div>
            <CartProductsList
                cartProducts={cartProducts}
                removeFromCart={removeProduct}
                changeQuantity={changeQuantity}
            />
            <h4 className="cart__amount">Razem do zapłaty: <span>{calculateAmount()}zł</span></h4>
            <Button className="cart__button" buttonOutput="Przejdź do płatności" onClickCallback={showPayment} />
        </div>
    )
}

export default Cart;