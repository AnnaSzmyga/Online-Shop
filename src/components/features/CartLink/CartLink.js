import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './CartLink.scss';

const CartLink = ({cartContent, menuShow}) => {
        const cartLinkClassName = (menuShow) ? "cart-link-wrapper" : `cart-link-wrapper menu-hidden`;
        return (
                <div className={cartLinkClassName}>
                        <NavLink to="/cart" className="cart-link" activeClassName="active">
                                <i className="fas fa-shopping-basket cart-link__icon"></i>
                                {cartContent}
                        </NavLink>
                </div>
        )
}

CartLink.propTypes = {
        cartContent: PropTypes.number
}

export default CartLink;