import React from 'react'

type Props = {
    placeholder: string;
    labelText?: string;
    formObject?: any;
    className?: string;
    containerClass?: string;
}

function Textarea({ placeholder, labelText, formObject, className, containerClass, ...rest }: Props) {
    return (
        <label className={`input-label ${containerClass ? containerClass : ''}`}>
            {labelText && <span className='text-gray-600 font-medium'>{labelText}</span>}
            <textarea placeholder={placeholder} className={className} {...formObject} {...rest}></textarea>
        </label>
    )
}

export default Textarea