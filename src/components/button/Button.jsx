import React from 'react';
import './Button.css'

function Button({handleClick, type, children}) {
    return (
        <button
            onClick={handleClick}
            type={type}>
            {children}
        </button>
    );
}

export default Button;