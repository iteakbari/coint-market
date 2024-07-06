import Button from '@/common/Button'
import InputText from '@/common/InputText'
import React from 'react'

type Props = {}

function ChangeEmail({ }: Props) {

    return (
        <form>
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl">Change Email</div>
                <div className="card-body">
                    <div className='p-5 w-1/2 mx-auto'>
                        <InputText type='email' placeholder='Current Email' labelText='Your Current Email Address' className='h-12' />
                        <InputText type='email' containerClass='mt-7' placeholder='New Email' labelText='New Email Address' className='h-12' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-3'>
                <Button type='submit' className='btn-primary h-14 w-60 mt-5' >Send Verification Code</Button>
            </div>
        </form>
    )
}

export default ChangeEmail