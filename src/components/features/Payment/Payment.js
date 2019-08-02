import React from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

import './Payment.css';

const Payment = ({paymentClassName, amount, togglePayment, clearCart}) => {
    return (
        <div className={`payment ${paymentClassName}`}>
            <p>Wartość zamówienia: {amount}</p>
            <input
                className="payment__input"
                type="text"
                placeholder="kod rabatowy"
            />
            <Link to="/">
                <Button
                    buttonOutput="Zapłać"
                    onClickCallback={() => {
                        togglePayment();
                        clearCart();
                    }}
                />
            </Link>
        </div>
    )
}

export default Payment;