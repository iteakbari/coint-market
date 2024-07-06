import Button from '@/common/Button'
import InputText from '@/common/InputText'
import SelectBox from '@/common/SelectBox'
import useTage from '@/hooks/useTage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UseFormRegister, FieldErrors, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'

type CompleteProfileData = {
    name: string;
    password: string;
    birth: string;
    gender: string;
    tags: string[]
}

type CompeleteProfileProps = {
    register: UseFormRegister<CompleteProfileData>;
    handleSubmit: UseFormHandleSubmit<CompleteProfileData>;
    errors: FieldErrors<CompleteProfileData>;
    onSubmit: SubmitHandler<CompleteProfileData>;
    isValid: boolean
}

interface tag {
    Id: string,
    Title: string
}

function CompeleteProfile({ register, isValid, handleSubmit, errors, onSubmit }: CompeleteProfileProps) {
    const { data } = useTage();

    const validatePassword = (value: string) => {
        if (value.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (!/[A-Z]/.test(value)) {
            return 'Password must start with an uppercase letter';
        }
        if (!/\d/.test(value)) {
            return 'Password must contain at least one digit';
        }
        return true;
    };

    return (
        <>
            <p className='font-semibold my-7 text-center'>Create Account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-5 grid-cols-2'>
                    <InputText
                        type='text'
                        placeholder='Name'
                        className='h-12 '
                        errors={errors?.name}
                        formObject={register('name', { required: 'Name is required' })}
                    />
                    <InputText
                        type='password'
                        placeholder='Password'
                        className='h-12'
                        errors={errors?.password}
                        formObject={register('password', {
                            required: 'Password is required', validate: validatePassword
                        })}
                    />
                    <InputText
                        type='date'
                        className='h-12 '
                        errors={errors?.birth}
                        formObject={register('birth', { required: 'BirthDate is required' })}
                    />

                    <SelectBox
                        className='h-12'
                        errors={errors?.gender}
                        options={[
                            { id: 1, title: 'male' },
                            { id: 2, title: 'female' }
                        ]}
                        formObject={register('gender', { required: 'Gender is required' })}
                    />
                </div>
                <div className='border-t my-5 pt-5 flex gap-2'>
                    {data?.map((tag: tag) => <label key={tag.Id} className='tags-label'>
                        <input {...register('tags', { required: 'Please select one or more option' })} value={tag.Id} type="checkbox" id={tag.Id} />
                        <span>
                            {tag.Title}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </label>)}
                    <span>{errors?.tags?.message}</span>
                </div>
                <div className='flex justify-end'>
                    <Button isValid={isValid} type='submit' className='btn-primary h-14 w-60 mt-4' >Continue</Button>
                </div>
            </form>
        </>
    )
}

export default CompeleteProfile
