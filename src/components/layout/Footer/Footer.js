import React from 'react';
import Menu from '../../features/Menu/Menu';

import './Footer.css';
import '../../features/Menu/Menu.css';

const Footer = (props) => {
    return (
        <div className="Footer">
            <p>All rights reserved</p>
            <Menu className="Menu--footer" />
        </div>
    )
}

export default Footer;