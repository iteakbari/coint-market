'use client'
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}

function Card({ }: Props) {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='bg-white rounded-[15px]'>
            <div className='p-10'>
                <Image src='/img/cbg.png' className='rounded-[15px]' width={1000} height={1000} alt='' />
                <h2 className='text-lg font-semibold mt-7 mb-3'>Black Opium Eau de Parfum</h2>
                <p className='text-gray text-sm'>Black Opium, a top-rated YSL perfume with intoxicating notes of rich coffee beans, sweet vanilla, and white flowers to create a long-lasting fragrance.</p>
                <div className='flex font-semibold my-5'>
                    <div className='w-2/3 flex gap-3'>
                        Reward:
                        <div className='flex gap-2'>
                            <span>0.30</span>
                            <p>
                                <span className='block'>Ethereum</span>
                                <span className='text-xs text-gray block font-normal'>Ethereum</span>
                            </p>
                            <div className='flex items-center'>
                                <Image className='w-8' src='/img/bit.png' width={100} height={100} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'></div>
                </div>
            </div>
        </div>
    )
}

export default Card