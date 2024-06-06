"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { checkEmail, compeleteProfile, confirmEmail, getEmail, setPassword } from '@/services/registerServeice';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import GetEmail from '@/components/Sign/GetEmail';
import ConfirmEmail from '@/components/Sign/ConfirmEmail';
import Link from 'next/link';
import Image from 'next/image';
import SetPassword from '@/components/Sign/SetPassword';
import { useRouter } from 'next/navigation';

type FormData = {
    email: string;
};

type SetPasswordProps = {
    password: string;
    confirmPassword: string
};

function ForgetPassword() {
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState('');
    const [signInfo, setSignInfo] = useState({ guid: "", secorityCode: "" });
    const { register, handleSubmit, watch, clearErrors, setError, formState: { errors, isValid } } = useForm<FormData>({
        mode: 'onChange'
    });
    const setPasswordForm = useForm<SetPasswordProps>({
        mode: 'onChange'
    });
    const router = useRouter();

    const { mutateAsync: mutateEmail, isSuccess } = useMutation({ mutationFn: getEmail });
    const { mutateAsync: mutateCheckEmail } = useMutation({ mutationFn: checkEmail });
    const { mutateAsync: mutateConfirmEmail } = useMutation({ mutationFn: confirmEmail });
    const { mutateAsync: mutateSetPassword } = useMutation({ mutationFn: setPassword });

    const emailValue = watch('email');

    useEffect(() => {
        const validateEmail = async (value: string) => {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (emailRegex.test(value)) {
                try {
                    const response = await mutateCheckEmail({ Email: value, TypeId: 1 });
                    if (response?.Succeeded) {
                        clearErrors('email');

                    } else {
                        setError('email', { type: 'manual', message: 'username not found' });

                    }
                } catch (error) {
                    setError('email', { type: 'manual', message: 'Server error' });
                }
            }
        }
        if (emailValue) {
            validateEmail(emailValue)
        }
    }, [emailValue, clearErrors, setError]);

    const getEmailHandler = async (data: FormData) => {
        const response = await mutateEmail({ Email: data.email, TypeId: 1 });
        // setUserEmail(data.email)
        if (response?.Succeeded) {
            toast.custom((t) => (
                <div
                    className={`animate-enter max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            We sent a verification code to your email
                        </div>
                    </div>
                    <div className="flex">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17" stroke="#35393c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            ));

            setStep(2);
            setSignInfo({ guid: response?.Message, secorityCode: response?.Data })
        } else {
            toast.error(response?.Message)
        }
    };

    const confirmEmailHandler = async (e: FormEvent) => {
        e.preventDefault();
        const response = await mutateConfirmEmail({ Guid: signInfo.guid, SecurityCode: otp });
        setStep(3)
    }

    const setPasswordHandler = async (data: SetPasswordProps) => {
        const response = await mutateSetPassword({ Guid: signInfo.guid, Password: data.password, SecurityCode: signInfo.secorityCode, ConfirmPassword: data.confirmPassword })
        if (response?.Succeeded) {
            router.push('/login')
        }
    }


    return (
        <>
            < Link href="/" >
                <Image src="/img/new-logo-with-text.png" className='w-44 mx-auto mb-5' width={400} height={100} alt="logo with text" />
            </Link >
            <div className='login-form'>

                {
                    step === 1 ?
                        <GetEmail
                            formObject={register('email', {
                                required: 'Invalid Email',
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: 'Invalid Email Format'
                                }
                            })}
                            submitHandler={handleSubmit(getEmailHandler)}
                            isValid={isValid && isSuccess}
                            errors={errors?.email}
                        />
                        :
                        step === 2 ? <ConfirmEmail otp={otp} setOtp={setOtp} secorityCode={signInfo?.secorityCode} confirmEmailHandler={confirmEmailHandler} /> :
                            <SetPassword register={setPasswordForm.register}
                                handleSubmit={setPasswordForm.handleSubmit}
                                onSubmit={setPasswordHandler}
                                watch={setPasswordForm.watch}
                                errors={setPasswordForm.formState.errors}
                                isValid={setPasswordForm.formState.isValid} />
                }
            </div>
        </>
    );
}

export default ForgetPassword;
