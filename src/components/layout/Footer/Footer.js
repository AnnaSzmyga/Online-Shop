import React from 'react';
import Menu from '../../features/Menu/Menu';

import { Container } from 'reactstrap';

import './Footer.scss';
import '../../features/Menu/Menu.scss';

const Footer = (props) => {
    return (
        <div className="footer">
            <Container>
                <div className="footer__content">
                    <p className="footer__text">All rights reserved by <span>WonderCake</span></p>
                    <Menu className="menu" />
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.vecteezy.com" style={{fontSize: '12px', color: '#353a39'}}>Free vector art via Vecteezy</a>
            </Container>
        </div>
    )
}

export default Footer;