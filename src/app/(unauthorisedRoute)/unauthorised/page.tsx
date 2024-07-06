import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function page() {
    return (
        <div className='flex flex-col flex-1 justify-center items-center '>
            <Image src='/img/lock.png' className='w-32 mb-10' width={400} height={800} alt='lock image' />
            <div className='2xl:w-1/4 text-center'>
                <p className='text-2xl font-medium'>Sign in or create an account to unlock </p>
                <p className='text-4xl my-3 font-medium leading-normal'>personalized features and a tailored experience!</p>
                <div className='flex gap-10 justify-center mt-10'>
                    <Link href='/login' className='btn btn-default h-12 w-36'>Login</Link>
                    <Link href='/sign' className='btn btn-default h-12 w-36'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default page