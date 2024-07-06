import React, { ComponentProps } from 'react'

type ButtonProps = {
    children: React.ReactNode;
    className: string;
    isValid?: boolean
} & ComponentProps<"button">

function Button({ children, className, isValid, ...rest }: ButtonProps) {

    return (
        <button className={`${className} btn ${isValid != undefined && !isValid && 'disabled-btn'}`} disabled={isValid === false && !isValid} {...rest}>{children}</button>
    )
}

export default Button