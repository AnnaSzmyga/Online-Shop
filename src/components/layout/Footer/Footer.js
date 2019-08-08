import React from 'react';
import Menu from '../../features/Menu/Menu';

import { Container } from 'reactstrap';

import './Footer.css';
import '../../features/Menu/Menu.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <Container>
                <div className="footer__content">
                    <p className="footer__text">All rights reserved</p>
                    <Menu className="footer-menu" />
                </div>
                <a target="_blank" href="https://www.vecteezy.com" style={{fontSize: '12px', color: '#353a39'}}>Free vector art via Vecteezy</a>
            </Container>
        </div>
    )
}

export default Footer;