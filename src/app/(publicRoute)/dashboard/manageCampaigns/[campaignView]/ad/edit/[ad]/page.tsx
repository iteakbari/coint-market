'use client'
import Button from '@/common/Button'
import InputText from '@/common/InputText'
import useAgeGroup from '@/hooks/useAgeGroup'
import useCountries from '@/hooks/useCountries'
import useGender from '@/hooks/useGender'
import { AgeGroup, Gender, StatusItems } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Select from 'react-select'


function Ad() {
    const [startTime, setStartTime] = useState('');
    const { data: ageGroup } = useAgeGroup();
    const { data: gender } = useGender();
    const { data: countries } = useCountries();
    console.log(startTime);


    return (
        <form action="">
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl font-semibold">Create New Ad Set </div>
                <div className='card-body'>
                    <div className='px-5 border-b pb-5'>
                        <p className='font-medium mb-5'>Ad Set Details</p>
                        <div className='flex gap-10'>
                            <div className='w-1/3'>
                                <InputText className='h-14' placeholder='Ad Set Name' />
                            </div>
                            <div className='w-1/3'>
                                <InputText className='h-14' placeholder='Caption (Max 200 characters)' />
                            </div>
                        </div>
                    </div>

                    <div className='px-5 border-b py-5'>
                        <p className='font-medium mb-8'>Target Audience</p>
                        <div className='flex gap-5 mb-8'>
                            <span className='text-gray'>Age Range:</span>
                            <div className='flex gap-5'>
                                {ageGroup?.map((item: AgeGroup) => <label key={item.Id} className='flex gap-1 items-center'>
                                    <input type="checkbox" name="age" id={item.Id} className='w-4 h-4 accent-black' />
                                    <span>{item.Title}</span>
                                </label>)}
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <span className='text-gray'>Gender:</span>
                            <div className='flex gap-5'>
                                {
                                    gender?.map((item: Gender) => <label key={item.Id} className='flex gap-1 items-center'>
                                        <input type="checkbox" name="gender" id="" className='w-4 h-4 accent-black' />
                                        <span>{item.Title}</span>
                                    </label>)
                                }
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <p className='text-gray mb-1'>Location:</p>
                            <Select options={countries?.map(({ Id, Title }: StatusItems) => ({
                                value: Id,
                                label: Title
                            }))} className='select-box h-12 2xl:h-14' />
                        </div>
                    </div>

                    <div className='px-5 border-b py-5'>
                        <p className='font-medium mb-3'>Budget Allocation</p>
                        <p className='text-gray mb-5 2xl:w-2/3'>If the budget runs out before the end date, the ad set will be paused. You will be notified and can choose to allocate more funds to meet the deadline.</p>
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

                    <div className='px-5 border-b py-5'>
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

export default Ad 