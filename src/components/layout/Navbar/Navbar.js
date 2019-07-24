import React from 'react';
import Logo from '../../features/Logo/Logo';
import Menu from '../../features/Menu/Menu';
import CartLink from '../../features/CartLink/CartLink';

import './Navbar.css';


const Navbar = (props) => {
    return (
        <div className="navbar">
            <Logo />
            <Menu />
            <CartLink />
        </div>
    )
}

export default Navbar;