import Button from '@/common/Button'
import InputText from '@/common/InputText'
import React from 'react'

type Props = {}

function ChangePassword({ }: Props) {
    return (
        <form>
            <div className="card">
                <div className="card-header h-16 flex justify-center items-center text-xl">Change Password</div>
                <div className="card-body">
                    <div className='p-5 w-1/2 mx-auto'>
                        <InputText type='password' placeholder='Current Password' labelText='Enter Your Current Password.' className='h-12' />
                        <InputText type='password' placeholder='New Password' className='h-12' />
                        <InputText type='password' placeholder='Confirm New Password' className='h-12' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-3'>
                <Button type='submit' className='btn-primary h-14 w-60 mt-5' text='Save Change' />
            </div>
        </form>
    )
}

export default ChangePassword