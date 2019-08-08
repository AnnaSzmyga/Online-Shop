import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';
import Button from '../../common/Button/Button';
import Payment from '../../features/Payment/Payment';
import { Modal, Fade } from 'reactstrap';
import Ornament from '../../common/Ornament/Ornament';

import './Cart.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    calculateAmount = () => {
        let amount = 0;
        this.props.cartProducts.forEach((product) => {
            amount += product.quantity * product.price;
        });
        return amount;
    }

    openModal = () => {
        this.setState({ modal: true });
    }

    closeModal = () => {
        this.setState({ modal: false });
    }

    renderCart = () => {
        this.calculateAmount();
        return (
            <Fade timeout={100} className="cart">
                <h2 className="page-heading">Koszyk</h2>
                <Ornament />
                <div className="cart__buttons-wrapper">
                    <div className="go-back" onClick={() => {this.props.history.goBack(); window.scroll(0, 0)}}>
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
                <h4 className="cart__amount">Wartość całego zamówienia: <span>{this.calculateAmount()}zł</span></h4>
                <Button className="cart__button" buttonOutput="Przejdź do płatności" onClickCallback={this.openModal}/>
                <Modal isOpen={this.state.modal}>
                    <Payment
                        amount={this.calculateAmount()}
                        closeModal={this.closeModal}
                        clearCart={this.props.clearCart}
                    />
                </Modal>
            </Fade>
        )
    }
    renderEmptyCart = () => {
        return (
            <Fade timeout={100} className="cart">
                <h2 className="page-heading">Koszyk</h2>
                <Ornament />
                <div className="go-back" onClick={() => {this.props.history.goBack(); window.scroll(0, 0)}}>
                    <i className="fas fa-arrow-left go-back__icon"></i>
                    Powrót
                </div>
                <p className="cart__info">Twój koszyk jest pusty.</p>
            </Fade>
        )
    }
    render() {
        return (this.props.cartProducts.length !== 0) ? this.renderCart() : this.renderEmptyCart();
    }
}


export default Cart;