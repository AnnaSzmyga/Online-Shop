import React from 'react';
import { NavLink } from 'react-router-dom';

import './CartLink.css';

const CartLink = ({cartContent}) => {
        return (
                <div>
                        <NavLink to="/cart" activeClassName="active">Koszyk({cartContent})</NavLink>
                </div>
        )
}

export default CartLink;