import React, { ComponentProps } from 'react'

type Props = {
    labelText?: string;
    options: { id: number, title: string }[];
    errors?: any;
    formObject?: any;
    containerClass?: string
} & ComponentProps<"select">

function SelectBox({ labelText, errors, containerClass, formObject, options, ...rest }: Props) {
    return (
        <label className={`input-label flex-1 ${containerClass ? containerClass : ""}`}>
            {labelText && <span className='text-gray-600 font-medium'>{labelText}</span>}
            <select {...rest} {...formObject}>
                {options?.map(option =>
                    <option key={option.id}>{option.title}</option>
                )}
            </select>
            {errors && <span className='text-error text-xs'>{errors?.message}</span>}
        </label>
    )
}

export default SelectBox