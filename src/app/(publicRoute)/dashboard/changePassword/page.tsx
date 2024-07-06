'use client'
import Button from '@/common/Button'
import InputText from '@/common/InputText'
import { changePassword } from '@/services/profileService';
import { changePasswordProps } from '@/types/type';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';


function ChangePassword() {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<changePasswordProps>({
        mode: 'onChange'
    });
    const password = watch('NewPassword', '');

    const { mutateAsync: changePasswordFunc } = useMutation({ mutationFn: changePassword })

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

    const changePasswordHandler = async (value: changePasswordProps) => {
        const { OldPassword, NewPassword, ConfirmNewPassword } = value;
        const response = await changePasswordFunc({ OldPassword, NewPassword, ConfirmNewPassword })
    }

    return (
        <form onSubmit={handleSubmit(changePasswordHandler)}>
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl">Change Password</div>
                <div className="card-body">
                    <div className='p-5 w-1/2 mx-auto'>
                        <InputText
                            type='password'
                            placeholder='Current Password'
                            labelText='Enter Your Current Password.'
                            className='h-12'
                            errors={errors?.OldPassword}
                            formObject={register('OldPassword', {
                                required: 'CurrentPassword is required', validate: validatePassword
                            })}
                        />
                        <InputText
                            type='password'
                            placeholder='New Password'
                            className='h-12'
                            errors={errors?.NewPassword}
                            formObject={register('NewPassword', {
                                required: 'New Password is required', validate: validatePassword
                            })}
                        />
                        <InputText
                            type='password'
                            placeholder='Confirm New Password'
                            className='h-12'
                            errors={errors?.ConfirmNewPassword}
                            formObject={register('ConfirmNewPassword', {
                                required: 'Please confirm your password',
                                validate: validateConfirmPassword,
                            })}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-3'>
                <Button type='submit' className='btn-primary h-14 w-60 mt-5' >Save Change</Button>
            </div>
        </form>
    )
}

export default ChangePassword