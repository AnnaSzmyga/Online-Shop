import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({buttonOutput, onClickCallback, ...props}) => {
    let className = (props.className) ? `button ${props.className}` : "button";
    return (
        <button className={className} onClick={onClickCallback}>{buttonOutput}</button>
    )
}

Button.propTypes = {
    buttonOutput: PropTypes.string,
    onClickCallback: PropTypes.func
}

export default Button;