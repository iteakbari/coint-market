'use client'
import { MyTimerProps } from '@/types/type';
import React from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer: React.FC<MyTimerProps> = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className='text-center'>
            <div className='text-xl w-36'>
                <span className='inline-block w-7 text-center'>{days}</span>:<span className='inline-block w-7 text-center'>{hours}</span>:<span className='inline-block w-7 text-center'>{minutes}</span>:<span className='inline-block w-7 text-center'>{seconds}</span>
            </div>
        </div>
    );
};

export default MyTimer;
