import DropdownMenu from "@/common/DropdownMenu"
import Image from "next/image"
import Link from "next/link"

type Props = {}

export default function Header({ }: Props) {


  return (
    <div className="flex justify-between h-20 items-center px-3 lg:px-10 border-b sticky top-0 z-20 bg-glass">
      <span className="w-16">
        <Image quality={100} width={500} priority={true} height={500} src="/img/newLogo.png" alt="logo" />
      </span>
      <ul className="header-actions">
        <li className="min-w-8 min-h-8 hover:bg-slate-100 hidden lg:flex justify-center items-center rounded transition-all duration-300">
          <DropdownMenu
            customeClass="w-full"
            direction="right-0 top-full"
            trigger={<span className="dropdown-btn w-full h-full flex justify-center items-center"  >
              <svg width="3" height="19" viewBox="0 0 3 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.5" cy="9.5" r="1.5" fill="#35393C" />
                <circle cx="1.5" cy="17.5" r="1.5" fill="#35393C" />
                <circle cx="1.5" cy="1.5" r="1.5" fill="#35393C" />
              </svg>
            </span>}
          >
            <ul className="setting-menu">
              <li>
                <Link href="/">
                  <svg width="28" height="28" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_235_1730)">
                      <path d="M11.5811 4.98218L12.5332 2.52432C12.6938 2.10818 12.9763 1.75023 13.3438 1.49736C13.7112 1.24449 14.1465 1.1085 14.5925 1.10718H16.4082C16.8543 1.1085 17.2895 1.24449 17.657 1.49736C18.0244 1.75023 18.3069 2.10818 18.4675 2.52432L19.4197 4.98218L22.6525 6.84218L25.2654 6.44361C25.7004 6.38455 26.1432 6.45617 26.5375 6.64936C26.9318 6.84256 27.2597 7.1486 27.4797 7.52861L28.3654 9.07861C28.5923 9.46466 28.6969 9.91047 28.6653 10.3572C28.6336 10.8039 28.4673 11.2305 28.1882 11.5807L26.5718 13.64V17.36L28.2325 19.4193C28.5116 19.7696 28.6779 20.1962 28.7096 20.6429C28.7412 21.0896 28.6366 21.5354 28.4097 21.9215L27.5239 23.4715C27.304 23.8515 26.9761 24.1575 26.5818 24.3507C26.1875 24.5439 25.7447 24.6155 25.3097 24.5565L22.6968 24.1579L19.4639 26.0179L18.5118 28.4757C18.3512 28.8919 18.0687 29.2498 17.7013 29.5027C17.3338 29.7556 16.8986 29.8916 16.4525 29.8929H14.5925C14.1465 29.8916 13.7112 29.7556 13.3438 29.5027C12.9763 29.2498 12.6938 28.8919 12.5332 28.4757L11.5811 26.0179L8.34822 24.1579L5.73536 24.5565C5.30029 24.6155 4.85749 24.5439 4.46322 24.3507C4.06895 24.1575 3.74101 23.8515 3.52108 23.4715L2.63536 21.9215C2.4084 21.5354 2.30383 21.0896 2.33546 20.6429C2.36709 20.1962 2.53342 19.7696 2.81251 19.4193L4.42893 17.36V13.64L2.76822 11.5807C2.48913 11.2305 2.3228 10.8039 2.29117 10.3572C2.25955 9.91047 2.36412 9.46466 2.59108 9.07861L3.47679 7.52861C3.69672 7.1486 4.02466 6.84256 4.41893 6.64936C4.8132 6.45617 5.25601 6.38455 5.69108 6.44361L8.30394 6.84218L11.5811 4.98218ZM11.0718 15.5C11.0718 16.3759 11.3315 17.2321 11.8181 17.9604C12.3048 18.6887 12.9964 19.2563 13.8056 19.5915C14.6148 19.9267 15.5053 20.0144 16.3643 19.8435C17.2234 19.6726 18.0125 19.2509 18.6318 18.6315C19.2512 18.0122 19.673 17.2231 19.8438 16.364C20.0147 15.5049 19.927 14.6145 19.5918 13.8053C19.2566 12.9961 18.689 12.3044 17.9607 11.8178C17.2325 11.3312 16.3763 11.0715 15.5004 11.0715C14.3258 11.0715 13.1994 11.538 12.3689 12.3686C11.5384 13.1991 11.0718 14.3255 11.0718 15.5V15.5Z" stroke="#1E224D" strokeWidth="2.22374" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_235_1730">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Setting
                </Link>
              </li>
              <li>
                <Link href="/">
                  <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_235_1725)">
                      <path d="M27.6785 1.10718H3.32134C2.09843 1.10718 1.10706 2.09855 1.10706 3.32146V27.6786C1.10706 28.9015 2.09843 29.8929 3.32134 29.8929H27.6785C28.9014 29.8929 29.8928 28.9015 29.8928 27.6786V3.32146C29.8928 2.09855 28.9014 1.10718 27.6785 1.10718Z" stroke="#1E224D" strokeWidth="2.21284" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.64258 15.4999L9.96401 18.8213L15.4997 11.0713" stroke="#1E224D" strokeWidth="2.21284" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.7141 16.6072H24.357" stroke="#1E224D" strokeWidth="2.21284" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_235_1725">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/">
                  <svg width="28" height="28" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_235_1734)">
                      <path d="M15.5 29.8931C23.449 29.8931 29.8929 23.4492 29.8929 15.5003C29.8929 7.55132 23.449 1.10742 15.5 1.10742C7.55108 1.10742 1.10718 7.55132 1.10718 15.5003C1.10718 23.4492 7.55108 29.8931 15.5 29.8931Z" stroke="#1E224D" strokeWidth="2.20779" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.1786 12.1789C12.1786 11.5219 12.3734 10.8798 12.7384 10.3336C13.1033 9.78736 13.622 9.36164 14.229 9.11025C14.8359 8.85886 15.5037 8.79309 16.148 8.92124C16.7923 9.0494 17.3841 9.36574 17.8486 9.83025C18.3131 10.2948 18.6295 10.8866 18.7576 11.5309C18.8858 12.1752 18.82 12.843 18.5686 13.4499C18.3172 14.0568 17.8915 14.5756 17.3453 14.9405C16.7991 15.3055 16.1569 15.5003 15.5 15.5003V17.7146" stroke="#1E224D" strokeWidth="2.20779" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.5 23.2502C15.1943 23.2502 14.9464 23.0024 14.9464 22.6966C14.9464 22.3909 15.1943 22.1431 15.5 22.1431" stroke="#1E224D" strokeWidth="2.20779" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.5 23.2502C15.8057 23.2502 16.0536 23.0024 16.0536 22.6966C16.0536 22.3909 15.8057 22.1431 15.5 22.1431" stroke="#1E224D" strokeWidth="2.20779" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_235_1734">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/">
                  <svg width="28" height="28" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_235_1719)">
                      <path d="M16.6071 19.9285L9.96423 21.1242L11.0714 14.3928L23.7592 1.74922C23.9651 1.54168 24.21 1.37695 24.4798 1.26453C24.7496 1.15212 25.0391 1.09424 25.3314 1.09424C25.6237 1.09424 25.9131 1.15212 26.1829 1.26453C26.4528 1.37695 26.6977 1.54168 26.9035 1.74922L29.2507 4.09636C29.4582 4.30221 29.6229 4.54711 29.7353 4.81694C29.8478 5.08677 29.9056 5.37619 29.9056 5.66851C29.9056 5.96082 29.8478 6.25024 29.7353 6.52007C29.6229 6.7899 29.4582 7.0348 29.2507 7.24065L16.6071 19.9285Z" stroke="#1E224D" strokeWidth="2.20576" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26.5715 21.0356V27.6785C26.5715 28.2657 26.3382 28.8289 25.9229 29.2442C25.5077 29.6595 24.9444 29.8927 24.3572 29.8927H3.32146C2.7342 29.8927 2.17099 29.6595 1.75573 29.2442C1.34047 28.8289 1.10718 28.2657 1.10718 27.6785V6.64275C1.10718 6.05549 1.34047 5.49227 1.75573 5.07702C2.17099 4.66176 2.7342 4.42847 3.32146 4.42847H9.96432" stroke="#1E224D" strokeWidth="2.20576" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_235_1719">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Contact us
                </Link>
              </li>
            </ul>
          </DropdownMenu>
        </li>
        <li className="min-w-8 min-h-8 hover:bg-slate-100 flex justify-center items-center rounded transition-all duration-300">
          <Link href="/dashboard/profile">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1469_795)">
                <path d="M15.4999 17.7143C18.5572 17.7143 21.0357 15.2359 21.0357 12.1786C21.0357 9.12131 18.5572 6.64288 15.4999 6.64288C12.4427 6.64288 9.96423 9.12131 9.96423 12.1786C9.96423 15.2359 12.4427 17.7143 15.4999 17.7143Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.04498 26.35C7.03309 24.728 8.42181 23.3876 10.0777 22.4574C11.7335 21.5273 13.6008 21.0387 15.5 21.0387C17.3992 21.0387 19.2665 21.5273 20.9223 22.4574C22.5782 23.3876 23.9669 24.728 24.955 26.35" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.5 29.8928C23.4489 29.8928 29.8928 23.4489 29.8928 15.5C29.8928 7.55102 23.4489 1.10712 15.5 1.10712C7.55102 1.10712 1.10712 7.55102 1.10712 15.5C1.10712 23.4489 7.55102 29.8928 15.5 29.8928Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1469_795">
                  <rect width="31" height="31" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </li>
        <li className="min-w-8 min-h-8 hover:bg-slate-100 flex justify-center items-center rounded transition-all duration-300">
          <div className="searchBox">
            <label htmlFor="search-input">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39289 12.9285C10.4502 12.9285 12.9286 10.4501 12.9286 7.39283C12.9286 4.33554 10.4502 1.85712 7.39289 1.85712C4.3356 1.85712 1.85718 4.33554 1.85718 7.39283C1.85718 10.4501 4.3356 12.9285 7.39289 12.9285Z" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.1429 15.1429L11.3122 11.3122" stroke="#35393C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            <input type="text" placeholder="" id="search-input" />
          </div>
        </li>
      </ul>
    </div>
  )
}