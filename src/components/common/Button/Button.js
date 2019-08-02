import React from 'react';

import './Button.css';

const Button = ({buttonOutput, onClickCallback, ...props}) => {
    let className = (props.className) ? `button ${props.className}` : "button";
    return (
        <button className={className} onClick={onClickCallback}>{buttonOutput}</button>
    )
}


export default Button;