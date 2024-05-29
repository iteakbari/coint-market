'use client'
import Button from '@/common/Button'
import InputText from '@/common/InputText'
import { login } from '@/services/registerServeice'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

type loginProps = {
    username: string;
    password: string;
}

function Login() {
    const [loginError, setLoginError] = useState({ hasError: false, errorMessage: '' });
    const { mutateAsync: mutateLoginHandler } = useMutation({ mutationFn: login });
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<loginProps>({
        mode: 'onChange'
    });
    const loginHandler = async (data: loginProps) => {
        const response = await mutateLoginHandler({ UserName: data.username, Password: data.password })
        if (response?.Succeeded) {
            redirect('/')
        } else {
            setLoginError({ hasError: true, errorMessage: response?.Message });
        }

    }

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
        <div className='login-form'>
            <Link href="/">
                <Image src="/img/logo-with-text.png" className='w-2/3 mx-auto -mt-20' width={400} height={100} alt="logo with text" />
            </Link>
            <p className='font-semibold mt-7 mb-2'>Welcome back!</p>
            {loginError?.hasError && <p className='text-sm text-error mb-7'>{loginError?.errorMessage}</p>}
            <form onSubmit={handleSubmit(loginHandler)}>
                <InputText errors={errors?.username} formObject={register('username', {
                    required: 'Username is required', pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: 'Invalid Email Format'
                    }
                })} type='text' placeholder='Email' className='h-12' />
                <InputText errors={errors?.password} formObject={register('password', {
                    required: 'Password is required', validate: validatePassword
                })} type='password' placeholder='Password' className='h-12' />
                <div className='flex justify-between'>
                    <div className='flex gap-1'>
                        <input type="checkbox" name="" id="remember" />
                        <label htmlFor="remember">
                            Remember Me
                        </label>
                    </div>
                    <Link href="/forgetPassword" className='danger-link'>Forgot Password</Link>
                </div>
                <Button type='submit' isValid={isValid} className='btn-primary h-14 w-full my-4' text='Continue' />
                <div className='border-b flex justify-center h-0 my-3 w-95 mx-auto'>
                    <span className='block px-3 bg-gray text-gray-400 -mt-3 h-5 w-16 text-center'>Or</span>
                </div>

                <Link href="" className='text-sm border border-gray flex items-center h-14 justify-center gap-2 rounded-xl mt-6'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1502_6242)">
                            <path d="M23.7662 9.98557H22.7996V9.93577H11.9998V14.7357H18.7815C17.7921 17.5298 15.1335 19.5356 11.9998 19.5356C8.02366 19.5356 4.79992 16.3119 4.79992 12.3357C4.79992 8.3596 8.02366 5.13585 11.9998 5.13585C13.8352 5.13585 15.5049 5.82824 16.7763 6.95922L20.1705 3.56508C18.0273 1.56772 15.1605 0.335938 11.9998 0.335938C5.37291 0.335938 0 5.70884 0 12.3357C0 18.9626 5.37291 24.3355 11.9998 24.3355C18.6267 24.3355 23.9996 18.9626 23.9996 12.3357C23.9996 11.5311 23.9168 10.7458 23.7662 9.98557Z" fill="#FFC107" />
                            <path d="M1.38281 6.75043L5.32534 9.64178C6.39213 7.00062 8.97568 5.13585 11.999 5.13585C13.8344 5.13585 15.5042 5.82824 16.7755 6.95922L20.1697 3.56508C18.0265 1.56772 15.1598 0.335938 11.999 0.335938C7.38991 0.335938 3.39278 2.93809 1.38281 6.75043Z" fill="#FF3D00" />
                            <path d="M12.0002 24.336C15.0997 24.336 17.9161 23.1498 20.0455 21.2208L16.3315 18.0781C15.0863 19.0251 13.5646 19.5373 12.0002 19.5361C8.87905 19.5361 6.2289 17.5459 5.23051 14.7686L1.31738 17.7835C3.30335 21.6696 7.33648 24.336 12.0002 24.336Z" fill="#4CAF50" />
                            <path d="M23.7664 9.98559H22.7998V9.93579H12V14.7357H18.7817C18.3084 16.0655 17.4559 17.2276 16.3295 18.0783L16.3313 18.0771L20.0453 21.2198C19.7825 21.4586 23.9998 18.3356 23.9998 12.3357C23.9998 11.5312 23.917 10.7458 23.7664 9.98559Z" fill="#1976D2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1502_6242">
                                <rect y="0.335938" width="24" height="24" rx="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Sign in with Google
                </Link>
            </form>
            <div className='flex justify-center gap-1 text-sm mt-5'>
                Don’t have an account yet?
                <Link href="/sign" className='danger-link'>Sign Up.</Link>
            </div>
        </div>
    )
}

export default Login