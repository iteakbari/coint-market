import Link from 'next/link'
import React from 'react'

type Props = {}

function SeconderyFooter({ }: Props) {
    return (
        <div className='flex justify-between items-center py-10 mx-auto w-4/5 mt-auto'>
            <p className='text-gray'>2024 © Coin Market Advertisement Company</p>
            <div className='inline-flex gap-10'>
                <Link href='/about'>About</Link>
                <Link href='/support'>Support</Link>
            </div>
        </div>
    )
}

export default SeconderyFooter