import Button from '@/common/Button'
import React from 'react'

type Props = {}

function Preferences({ }: Props) {
    return (
        <form>
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl">Preferences</div>
                <div className="card-body">
                    <div className='p-5 pr-16'>
                        <p className='font-medium text-xl mb-3'>Interests</p>
                        <p className='text-xl text-gray'>Click on the topics you&apos;re passionate about or would like to see more of on our platform.</p>
                        <div className='flex gap-2 flex-wrap mt-5'>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Finance
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Education and Learning
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Automotive
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Tehcnology
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Health and Wellness
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Travel and Tourism
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    food
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Fashion and Beauty
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Sport
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                            <label className='tags-label'>
                                <input type="checkbox" />
                                <span>
                                    Pets and Animals
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className='border-t mt-7 pt-5 flex flex-wrap justify-between'>
                            <p className='w-2/4'>
                                Receive notifications via email for important updates, messages, and activity on Coin Market Ads.
                            </p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-3'>
                <Button type='submit' className='btn-primary h-14 w-60 mt-5' text='Save Change' />
            </div>
        </form>
    )
}

export default Preferences