import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Menu.scss';

const Menu = ({menuShow, resetFiltering}) => {
    const menuClassName = (menuShow) ? "menu" : `menu menu-hidden`;
    return (
        <div className={menuClassName}>
            <ul className="menu__list">
                <li className="menu__item" onClick={resetFiltering}>
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

Menu.propTypes = {
    menuShow: PropTypes.bool
}

export default Menu;