import React from 'react'

type Props = {
    placeholder: string;
    labelText?: string;
}

function Textarea({ placeholder, labelText }: Props) {
    return (
        <label className='input-label'>
            {labelText && <span className='text-gray-600 font-medium'>{labelText}</span>}
            <textarea placeholder={placeholder}></textarea>
        </label>
    )
}

export default Textarea