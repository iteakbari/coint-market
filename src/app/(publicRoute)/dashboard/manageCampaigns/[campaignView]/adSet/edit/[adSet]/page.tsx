'use client'
import Button from '@/common/Button'
import InputText from '@/common/InputText'
import Modal from '@/common/Modal'
import useAgeGroup from '@/hooks/useAgeGroup'
import useCountries from '@/hooks/useCountries'
import useGender from '@/hooks/useGender'
import { AdSet, AgeGroup, Gender, StatusItems } from '@/types/type'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Select from 'react-select'


function Ad() {
    const { data: ageGroup } = useAgeGroup();
    const { data: gender } = useGender();
    const { data: countries } = useCountries();
    const { register, handleSubmit, formState: { errors } } = useForm<AdSet>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleAdSet = (value: AdSet) => {
        console.log(value);
    }

    return (
        <form action="" onSubmit={handleSubmit(handleAdSet)}>
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl font-semibold">Create New Ad Set </div>
                <div className='card-body'>
                    <div className='px-5 border-b pb-5'>
                        <p className='font-medium mb-5'>Ad Set Details</p>
                        <div className='flex gap-10'>
                            <div className='w-1/3'>
                                <InputText
                                    formObject={register('Title', { required: 'Please enter AdSet name' })}
                                    className='h-14'
                                    placeholder='Ad Set Name'
                                    errors={errors?.Title}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='px-5 border-b py-5'>
                        <p className='font-medium mb-8'>Target Audience</p>
                        <div className='flex gap-5 mb-8'>
                            <span className='text-gray'>Age Range:</span>
                            <div className='flex gap-5'>
                                {ageGroup?.map((item: AgeGroup) => <label key={item.Id} className='flex gap-1 items-center'>
                                    <input
                                        type="checkbox"
                                        {...register('Genders', { required: 'Please select genders item' })}
                                        id={item.Id}
                                        value={item.Id}
                                        className='w-4 h-4 accent-black'
                                    />
                                    <span>{item.Title}</span>
                                </label>)}
                            </div>
                            {errors.Genders && <p className='text-error text-sm'>{errors.Genders.message}</p>}
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <span className='text-gray'>Gender:</span>
                            <div className='flex gap-5'>
                                {
                                    gender?.map((item: Gender) => <label key={item.Id} className='flex gap-1 items-center'>
                                        <input
                                            {...register('AgeGroups', { required: 'Please select age groups item' })}
                                            type="checkbox"
                                            id={String(item.Id)}
                                            value={item.Id}
                                            className='w-4 h-4 accent-black'
                                        />
                                        <span>{item.Title}</span>
                                    </label>)
                                }
                            </div>
                            {errors.AgeGroups && <p className='text-error text-sm'>{errors.AgeGroups.message}</p>}
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
                            <Button onClick={openModal} type='button' className='w-1/4 flex border rounded-[15px] h-14 justify-between items-center px-3'>
                                <span>Add Found from Wallet</span>
                                <span className='w-10 h-10 flex justify-center items-center shadow rounded-full'>
                                    <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.60938L11.7138 12.3231C11.7971 12.4013 11.8635 12.4958 11.9089 12.6006C11.9543 12.7055 11.9777 12.8186 11.9777 12.9329C11.9777 13.0471 11.9543 13.1602 11.9089 13.2651C11.8635 13.3699 11.7971 13.4644 11.7138 13.5426L1 24.2563" stroke="#35393C" strokeWidth="1.74207" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Button>
                            <Modal isOpen={isModalOpen} onClose={closeModal} size="large"
                                backdropClosable={true}
                                backdrop={true}
                            >
                                <div className='w-96 mt-7'>
                                    <form action="">
                                        <div className='border border-gray px-3 items-center rounded-[15px] h-14 flex justify-between'>
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

                                        <div className='flex justify-between mt-7'>
                                            <span className='font-medium'>Ad Set Budget: </span>
                                            <span className='text-gray '>Max</span>
                                        </div>

                                        <InputText placeholder='Amount' badge='BTC' containerClass='mt-3' className='h-14' />

                                        <div className='flex gap-7 mt-7'>
                                            <Button type='button' onClick={() => setIsModalOpen(false)} className='btn-default h-14 w-1/2'>Cancel</Button>
                                            <Button className='btn-black h-14 w-1/2'>Submit</Button>
                                        </div>
                                        <div className='or py-3'>Or</div>
                                        <p className='text-gray text-center mb-3 text-sm'>Do not have enough funds on your wallet?  </p>
                                        <Link className='btn w-full btn-default h-14' href=''>Add Funds to Wallet</Link>
                                    </form>
                                </div>
                            </Modal>
                        </div>
                        <div>
                            <p className='font-medium mt-5 mb-3'>Amount to Allocate:</p>
                            <InputText
                                formObject={register('Budget', { required: 'Please enter budget value' })}
                                className='h-14'
                                containerClass='w-1/3'
                                placeholder='Amount'
                                badge='Max'
                                errors={errors.Budget}
                            />
                        </div>
                    </div>

                    <div className='px-5 border-b py-5'>
                        <p className='font-medium mb-3'>Schedule</p>
                        <p className='text-gray  mb-8 2xl:w-2/3'> If the budget runs out before the end date of the ad set, the ad set will automatically pause. You will receive a notification asking whether you want to allocate additional budget to meet the end date or leave the ad set paused.</p>
                        <div className='flex gap-10'>
                            <div className="w-1/3">
                                <p className='font-medium  mb-3'>Start Date</p>
                                <div className="flex gap-5">
                                    <InputText
                                        formObject={register('StartTime', { required: 'Please enter start time' })}
                                        type='time'
                                        className='h-14'
                                        containerClass='w-[155px]'
                                        errors={errors.StartTime}
                                    />
                                    <InputText
                                        formObject={register('StartDate', { required: 'Please enter start date' })}
                                        type='date'
                                        className='h-14'
                                        containerClass='w-[155px]'
                                        errors={errors.StartDate}
                                    />
                                </div>
                            </div>
                            <div className="w-1/3">
                                <p className='font-medium  mb-3'>End Date</p>
                                <div className="flex gap-5">
                                    <InputText
                                        formObject={register('EndTime', { required: 'Please enter end time' })}
                                        type='time'
                                        className='h-14'
                                        containerClass='w-[155px]'
                                        errors={errors.EndTime}
                                    />
                                    <InputText
                                        formObject={register('EndDate', { required: 'Please enter end date' })}
                                        type='date'
                                        className='h-14'
                                        containerClass='w-[155px]'
                                        errors={errors.EndDate}
                                    />
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