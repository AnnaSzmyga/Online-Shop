import React from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';


import './Payment.scss';


class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.amount,
            discount: 0.1,
            discountCode: "pyszny tort",
            codeInputValue: '',
            collapse: false
        }
    }
    handleChange = (e) => {
        this.setState({
            codeInputValue: e.target.value,
            collapse: false
        });
        if (e.target.value === this.state.discountCode) {
            this.setState({
                amount: this.state.amount - (this.state.amount * this.state.discount),
                collapse: true
            });
        } else {
            this.setState({
                amount: this.props.amount,
            });
        }
    }

    render() {
        return (
            <div className="payment">
                <p className="payment__amount">Wartość Twojego zamówienia: <span>{this.state.amount}zł</span></p>
                <Collapse isOpen={this.state.collapse}>
                    <p className="payment__discount">Zniżka: <span>{this.state.discount * 100}%</span></p>
                </Collapse>
                <label>Wpisz swój kod rabatowy: </label>
                <input
                    className="payment__input"
                    type="text"
                    placeholder="Kod rabatowy"
                    value={this.state.codeInputValue}
                    onChange={this.handleChange}
                />
                <Button
                    className="payment__pay-button"
                    buttonOutput="Zapłać"
                    onClickCallback={() => {
                        this.props.closeModal();
                        this.props.clearCart();
                    }}
                >
                    <Link className="payment__link" to="/"></Link>
                </Button>
                <Button
                    className="payment__back-to-cart"
                    buttonOutput="Wróć do zamówienia"
                    onClickCallback={this.props.closeModal}
                />
            </div>
        )
    }
}

Payment.propTypes = {
    amount: PropTypes.number,
    closeModal: PropTypes.func,
    clearCart: PropTypes.func
}


export default Payment;