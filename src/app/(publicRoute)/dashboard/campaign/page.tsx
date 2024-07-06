'use client'
import Button from '@/common/Button'
import InputText from '@/common/InputText'
import useDigitalCurrencyItems from '@/hooks/useDigitalCurrencyItems'
import useStatusItems from '@/hooks/useStatusItems'
import { addCampaign } from '@/services/campaignService'
import { CampaignData, StatusItems } from '@/types/type'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import Select from 'react-select'

type Props = {}
const MAX_FILE_SIZE = 0.5 * 1024 * 1024;

function Campaigns({ }: Props) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [statusItem, setStatusItem] = useState('');
    const [digitalCurrency, setDigitalCurrency] = useState(0);
    const { data: statusItems } = useStatusItems();
    const { data: digitalCurrencyItems } = useDigitalCurrencyItems();
    const { mutateAsync: addCampaignFunc } = useMutation({ mutationFn: addCampaign });
    const { register, handleSubmit, formState: { errors } } = useForm<CampaignData>();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file.size > MAX_FILE_SIZE) {
                setError('The file size exceeds the limit.');
                setSelectedFile(null);
                return;
            }

            setSelectedFile(file);
            setError(null);

            const reader = new FileReader();
            reader.readAsDataURL(file);
        }
    };

    const handleCapaignSubmit = async (value: CampaignData) => {
        await addCampaignFunc({ Name: value?.Name, Content: value?.Content, Logo: selectedFile, StatusId: statusItem, Budget: value?.Budget, DigitalCurrencyId: digitalCurrency })
    }

    return (
        <form onSubmit={handleSubmit(handleCapaignSubmit)}>
            <div className='card'>
                <div className="card-header h-16 flex justify-center items-center text-xl font-medium">Create New Campaign</div>
                <div className="card-body">
                    <div className='2xl:px-28 2xl:py-20 flex flex-wrap'>
                        <div className='w-1/2 pr-10'>
                            <InputText
                                type='text'
                                placeholder='Campaign Name'
                                className='h-12 2xl:h-14 '
                                errors={errors?.Name}
                                formObject={register('Name', { required: 'Name is required' })}
                            />

                            <InputText
                                type='text'
                                placeholder='Campaign Objective'
                                className='h-12 2xl:h-14  '
                                containerClass='2xl:mt-8'
                                errors={errors?.Content}
                                formObject={register('Content', { required: 'Objective is required' })}
                            />

                            <div className='2xl:mt-8'>
                                <div className='input-select'>
                                    <InputText
                                        labelText='Total Campaign Budget:'
                                        className='h-12 2xl:h-14 '
                                        containerClass='w-1/2'
                                        formObject={register('Budget')}
                                    />
                                    <Select
                                        options={digitalCurrencyItems?.map(({ Id, Title }: StatusItems) => ({
                                            value: Id,
                                            label: Title
                                        }))}
                                        className='custom-select h-12 2xl:h-14 w-1/2'
                                        onChange={(choose: any) => setDigitalCurrency(choose.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 pl-10'>

                            <div className='campaign-img-file'>
                                <input {...register('Logo')} type="file" name="" id="campaign-img" onChange={handleFileChange} />
                                <label htmlFor="campaign-img" className='cursor-pointer relative'>
                                    {
                                        selectedFile && !error ? <span className='flex gap-5 items-center'>
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
                                        </span> : error ? <span className='text-error text-sm block py-1'>{error}</span> : <span className='flex gap-5'>
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

                            <div className='mt-4'>
                                <p>Campaign Status: </p>
                                <div className='flex gap-5 pt-3'>
                                    {
                                        statusItems?.map(({ Id, Title }: StatusItems) =>
                                            <label key={Id} className='radio-label inline-flex items-center gap-1'>
                                                <input {...register('StatusId', { required: 'Please select status item' })} type="radio" name="status" id={Id} onChange={() => setStatusItem(Id)} />
                                                <span>{Title}</span>
                                            </label>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end'>
                <Button type='submit' className='btn-primary h-14 w-60 mt-5' >
                    Save Change
                </Button>
            </div>
        </form>
    )
}

export default Campaigns