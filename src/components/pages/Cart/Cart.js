import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';
import Button from '../../common/Button/Button';
import Payment from '../../features/Payment/Payment';

import './Cart.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.cartProducts.length);
        //const {cartProducts, removeProduct, clearCart, changeQuantity} = this.props;
        this.state = {
            paymentClassName: ''
        }
    }

    calculateAmount = () => {
        let amount = 0;
        this.props.cartProducts.forEach((product) => {
            amount += product.quantity * product.price;
        });
        return amount;
    }

    togglePayment = () => {
        let paymentClassName = (this.state.paymentClassName === '') ? 'show' : '';
        this.setState({paymentClassName});
    }

    renderCart = () => {
        this.calculateAmount();
        return (
            <div className="cart">
                <h2 className="page-heading">Koszyk</h2>
                <div className="cart__buttons-wrapper">
                    <div className="go-back" onClick={this.props.history.goBack}>
                        <i className="fas fa-arrow-left go-back__icon"></i>
                        Powrót
                    </div>
                    <Button className="cart__button" buttonOutput="Wyczyść koszyk" onClickCallback={this.props.clearCart} />
                </div>
                <CartProductsList
                    cartProducts={this.props.cartProducts}
                    removeFromCart={this.props.removeProduct}
                    changeQuantity={this.props.changeQuantity}
                />
                <h4 className="cart__amount">Razem do zapłaty: <span>{this.calculateAmount()}zł</span></h4>
                <Button className="cart__button" buttonOutput="Przejdź do płatności" onClickCallback={this.togglePayment}/>
                <Payment
                    paymentClassName={this.state.paymentClassName}
                    amount={this.calculateAmount()}
                    togglePayment={this.togglePayment}
                    clearCart={this.props.clearCart}
                />
            </div>
        )
    }

    renderEmptyCart = () => {
        return (
            <div className="cart">
                <h2 className="page-heading">Koszyk</h2>
                <p className="cart__info">Twój koszyk jest pusty.</p>
                <div className="go-back" onClick={this.props.history.goBack}>
                    <i className="fas fa-arrow-left go-back__icon"></i>
                    Powrót
                </div>
            </div>
        )
    }
    render() {
        return (this.props.cartProducts.length !== 0) ? this.renderCart() : this.renderEmptyCart();
    }
}

export default Cart;