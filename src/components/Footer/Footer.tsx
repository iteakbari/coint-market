import Image from "next/image"
import Link from "next/link"

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="flex flex-col mt-auto justify-center items-center ">
            <div className="flex flex-col items-center gap-5 text-center">
                <Image src="/img/newLogo.png" className="w-32" width={1000} height={1000} alt="logo" />
                <p className="text-xl font-semibold">Coin Market Advertisement Company</p>
            </div>
            <ul className="flex gap-5 sm:gap-10 md:gap-20 lg:gap-28 pt-10 pb-6">
                <li>
                    <Link href="" className="text-sm md:text-lg font-semibold">Home</Link>
                </li>
                <li>
                    <Link href="" className="text-sm md:text-lg font-semibold">How it works</Link>
                </li>
                <li>
                    <Link href="" className="text-sm md:text-lg font-semibold">Ads</Link>
                </li>
                <li>
                    <Link href="" className="text-sm md:text-lg font-semibold">FAQ</Link>
                </li>
                <li>
                    <Link href="" className="text-sm md:text-lg font-semibold">Contact</Link>
                </li>
            </ul>
            <ul className="flex gap-10 py-2">
                <li>
                    <Link href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#35393c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#35393c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17.636 7h.012" stroke="#35393c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1812_2212)">
                                <path d="M28.7164 0H2.28956C1.02364 0 0 0.999412 0 2.23505V28.7709C0 30.0066 1.02364 31.012 2.28956 31.012H28.7164C29.9824 31.012 31.012 30.0066 31.012 28.777V2.23505C31.012 0.999412 29.9824 0 28.7164 0ZM9.20064 26.4269H4.59729V11.6235H9.20064V26.4269ZM6.89897 9.60647C5.42105 9.60647 4.22781 8.41323 4.22781 6.94137C4.22781 5.46951 5.42105 4.27627 6.89897 4.27627C8.37083 4.27627 9.56407 5.46951 9.56407 6.94137C9.56407 8.40717 8.37083 9.60647 6.89897 9.60647ZM26.4269 26.4269H21.8296V19.2311C21.8296 17.517 21.7993 15.3061 19.437 15.3061C17.0445 15.3061 16.6811 17.1778 16.6811 19.11V26.4269H12.0899V11.6235H16.4994V13.6465H16.5599C17.1717 12.4836 18.6739 11.254 20.9089 11.254C25.5668 11.254 26.4269 14.3188 26.4269 18.3044V26.4269Z" fill="#35393C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1812_2212">
                                    <rect width="31.012" height="31.012" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 31.012L2.17989 23.0484C0.834741 20.7173 0.127925 18.0749 0.129217 15.3652C0.133093 6.89372 7.02681 0 15.497 0C19.6074 0.00129217 23.4658 1.60229 26.368 4.50708C29.2689 7.41188 30.866 11.2729 30.8647 15.3794C30.8609 23.8521 23.9671 30.7459 15.497 30.7459C12.9256 30.7446 10.3916 30.0998 8.14712 28.8748L0 31.012ZM8.52444 26.0928C10.6901 27.3785 12.7576 28.1486 15.4918 28.1499C22.5315 28.1499 28.2662 22.4204 28.2701 15.3768C28.2726 8.31898 22.5651 2.59726 15.5021 2.59467C8.45724 2.59467 2.72648 8.32415 2.72389 15.3665C2.7226 18.2415 3.56509 20.3943 4.98002 22.6465L3.68914 27.3604L8.52444 26.0928ZM23.2384 19.0324C23.1427 18.8721 22.8869 18.7765 22.5018 18.584C22.1181 18.3914 20.2302 17.4624 19.8774 17.3344C19.526 17.2065 19.2701 17.1419 19.013 17.527C18.7571 17.9107 18.0206 18.7765 17.797 19.0324C17.5735 19.2882 17.3487 19.3205 16.9649 19.128C16.5811 18.9354 15.3432 18.531 13.8766 17.222C12.7356 16.2038 11.9642 14.9465 11.7406 14.5614C11.5171 14.1777 11.7174 13.9696 11.9086 13.7784C12.0818 13.6065 12.2924 13.33 12.4849 13.1052C12.68 12.8829 12.7434 12.7227 12.8726 12.4656C13.0005 12.2097 12.9372 11.9849 12.8403 11.7923C12.7434 11.6011 11.9758 9.71065 11.6567 8.94181C11.3439 8.19364 11.0274 8.29443 10.7922 8.2828L10.0557 8.26988C9.79981 8.26988 9.38373 8.3655 9.03226 8.75057C8.68079 9.13563 7.6884 10.0634 7.6884 11.9539C7.6884 13.8443 9.06456 15.6701 9.2558 15.926C9.44834 16.1818 11.9629 20.0609 15.8149 21.7239C16.731 22.1193 17.4469 22.3558 18.0038 22.5328C18.9238 22.8249 19.7611 22.7835 20.4227 22.6853C21.1606 22.5755 22.6944 21.7562 23.0148 20.8595C23.3353 19.9614 23.3353 19.1926 23.2384 19.0324Z" fill="#35393C" />
                        </svg>
                    </Link>
                </li>
            </ul>
            <p className="pt-2 text-sm">© Copyright 2024 - Coin Market Advertisement</p>
        </footer>
    )
}