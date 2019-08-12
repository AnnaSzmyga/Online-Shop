import React from 'react';

import './Hamburger.scss';

const Hamburger = ({toggleMenu}) => {
        return (
                <div className="hamburger" onClick={toggleMenu}>
                        <span className="hamburger__line"></span>
                        <span className="hamburger__line"></span>
                        <span className="hamburger__line"></span>
                </div>
        )
}

export default Hamburger;