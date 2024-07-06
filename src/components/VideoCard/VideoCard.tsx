import DropdownMenu from '@/common/DropdownMenu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type VideoCardProps = {
    className?: string
}

function VideoCard({ className }: VideoCardProps) {
    return (
        <div className={`${className} bg-vanilla-white rounded-xl box-shadow hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
            <div className='relative'>
                <Image src='/img/cbg.png' className='w-full xl:h-[350px] object-cover rounded-lg' width={200} height={100} alt='video poster' />

                <div className='absolute overlay inset-0 rounded-xl z-10 p-5 text-white flex flex-col justify-between'>
                    <div>
                        <h2 className='text-lg mb-5'>Black Opium Eau de Parfum</h2>
                        <p className='mb-5 text-gray-100 text-sm'>Black Opium, a top-rated YSL perfume with intoxicating notes of rich coffee beans, sweet vanilla, and white flowers to create a long-lasting fragrance.</p>
                        <div className='flex gap-5 text-xs'>
                            <span>Question: <span>7</span></span>
                            <span>Reward: <span>0.0005 Shiba</span></span>
                        </div>
                    </div>

                    <div className='w-full gap-2 flex justify-between'>
                        <div className='flex gap-3'>
                            <Link href='' className='flex w-10 h-10 bg-white justify-center items-center rounded-full'>
                                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3769_14178)">
                                        <path d="M19.8689 15.3162C19.8689 16.5234 19.3894 17.6811 18.5358 18.5347C17.6822 19.3883 16.5245 19.8678 15.3173 19.8678C14.1101 19.8678 12.9524 19.3883 12.0988 18.5347C11.2452 17.6811 10.7656 16.5234 10.7656 15.3162C10.7656 14.109 11.2452 12.9513 12.0988 12.0977C12.9524 11.2441 14.1101 10.7645 15.3173 10.7645C16.5245 10.7645 17.6822 11.2441 18.5358 12.0977C19.3894 12.9513 19.8689 14.109 19.8689 15.3162Z" fill="#35393C" />
                                        <path d="M0.749023 15.3158C0.749023 15.3158 6.21101 5.30212 15.3143 5.30212C24.4176 5.30212 29.8796 15.3158 29.8796 15.3158C29.8796 15.3158 24.4176 25.3294 15.3143 25.3294C6.21101 25.3294 0.749023 15.3158 0.749023 15.3158ZM15.3143 21.6881C17.0044 21.6881 18.6252 21.0167 19.8202 19.8217C21.0153 18.6266 21.6866 17.0058 21.6866 15.3158C21.6866 13.6257 21.0153 12.0049 19.8202 10.8099C18.6252 9.61482 17.0044 8.94345 15.3143 8.94345C13.6243 8.94345 12.0035 9.61482 10.8084 10.8099C9.61337 12.0049 8.94201 13.6257 8.94201 15.3158C8.94201 17.0058 9.61337 18.6266 10.8084 19.8217C12.0035 21.0167 13.6243 21.6881 15.3143 21.6881Z" fill="#35393C" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3769_14178">
                                            <rect width="29.1306" height="29.1306" fill="white" transform="translate(0.750977 0.75061)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>

                            <Link href='' className='flex w-10 h-10 bg-white justify-center items-center rounded-full'>
                                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4938 4.02087C19.0505 4.02087 17.6663 4.59422 16.6457 5.61479L10.2276 12.0329C7.27989 14.9806 5.18871 18.6741 4.17765 22.7183L3.86753 23.9588C3.54588 25.2454 4.71127 26.4108 5.99785 26.0891L7.23834 25.779C11.2826 24.7679 14.976 22.6768 17.9237 19.729L24.3419 13.3109C25.3624 12.2903 25.9358 10.9061 25.9358 9.46285C25.9358 6.45733 23.4993 4.02087 20.4938 4.02087ZM18.6493 11.3073C19.6318 12.2898 20.7707 12.7083 21.6155 12.5612L22.6039 11.5729C23.1635 11.0133 23.4779 10.2543 23.4779 9.46285C23.4779 7.81479 22.1419 6.47878 20.4938 6.47878C19.7024 6.47878 18.9434 6.79317 18.3837 7.3528L17.3954 8.34112C17.2484 9.18593 17.6669 10.3249 18.6493 11.3073Z" fill="#35393C" />
                                </svg>
                            </Link>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <small className='text-white px-1 py-[1px] rounded bg-glass2'>2:23</small>
                            <DropdownMenu direction="right-0 top-full" customeClass='w-6' trigger={<span className='more w-max'><span></span><span></span><span></span></span>}>
                                <div className='p-5 bg-white'></div>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard