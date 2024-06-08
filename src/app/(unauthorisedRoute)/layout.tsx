import localFont from 'next/font/local'
import React from 'react';
import "./../globals.css";
import Providers from '../Provider';
import { Toaster } from 'react-hot-toast';
import SeconderyFooter from '@/components/Footer/SeconderyFooter';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';

type Props = {
  children: React.ReactNode
}

const outfit = localFont({
  src: [
    {
      path: './../../../public/fonts/Outfit/static/Outfit-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/Outfit/static/Outfit-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/Outfit/static/Outfit-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/Outfit/static/Outfit-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/Outfit/static/Outfit-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/Outfit/static/Outfit-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ]
});

function UnauthorisedLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${outfit.className} `}>
        <Providers>
          <Toaster />
          <div className="wrapper">
            <Sidebar />
            <div className="content">
              <Header />
              {children}
              <SeconderyFooter />
            </div>
          </div>
        </Providers>
      </body>
    </html >
  )
}

export default UnauthorisedLayout