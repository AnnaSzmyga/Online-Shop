import React from 'react';
import Logo from '../../features/Logo/Logo';
import Menu from '../../features/Menu/Menu';
import CartLink from '../../features/CartLink/CartLink';
import { Container } from 'reactstrap';

import './Navbar.css';


const Navbar = ({cartContent, ...props}) => {
    return (
        <div className="navbar">
            <Container>
                <Logo />
                <Menu />
                <CartLink cartContent={cartContent} />
            </Container>
        </div>
    )
}

export default Navbar;