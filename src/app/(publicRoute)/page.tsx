"use client"
import { useState } from 'react';
import TabContent from "@/common/Tabs/TabContent";
import Tabs from "@/common/Tabs/Tabs";
import Image from 'next/image';
import Link from 'next/link';
import Feedback from '@/components/Feeadback/Feedback';
import Button from '@/common/Button';
import InputText from '@/common/InputText';
import Footer from '@/components/Footer/Footer';


export default function Home() {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  const handleTabClick = (id: number) => {
    setActiveTabId(id);
  };
  return (
    <>
      <main className="min-h-screen ">
        <div className='my-7 w-95 mx-auto'>
          <Tabs onTabClick={handleTabClick} activeTabId={activeTabId} />
        </div>
        <div className='w-95 mx-auto'>
          <TabContent activeTabId={activeTabId} />
        </div>
        <div className='py-10 xl:w-1/2 mx-auto grid grid-cols-2 gap-4'>
          <div>
            <Image src='/img/logoBox.png' className='w-full mb-3' width={1800} height={900} alt='' />
            <Image src='/img/brain.png' className='w-full' width={900} height={1800} alt='' />
          </div>
          <div>
            <Image src='/img/bitcoin.png' className='w-full mb-3' width={1000} height={1000} alt='' />
            <Image src='/img/des.png' className='w-full' width={1800} height={900} alt='' />
          </div>
        </div>

        <div className='w-11/12 mx-auto'>
          <p className='text-center text-5xl font-medium my-20 '>How it works?</p>
          <div className="flex justify-center gap-14 items-start">
            <div className='px-5 sm:px-0 sm:w-3/4 md:w-1/2 xl:w-2/6'>
              <p className='text-2xl font-semibold my-7'>
                Easy Steps to Earn Money
              </p>
              <p className='text-gray'>
                If you are <span className='text-black'>a person</span> and you want to earn money, register and watch videos and answer to the related questions.
              </p>
              <div className='bg-darker-gray p-4 border rounded-xl mt-5'>
                <p className='text-xl font-medium'>How it works</p>
                <ul className='mt-3'>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>1</span>
                    <span className='text-gray text-xl'>Browse and Select Ads</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>2</span>
                    <span className='text-gray text-xl'>Register and Create an Account</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>3</span>
                    <span className='text-gray text-xl'>Watch the Ad</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>4</span>
                    <span className='text-gray text-xl'>Answer Questions</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>5</span>
                    <span className='text-gray text-xl'>Earn Your Reward</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='px-5 sm:px-0 sm:w-3/4 md:w-1/2 xl:w-2/6'>
              <p className='text-2xl font-semibold my-7'>
                PromoteYour Brand
              </p>
              <p className='text-gray'>If you are <span className='text-black'>a company</span>, you can register and promote your brand.</p>
              <div className='bg-darker-gray p-4 border rounded-xl mt-5'>
                <p className='text-xl font-medium'>How it works for promotion</p>
                <ul className='mt-3'>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>1</span>
                    <span className='text-gray text-xl'>Sign Up </span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>2</span>
                    <span className='text-gray text-xl'>Create and Set ad campaign</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>3</span>
                    <span className='text-gray text-xl'>Set Rewards</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>4</span>
                    <span className='text-gray text-xl'>Monitor Performance</span>
                  </li>
                  <li className='mb-3'>
                    <span className='w-8 h-8 border rounded-full inline-flex mr-3 justify-center items-center text-gray text-xl'>5</span>
                    <span className='text-gray text-xl'>Optimize and Refine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className='text-center text-5xl font-semibold my-20 '>Why Choose Us?</p>
        </div>
        <div className='flex w-95 gap-20 mx-auto justify-around flex-wrap mb-32 mt-28'>
          <div className='why-card rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl'>
            <span className='bg-white border-2 flex size-20 justify-center items-center rounded-full border-black mx-auto -mt-9'>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.374 36.7924H11.9645C5.40071 36.7924 3.75977 35.1514 3.75977 28.5876V25.3057C3.75977 18.742 5.40071 17.101 11.9645 17.101H28.374C34.9378 17.101 36.5787 18.742 36.5787 25.3057V28.5876C36.5787 35.1514 34.9378 36.7924 28.374 36.7924Z" stroke="#1E224D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.3242 17.1007V13.8188C10.3242 8.38729 11.9652 3.97314 20.1699 3.97314C27.5542 3.97314 30.0156 7.25504 30.0156 12.1779" stroke="#1E224D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.1693 31.0489C22.4349 31.0489 24.2716 29.2122 24.2716 26.9465C24.2716 24.6809 22.4349 22.8442 20.1693 22.8442C17.9036 22.8442 16.0669 24.6809 16.0669 26.9465C16.0669 29.2122 17.9036 31.0489 20.1693 31.0489Z" stroke="#1E224D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className='text-center font-semibold text-2xl mt-6'>Safe and secure</p>
            <p className='text-center px-5 mt-4'>
              Your safety is paramount. We employ advanced security measures to safeguard your data and earnings, ensuring a secure experience on Coin Market Ads
            </p>
          </div>

          <div className='why-card rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl'>
            <span className='bg-white border-2 flex size-20 justify-center items-center rounded-full border-black mx-auto -mt-9'>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9949 36.792H24.8406C33.0453 36.792 36.3272 33.5101 36.3272 25.3053V15.4596C36.3272 7.25492 33.0453 3.97302 24.8406 3.97302H14.9949C6.79019 3.97302 3.5083 7.25492 3.5083 15.4596V25.3053C3.5083 33.5101 6.79019 36.792 14.9949 36.792Z" stroke="#1E4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.2559 24.4686L16.1613 19.3981C16.7192 18.6761 17.753 18.5448 18.475 19.1027L21.478 21.4657C22.2 22.0236 23.2338 21.8923 23.7917 21.1867L27.5823 16.2967" stroke="#1E4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className='text-center font-semibold text-2xl mt-6'>Stay Ahead</p>
            <p className='text-center px-5 mt-4'>
              Embrace the future of finance. By offering rewards in cryptocurrencies, Coin Market Ads allows you to participate in the growing digital economy.
            </p>
          </div>

          <div className='why-card rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl'>
            <span className='bg-white border-2 flex size-20 justify-center items-center rounded-full border-black mx-auto -mt-9'>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.9695 26.8973C37.9695 33.2478 32.8334 38.384 26.4829 38.384L28.2059 35.5123" stroke="#4A4D70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.86865 13.7698C1.86865 7.4193 7.00482 2.28314 13.3553 2.28314L11.6323 5.1548" stroke="#4A4D70" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.0894 22.1387H15.7004C16.7178 22.1387 17.5547 23.0577 17.5547 23.993C17.5547 25.0104 16.7342 25.8473 15.7004 25.8473H11.0894V22.1387Z" stroke="#4A4D70" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.0894 25.847H16.3732C17.5383 25.847 18.49 26.6675 18.49 27.7013C18.49 28.7186 17.5383 29.5555 16.3732 29.5555H11.0894V25.847Z" stroke="#4A4D70" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.043 29.5391V31.377" stroke="#4A4D70" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.043 20.3007V22.1386" stroke="#4A4D70" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.5945 25.8471C24.5945 31.4428 20.0655 35.9717 14.4699 35.9717C8.87423 35.9717 4.34521 31.4428 4.34521 25.8471C4.34521 20.2515 8.87423 15.7224 14.4699 15.7224C14.7324 15.7224 14.9786 15.7389 15.2575 15.7553C20.2296 16.1327 24.2007 20.1038 24.5781 25.0758C24.5781 25.322 24.5945 25.5682 24.5945 25.8471Z" stroke="#4A4D70" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35.5061 14.9183C35.5061 20.5139 30.9771 25.043 25.3815 25.043H24.5774C24.2 20.071 20.2289 16.0998 15.2568 15.7224V14.9183C15.2568 9.32269 19.7859 4.7937 25.3815 4.7937C30.9771 4.7937 35.5061 9.32269 35.5061 14.9183Z" stroke="#4A4D70" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </span>
            <p className='text-center font-semibold text-2xl mt-6'>Multi Curency Support</p>
            <p className='text-center px-5 mt-4'>
              At Coin Market Ads, we offer you the flexibility to earn in both cryptocurrencies and fiat. Choose the currency that suits you best and watch your earnings grow.
            </p>
          </div>
        </div>

        <Feedback />

        <div className='w-95 mx-auto flex flex-wrap justify-center py-28'>
          <div className='lg:w-2/3 text-center lg:text-left mb-7 lg:mb-0'>
            <p className='text-2xl font-semibold'>
              Stay in the Loop - Subscribe to Our Newsletter!
            </p>
            <p>
              Receive the latest ads, exclusive offers, and platform updates directly in your inbox.
            </p>
          </div>
          <div className='lg:w-1/3'>
            <form action="" className=' h-14 newsLetter'>
              <InputText type="text" placeholder='Email Address' className='h-full' />
              <Button type="submit" className='btn-warning px-8 h-full' >Subscribe</Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
