import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

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

export default CartProductsList;