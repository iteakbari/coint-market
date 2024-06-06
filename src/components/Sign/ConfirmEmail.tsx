import Button from '@/common/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react'
import OTPInput from 'react-otp-input'

type Props = {
    otp: string;
    setOtp: React.Dispatch<React.SetStateAction<string>>;
    secorityCode: string;
    confirmEmailHandler: (e: FormEvent) => void
}

function ConfirmEmail({ otp, setOtp, confirmEmailHandler, secorityCode }: Props) {

    return (
        <>
            <p className='font-semibold my-7'>Enter the verification code.</p>

            <form onSubmit={confirmEmailHandler}>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    inputType='tel'
                    containerStyle="justify-between"
                    inputStyle='otp-input'
                    shouldAutoFocus={true}
                    renderInput={(props) => <input {...props} />}
                />
                <Button type='submit' isValid={otp == secorityCode} className='btn-primary h-14 w-full my-4' text='Continue' />
            </form>
            <div className='flex justify-center gap-3'>
                <Link href="" className='danger-link'>Resend Code</Link>
                Or
                <Link href="" className='danger-link'>Change Email</Link>
            </div>
        </>
    )
}

export default ConfirmEmail