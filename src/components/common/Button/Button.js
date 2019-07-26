import React from 'react';

import './Button.css';

const Button = ({buttonOutput, onClickCallback}) => {
    return (
        <button className="button" onClick={onClickCallback}>{buttonOutput}</button>
    )
}


export default Button;