import type { Metadata } from "next";
import localFont from 'next/font/local'
import "../globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Providers from "../Provider";
import { Toaster } from "react-hot-toast";

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

export const metadata: Metadata = {
  title: "Coin Market Ads",
  description: "Coin Ads Market",
  icons: {
    icon: "./../icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} `}>
        {/* <body > */}
        <Providers>
          <Toaster />
          <div className="wrapper">
            <Sidebar />
            <div className="content">
              <Header />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html >
  );
}
