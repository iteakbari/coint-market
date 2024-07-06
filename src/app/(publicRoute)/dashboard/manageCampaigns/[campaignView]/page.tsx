'use client'
import VideoCard from '@/components/VideoCard/VideoCard';
import useCampaignView from '@/hooks/useCampaignView';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'
import { VictoryPie } from 'victory';

function CampaignView() {
    const { campaignView } = useParams<{ campaignView: string }>();
    const { data: campaign } = useCampaignView(campaignView)

    return (
        <div className='px-5'>
            <div className='flex'>
                <div className="w-1/2 flex justify-end">
                    <span className='font-semibold text-xl'>Campaign: <span>{campaign?.CampaignInfo?.Name}</span></span>
                </div>
                <div className="w-1/2 flex justify-end">
                    {
                        campaign?.CampaignInfo?.CampaignStatusId === 1 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                            <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                            Active
                        </span> : campaign?.CampaignInfo?.CampaignStatusId === 2 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                            <span className='inline-block bg-yellow-400 w-[14px] h-[14px] rounded-full'></span>
                            Pending
                        </span> : <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                            <span className='inline-block bg-gray-500 w-[14px] h-[14px] rounded-full'></span>
                            Inactive
                        </span>
                    }
                </div>
            </div>
            <div className='shadow rounded-2xl my-7 border border-light-gray'>
                <div className='p-8'>
                    <div className='flex gap-8'>
                        <div className='w-[15%] h-[150px] rounded-[15px] shadow border border-light-gray'>
                            <Image className='w-full h-full object-cover rounded-xl' width={450} height={300} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}?id=${campaign?.CampaignInfo?.Guid}&type=campaign`} alt='' />
                        </div>
                        <div className='flex-1 shadow border border-light-gray rounded-[15px] px-8 flex flex-col justify-center'>
                            <p className='text-gray text-sm mb-3'>Objective</p>
                            <p className='text-xl font-semibold'>{campaign?.CampaignInfo?.Content}</p>
                        </div>
                        <div className='w-[15%] border border-light-gray shadow rounded-[15px] px-8 flex flex-col justify-center'>
                            <p className='text-gray text-sm mb-3'>Total  Campaign Budget</p>
                            <div className='flex gap-3 items-center'>
                                <span className='font-semibold'>{campaign?.CampaignInfo?.Budget}</span>
                                <span className='font-semibold'>{campaign?.CampaignInfo?.DigitalCurrency}</span>
                                <Image width={100} height={100} alt='' className='w-7 h-7' src={`${process.env.NEXT_PUBLIC_FLAG_URL}/${campaign?.CampaignInfo?.DigitalCurrencyLogo}`} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b p-8'>
                    <div className='flex gap-8'>
                        <div className="w-1/6 border-4 border-light-gray rounded-[15px] p-3">
                            <div className='pb-4'>
                                <span className='text-xl'>Clicks</span>
                            </div>
                            <div className='flex gap-3 items-end'>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="1.5" width="49" height="49" rx="8.5" stroke="#F0F0F2" strokeWidth="3" />
                                    <path d="M33.4398 37.2769L33.786 33.4097C33.8606 32.5767 33.6335 31.7447 33.1468 31.0693C32.6603 30.3938 31.9478 29.9212 31.1424 29.7397L26.81 28.7637V23.0845C26.81 22.5141 26.5865 21.9672 26.1888 21.5639C25.791 21.1606 25.2515 20.9341 24.689 20.9341C24.1266 20.9341 23.587 21.1606 23.1893 21.5639C22.7915 21.9672 22.568 22.5141 22.568 23.0845V33.8363L20.4856 32.2525C20.0985 31.9557 19.6136 31.8214 19.1315 31.8773C18.6494 31.9332 18.2069 32.175 17.8959 32.5528C17.585 32.9304 17.4292 33.415 17.4611 33.906C17.493 34.3968 17.71 34.8565 18.0671 35.1896L20.2865 37.2769" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.6074 12V16.7626" stroke="#35393C" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M18.1992 14.646L21.5669 18.0137" stroke="#35393C" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M29.3105 18.0137L32.6782 14.646" stroke="#35393C" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <span className='text-2xl font-bold'>{campaign?.CampaignInfo?.ClickCount}</span>
                            </div>
                        </div>
                        <div className="w-1/6 border-4 border-light-gray rounded-[15px] p-3">
                            <div className='pb-4'>
                                <span className='text-xl'>Conversions</span>
                            </div>
                            <div className='flex gap-3 items-end'>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="1.5" width="49" height="49" rx="8.5" stroke="#F0F0F2" strokeWidth="3" />
                                    <path d="M26.25 31.5V37.5" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M26.25 15V21" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 26.25H15" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M37.5 26.25H31.5" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 26.2509C18 27.3344 18.2134 28.4071 18.628 29.4081C19.0426 30.409 19.6503 31.3185 20.4164 32.0846C21.1825 32.8507 22.0919 33.4584 23.0929 33.873C24.0938 34.2876 25.1666 34.5009 26.25 34.5009C27.3334 34.5009 28.4062 34.2876 29.4072 33.873C30.4081 33.4584 31.3176 32.8507 32.0836 32.0846C32.8497 31.3185 33.4574 30.409 33.872 29.4081C34.2866 28.4071 34.5 27.3344 34.5 26.2509C34.5 25.1675 34.2866 24.0948 33.872 23.0938C33.4574 22.0929 32.8497 21.1834 32.0836 20.4173C31.3176 19.6513 30.4081 19.0436 29.4072 18.629C28.4062 18.2144 27.3334 18.001 26.25 18.001C25.1666 18.001 24.0938 18.2144 23.0929 18.629C22.0919 19.0436 21.1825 19.6513 20.4164 20.4173C19.6503 21.1834 19.0426 22.0929 18.628 23.0938C18.2134 24.0948 18 25.1675 18 26.2509Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className='text-2xl font-bold'>{campaign?.CampaignInfo?.ConversionsCount}</span>
                            </div>
                        </div>
                        <div className="w-1/6 border-4 border-light-gray rounded-[15px] p-3">
                            <div className='pb-4'>
                                <span className='text-xl'>Impressions</span>
                            </div>
                            <div className='flex gap-3 items-end'>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="1.5" width="49" height="49" rx="8.5" stroke="#F0F0F2" strokeWidth="3" />
                                    <path d="M39.444 24.186C39.8019 24.5825 40 25.0977 40 25.6318C40 26.1659 39.8019 26.6811 39.444 27.0776C37.1782 29.5161 32.0207 34.2636 26 34.2636C19.9793 34.2636 14.8218 29.5161 12.556 27.0776C12.1981 26.6811 12 26.1659 12 25.6318C12 25.0977 12.1981 24.5825 12.556 24.186C14.8218 21.7475 19.9793 17 26 17C32.0207 17 37.1782 21.7475 39.444 24.186Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M26.0014 29.9477C28.3851 29.9477 30.3173 28.0154 30.3173 25.6318C30.3173 23.2482 28.3851 21.3159 26.0014 21.3159C23.6178 21.3159 21.6855 23.2482 21.6855 25.6318C21.6855 28.0154 23.6178 29.9477 26.0014 29.9477Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className='text-2xl font-bold'>{campaign?.CampaignInfo?.ImpressionsCount}</span>
                            </div>
                        </div>
                        <Link href='' className="w-3/6 btn btn-default justify-between p-5">
                            <span className='flex flex-col'>
                                <strong className='block mb-1'>Go to</strong>
                                <strong>Campaign Reports</strong>
                            </span>
                            <span className='w-10 h-10 flex justify-center bg-white items-center shadow rounded-full'>
                                <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.60938L11.7138 12.3231C11.7971 12.4013 11.8635 12.4958 11.9089 12.6006C11.9543 12.7055 11.9777 12.8186 11.9777 12.9329C11.9777 13.0471 11.9543 13.1602 11.9089 13.2651C11.8635 13.3699 11.7971 13.4644 11.7138 13.5426L1 24.2563" stroke="#35393C" strokeWidth="1.74207" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='p-8 flex justify-between items-center'>
                    <span className='text-gray text-lg font-medium'>Manage</span>
                    <div className='flex gap-5'>
                        <Link href='' className='btn btn-white py-2 px-5 font-medium'>Ad Sets Budget</Link>
                        <Link href='' className='btn btn-white py-2 px-5 font-medium'>Add Funds</Link>
                        <Link href='' className='btn btn-white py-2 px-5 font-medium'>Edit</Link>
                        <Link href='' className='btn btn-white py-2 px-5 font-medium'>Stop Campaign</Link>
                    </div>
                </div>
            </div>

            <div className='flex gap-14'>
                <div className='bg-white shadow-md rounded-[35px] w-1/2'>
                    <p className='font-semibold text-center text-lg my-8'>Real-Time Campaign Budget Status</p>
                    <div className='w-2/3 mx-auto my-20'>
                        <p className='pl-5 text-gray mb-2'>Remaining Budget <span className='text-2xl text-black'>{campaign?.CampaignTarget?.RealTimeCampaignBudgetStatus?.PercentRemainingBudget}</span>%</p>
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
                        <span>{campaign?.CampaignTarget?.RealTimeCampaignBudgetStatus?.TotalBudget} {campaign?.CampaignTarget?.DigitalCurrencyTitle}</span>
                    </div>
                    <div className='flex border-b justify-between mt-auto p-5'>
                        <span className='text-gray'>Rewards Distributed</span>
                        <span>{campaign?.CampaignTarget?.RealTimeCampaignBudgetStatus?.RewardsDistributed} {campaign?.CampaignTarget?.DigitalCurrencyTitle}</span>
                    </div>
                    <div className='flex justify-between mt-auto p-5'>
                        <span className='text-gray'>Remaining Budget</span>
                        <span>{campaign?.CampaignTarget?.RealTimeCampaignBudgetStatus?.RemainingBudget} {campaign?.CampaignTarget?.DigitalCurrencyTitle}</span>
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

            <div className='card mt-20'>
                <div className="card-header-black flex">
                    <div className='text-right w-1/2 text-white text-lg py-1 my-1'>Ad Set: Fragrances</div>
                    <div className='w-1/2 flex justify-end my-1 items-center gap-10 px-7'>
                        {
                            campaign?.CampaignInfo?.CampaignStatusId === 1 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                Active
                            </span> : campaign?.CampaignInfo?.CampaignStatusId === 2 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                <span className='inline-block bg-yellow-400 w-[14px] h-[14px] rounded-full'></span>
                                Pending
                            </span> : <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                <span className='inline-block bg-gray-500 w-[14px] h-[14px] rounded-full'></span>
                                Inactive
                            </span>
                        }

                        <Link href='' className='text-white text-xl'>Edit</Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className='py-3 px-5'>
                        <div className='flex justify-between border-b pb-7 mb-7'>
                            <div className='w-1/2'>
                                <p className='text-lg text-gray font-medium mb-3'>Ad Set Duration: <span className='text-black'>13 Apr - 19 Jun 2024</span></p>
                                <div className='flex gap-5'>
                                    <div className='border rounded-[15px] w-3/5 p-5 flex items-end'>
                                        <div className='bg-gray-400 h-3 w-full rounded-[5px] flex'>
                                            <div className='relative rounded-tl-[5px] rounded-bl-[5px]' style={{ width: "30%", backgroundColor: '#4A4D70' }}>
                                                <span className='absolute -top-7 right-0 text-sm'>25%</span>
                                            </div>
                                            <div style={{ width: "15%", backgroundColor: '#FAD366' }}></div>
                                            <div style={{ width: "20%", backgroundColor: '#007AFF' }}></div>
                                            <div style={{ width: "8%", backgroundColor: '#AF52DE' }}></div>
                                        </div>
                                    </div>
                                    <div className="w-2/5 border rounded-[15px] p-5">
                                        <p className='text-gray'>Ad Set Budget</p>
                                        <p className='text-2xl tracking-widest'>0.00013 ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6">
                                <Link href='' className='flex justify-between p-5 items-center bg-gray-400 rounded-[15px] h-full'>
                                    <p className='text-xl leading-10'>Go to <br /> Ad Set Details</p>

                                    <span className='w-10 h-10 bg-white flex justify-center items-center shadow rounded-full'>
                                        <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.60938L11.7138 12.3231C11.7971 12.4013 11.8635 12.4958 11.9089 12.6006C11.9543 12.7055 11.9777 12.8186 11.9777 12.9329C11.9777 13.0471 11.9543 13.1602 11.9089 13.2651C11.8635 13.3699 11.7971 13.4644 11.7138 13.5426L1 24.2563" stroke="#35393C" strokeWidth="1.74207" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='flex-1 overflow-x-auto  ad-video-wrapper'>
                                <div className='gap-5 pb-5 flex w-max'>
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                </div>
                            </div>
                            <div className='w-80 flex items-center justify-center'>
                                <Link href='' className='flex items-center justify-center w-16 h-16 rounded-xl hover:shadow transition-all duration-300 border bg-slate-100'>
                                    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.165 11.7812V28.8474" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M29.9868 20.3145H12.3389" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25.7829 1.15039C35.7902 2.67719 41.3313 9.4121 41.3313 20.3155C41.3313 32.7947 34.0727 39.814 21.1681 39.814C13.5207 39.814 7.85438 37.3489 4.51074 32.7423" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.00088 20.3145C0.983332 22.4404 1.22734 24.5607 1.72776 26.6309" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.97071 7.28711C3.51386 9.13275 2.45606 11.2431 1.86035 13.4924" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.6986 1C15.3773 1.22843 13.1084 1.81336 10.9775 2.73277" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='card mt-20'>
                <div className="card-header-black flex">
                    <div className='text-right w-1/2 text-white text-lg py-1 my-1'>Ad Set: Fragrances</div>
                    <div className='w-1/2 flex justify-end my-1 items-center gap-10 px-7'>
                        {
                            campaign?.CampaignInfo?.CampaignStatusId === 1 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                Active
                            </span> : campaign?.CampaignInfo?.CampaignStatusId === 2 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                <span className='inline-block bg-yellow-400 w-[14px] h-[14px] rounded-full'></span>
                                Pending
                            </span> : <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                <span className='inline-block bg-gray-500 w-[14px] h-[14px] rounded-full'></span>
                                Inactive
                            </span>
                        }

                        <Link href='' className='text-white text-xl'>Edit</Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className='py-3 px-5'>
                        <div className='flex justify-between border-b pb-7 mb-7'>
                            <div className='w-1/2'>
                                <p className='text-lg text-gray font-medium mb-3'>Ad Set Duration: <span className='text-black'>13 Apr - 19 Jun 2024</span></p>
                                <div className='flex gap-5'>
                                    <div className='border rounded-[15px] w-3/5 p-5 flex items-end'>
                                        <div className='bg-gray-400 h-3 w-full rounded-[5px] flex'>
                                            <div className='relative rounded-tl-[5px] rounded-bl-[5px]' style={{ width: "30%", backgroundColor: '#4A4D70' }}>
                                                <span className='absolute -top-7 right-0 text-sm'>25%</span>
                                            </div>
                                            <div style={{ width: "15%", backgroundColor: '#FAD366' }}></div>
                                            <div style={{ width: "20%", backgroundColor: '#007AFF' }}></div>
                                            <div style={{ width: "8%", backgroundColor: '#AF52DE' }}></div>
                                        </div>
                                    </div>
                                    <div className="w-2/5 border rounded-[15px] p-5">
                                        <p className='text-gray'>Ad Set Budget</p>
                                        <p className='text-2xl tracking-widest'>0.00013 ETH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6">
                                <Link href='' className='flex justify-between p-5 items-center bg-gray-400 rounded-[15px] h-full'>
                                    <p className='text-xl leading-10'>Go to <br /> Ad Set Details</p>

                                    <span className='w-10 h-10 bg-white flex justify-center items-center shadow rounded-full'>
                                        <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.60938L11.7138 12.3231C11.7971 12.4013 11.8635 12.4958 11.9089 12.6006C11.9543 12.7055 11.9777 12.8186 11.9777 12.9329C11.9777 13.0471 11.9543 13.1602 11.9089 13.2651C11.8635 13.3699 11.7971 13.4644 11.7138 13.5426L1 24.2563" stroke="#35393C" strokeWidth="1.74207" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='flex-1 overflow-x-auto  ad-video-wrapper'>
                                <div className='gap-5 pb-5 flex w-max'>
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                    <VideoCard className='w-80 inline-block' />
                                </div>
                            </div>
                            <div className='w-80 flex items-center justify-center'>
                                <Link href='' className='flex items-center justify-center w-16 h-16 rounded-xl hover:shadow transition-all duration-300 border bg-slate-100'>
                                    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.165 11.7812V28.8474" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M29.9868 20.3145H12.3389" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M25.7829 1.15039C35.7902 2.67719 41.3313 9.4121 41.3313 20.3155C41.3313 32.7947 34.0727 39.814 21.1681 39.814C13.5207 39.814 7.85438 37.3489 4.51074 32.7423" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.00088 20.3145C0.983332 22.4404 1.22734 24.5607 1.72776 26.6309" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.97071 7.28711C3.51386 9.13275 2.45606 11.2431 1.86035 13.4924" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.6986 1C15.3773 1.22843 13.1084 1.81336 10.9775 2.73277" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-10'>
                <Link href='' className='rounded-[15px] flex items-center border border-black py-2 px-5 gap-3 hover:bg-gray-100'>
                    Create New Ad Set
                    <svg width="38" height="35" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.165 11.7812V28.8474" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29.9868 20.3145H12.3389" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.7829 1.15039C35.7902 2.67719 41.3313 9.4121 41.3313 20.3155C41.3313 32.7947 34.0727 39.814 21.1681 39.814C13.5207 39.814 7.85438 37.3489 4.51074 32.7423" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.00088 20.3145C0.983332 22.4404 1.22734 24.5607 1.72776 26.6309" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.97071 7.28711C3.51386 9.13275 2.45606 11.2431 1.86035 13.4924" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6986 1C15.3773 1.22843 13.1084 1.81336 10.9775 2.73277" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default CampaignView