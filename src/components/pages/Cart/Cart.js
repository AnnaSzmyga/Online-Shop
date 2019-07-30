import React from 'react';
import CartProductsList from '../../features/CartProductsList/CartProductsList';
import Button from '../../common/Button/Button';




const Cart = ({cartProducts, removeProduct, clearCart, changeQuantity, ...props}) => {
    console.log(cartProducts);
    const calculateAmount = () => {
        let amount = 0;
        cartProducts.forEach((product) => {
            amount += product.quantity * product.price;
        });
        return amount;
    }
    return (
        <div>Koszyk:
        <div className="go-back" onClick={props.history.goBack}>
            Powrót
        </div>
        <CartProductsList
                cartProducts={cartProducts}
                removeFromCart={removeProduct}
                changeQuantity={changeQuantity}
            />
            <p>Razem do zapłaty: {calculateAmount()}zł</p>
            <Button buttonOutput="Wyczyść koszyk" onClickCallback={clearCart} />
        </div>
    )
}

export default Cart;