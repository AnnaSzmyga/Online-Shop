import React from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';


import './Payment.css';


const Payment = ({amount, closePayment, clearCart}) => {
    return (
        <div className="payment">
            <p>Wartość zamówienia: {amount}zł</p>
            <input
                className="payment__input"
                type="text"
                placeholder="kod rabatowy"
            />
            <Link to="/">
                <Button
                    className="pay"
                    buttonOutput="Zapłać"
                    onClickCallback={() => {
                        closePayment();
                        clearCart();
                    }}
                />
            </Link>
            <Button
                className="back-to-cart"
                buttonOutput="Wróć do zamówienia"
                onClickCallback={closePayment}
            />
        </div>
    )
}

export default Payment;