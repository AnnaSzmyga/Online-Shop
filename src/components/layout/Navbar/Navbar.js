import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../features/Logo/Logo';
import Menu from '../../features/Menu/Menu';
import CartLink from '../../features/CartLink/CartLink';
import { Container } from 'reactstrap';

import './Navbar.css';


const Navbar = ({cartContent, ...props}) => {
    return (
        <div className="navbar">
            <Container>
                <Link to="/" className="navbar__logo-link">
                    <Logo />
                </Link>
                <Menu />
                <CartLink cartContent={cartContent} />
            </Container>
        </div>
    )
}

export default Navbar;