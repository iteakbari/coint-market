'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

function Card({ }: Props) {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className='bg-white rounded-[15px] relative pb-14'>
            <div className='p-10 pb-3'>
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
                    <div className='w-1/3 text-right'>
                        <span>Question: 3</span>
                    </div>
                </div>

            </div>

            <div className={`${showMore ? 'h-max' : 'h-0'} overflow-hidden top-shadow`}>
                <div className='flex justify-between items-center py-3 font-medium px-10'>
                    <span>Advertisement  Link:</span>
                    <Link href='' className='underline underline-offset-2'>Go to Ad</Link>
                </div>
                <div className='flex justify-between items-center py-3 px-10 font-medium'>
                    <span>Likes:</span>
                    <span>1000</span>
                </div>
                <div className='flex justify-between items-center py-3 px-10 font-medium'>
                    <span>Saves:</span>
                    <span>209</span>
                </div>
                <div className='flex justify-between items-center py-3 px-10 font-medium'>
                    <span>Budget Allocation:</span>
                    <span>30 ETH</span>
                </div>
                <div className='flex justify-between items-center py-3 px-10 font-medium'>
                    <div>
                        <p>Remaining Budget:</p>
                        <p className='text-gray text-sm'>30.00 ETH</p>
                    </div>
                    <div className="pie" style={{ backgroundImage: `conic-gradient(#35393C ${60}%,#fff ${100 - 60}%)` }}>
                        <div>60%</div>
                    </div>
                </div>
                <div className='flex justify-between items-center py-3 px-10 font-medium'>
                    <div>
                        <p>Rewards Distributed:</p>
                        <p className='text-gray text-sm'>30.00 ETH</p>
                    </div>
                    <div className="pie" style={{ backgroundImage: `conic-gradient(#35393C ${60}%,#fff ${100 - 60}%)` }}>
                        <div>60%</div>
                    </div>
                </div>
            </div>

            <button type='button' onClick={() => setShowMore(!showMore)} className='absolute bottom-0 w-full left-0 flex justify-center gap-2 items-center border-t h-14'>
                {showMore ? 'Show Less' : 'More Details'}
                <svg className={` ${showMore ? 'rotate-180' : ''}`} width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.647 1L12.9332 11.7138C12.855 11.7971 12.7606 11.8635 12.6557 11.9089C12.5508 11.9543 12.4378 11.9777 12.3235 11.9777C12.2092 11.9777 12.0962 11.9543 11.9913 11.9089C11.8864 11.8635 11.792 11.7971 11.7138 11.7138L1.00002 0.999999" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default Card