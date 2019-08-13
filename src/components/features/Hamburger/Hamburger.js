import React from 'react';

import './Hamburger.scss';

const Hamburger = ({toggleMenu, menuShow}) => {
        const hamburgerClassName = (menuShow) ? " hamburger--close" : ""
        return (
                <div className={`hamburger${hamburgerClassName}`} onClick={toggleMenu}>
                        <span className="hamburger__line"></span>
                        <span className="hamburger__line"></span>
                        <span className="hamburger__line"></span>
                </div>
        )
}

export default Hamburger;