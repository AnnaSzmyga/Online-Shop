import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = (props) => {
    return (
        <div className="Menu">
            <ul className="Menu__list">
                <li className="Menu__item">
                    <NavLink exact to="/" className="Menu__link" activeClassName="Menu__link--active">Home</NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink to="/faq" className="Menu__link" activeClassName="Menu__link--active">FAQ</NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink to="/regulations" className="Menu__link" activeClassName="Menu__link--active">Regulamin</NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink to="/contact" className="Menu__link" activeClassName="Menu__link--active">Kontakt</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;