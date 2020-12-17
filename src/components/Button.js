import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--top'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, path
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <>
        <Link to={path} className='btn'>
            <button
            type={type}
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            >
                {children}
            </button>
        </Link>
        </>
    )
}