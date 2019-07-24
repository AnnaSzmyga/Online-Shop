import React from 'react';
import { NavLink } from 'react-router-dom';

import './CartLink.css';

const CartLink = (props) => {
        return (
                <div>
                        <NavLink to="/cart" activeClassName="active">Koszyk</NavLink>
                </div>
        )
}

export default CartLink;