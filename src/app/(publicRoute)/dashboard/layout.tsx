import SeconderyFooter from '@/components/Footer/SeconderyFooter';
import React from 'react'

type Props = {}

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className='w-95 mx-auto pt-16'>
                {children}
            </div>
            <SeconderyFooter />
        </>
    )
}

export default layout