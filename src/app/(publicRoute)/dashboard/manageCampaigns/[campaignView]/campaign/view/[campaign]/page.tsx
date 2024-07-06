'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NumericFormat } from 'react-number-format'
import { VictoryPie } from 'victory'

type Props = {}

function CampaignReport({ }: Props) {
    return (
        <div className='px-5'>
            <div className='mb-10'>
                <h5 className='text-3xl font-semibold text-center mb-2'> Campaign Reports</h5>
                <h5 className='text-xl text-gray font-semibold text-center'> Campaign: Spring Sale 2024</h5>
            </div>
            <div className='border border-gray py-10 px-16 rounded-[15px]'>
                <div className='flex gap-10 w-full'>
                    <div className='border w-1/3 border-gray-200 py-10 px-16 rounded-xl'>
                        <p className='text-3xl font-medium'>Clicks</p>
                        <div className='flex gap-5 mt-3 items-end'>
                            <Image src='/img/cursor.png' width={200} height={200} alt='' className='w-14' />
                            <span className='text-5xl font-semibold'>12</span>
                        </div>
                    </div>
                    <div className='border w-1/3 border-gray-200 py-10 px-16 rounded-xl'>
                        <p className='text-3xl font-medium'>Clicks</p>
                        <div className='flex gap-5 mt-3 items-end'>
                            <Image src='/img/White-target-icon.png' width={500} height={500} alt='' className='w-24' />
                            <span className='text-5xl font-semibold'>12</span>
                        </div>
                    </div>
                    <div className='border w-1/3 border-gray-200 py-10 px-16 rounded-xl'>
                        <p className='text-3xl font-medium'>Clicks</p>
                        <div className='flex gap-5 mt-3 items-end'>
                            <Image src='/img/green.png' width={500} height={500} alt='' className='w-32' />
                            <span className='text-5xl font-semibold'>12</span>
                        </div>
                    </div>
                </div>

                <div className='counter-sec rounded-xl h-64 border mt-10'>
                    <div className='rounded-xl flex justify-center items-center'>
                        <div className='w-1/2 flex'>
                            <div className='px-8 border-r w-1/3 border-gray-500'>
                                <NumericFormat thousandSeparator=',' className='font-semibold text-4xl' displayType='text' value={101991} />
                                <p className='text-xl font-medium text-gray mt-2'>Engagement Metrics </p>
                            </div>
                            <div className='px-8 border-r w-1/3 border-gray-500'>
                                <NumericFormat thousandSeparator=',' className='font-semibold text-4xl' displayType='text' value={34} />
                                <p className='text-xl font-medium text-gray mt-2'>Interaction with Questions </p>
                            </div>
                            <div className='px-8 w-1/3'>
                                <span className='font-semibold text-4xl'>10%</span>
                                <p className='text-xl font-medium text-gray mt-2'>Correct Response Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-14 my-14'>
                    <div className='bg-white shadow-md rounded-[35px] w-1/2'>
                        <p className='font-semibold text-center text-lg my-8'>Real-Time Campaign Budget Status</p>
                        <div className='w-2/3 mx-auto my-20'>
                            <p className='pl-5 text-gray mb-2'>Remaining Budget <span className='text-2xl text-black'>70</span>%</p>
                            <div className='border rounded-[35px] p-5 bg-gray'>
                                <div className='bg-gray-400 h-2 rounded-[3px] flex overflow-hidden'>
                                    <div style={{ width: "30%", backgroundColor: '#4A4D70' }}></div>
                                    <div style={{ width: "15%", backgroundColor: '#FAD366' }}></div>
                                    <div style={{ width: "20%", backgroundColor: '#007AFF' }}></div>
                                    <div style={{ width: "8%", backgroundColor: '#AF52DE' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex border-b justify-between mt-auto p-5'>
                            <span className='text-gray'>Total Budget</span>
                            <span>0.0003 BTC</span>
                        </div>
                        <div className='flex border-b justify-between mt-auto p-5'>
                            <span className='text-gray'>Rewards Distributed</span>
                            <span>0.0001 BTC</span>
                        </div>
                        <div className='flex justify-between mt-auto p-5'>
                            <span className='text-gray'>Remaining Budget</span>
                            <span>0.00081 BTC</span>
                        </div>
                    </div>
                    <div className='bg-white shadow-md rounded-[35px] w-1/2 p-8'>
                        <p className='font-semibold text-center text-lg mb-5'>Campaign Budget Breakdown</p>
                        <div className='flex gap-10 justify-center'>
                            <div className='w-7/12'>
                                <VictoryPie
                                    padAngle={3}
                                    innerRadius={100}
                                    colorScale={["#4A4D70", "#FAD366", "#FAB893", "#E46969", '#1E4D4D', '#30B0C7', '#FF2D55', '#007AFF', '#AF52DE']}
                                    style={{ labels: { fontSize: 10, fontWeight: 600, fontFamily: 'inherit' } }}
                                    data={[
                                        { x: 'Category A', y: 30 },
                                        { x: 'Category A', y: 30 },
                                        { x: 'Category A', y: 30 },
                                        { x: 'Category B', y: 45.03 },
                                        { x: 'Category C', y: 57 },
                                        { x: 'Category D', y: 76.55 },
                                        { x: 'Category D', y: 99 },
                                        { x: 'Category D', y: 120 },
                                        { x: 'Category D', y: 7 },
                                    ]}
                                /></div>
                        </div>
                    </div>
                </div>

                <p className='text-xl mb-3'>Download Campaign Reports</p>
                <p className='text-lg text-gray'>Download now to analyze metrics and optimize your strategies.</p>
                <Link href='' className='bg-darker-gray flex w-max items-center h-14 px-5 mt-3 rounded-[10px] gap-3'>
                    <span>Download Reports</span>
                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8145 1H25.2872V8.47276" stroke="#35393C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.2865 1L14.7312 11.5553C14.5566 11.7264 14.3218 11.8223 14.0773 11.8223C13.8328 11.8223 13.5981 11.7264 13.4235 11.5553L9.12663 7.25844C8.95202 7.08729 8.71726 6.99142 8.47276 6.99142C8.22826 6.99142 7.99351 7.08729 7.8189 7.25844L1 14.0773" stroke="#35393C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            <div className='card my-10'>
                <div className="text-lg font-medium card-header h-16 flex justify-center items-center text-black">Campaign Diagram</div>
                <div className="card-body p-0 divide-y divide-slate-200">
                    <div className='flex gap-10 py-5 px-10'>
                        <span className='flex gap-5 text-gray'>
                            Ad Campaign: <span className='font-medium text-black'>Spring Sale 2024</span>
                        </span>
                        <span className='flex gap-5 text-gray'>
                            Ad Sets: <span className='font-medium text-black'>5</span>
                        </span>
                        <span className='flex gap-5 text-gray'>
                            Total Ads : <span className='font-medium text-black'>4</span>
                        </span>
                    </div>
                    <div className='py-5 px-10 flex items-start gap-5'>
                        <span className='text-gray'>Ad Set Name:</span>
                        <div className='flex-1'>
                            <p className='font-medium mb-2'>Targeting by Location</p>
                            <div className='text-gray mb-3 flex justify-between '>
                                <span>
                                    1.Ad Title: <span className='text-black'>“Get ready for Spring!”</span>
                                </span>
                                <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                    <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                    Active
                                </span>
                            </div>
                            <div className='text-gray mb-2 flex justify-between '>
                                <span>
                                    1.Ad Title: <span className='text-black'>“Get ready for Spring!”</span>
                                </span>
                                <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                    <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 px-10 flex items-start gap-5'>
                        <span className='text-gray'>Ad Set Name:</span>
                        <div className='flex-1'>
                            <p className='font-medium mb-2'>Targeting by Location</p>
                            <div className='text-gray mb-3 flex justify-between '>
                                <span>
                                    1.Ad Title: <span className='text-black'>“Get ready for Spring!”</span>
                                </span>
                                <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                    <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                    Active
                                </span>
                            </div>
                            <div className='text-gray mb-2 flex justify-between '>
                                <span>
                                    1.Ad Title: <span className='text-black'>“Get ready for Spring!”</span>
                                </span>
                                <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                    <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignReport