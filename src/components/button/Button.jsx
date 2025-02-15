import React from 'react';
import './Button.css'

function Button({handleClick, type, children, disabled}) {
    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            type={type}>
            {children}
        </button>
    );
}

export default Button;