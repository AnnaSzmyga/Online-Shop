import React from 'react';
import { NavLink } from 'react-router-dom';

import './CartLink.css';

const CartLink = ({cartContent}) => {
        return (
                <div>
                        <NavLink to="/cart" className="cart-link" activeClassName="active">
                                <i class="fas fa-shopping-basket cart-link__icon"></i>
                                {cartContent}
                        </NavLink>
                </div>
        )
}

export default CartLink;