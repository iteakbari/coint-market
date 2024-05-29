import React from 'react'

type Props = {
    placeholder: string;
    labelText?: string;
}

function Textarea({ placeholder, labelText }: Props) {
    return (
        <label className='input-label'>
            <span>{labelText}</span>
            <textarea placeholder={placeholder}></textarea>
        </label>
    )
}

export default Textarea