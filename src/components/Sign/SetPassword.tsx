import Button from '@/common/Button'
import InputText from '@/common/InputText'
import Link from 'next/link'
import React from 'react'
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from 'react-hook-form'

type SetPassword = {
    password: string;
    confirmPassword: string
};
type SetPasswordProps = {
    register: UseFormRegister<SetPassword>;
    handleSubmit: UseFormHandleSubmit<SetPassword>;
    errors: FieldErrors<SetPassword>;
    watch: UseFormWatch<{ password: string; confirmPassword: string }>;
    onSubmit: SubmitHandler<SetPassword>;
    isValid: boolean
}

function SetPassword({ register, handleSubmit, watch, errors, isValid, onSubmit }: SetPasswordProps) {
    const password = watch('password', '');
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

    const validateConfirmPassword = (value: string) => {
        if (value !== password) {
            return 'Passwords do not match';
        }
        return true;
    };

    return (
        <>
            <p className='font-semibold mt-7 mb-2'>Set new password</p>
            {/* {loginError?.hasError && <p className='text-sm text-error mb-7'>{loginError?.errorMessage}</p>} */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText errors={errors?.password} formObject={register('password', {
                    required: 'Password is required', validate: validatePassword
                })} type='password' placeholder='Password' className='h-12' />
                <InputText errors={errors?.confirmPassword} formObject={register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: validateConfirmPassword,
                })} type='password' placeholder='Password' className='h-12' />

                <Button type='submit' isValid={isValid} className='btn-primary h-14 w-full my-4' >Continue</Button>

            </form>
        </>
    )
}

export default SetPassword