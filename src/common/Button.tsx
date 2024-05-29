import React, { ComponentProps } from 'react'

type ButtonProps = {
    text: string;
    className: string;
    isValid?: boolean
} & ComponentProps<"button">

function Button({ text, className, isValid, ...rest }: ButtonProps) {

    return (
        <button className={`${className} btn ${isValid != undefined && !isValid && 'disabled-btn'}`} disabled={isValid === false && !isValid} {...rest}>{text}</button>
    )
}

export default Button