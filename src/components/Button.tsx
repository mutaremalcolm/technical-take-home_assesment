import React, { FC } from 'react';
import ButtonSvg from '../assets/svg/ButtonSvg'

interface ButtonProps {
    className?: string,
    href?: string,
    onClick?: ()=> void,
    children: React.ReactNode,
    px?: string,
    white?: any,
    type: string
}

const Button : FC<ButtonProps> = ({ className = '', href = '', onClick, children, px = '', white = false, type=''}) => {
    const classes = `button relative inline-flex 
    items-center justify-center h-11 transition-colors 
    hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8'
    : 'text-n-1'} ${className || ''}`;

    const span = `relative z-10`;

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    return href
        ? renderLink()
        : renderButton()
};

export default Button