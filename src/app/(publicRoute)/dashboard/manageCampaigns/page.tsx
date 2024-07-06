'use client'
import DropdownMenu from '@/common/DropdownMenu'
import InputText from '@/common/InputText'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { NumericFormat } from 'react-number-format'
import Button from '@/common/Button'
import { useMutation, useQuery } from 'react-query'
import { getCampaigns } from '@/services/campaignService'
import { CampaignData, CampaignsList } from '@/types/type'
import useCampaignDashboard from '@/hooks/useCampaignDashboard'


function ManageCampaigns() {
    const [campaignsList, setCampaignsList] = useState<CampaignData[]>();
    const [step, setStep] = useState(1);
    const { data: campaignDashboard } = useCampaignDashboard();
    const { mutateAsync: getCampaignsFunc } = useMutation({ mutationFn: getCampaigns });

    const getCampaignsHandler = async () => {
        try {
            const data = await getCampaignsFunc({
                PageIndex: step,
                PageSize: 8,
                Conditions: [
                    {
                        Name: "",
                        Value: '',
                        Comparison: '',
                    },
                ],
                OrderBy: {
                    OrderName: '',
                    Ascending: true,
                },
            })

            if (data) {
                setCampaignsList(data.Data)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        getCampaignsHandler();
    }, [])

    return (
        <div>
            <div className='mb-8 flex justify-between items-center border border-gray rounded-xl py-3 px-8 bg-white'>
                <span className='font-semibold text-xl'>Manage Campaigns</span>
                <DropdownMenu customeClass="w-max" direction="right-0 top-full" trigger={<span className='border-gray border inline-block rounded-lg p-2'>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0682 1.07617C17.517 1.07617 19.8656 2.04898 21.5972 3.78058C23.3288 5.51218 24.3016 7.86074 24.3016 10.3096C24.3016 20.5761 28.0466 22.5993 29.0582 22.5993H1.07812C2.11124 22.5993 5.83474 20.5546 5.83474 10.3096C5.83474 7.86074 6.80754 5.51218 8.53915 3.78058C10.2707 2.04898 12.6193 1.07617 15.0682 1.07617V1.07617Z" stroke="#35393C" strokeWidth="2.15231" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.8359 26.5381C12.022 27.2527 12.4399 27.8854 13.0241 28.337C13.6084 28.7887 14.326 29.0337 15.0644 29.0337C15.8029 29.0337 16.5204 28.7887 17.1047 28.337C17.6889 27.8854 18.1068 27.2527 18.2929 26.5381" stroke="#35393C" strokeWidth="2.15231" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>}>
                    <div className='bg-white border border-gray rounded-xl w-[350px]'>
                        <div className='flex items-center justify-between p-3 border-b border-gray'>
                            <span>Notifications</span>
                            <span className='text-error'>Mark all read</span>
                        </div>
                        <div className='flex items-center justify-between p-3 border-b border-gray'>
                            <div>
                                <p className='text-sm text-gray mb-2'>Upcoming Campaign End Date</p>
                                <p className='text-sm text-gray'>Capaign <span className='text-black'>Spring Sale 2024</span></p>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-sm'>Today</span>
                                <small className='inline-block w-1 h-1 rounded-full bg-error'></small>
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-3'>
                            <p className='text-sm text-gray'>Capaign <span className='text-black'>Spring Sale 2024</span> is activated</p>
                            <div className='flex items-center'>
                                <span className='text-sm'>Today</span>
                                <small className='inline-block w-1 h-1 rounded-full bg-error'></small>
                            </div>
                        </div>
                    </div>
                </DropdownMenu>
            </div>
            <div className='flex gap-5'>
                <div className='w-3/5 gap-5'>
                    <div className='flex gap-5 mb-5'>
                        <div className='w-1/2 border bg-white p-4 px-8 rounded-xl flex gap-10 items-center'>
                            <Image className='w-16' src='/img/gold-money-bag.png' alt='Total Budget Image' width={800} height={1040} />
                            <div>
                                <p className='text-gray'>Total  Budget</p>
                                <p className='text-2xl'>$<NumericFormat displayType='text' value={campaignDashboard?.TotalBudget} thousandSeparator=',' /></p>
                            </div>
                        </div>
                        <div className='w-1/2 border bg-white p-4 px-8 rounded-xl flex gap-10 items-center'>
                            <Image className='w-[75px]' src='/img/White-target-icon.png' alt='Total Budget Image' width={1000} height={1000} />
                            <div>
                                <p className='text-gray'>Total Conversion Rate</p>
                                <p className='text-2xl'>$<NumericFormat displayType='text' value={campaignDashboard?.TotalConversionRate} thousandSeparator=',' /></p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-1/3 flex gap-5 items-center justify-between border bg-white py-4 pl-8 pr-10 rounded-xl'>
                            <div className='text-gray'>
                                <p>Total Num. of</p> Campaigns
                            </div>
                            <span className='text-2xl'>{campaignDashboard?.TotalCampaigns}</span>
                        </div>
                        <div className='w-1/3 flex gap-5 items-center justify-between border bg-white py-4 pl-8 pr-10 rounded-xl'>
                            <div className='text-gray'>
                                <p>Active</p> Campaigns
                            </div>
                            <span className='text-2xl'>{campaignDashboard?.TotalActiveCampaigns}</span>
                        </div>
                        <Link href='/dashboard/campaign' className='w-1/3 flex gap-5 items-center justify-between border-dashed border bg-white py-4 pl-8 pr-10 rounded-xl'>
                            <span className='text-gray'>
                                <span className='block'>Create New</span>  Campaign
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M8 12h8M12 16V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#35393c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className='w-2/5 border border-gray rounded-xl overflow-hidden'>
                    <div className='bg-darker-gray p-5 text-center text-lg'>Top Campaign </div>
                    <div className='py-5 px-7'>
                        <p className='font-medium'>{campaignDashboard?.TopCampaign?.Name}</p>
                        <p className='text-gray w-2/3'>{campaignDashboard?.TopCampaign?.Content}</p>
                        <div className='flex justify-end'>
                            <Link href={`/dashboard/manageCampaigns/${campaignDashboard?.TopCampaign?.Guid}`} className='shadow inline-flex items-center py-[6px] px-3 rounded-2xl text-gray'>
                                <span>Details</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <p className='text-center font-semibold text-xl mb-7'>Campaigns</p>
                <form action="" className='flex gap-3 my-3'>
                    <InputText className='w-64 h-12' placeholder='Search' />
                    <Select placeholder='Select Filter Option' className='select-box w-52 h-12' />
                    <Button className='btn-primary h-12 w-32'>Search</Button>
                </form>
                <div className='overflow-x-auto pb-3'>
                    <table className='shadow-md rounded-2xl bg-white w-max'>
                        <thead className='bg-darker-gray'>
                            <tr>
                                <th className='py-5 rounded-tl-2xl w-[460px] text-center'>Campaign</th>
                                <th className='w-44 text-center'>Total Budget</th>
                                <th className='w-44 text-center'>Amount Spent</th>
                                <th className='w-44 text-center'>Impressions</th>
                                <th className='w-44 text-center'>Clicks</th>
                                <th className='w-44 text-center'>Conversions</th>
                                <th className='w-44 text-center'>Status</th>
                                <th className='py-4 rounded-tr-2xl w-44 text-center'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                campaignsList?.map(({
                                    Id,
                                    Name,
                                    Content,
                                    Budget,
                                    StatusId,
                                    Guid,
                                    AmountSpent,
                                    Impressions,
                                    Clicks,
                                    Conversions,
                                }: CampaignData) => <tr key={Id} className='border-b'>
                                        <td className='py-5 pl-4'>
                                            <div className='flex gap-3 items-center'>
                                                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}?id=${Guid}&type=campaign`} alt='campaign image' className='w-44 h-24 shadow object-cover rounded-xl' width={1000} height={600} />
                                                <div className='w-48'>
                                                    <h6 className='font-semibold'>{Name}</h6>
                                                    <p className='text-gray'>
                                                        {Content}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center'>
                                            <span>$<NumericFormat displayType='text' value={Budget} thousandSeparator=',' /></span>
                                        </td>
                                        <td className='text-center'>{AmountSpent ? AmountSpent : '-'}</td>
                                        <td className='text-center'>
                                            <NumericFormat displayType='text' value={Impressions} thousandSeparator=',' />
                                        </td>
                                        <td className='text-center'>
                                            <NumericFormat displayType='text' value={Clicks} thousandSeparator=',' />
                                        </td>
                                        <td className='text-center'>
                                            <NumericFormat displayType='text' value={Conversions} thousandSeparator=',' />
                                        </td>
                                        <td className='text-center'>
                                            {
                                                StatusId === 1 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                                    <span className='inline-block bg-green-600 w-[14px] h-[14px] rounded-full'></span>
                                                    Active
                                                </span> : StatusId === 2 ? <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                                    <span className='inline-block bg-yellow-400 w-[14px] h-[14px] rounded-full'></span>
                                                    Pending
                                                </span> : <span className='inset-shadow py-1 inline-flex bg-white gap-1 px-3 rounded-2xl items-center'>
                                                    <span className='inline-block bg-gray-500 w-[14px] h-[14px] rounded-full'></span>
                                                    Inactive
                                                </span>
                                            }
                                        </td>
                                        <td className='text-center'>
                                            <Link className='underline' href={`/dashboard/manageCampaigns/${Guid}`}>Detail</Link>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageCampaigns