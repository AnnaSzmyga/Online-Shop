import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink exact to="/" className="menu__link" activeClassName="menu__link--active">Home</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/faq" className="menu__link" activeClassName="menu__link--active">FAQ</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/regulations" className="menu__link" activeClassName="menu__link--active">Regulamin</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/contact" className="menu__link" activeClassName="menu__link--active">Kontakt</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;