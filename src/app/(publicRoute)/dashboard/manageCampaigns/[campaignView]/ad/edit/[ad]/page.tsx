'use client'
import Button from '@/common/Button'
import InputText from '@/common/InputText'
import Textarea from '@/common/Textarea'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

function EditAd({ }: Props) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [startTime, setStartTime] = useState('');
    const [formCount, setFormCount] = useState(0);

    useEffect(() => {
        setFormCount(1);
    }, []);

    const addForm = () => {
        setFormCount(formCount + 1);
    };

    const forms = [];
    for (let i = 0; i < formCount; i++) {
        forms.push(
            <form key={i} className="bg-gray-200 border border-light-gray p-8 rounded-[15px]">
                <p className='font-semibold mb-2'>{i + 1}.</p>
                <Textarea placeholder='Write the question here...' />
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <Textarea placeholder='Write the answer here...' containerClass='mb-0' />
                        <label className='flex gap-1 items-center justify-center mt-1'>
                            <input type="checkbox" name={`correct_answer_${i}`} className='w-4 h-4 accent-black' />
                            <span>Correct Answer</span>
                        </label>
                    </div>
                    <div>
                        <Textarea placeholder='Write the answer here...' containerClass='mb-0' />
                        <label className='flex gap-1 items-center justify-center mt-1'>
                            <input type="checkbox" name={`correct_answer_${i}`} className='w-4 h-4 accent-black' />
                            <span>Correct Answer</span>
                        </label>
                    </div>
                    <div>
                        <Textarea placeholder='Write the answer here...' containerClass='mb-0' />
                        <label className='flex gap-1 items-center justify-center mt-1'>
                            <input type="checkbox" name={`correct_answer_${i}`} className='w-4 h-4 accent-black' />
                            <span>Correct Answer</span>
                        </label>
                    </div>
                    <div>
                        <Textarea placeholder='Write the answer here...' containerClass='mb-0' />
                        <label className='flex gap-1 items-center justify-center mt-1'>
                            <input type="checkbox" name={`correct_answer_${i}`} className='w-4 h-4 accent-black' />
                            <span>Correct Answer</span>
                        </label>
                    </div>
                </div>
                <Button className='h-14 w-full btn-black mt-8'>Submit</Button>
            </form>
        );
    }

    return (
        <form action="">
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl font-semibold">Create New Advertisement</div>
                <div className='card-body'>
                    <div className='px-5 border-b pb-5'>
                        <p className='font-medium mb-5'>Advertisement Details</p>
                        <div className='flex gap-20'>
                            <div className='w-1/3'>
                                <InputText className='h-14' placeholder='Ad Name' />
                            </div>
                            <div className='w-1/3'>
                                <InputText className='h-14' placeholder='Caption (Max 200 characters)' />
                            </div>
                        </div>
                        <div className='flex gap-20'>
                            <div className='w-1/3'>
                                <InputText className='h-14' readOnly defaultValue='Targeting by Location' placeholder='Ad Name' />
                            </div>
                            <div className='w-1/3'>
                                <InputText className='h-14' readOnly defaultValue='Spring Sale 2024' />
                            </div>
                        </div>
                    </div>

                    <div className='px-5 border-b py-10'>
                        <p className='font-medium mb-5'>Advertisement Media Upload</p>
                        <div className='flex gap-20'>
                            <div className='w-1/3'>
                                <p className='font-semibold'>Primary Video</p>
                                <p className='text-gray'>Accepted Aspect Ratio: 16:9 (recommended)</p>
                                <p className='text-gray'>Maximum File Size: 1 GB</p>
                                <div className='campaign-img-file mt-5'>
                                    <input type="file" name="" id="campaign-img" accept='jpg,jpeg,png,svg' />
                                    <label htmlFor="campaign-img" className='cursor-pointer relative'>
                                        {
                                            selectedFile ? <span className='flex gap-5 items-center'>
                                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3302_8943)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.8509 10.9761C29.6847 11.3774 29.4031 11.7205 29.0419 11.9619C28.6806 12.2032 28.2559 12.332 27.8214 12.332H22.6964V20.3856C22.6964 20.9681 22.465 21.5268 22.0531 21.9387C21.6412 22.3506 21.0825 22.582 20.5 22.582C19.9175 22.582 19.3588 22.3506 18.9469 21.9387C18.535 21.5268 18.3036 20.9681 18.3036 20.3856V12.332H13.1786C12.7444 12.3316 12.3202 12.2026 11.9593 11.9612C11.5985 11.7198 11.3172 11.3769 11.1512 10.9758C10.9851 10.5747 10.9416 10.1334 11.0262 9.70758C11.1108 9.28177 11.3196 8.89058 11.6264 8.58341L18.9479 1.26198C19.3597 0.850663 19.9179 0.619629 20.5 0.619629C21.0821 0.619629 21.6403 0.850663 22.0521 1.26198L29.3736 8.58341C29.6808 8.89036 29.8901 9.28149 29.975 9.70736C30.06 10.1332 30.0168 10.5747 29.8509 10.9761ZM1.46429 24.9863C1.07593 24.9863 0.703486 25.1406 0.428879 25.4152C0.154273 25.6898 0 26.0623 0 26.4506L0 37.1985C0 37.7754 0.113625 38.3466 0.334386 38.8796C0.555148 39.4125 0.878724 39.8968 1.28664 40.3047C1.69455 40.7126 2.17882 41.0362 2.71178 41.257C3.24475 41.4777 3.81598 41.5913 4.39286 41.5913H36.6071C37.7722 41.5913 38.8895 41.1285 39.7134 40.3047C40.5372 39.4809 41 38.3635 41 37.1985V26.4506C41 26.0623 40.8457 25.6898 40.5711 25.4152C40.2965 25.1406 39.9241 24.9863 39.5357 24.9863H30.8291C29.664 24.9863 28.5467 25.4492 27.7229 26.273C26.899 27.0968 26.4362 28.2141 26.4362 29.3792C26.4362 32.2316 23.5779 34.4515 20.4912 34.431C17.4924 34.4105 14.7219 32.1818 14.7219 29.3792C14.7219 28.2141 14.2591 27.0968 13.4353 26.273C12.6115 25.4492 11.4941 24.9863 10.3291 24.9863H1.46429Z" fill="#35393C" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3302_8943">
                                                            <rect width="41" height="41" fill="white" transform="translate(0 0.591309)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>
                                                    {selectedFile?.name}
                                                </span>
                                            </span> : <span className='flex gap-5'>
                                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3302_8943)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.8509 10.9761C29.6847 11.3774 29.4031 11.7205 29.0419 11.9619C28.6806 12.2032 28.2559 12.332 27.8214 12.332H22.6964V20.3856C22.6964 20.9681 22.465 21.5268 22.0531 21.9387C21.6412 22.3506 21.0825 22.582 20.5 22.582C19.9175 22.582 19.3588 22.3506 18.9469 21.9387C18.535 21.5268 18.3036 20.9681 18.3036 20.3856V12.332H13.1786C12.7444 12.3316 12.3202 12.2026 11.9593 11.9612C11.5985 11.7198 11.3172 11.3769 11.1512 10.9758C10.9851 10.5747 10.9416 10.1334 11.0262 9.70758C11.1108 9.28177 11.3196 8.89058 11.6264 8.58341L18.9479 1.26198C19.3597 0.850663 19.9179 0.619629 20.5 0.619629C21.0821 0.619629 21.6403 0.850663 22.0521 1.26198L29.3736 8.58341C29.6808 8.89036 29.8901 9.28149 29.975 9.70736C30.06 10.1332 30.0168 10.5747 29.8509 10.9761ZM1.46429 24.9863C1.07593 24.9863 0.703486 25.1406 0.428879 25.4152C0.154273 25.6898 0 26.0623 0 26.4506L0 37.1985C0 37.7754 0.113625 38.3466 0.334386 38.8796C0.555148 39.4125 0.878724 39.8968 1.28664 40.3047C1.69455 40.7126 2.17882 41.0362 2.71178 41.257C3.24475 41.4777 3.81598 41.5913 4.39286 41.5913H36.6071C37.7722 41.5913 38.8895 41.1285 39.7134 40.3047C40.5372 39.4809 41 38.3635 41 37.1985V26.4506C41 26.0623 40.8457 25.6898 40.5711 25.4152C40.2965 25.1406 39.9241 24.9863 39.5357 24.9863H30.8291C29.664 24.9863 28.5467 25.4492 27.7229 26.273C26.899 27.0968 26.4362 28.2141 26.4362 29.3792C26.4362 32.2316 23.5779 34.4515 20.4912 34.431C17.4924 34.4105 14.7219 32.1818 14.7219 29.3792C14.7219 28.2141 14.2591 27.0968 13.4353 26.273C12.6115 25.4492 11.4941 24.9863 10.3291 24.9863H1.46429Z" fill="#35393C" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3302_8943">
                                                            <rect width="41" height="41" fill="white" transform="translate(0 0.591309)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className='block'>
                                                    <span className='block'>Drag and drop or click here to add file.</span>
                                                    <span className='text-gray text-sm'>MP4, MOV, AVI, WMV</span>
                                                </span>
                                            </span>
                                        }
                                        <Button type='button' className='btn-black py-2 px-5 mt-5 pointer-events-none'>Upload</Button>
                                    </label>
                                </div>
                            </div>
                            <div className='w-1/3'>
                                <p className='font-semibold'>Cover Image</p>
                                <p className='text-gray'>Accepted Aspect Ratio: 16:9 (recommended)</p>
                                <div className='campaign-img-file mt-5'>
                                    <input type="file" name="" id="campaign-img" accept='mp4,mov,avi,wmv' />
                                    <label htmlFor="campaign-img" className='cursor-pointer relative'>
                                        {
                                            selectedFile ? <span className='flex gap-5 items-center'>
                                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3302_8943)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.8509 10.9761C29.6847 11.3774 29.4031 11.7205 29.0419 11.9619C28.6806 12.2032 28.2559 12.332 27.8214 12.332H22.6964V20.3856C22.6964 20.9681 22.465 21.5268 22.0531 21.9387C21.6412 22.3506 21.0825 22.582 20.5 22.582C19.9175 22.582 19.3588 22.3506 18.9469 21.9387C18.535 21.5268 18.3036 20.9681 18.3036 20.3856V12.332H13.1786C12.7444 12.3316 12.3202 12.2026 11.9593 11.9612C11.5985 11.7198 11.3172 11.3769 11.1512 10.9758C10.9851 10.5747 10.9416 10.1334 11.0262 9.70758C11.1108 9.28177 11.3196 8.89058 11.6264 8.58341L18.9479 1.26198C19.3597 0.850663 19.9179 0.619629 20.5 0.619629C21.0821 0.619629 21.6403 0.850663 22.0521 1.26198L29.3736 8.58341C29.6808 8.89036 29.8901 9.28149 29.975 9.70736C30.06 10.1332 30.0168 10.5747 29.8509 10.9761ZM1.46429 24.9863C1.07593 24.9863 0.703486 25.1406 0.428879 25.4152C0.154273 25.6898 0 26.0623 0 26.4506L0 37.1985C0 37.7754 0.113625 38.3466 0.334386 38.8796C0.555148 39.4125 0.878724 39.8968 1.28664 40.3047C1.69455 40.7126 2.17882 41.0362 2.71178 41.257C3.24475 41.4777 3.81598 41.5913 4.39286 41.5913H36.6071C37.7722 41.5913 38.8895 41.1285 39.7134 40.3047C40.5372 39.4809 41 38.3635 41 37.1985V26.4506C41 26.0623 40.8457 25.6898 40.5711 25.4152C40.2965 25.1406 39.9241 24.9863 39.5357 24.9863H30.8291C29.664 24.9863 28.5467 25.4492 27.7229 26.273C26.899 27.0968 26.4362 28.2141 26.4362 29.3792C26.4362 32.2316 23.5779 34.4515 20.4912 34.431C17.4924 34.4105 14.7219 32.1818 14.7219 29.3792C14.7219 28.2141 14.2591 27.0968 13.4353 26.273C12.6115 25.4492 11.4941 24.9863 10.3291 24.9863H1.46429Z" fill="#35393C" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3302_8943">
                                                            <rect width="41" height="41" fill="white" transform="translate(0 0.591309)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>
                                                    {selectedFile?.name}
                                                </span>
                                            </span> : <span className='flex gap-5'>
                                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3302_8943)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M29.8509 10.9761C29.6847 11.3774 29.4031 11.7205 29.0419 11.9619C28.6806 12.2032 28.2559 12.332 27.8214 12.332H22.6964V20.3856C22.6964 20.9681 22.465 21.5268 22.0531 21.9387C21.6412 22.3506 21.0825 22.582 20.5 22.582C19.9175 22.582 19.3588 22.3506 18.9469 21.9387C18.535 21.5268 18.3036 20.9681 18.3036 20.3856V12.332H13.1786C12.7444 12.3316 12.3202 12.2026 11.9593 11.9612C11.5985 11.7198 11.3172 11.3769 11.1512 10.9758C10.9851 10.5747 10.9416 10.1334 11.0262 9.70758C11.1108 9.28177 11.3196 8.89058 11.6264 8.58341L18.9479 1.26198C19.3597 0.850663 19.9179 0.619629 20.5 0.619629C21.0821 0.619629 21.6403 0.850663 22.0521 1.26198L29.3736 8.58341C29.6808 8.89036 29.8901 9.28149 29.975 9.70736C30.06 10.1332 30.0168 10.5747 29.8509 10.9761ZM1.46429 24.9863C1.07593 24.9863 0.703486 25.1406 0.428879 25.4152C0.154273 25.6898 0 26.0623 0 26.4506L0 37.1985C0 37.7754 0.113625 38.3466 0.334386 38.8796C0.555148 39.4125 0.878724 39.8968 1.28664 40.3047C1.69455 40.7126 2.17882 41.0362 2.71178 41.257C3.24475 41.4777 3.81598 41.5913 4.39286 41.5913H36.6071C37.7722 41.5913 38.8895 41.1285 39.7134 40.3047C40.5372 39.4809 41 38.3635 41 37.1985V26.4506C41 26.0623 40.8457 25.6898 40.5711 25.4152C40.2965 25.1406 39.9241 24.9863 39.5357 24.9863H30.8291C29.664 24.9863 28.5467 25.4492 27.7229 26.273C26.899 27.0968 26.4362 28.2141 26.4362 29.3792C26.4362 32.2316 23.5779 34.4515 20.4912 34.431C17.4924 34.4105 14.7219 32.1818 14.7219 29.3792C14.7219 28.2141 14.2591 27.0968 13.4353 26.273C12.6115 25.4492 11.4941 24.9863 10.3291 24.9863H1.46429Z" fill="#35393C" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3302_8943">
                                                            <rect width="41" height="41" fill="white" transform="translate(0 0.591309)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className='block'>
                                                    <span className='block'>Drag and drop or click here to add file.</span>
                                                    <span className='text-gray text-sm'>JPG, PNG, SVG</span>
                                                </span>
                                            </span>
                                        }
                                        <Button type='button' className='btn-black py-2 px-5 mt-5 pointer-events-none'>Upload</Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 border-b py-10'>
                        <p className='font-medium mb-5'>Advertisment Questions</p>
                        <div className='grid gap-20 grid-cols-3'>
                            {forms}
                            <button type='button' onClick={addForm} className="">
                                <Image src='/img/form.png' alt='add form image' width={4000} height={8000} className='w-full' />
                            </button>
                        </div>
                    </div>

                    <div className='px-5 border-b py-10'>
                        <div className='flex gap-10'>
                            <div className='border border-gray px-3 items-center rounded-[15px] h-14 flex justify-between w-1/3'>
                                <span className='flex gap-2'>
                                    <span className='text-gray'>Campaign Budget:</span>
                                    <span className='font-semibold'>0.00132</span>
                                </span>
                                <div className='flex items-center gap-2'>
                                    <div className='text-right'>
                                        <span className='font-semibold block'>Bitcoin</span>
                                        <span className='text-xs block'>Bitcoin</span>
                                    </div>
                                    <Image className='w-9 h-9' width={200} height={200} alt='' src='/img/bit.png' />
                                </div>
                            </div>
                            <Link href='' className='w-1/4 flex border rounded-[15px] h-14 justify-between items-center px-3'>
                                <span>Add Found from Wallet</span>
                                <span className='w-10 h-10 flex justify-center items-center shadow rounded-full'>
                                    <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.60938L11.7138 12.3231C11.7971 12.4013 11.8635 12.4958 11.9089 12.6006C11.9543 12.7055 11.9777 12.8186 11.9777 12.9329C11.9777 13.0471 11.9543 13.1602 11.9089 13.2651C11.8635 13.3699 11.7971 13.4644 11.7138 13.5426L1 24.2563" stroke="#35393C" strokeWidth="1.74207" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div>
                            <p className='font-medium mt-5 mb-3'>Amount to Allocate:</p>
                            <InputText className='h-14' containerClass='w-1/3' placeholder='Amount' badge='Max' />
                        </div>
                    </div>

                    <div className='px-5 border-b py-10'>
                        <p className='font-medium mb-3'>Schedule</p>
                        <p className='text-gray  mb-8 2xl:w-2/3'> If the budget runs out before the end date of the ad set, the ad set will automatically pause. You will receive a notification asking whether you want to allocate additional budget to meet the end date or leave the ad set paused.</p>
                        <div className='flex gap-10'>
                            <div className="w-1/3">
                                <p className='font-medium  mb-3'>Start Date</p>
                                <div className="flex gap-5">
                                    <InputText onChange={(e) => setStartTime(e.target.value)} type='time' className='h-14' containerClass='w-[155px]' />
                                    <InputText type='date' className='h-14' containerClass='w-[155px]' />
                                </div>
                            </div>
                            <div className="w-1/3">
                                <p className='font-medium  mb-3'>End Date</p>
                                <div className="flex gap-5">
                                    <InputText type='time' className='h-14' containerClass='w-[155px]' />
                                    <InputText type='date' className='h-14' containerClass='w-[155px]' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 py-5 flex items-center gap-10'>
                        <span>Email Notification Preferences:</span>
                        <label className='flex items-center gap-3'>
                            <input type="radio" name="report" id="" className='accent-black' />
                            <span>Receive Weekly Performance Reports</span>
                        </label>
                        <label className='flex items-center gap-3'>
                            <input type="radio" name="report" id="" className='accent-black' />
                            <span>Receive Monthly Performance Summaries</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='flex justify-end'>
                <Button type='submit' className='btn-black h-14 w-60 mt-5' >
                    Save Change
                </Button>
            </div>
        </form>
    )
}

export default EditAd