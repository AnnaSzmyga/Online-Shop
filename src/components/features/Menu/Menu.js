import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => {
    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/faq" activeClassName="active">FAQ</NavLink></li>
                <li><NavLink to="/regulations" activeClassName="active">Regulamin</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
                <li><NavLink to="/cart" activeClassName="active">Koszyk</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;