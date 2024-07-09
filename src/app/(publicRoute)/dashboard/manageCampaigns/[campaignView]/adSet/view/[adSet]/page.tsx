'use client'
import Button from '@/common/Button'
import Card from '@/components/Card/Card'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
const MyTimer = dynamic(() => import('@/common/Timer'), { ssr: false })
import React from 'react'
import { NumericFormat } from 'react-number-format'
import { VictoryChart, VictoryHistogram, VictoryPie } from 'victory'

type Props = {}

function AdView({ }: Props) {
    const time = new Date();
    time.setSeconds(time.getMinutes() * 10000);
    return (
        <div className='px-5'>
            <div className='mb-10 flex justify-between'>
                <div className='w-40'></div>
                <div className='text-center text-2xl font-semibold'> Ad Set: Targeting by Location</div>
                <div className='w-40 flex justify-end gap-5'>
                    <span className='shadow py-2 inline-flex bg-white gap-1 px-3 rounded-lg items-center'>
                        <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                        Active
                    </span>
                    <span className='flex justify-center items-center w-11 h-11 bg-white rounded-lg shadow'>
                        <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.24996 4.58332C8.00684 4.58332 7.77369 4.6799 7.60178 4.85181C7.42987 5.02372 7.33329 5.25687 7.33329 5.49999C7.33329 5.7431 7.42987 5.97626 7.60178 6.14817C7.77369 6.32008 8.00684 6.41665 8.24996 6.41665C8.49307 6.41665 8.72623 6.32008 8.89814 6.14817C9.07005 5.97626 9.16663 5.7431 9.16663 5.49999C9.16663 5.25687 9.07005 5.02372 8.89814 4.85181C8.72623 4.6799 8.49307 4.58332 8.24996 4.58332ZM5.65579 4.58332C5.84518 4.04658 6.19639 3.5818 6.66101 3.25305C7.12563 2.92429 7.68079 2.74774 8.24996 2.74774C8.81913 2.74774 9.37429 2.92429 9.83891 3.25305C10.3035 3.5818 10.6547 4.04658 10.8441 4.58332H17.4166C17.6597 4.58332 17.8929 4.6799 18.0648 4.85181C18.2367 5.02372 18.3333 5.25687 18.3333 5.49999C18.3333 5.7431 18.2367 5.97626 18.0648 6.14817C17.8929 6.32008 17.6597 6.41665 17.4166 6.41665H10.8441C10.6547 6.95339 10.3035 7.41817 9.83891 7.74693C9.37429 8.07569 8.81913 8.25223 8.24996 8.25223C7.68079 8.25223 7.12563 8.07569 6.66101 7.74693C6.19639 7.41817 5.84518 6.95339 5.65579 6.41665H4.58329C4.34018 6.41665 4.10702 6.32008 3.93511 6.14817C3.7632 5.97626 3.66663 5.7431 3.66663 5.49999C3.66663 5.25687 3.7632 5.02372 3.93511 4.85181C4.10702 4.6799 4.34018 4.58332 4.58329 4.58332H5.65579ZM13.75 10.0833C13.5068 10.0833 13.2737 10.1799 13.1018 10.3518C12.9299 10.5237 12.8333 10.7569 12.8333 11C12.8333 11.2431 12.9299 11.4763 13.1018 11.6482C13.2737 11.8201 13.5068 11.9167 13.75 11.9167C13.9931 11.9167 14.2262 11.8201 14.3981 11.6482C14.57 11.4763 14.6666 11.2431 14.6666 11C14.6666 10.7569 14.57 10.5237 14.3981 10.3518C14.2262 10.1799 13.9931 10.0833 13.75 10.0833ZM11.1558 10.0833C11.3452 9.54658 11.6964 9.0818 12.161 8.75304C12.6256 8.42429 13.1808 8.24774 13.75 8.24774C14.3191 8.24774 14.8743 8.42429 15.3389 8.75304C15.8035 9.0818 16.1547 9.54658 16.3441 10.0833H17.4166C17.6597 10.0833 17.8929 10.1799 18.0648 10.3518C18.2367 10.5237 18.3333 10.7569 18.3333 11C18.3333 11.2431 18.2367 11.4763 18.0648 11.6482C17.8929 11.8201 17.6597 11.9167 17.4166 11.9167H16.3441C16.1547 12.4534 15.8035 12.9182 15.3389 13.2469C14.8743 13.5757 14.3191 13.7522 13.75 13.7522C13.1808 13.7522 12.6256 13.5757 12.161 13.2469C11.6964 12.9182 11.3452 12.4534 11.1558 11.9167H4.58329C4.34018 11.9167 4.10702 11.8201 3.93511 11.6482C3.7632 11.4763 3.66663 11.2431 3.66663 11C3.66663 10.7569 3.7632 10.5237 3.93511 10.3518C4.10702 10.1799 4.34018 10.0833 4.58329 10.0833H11.1558ZM8.24996 15.5833C8.00684 15.5833 7.77369 15.6799 7.60178 15.8518C7.42987 16.0237 7.33329 16.2569 7.33329 16.5C7.33329 16.7431 7.42987 16.9763 7.60178 17.1482C7.77369 17.3201 8.00684 17.4167 8.24996 17.4167C8.49307 17.4167 8.72623 17.3201 8.89814 17.1482C9.07005 16.9763 9.16663 16.7431 9.16663 16.5C9.16663 16.2569 9.07005 16.0237 8.89814 15.8518C8.72623 15.6799 8.49307 15.5833 8.24996 15.5833ZM5.65579 15.5833C5.84518 15.0466 6.19639 14.5818 6.66101 14.253C7.12563 13.9243 7.68079 13.7477 8.24996 13.7477C8.81913 13.7477 9.37429 13.9243 9.83891 14.253C10.3035 14.5818 10.6547 15.0466 10.8441 15.5833H17.4166C17.6597 15.5833 17.8929 15.6799 18.0648 15.8518C18.2367 16.0237 18.3333 16.2569 18.3333 16.5C18.3333 16.7431 18.2367 16.9763 18.0648 17.1482C17.8929 17.3201 17.6597 17.4167 17.4166 17.4167H10.8441C10.6547 17.9534 10.3035 18.4182 9.83891 18.7469C9.37429 19.0757 8.81913 19.2522 8.24996 19.2522C7.68079 19.2522 7.12563 19.0757 6.66101 18.7469C6.19639 18.4182 5.84518 17.9534 5.65579 17.4167H4.58329C4.34018 17.4167 4.10702 17.3201 3.93511 17.1482C3.7632 16.9763 3.66663 16.7431 3.66663 16.5C3.66663 16.2569 3.7632 16.0237 3.93511 15.8518C4.10702 15.6799 4.34018 15.5833 4.58329 15.5833H5.65579Z" fill="#35393C" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className='card shadow'>
                <div className="card-header">
                    <div className='flex justify-between items-center px-5 h-12'>
                        <span className='text-lg font-medium'>Associated Campaign: <span>Spring Sale 2024</span></span>
                        <span className='text-lg font-medium'>13 Apr - 19 Jun 2024</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className='border border-gray p-3 rounded-[15px] flex justify-between items-center'>
                        <div className='flex divide-x'>
                            <div className='px-5'>
                                <p className='text-sm text-gray mb-2'>Start Date</p>
                                <p>13 May, 2024 at 9:45 PM UTC</p>
                            </div>
                            <div className='px-5'>
                                <p className='text-sm text-gray mb-2'>End Date</p>
                                <p>13 May, 2024 at 9:45 PM UTC</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray text-center'>Time Remaining</p>
                            <MyTimer expiryTimestamp={time} />
                        </div>
                    </div>
                    <div className='flex gap-10 w-full mt-5'>
                        <div className="border border-gray w-2/5 rounded-[15px]">
                            <p className='bg-gray-200 w-max mx-auto my-5 py-1 px-3 rounded-lg'>Target Audience</p>
                            <div className='px-5 my-10'>
                                <p>Ad Set Tags:</p>
                                <div className='flex gap-5 flex-wrap py-3'>
                                    <span className='inline-block p-1 px-3 border border-light-gray rounded-lg'>Finance</span>
                                    <span className='inline-block p-1 px-3 border border-light-gray rounded-lg'>Fashion and Beauty</span>
                                    <span className='inline-block p-1 px-3 border border-light-gray rounded-lg'>Entertainment</span>
                                </div>
                            </div>
                            <div className='border-t divide-y'>
                                <div className='py-4 px-5'>
                                    Age Range: <span>All</span>
                                </div>
                                <div className='py-4 px-5'>
                                    Gender: <span>Male,Female</span>
                                </div>
                                <div className='py-4 px-5 flex justify-between items-center'>
                                    <div className='w-52 truncate'>Location: <span>Afghanistan,Iran</span></div>
                                    <Button className='w-max text-gray'>
                                        <span className='underline underline-offset-4 inline-block'>Show more</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray p-5 w-2/5 rounded-[15px]">
                            <p className='bg-gray-200 w-max mx-auto py-1 px-3 rounded-lg'>Campaign Budget Breakdown</p>

                            <div className='w-1/2 mx-auto mt-5'>
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
                                />
                            </div>
                        </div>
                        <div className="border border-gray w-1/5 rounded-[15px]">
                            <Image src='/img/shape.svg' className='w-14 mt-5 mx-auto' width={100} height={100} alt='' />
                            <div className='py-5'>
                                <p className='text-gray text-center'>Total Ad Set Budget:</p>
                                <p className='text-center font-medium mt-2 text-xl'>0.0003 BTC</p>
                            </div>
                            <div className='border-b half-chart'>
                                <VictoryPie
                                    padAngle={0}
                                    startAngle={90}
                                    endAngle={-90}
                                    innerRadius={100}
                                    colorScale={["#4A4D70", "#FAD366", "#FAB893", "#E46969", '#1E4D4D', '#30B0C7', '#FF2D55', '#007AFF', '#AF52DE']}
                                    style={{ labels: { fontSize: 14, fontWeight: 600, fontFamily: 'inherit' } }}
                                    data={[
                                        { x: 'Category A', y: 30 },
                                        { x: 'Category A', y: 30 },
                                    ]}
                                />
                            </div>
                            <Link href='' className='flex items-center justify-center h-16 gap-3'>
                                <Image className='w-8 h-8' src='/img/White-plus-icon.png' width={350} height={350} alt='' />
                                <span>Add Budget to Ad Set</span>
                            </Link>
                        </div>
                    </div>

                    <div className='px-5 pt-8 pb-3 flex items-center gap-10'>
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

            <div className='grid grid-cols-3 gap-10 my-10'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className='border bg-white border-gray py-10 px-16 rounded-[15px]'>
                <div className='flex gap-10 w-full'>
                    <div className='border bg-gray w-1/3 border-gray-200 py-10 px-16 rounded-xl'>
                        <p className='text-3xl font-medium'>Clicks</p>
                        <div className='flex gap-5 mt-3 items-end'>
                            <Image src='/img/cursor.png' width={200} height={200} alt='' className='w-14' />
                            <span className='text-5xl font-semibold'>12</span>
                        </div>
                    </div>
                    <div className='border bg-gray w-1/3 border-gray-200 py-10 px-16 rounded-xl'>
                        <p className='text-3xl font-medium'>Clicks</p>
                        <div className='flex gap-5 mt-3 items-end'>
                            <Image src='/img/White-target-icon.png' width={500} height={500} alt='' className='w-24' />
                            <span className='text-5xl font-semibold'>12</span>
                        </div>
                    </div>
                    <div className='border bg-gray w-1/3 border-gray-200 py-10 px-16 rounded-xl'>
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
                    <div className='bg-white shadow-md bg-gray rounded-[35px] w-1/2'>
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
                    <div className='bg-white shadow-md bg-gray rounded-[35px] w-1/2 p-8'>
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

                    <div>
                        <VictoryChart
                            domainPadding={{ x: 10 }}
                        >
                            <VictoryHistogram horizontal
                                style={{
                                    data: { fill: "#c43a31" }
                                }}
                                binSpacing={10}
                                data={[
                                    { x: 1 },
                                    { x: 2 },
                                    { x: 2 },
                                    { x: 4 },
                                    { x: 4 },
                                    { x: 5 }
                                ]}
                            />
                        </VictoryChart>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdView