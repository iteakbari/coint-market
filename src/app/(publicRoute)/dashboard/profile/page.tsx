'use client'
import Button from '@/common/Button';
import InputText from '@/common/InputText';
import SelectBox from '@/common/SelectBox';
import useProfile from '@/hooks/useProfile';
import { editProfile } from '@/services/profileService';
import { ProfileData } from '@/types/type';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

type Props = {}
const MAX_FILE_SIZE = 0.5 * 1024 * 1024;
const defaultImage = '/img/user-default-image.png';
const urlRegex = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/;

function Profile({ }: Props) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProfileData>({
        mode: 'onChange'
    });
    const { mutateAsync: editProfileFunc } = useMutation({ mutationFn: editProfile })

    const { data } = useProfile();
    const formattedDate = data?.BirthDate ? new Date(data.BirthDate).toISOString().split('T')[0] : '';

    useEffect(() => {
        setValue("Name", data?.Name || "");
        setValue("Email", data?.Email || "");
        setValue("Description", data?.Description || "");
        setValue("WebsiteUrl", data?.WebsiteUrl || "");
        setValue("BirthDate", formattedDate || "");
        setValue("GenderId", data?.GenderId || "");

        if (selectedFile) {
            setValue('Guid', selectedFile)
        }
    }, [data, formattedDate, setValue, selectedFile]);

    useEffect(() => {
        if (data && data.Guid) {
            setPreview(`https://admin.coinmarketads.com/api/api/GetFile?id=${data.Guid}&type=avatar`)
        }
    }, [data])



    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file.size > MAX_FILE_SIZE) {
                setError('The file size exceeds the limit.');
                setSelectedFile(null);
                setPreview(defaultImage);
                return;
            }

            setSelectedFile(file);
            setError(null);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const editProfileHandler = async (value: ProfileData) => {
        await editProfileFunc({ Name: value?.Name, BirthDate: value?.BirthDate, Description: value.Description, WebsiteUrl: value.WebsiteUrl, Email: value.Email, GenderId: value.GenderId, Guid: data.Guid, PersonImageFile: selectedFile })
    }

    return (
        <form onSubmit={handleSubmit(editProfileHandler)}>
            <div className='card mb-5'>
                <div className='card-header h-16 flex justify-center items-center text-xl'>Profile</div>
                <div className='card-body'>
                    <div className='flex gap-5 py-5 px-10 items-center'>
                        <div className='w-40 h-40  rounded-full  relative'>
                            <div className='w-40 h-40 overflow-hidden rounded-full border-4 border-black flex justify-center items-center bg-white'>
                                <Image src={preview ? preview : defaultImage} className='h-28 w-auto' width={800} height={800} alt='user image' />
                                {error && <span className='text-error absolute top-[105%] text-xs'>{error}</span>}
                            </div>
                            <label className='absolute -right-4 top-[65%] z-10'>
                                <input {...register('PersonImageFile')} type="file" name="" id="" className='hidden' onChange={handleFileChange} />
                                <span className='flex justify-center cursor-pointer items-center border bg-white rounded-full w-12 h-12 pl-2 pt-2'>
                                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.7075 6.12188C23.7075 5.67089 23.5284 5.23837 23.2095 4.91948C22.8906 4.60058 22.4581 4.42142 22.0071 4.42142H18.6061L16.0555 1.02051H9.25362L6.70294 4.42142H3.30202C2.85103 4.42142 2.41851 4.60058 2.09962 4.91948C1.78072 5.23837 1.60156 5.67089 1.60156 6.12188V16.3246C1.60156 16.7756 1.78072 17.2081 2.09962 17.527C2.41851 17.8459 2.85103 18.0251 3.30202 18.0251H22.0071C22.4581 18.0251 22.8906 17.8459 23.2095 17.527C23.5284 17.2081 23.7075 16.7756 23.7075 16.3246V6.12188Z" fill="#35393C" stroke="#35393C" strokeWidth="1.70046" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.6542 14.1989C14.7672 14.1989 16.4802 12.486 16.4802 10.3729C16.4802 8.25985 14.7672 6.54688 12.6542 6.54688C10.5411 6.54688 8.82812 8.25985 8.82812 10.3729C8.82812 12.486 10.5411 14.1989 12.6542 14.1989Z" stroke="white" strokeWidth="0.969072" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="25.0956" cy="16.0849" r="6.0567" fill="#35393C" stroke="white" strokeWidth="0.969072" />
                                        <path d="M24.8601 18.2543V16.1757H22.7601V15.4295H24.8601V13.3508H25.8195V15.4295H27.9195V16.1757H25.8195V18.2543H24.8601Z" fill="white" />
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div>
                            <p className='text-lg font-medium'>{data?.Email}</p>
                            <p className='text-gray text-lg'>{data?.Name}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className="card-body">
                    <div className='grid gap-5 grid-cols-2 p-8'>
                        <InputText
                            type='text'
                            placeholder='Name'
                            className='h-12 '
                            labelText='Name'
                            errors={errors?.Name}
                            formObject={register('Name', { required: 'Name is required' })}
                        />
                        <InputText
                            type='email'
                            placeholder='Email'
                            className='h-12'
                            readOnly
                            labelText='Email'
                            formObject={register('Email', { required: 'Email is required' })}
                        />
                        <InputText
                            type='date'
                            className='h-12 '
                            labelText='Birth Date'
                            errors={errors?.BirthDate}
                            formObject={register('BirthDate', { required: 'BirthDate is required' })}
                        />

                        <SelectBox
                            className='h-12'
                            labelText='Gender'
                            options={[
                                { id: 1, title: 'male' },
                                { id: 2, title: 'female' },
                                { id: 3, title: 'none' },
                            ]}
                            defaultValue={data?.GenderId}
                            errors={errors?.GenderId}
                            formObject={register('GenderId', { required: 'Gender is required' })}
                        />

                        <InputText
                            type='text'
                            placeholder='Description'
                            className='h-12'
                            labelText='Description'
                            formObject={register('Description')}
                        />

                        <InputText
                            type='text'
                            placeholder='WebsiteUrl'
                            className='h-12'
                            labelText='WebsiteUrl'
                            formObject={register('WebsiteUrl', {
                                pattern: {
                                    value: urlRegex,
                                    message: 'Invalid Email Format'
                                }
                            })}
                            errors={errors?.WebsiteUrl}
                        />
                    </div>

                </div>
            </div>
            <div className='flex justify-end'>
                <Button type='submit' className='btn-primary h-14 w-60 mt-4' >
                    Save Change
                </Button>
            </div>
        </form>

    )
}

export default Profile