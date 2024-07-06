"use client"
import { logout } from "@/services/registerServeice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react"
import { useMutation } from "react-query";
import Cookies from "js-cookie"


const Sidebar: React.FC = () => {
    const [wide, setWide] = useState(false);
    const pathname = usePathname();
    const { mutateAsync: logoutFunc } = useMutation({ mutationFn: logout });
    const token = Cookies.get('accessToken');

    const logOutHandler = async () => {
        await logoutFunc();
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        window.location.reload();
    }

    return (
        <aside className={`${wide ? 'wide' : ''} hidden xl:block`}>
            <div className={`flex ${!wide ? 'justify-center' : ''} sticky top-0 bgWhite h-12 py-5 px-2`}>
                <button onClick={() => setWide(!wide)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="#808080" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                </button>
            </div>
            <ul className="access-menu pt-14">
                <li>
                    <Link href="/" className={`mb-12 ${pathname === '/' ? 'active' : ''}`}>
                        <span>
                            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1469_683)">
                                    <path d="M1.63794 16.3243L16.0308 1.7464L30.4237 16.3243" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.06653 11.8387V26.4167H25.9951V11.8387" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.0308 26.4167V17.4457" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1469_683">
                                        <rect width="31" height="31.3986" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/search" className={`mb-12 ${pathname === '/search' ? 'active' : ''}`}>
                        <span>
                            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.50004 24.8746L26.7143 24.8746C27.8978 24.8746 28.8572 23.9029 28.8572 22.7042L28.8572 8.59655C28.8572 7.39787 27.8978 6.42614 26.7143 6.42614L8.50004 6.42614C7.31657 6.42614 6.35718 7.39787 6.35718 8.59655L6.35718 22.7042C6.35718 23.9029 7.31657 24.8746 8.50004 24.8746Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 19.4485V3.17041C1 2.59478 1.22576 2.04273 1.62763 1.6357C2.02949 1.22867 2.57454 1 3.14286 1H22.4286" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.4524 15.1126C22.1127 15.4987 22.1127 16.4529 21.4524 16.839L16.9334 19.4816C16.2667 19.8715 15.4286 19.3907 15.4286 18.6184L15.4286 13.3332C15.4286 12.5609 16.2667 12.0801 16.9334 12.47L21.4524 15.1126Z" fill="#4A4D70" />
                            </svg>
                        </span>
                        Ads
                    </Link>
                </li>
                {/* {!wide && <li>
                    <Link href="/" className="mb-12">
                        <span>
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1469_698)">
                                    <path d="M1.07141 15.1929C1.07141 17.9831 1.88831 20.7107 3.4188 23.0307C4.94929 25.3507 7.12463 27.1589 9.66975 28.2267C12.2149 29.2945 15.0154 29.5738 17.7173 29.0295C20.4192 28.4851 22.901 27.1415 24.849 25.1685C26.7969 23.1955 28.1235 20.6818 28.6609 17.9452C29.1984 15.2085 28.9225 12.372 27.8683 9.79411C26.8141 7.21627 25.0288 5.01296 22.7383 3.46279C20.4477 1.91262 17.7548 1.08521 15 1.08521C11.0099 1.08074 7.172 2.63565 4.2857 5.42604" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.35707 1.08521L4.28564 5.42603L8.57136 6.51123" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 7.59644V16.2781L9.42859 19.0996" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1469_698">
                                        <rect width="30" height="30.3858" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        History
                    </Link>
                </li>} */}
                <li className={`${token && token !== undefined && wide ? 'border-t border-b py-3' : ''}`}>
                    {token && token !== undefined && wide && <>
                        <span>
                            Dashboard
                        </span>
                        <ul className="mt-3 mb-7">
                            <li className="mb-2 min-w-48">
                                <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
                                    <svg width="22" height="22" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1469_698)">
                                            <path d="M1.07141 15.1929C1.07141 17.9831 1.88831 20.7107 3.4188 23.0307C4.94929 25.3507 7.12463 27.1589 9.66975 28.2267C12.2149 29.2945 15.0154 29.5738 17.7173 29.0295C20.4192 28.4851 22.901 27.1415 24.849 25.1685C26.7969 23.1955 28.1235 20.6818 28.6609 17.9452C29.1984 15.2085 28.9225 12.372 27.8683 9.79411C26.8141 7.21627 25.0288 5.01296 22.7383 3.46279C20.4477 1.91262 17.7548 1.08521 15 1.08521C11.0099 1.08074 7.172 2.63565 4.2857 5.42604" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.35707 1.08521L4.28564 5.42603L8.57136 6.51123" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 7.59644V16.2781L9.42859 19.0996" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1469_698">
                                                <rect width="30" height="30.3858" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    History
                                </Link>
                            </li>
                            {/* <li className=" mb-2 min-w-48">
                                <Link href="/">
                                    <svg width="22" height="22" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1469_795)">
                                            <path d="M15.4999 17.7143C18.5572 17.7143 21.0357 15.2359 21.0357 12.1786C21.0357 9.12131 18.5572 6.64288 15.4999 6.64288C12.4427 6.64288 9.96423 9.12131 9.96423 12.1786C9.96423 15.2359 12.4427 17.7143 15.4999 17.7143Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.04498 26.35C7.03309 24.728 8.42181 23.3876 10.0777 22.4574C11.7335 21.5273 13.6008 21.0387 15.5 21.0387C17.3992 21.0387 19.2665 21.5273 20.9223 22.4574C22.5782 23.3876 23.9669 24.728 24.955 26.35" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.5 29.8928C23.4489 29.8928 29.8928 23.4489 29.8928 15.5C29.8928 7.55102 23.4489 1.10712 15.5 1.10712C7.55102 1.10712 1.10712 7.55102 1.10712 15.5C1.10712 23.4489 7.55102 29.8928 15.5 29.8928Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1469_795">
                                                <rect width="31" height="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    Sign in/ Sign up
                                </Link>
                            </li> */}
                            <li className="mb-2 min-w-48">
                                <Link href="/dashboard/profile" className={`${pathname === '/dashboard/profile' ? 'active' : ""}`}>
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.68949 9.6446C12.1457 9.6446 14.1368 7.65347 14.1368 5.1973C14.1368 2.74112 12.1457 0.75 9.68949 0.75C7.23331 0.75 5.24219 2.74112 5.24219 5.1973C5.24219 7.65347 7.23331 9.6446 9.68949 9.6446Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.1478 18.5401C17.5733 16.7486 16.4448 15.1859 14.9249 14.0772C13.405 12.9685 11.5724 12.3711 9.69108 12.3711C7.8098 12.3711 5.97712 12.9685 4.45725 14.0772C2.93738 15.1859 1.80886 16.7486 1.23438 18.5401H18.1478Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Profile
                                </Link>
                            </li>
                            <li className="mb-2 min-w-48">
                                <Link href="/">
                                    <svg width="22" height="22" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_235_1730)">
                                            <path d="M11.5811 4.98218L12.5332 2.52432C12.6938 2.10818 12.9763 1.75023 13.3438 1.49736C13.7112 1.24449 14.1465 1.1085 14.5925 1.10718H16.4082C16.8543 1.1085 17.2895 1.24449 17.657 1.49736C18.0244 1.75023 18.3069 2.10818 18.4675 2.52432L19.4197 4.98218L22.6525 6.84218L25.2654 6.44361C25.7004 6.38455 26.1432 6.45617 26.5375 6.64936C26.9318 6.84256 27.2597 7.1486 27.4797 7.52861L28.3654 9.07861C28.5923 9.46466 28.6969 9.91047 28.6653 10.3572C28.6336 10.8039 28.4673 11.2305 28.1882 11.5807L26.5718 13.64V17.36L28.2325 19.4193C28.5116 19.7696 28.6779 20.1962 28.7096 20.6429C28.7412 21.0896 28.6366 21.5354 28.4097 21.9215L27.5239 23.4715C27.304 23.8515 26.9761 24.1575 26.5818 24.3507C26.1875 24.5439 25.7447 24.6155 25.3097 24.5565L22.6968 24.1579L19.4639 26.0179L18.5118 28.4757C18.3512 28.8919 18.0687 29.2498 17.7013 29.5027C17.3338 29.7556 16.8986 29.8916 16.4525 29.8929H14.5925C14.1465 29.8916 13.7112 29.7556 13.3438 29.5027C12.9763 29.2498 12.6938 28.8919 12.5332 28.4757L11.5811 26.0179L8.34822 24.1579L5.73536 24.5565C5.30029 24.6155 4.85749 24.5439 4.46322 24.3507C4.06895 24.1575 3.74101 23.8515 3.52108 23.4715L2.63536 21.9215C2.4084 21.5354 2.30383 21.0896 2.33546 20.6429C2.36709 20.1962 2.53342 19.7696 2.81251 19.4193L4.42893 17.36V13.64L2.76822 11.5807C2.48913 11.2305 2.3228 10.8039 2.29117 10.3572C2.25955 9.91047 2.36412 9.46466 2.59108 9.07861L3.47679 7.52861C3.69672 7.1486 4.02466 6.84256 4.41893 6.64936C4.8132 6.45617 5.25601 6.38455 5.69108 6.44361L8.30394 6.84218L11.5811 4.98218ZM11.0718 15.5C11.0718 16.3759 11.3315 17.2321 11.8181 17.9604C12.3048 18.6887 12.9964 19.2563 13.8056 19.5915C14.6148 19.9267 15.5053 20.0144 16.3643 19.8435C17.2234 19.6726 18.0125 19.2509 18.6318 18.6315C19.2512 18.0122 19.673 17.2231 19.8438 16.364C20.0147 15.5049 19.927 14.6145 19.5918 13.8053C19.2566 12.9961 18.689 12.3044 17.9607 11.8178C17.2325 11.3312 16.3763 11.0715 15.5004 11.0715C14.3258 11.0715 13.1994 11.538 12.3689 12.3686C11.5384 13.1991 11.0718 14.3255 11.0718 15.5V15.5Z" stroke="#808080" strokeWidth="2.22374" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_235_1730">
                                                <rect width="31" height="31" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    Account Settings
                                </Link>
                            </li>
                            <li className="mb-2 min-w-48">
                                <Link href="/">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1576_14526)">
                                            <path d="M9.4703 13.4987C12.8712 13.4987 15.6281 10.7418 15.6281 7.3409C15.6281 3.94005 12.8712 1.18311 9.4703 1.18311C6.06944 1.18311 3.3125 3.94005 3.3125 7.3409C3.3125 10.7418 6.06944 13.4987 9.4703 13.4987Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.47117 10.0777C10.9827 10.0777 12.208 8.85242 12.208 7.34092C12.208 5.82943 10.9827 4.60413 9.47117 4.60413C7.95968 4.60413 6.73438 5.82943 6.73438 7.34092C6.73438 8.85242 7.95968 10.0777 9.47117 10.0777Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.27858 13.3897L7.07439 18.4527C7.05056 18.549 7.0065 18.639 6.94515 18.7169C6.88381 18.7947 6.80658 18.8586 6.7186 18.9043C6.62575 18.9446 6.52562 18.9654 6.4244 18.9654C6.32318 18.9654 6.22304 18.9446 6.13019 18.9043L1.58711 16.9201C1.49181 16.8751 1.40796 16.809 1.34185 16.7269C1.27573 16.6448 1.22907 16.5488 1.20537 16.4461C1.18167 16.3434 1.18154 16.2367 1.205 16.1339C1.22845 16.0312 1.27488 15.935 1.34079 15.8528L4.85758 11.4465" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11.0156 13.3213L12.2472 18.4528C12.2717 18.5506 12.3175 18.6418 12.3814 18.7199C12.4452 18.798 12.5256 18.8609 12.6167 18.9043C12.707 18.9451 12.8049 18.9662 12.904 18.9662C13.0031 18.9662 13.1011 18.9451 13.1914 18.9043L17.7071 16.9201C17.8038 16.8756 17.8888 16.8092 17.9553 16.726C18.0219 16.6429 18.0681 16.5453 18.0902 16.4412C18.1162 16.3393 18.1173 16.2327 18.0935 16.1303C18.0697 16.0279 18.0216 15.9328 17.9534 15.8528L14.2861 11.1866" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1576_14526">
                                                <path d="M0.0664062 8C0.0664062 3.85786 3.42427 0.5 7.56641 0.5H11.724C15.8661 0.5 19.224 3.85786 19.224 8V19.6576H0.0664062V8Z" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    Rewards
                                </Link>
                            </li>
                            <li className="mb-2 min-w-48">
                                <Link href="/">
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.0526 8.2761C4.18622 8.2761 5.1052 7.35712 5.1052 6.2235C5.1052 5.08988 4.18622 4.1709 3.0526 4.1709C1.91898 4.1709 1 5.08988 1 6.2235C1 7.35712 1.91898 8.2761 3.0526 8.2761Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.05078 8.27637V18.5394" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.05469 0.750137V4.17114" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.7362 8.2761C17.8698 8.2761 18.7888 7.35712 18.7888 6.2235C18.7888 5.08988 17.8698 4.1709 16.7362 4.1709C15.6026 4.1709 14.6836 5.08988 14.6836 6.2235C14.6836 7.35712 15.6026 8.2761 16.7362 8.2761Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.7383 4.17114V0.750137" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.7383 18.5394V8.27637" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.89635 11.697C11.03 11.697 11.9489 10.778 11.9489 9.6444C11.9489 8.51078 11.03 7.5918 9.89635 7.5918C8.76273 7.5918 7.84375 8.51078 7.84375 9.6444C7.84375 10.778 8.76273 11.697 9.89635 11.697Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.89453 0.75V7.592" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.89453 11.6973V18.5393" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    Preferences
                                </Link>
                            </li>

                            <li className="mb-2 min-w-48">
                                <Link href="/">
                                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.64756 13.5656C10.5369 13.5656 12.0686 12.034 12.0686 10.1446C12.0686 8.25527 10.5369 6.72363 8.64756 6.72363C6.7582 6.72363 5.22656 8.25527 5.22656 10.1446C5.22656 12.034 6.7582 13.5656 8.64756 13.5656Z" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.64453 6.7236V1.25" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.0664 19.0392V16.9866H14.8032C15.1661 16.9866 15.5142 16.8424 15.7708 16.5858C16.0274 16.3292 16.1716 15.9811 16.1716 15.6182V10.1446C16.1719 8.75717 15.7886 7.39666 15.0641 6.21338C14.3397 5.0301 13.3022 4.07011 12.0664 3.43945" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.22512 3.43945C3.98879 4.06973 2.95078 5.02956 2.22582 6.21287C1.50087 7.39618 1.11719 8.75689 1.11719 10.1446C1.11719 11.5323 1.50087 12.893 2.22582 14.0763C2.95078 15.2597 3.98879 16.2195 5.22512 16.8498V19.0392" stroke="#808080" strokeWidth="1.3684" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    Help and Support
                                </Link>
                            </li>
                            <li className="min-w-48">
                                <Link href="/" onClick={logOutHandler}>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1576_14541)">
                                            <path d="M8.73438 8.89417H17.6294" stroke="#808080" strokeWidth="1.365" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.0859 6.35261L17.6274 8.89404L15.0859 11.4355" stroke="#808080" strokeWidth="1.365" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.3409 14.6001C14.1999 15.7894 12.7291 16.6101 11.1178 16.9568C9.50646 17.3034 7.82829 17.16 6.29912 16.5451C4.76995 15.9302 3.45972 14.8718 2.53695 13.5062C1.61419 12.1405 1.12109 10.53 1.12109 8.88185C1.12109 7.23367 1.61419 5.62318 2.53695 4.25753C3.45972 2.89188 4.76995 1.83353 6.29912 1.2186C7.82829 0.603676 9.50646 0.460303 11.1178 0.806923C12.7291 1.15354 14.1999 1.9743 15.3409 3.16363" stroke="#808080" strokeWidth="1.365" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1576_14541">
                                                <rect width="17.79" height="17.79" fill="white" transform="translate(0.472656)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </>
                    }

                    {!wide && <Link href="/dashboard" className={`${pathname === "/dashboard" ? 'active' : ''}`} >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z" stroke="#808080" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                        Dashboard
                    </Link>}
                </li>
                {
                    wide && <>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Explore
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Finance
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Tehcnology
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Entertainment
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Travel and Tourism
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Fashion and Beauty
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Health and Wellness
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Gaming and Sports
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Pets and Animals
                            </Link>
                        </li>
                        <li className="min-w-48">
                            <Link href="/" className="my-2">
                                Automotive
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </aside >
    )
}

export default Sidebar;