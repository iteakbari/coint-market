"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';

interface Tab {
    id: number;
    title: string;
}

type Props = {}

function VideoList({ }: Props) {
    return (
        <Swiper freeMode={true}
            className="video-swiper mt-4"
            modules={[Scrollbar]}
            spaceBetween={10}
            scrollbar
            breakpoints={{
                320: {
                    slidesPerView: 1
                },
                420: {
                    slidesPerView: 1.2
                },
                520: {
                    slidesPerView: 1.5
                },
                620: {
                    slidesPerView: 1.7
                },
                720: {
                    slidesPerView: 1.9
                },
                820: {
                    slidesPerView: 2.2
                },
                920: {
                    slidesPerView: 2.3
                },
                1050: {
                    slidesPerView: 2.5
                },
                1200: {
                    slidesPerView: 2.7
                },
                1380: {
                    slidesPerView: 3
                },
                1550: {
                    slidesPerView: 3.2
                },
                1650: {
                    slidesPerView: 3.4
                },
                1750: {
                    slidesPerView: 3.5
                },
                1850: {
                    slidesPerView: 3.7
                },
            }
            }
        >
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='p-3'>
                <div className='bg-vanilla-white rounded-xl box-shadow p-4'>
                    <div className='relative pb-7'>
                        <Image src='/img/i1.png' className='w-full xl:h-44 object-cover rounded-lg' width={200} height={100} alt='video poster' />
                        <div className='absolute right-2 bottom-9 w-max gap-2 flex'>
                            <small className='text-white border px-1 py-[1px] rounded flex items-center'>
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.51085 6.51147L1.29622 9.622C1.20236 9.71293 1.12786 9.82111 1.07702 9.94031C1.02618 10.0595 1 10.1874 1 10.3165C1 10.4456 1.02618 10.5735 1.07702 10.6927C1.12786 10.8119 1.20236 10.92 1.29622 11.011L3.41928 13.0847C3.51238 13.1763 3.62314 13.2491 3.74517 13.2988C3.86721 13.3484 3.9981 13.374 4.1303 13.374C4.2625 13.374 4.3934 13.3484 4.51543 13.2988C4.63747 13.2491 4.74823 13.1763 4.84132 13.0847L8.02591 9.94479" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.519 7.50948L13.7035 4.39896C13.7974 4.30803 13.8719 4.19985 13.9228 4.08065C13.9736 3.96145 13.9998 3.8336 13.9998 3.70448C13.9998 3.57535 13.9736 3.4475 13.9228 3.3283C13.8719 3.20911 13.7974 3.10092 13.7035 3.00999L11.6105 0.936308C11.5174 0.844628 11.4067 0.771859 11.2846 0.722199C11.1626 0.67254 11.0317 0.646973 10.8995 0.646973C10.7673 0.646973 10.6364 0.67254 10.5144 0.722199C10.3923 0.771859 10.2816 0.844628 10.1885 0.936308L7.00391 4.07617" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.51797 5.05444L5.51221 8.96705" stroke="#EEF8FF" strokeWidth="0.914359" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </small>
                            <small className='text-white border px-1 py-[1px] rounded'>2:23</small>
                        </div>
                        <div className='absolute bottom-0 flex gap-3 items-end justify-between w-full'>
                            <div className='flex items-end gap-3'>
                                <Image src='/img/videoBadge.png' className='size-14' width={80} height={80} alt='badge' />
                                <p className='text-xs pb-1'>Advertiser: Shopify Company</p>
                            </div>
                            <span className='pb-2'>
                                <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.95902 2.82696C1.57502 2.82696 1.25702 2.70096 1.00502 2.44896C0.76502 2.18496 0.64502 1.86696 0.64502 1.49496C0.64502 1.11096 0.76502 0.792964 1.00502 0.540964C1.25702 0.288964 1.57502 0.162964 1.95902 0.162964C2.34302 0.162964 2.65502 0.288964 2.89502 0.540964C3.14702 0.792964 3.27302 1.11096 3.27302 1.49496C3.27302 1.86696 3.14702 2.18496 2.89502 2.44896C2.65502 2.70096 2.34302 2.82696 1.95902 2.82696Z" fill="#35393C" />
                                    <path d="M6.99972 2.82696C6.61572 2.82696 6.29772 2.70096 6.04572 2.44896C5.80572 2.18496 5.68572 1.86696 5.68572 1.49496C5.68572 1.11096 5.80572 0.792964 6.04572 0.540964C6.29772 0.288964 6.61572 0.162964 6.99972 0.162964C7.38372 0.162964 7.69572 0.288964 7.93572 0.540964C8.18772 0.792964 8.31372 1.11096 8.31372 1.49496C8.31372 1.86696 8.18772 2.18496 7.93572 2.44896C7.69572 2.70096 7.38372 2.82696 6.99972 2.82696Z" fill="#35393C" />
                                    <path d="M12.0404 2.82696C11.6564 2.82696 11.3384 2.70096 11.0864 2.44896C10.8464 2.18496 10.7264 1.86696 10.7264 1.49496C10.7264 1.11096 10.8464 0.792964 11.0864 0.540964C11.3384 0.288964 11.6564 0.162964 12.0404 0.162964C12.4244 0.162964 12.7364 0.288964 12.9764 0.540964C13.2284 0.792964 13.3544 1.11096 13.3544 1.49496C13.3544 1.86696 13.2284 2.18496 12.9764 2.44896C12.7364 2.70096 12.4244 2.82696 12.0404 2.82696Z" fill="#35393C" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='py-3 border-b'>
                        <h2 className='font-semibold'>Shop with shopify</h2>
                        <p className='text-xs'>Explore our shopping store.</p>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-2'>
                        <span>Questions</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between text-gray text-xs py-1'>
                        <span>Reward</span>
                        <span>0.005 <span>Eth</span>($<span>5</span>) </span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default VideoList