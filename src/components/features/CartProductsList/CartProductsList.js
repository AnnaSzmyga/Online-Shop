import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import PropTypes from 'prop-types';

import './CartProductsList.scss';

const CartProductsList = ({cartProducts, removeFromCart, changeQuantity}) => {
    return (
        <ul className="cart-products">
            {
                cartProducts.map((product) =>
                    <CartProduct
                        cartProduct={product}
                        removeFromCart={() => removeFromCart(product.id)}
                        changeQuantity={changeQuantity}
                        key={product.id}
                    />
                )
            }
        </ul>
    )
}

CartProductsList.propTypes = {
    cartProducts: PropTypes.array,
    removeFromCart: PropTypes.func,
    changeQuantity: PropTypes.func
}

export default CartProductsList;