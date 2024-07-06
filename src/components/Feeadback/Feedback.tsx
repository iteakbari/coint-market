import Button from '@/common/Button'
import InputText from '@/common/InputText'
import Textarea from '@/common/Textarea'
import React from 'react'

type Props = {}

function Feedback({ }: Props) {
    return (
        <div className='mx-auto sm:w-3/4 md:w-3/5 lg:w-1/2 2xl:w-1/3 px-3'>
            <p className='text-center font-medium text-5xl mb-10'>Send Feedback</p>
            <form action="">
                <InputText placeholder='Name*' className='h-12' />
                <InputText placeholder='Email*' className='h-12' />
                <Textarea placeholder='Your message...' />
                <Button type='submit' className='btn-primary w-full py-3' >Send Message</Button>
            </form>
        </div>
    )
}

export default Feedback