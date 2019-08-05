import React from 'react';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';


import './Payment.css';


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
        console.log(this.state.discountCode);
    }
    handleChange = (e) => {
        this.setState({
            codeInputValue: e.target.value,
            collapse: false
        });
        if (e.target.value === this.state.discountCode) {
            this.setState({
                amount: this.state.amount * 0.9,
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
                <input
                    className="payment__input"
                    type="text"
                    placeholder="Wpisz kod rabatowy"
                    value={this.state.codeInputValue}
                    onChange={this.handleChange}
                />
                <Link to="/">
                    <Button
                        className="payment__pay-button"
                        buttonOutput="Zapłać"
                        onClickCallback={() => {
                            this.props.closePayment();
                            this.props.clearCart();
                        }}
                    />
                </Link>
                <Button
                    className="payment__back-to-cart"
                    buttonOutput="Wróć do zamówienia"
                    onClickCallback={this.props.closePayment}
                />
            </div>
        )
    }
}

// const Payment = ({amount, closePayment, clearCart}) => {
//     return (
//         <div className="payment">
//             <p>Wartość Twojego zamówienia: <span>{amount}zł</span></p>
//             <input
//                 className="payment__input"
//                 type="text"
//                 placeholder="kod rabatowy"
//                 onChange={handleChange}
//             />
//             <Link to="/">
//                 <Button
//                     className="pay-button"
//                     buttonOutput="Zapłać"
//                     onClickCallback={() => {
//                         closePayment();
//                         clearCart();
//                     }}
//                 />
//             </Link>
//             <Button
//                 className="back-to-cart"
//                 buttonOutput="Wróć do zamówienia"
//                 onClickCallback={closePayment}
//             />
//         </div>
//     )
// }

export default Payment;