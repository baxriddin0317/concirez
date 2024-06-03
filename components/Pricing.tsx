import React from "react";

export const Pricing = () => {
  return (
    <section className="py-12 overflow-y-hidden relative">
      {/* shadows */}
      <div className="absolute -top-0 left-1/2 -translate-y-full -translate-x-1/2 w-[600px] md:w-[1440px] h-[735px] bg-brand-orange blur-[250px]"></div>
      <div className="absolute -bottom-0 left-1/2 translate-y-full -translate-x-1/2 w-[600px] md:w-[1440px] h-[735px] bg-brand-orange blur-[250px]"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-5 py-1">
        {/* head */}
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <p className="text-brand-orange text-lg font-bold uppercase">Pricing</p>
          <h3 className="font-atyp text-5xl capitalize font-semibold">
            Pricing <span className="text-brand-orange">Plan</span>
          </h3>
          <p className="text-lg">
          Discover affordable plans tailored to your reservation needs, ensuring seamless access to New York&apos;s culinary scene.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-5 border border-brand-black-100 bg-secondary backdrop-blur-lg rounded-2xl p-4 mt-11">
          <div className="bg-transparent w-full flex-1 p-4 md:p-10">
            <div className="flex items-center lg:min-w-[394px] justify-between mb-6">
              <div className="flex w-[72px] h-[72px] items-center justify-center border border-brand-black-100 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 34 34" fill="none">
                  <path d="M17 0C13.6377 0 10.3509 0.997032 7.55531 2.86502C4.75968 4.733 2.58074 7.38804 1.29406 10.4944C0.00736583 13.6007 -0.329291 17.0189 0.326658 20.3165C0.982607 23.6142 2.6017 26.6433 4.97919 29.0208C7.35668 31.3983 10.3858 33.0174 13.6835 33.6733C16.9811 34.3293 20.3993 33.9926 23.5056 32.7059C26.612 31.4193 29.267 29.2403 31.135 26.4447C33.003 23.6491 34 20.3623 34 17C33.9952 12.4928 32.2026 8.17153 29.0156 4.98444C25.8285 1.79735 21.5072 0.0047597 17 0ZM8.18616 28.3606C9.13217 26.8811 10.4354 25.6635 11.9757 24.8201C13.516 23.9767 15.2439 23.5346 17 23.5346C18.7561 23.5346 20.484 23.9767 22.0243 24.8201C23.5646 25.6635 24.8678 26.8811 25.8138 28.3606C23.2938 30.3205 20.1924 31.3845 17 31.3845C13.8076 31.3845 10.7062 30.3205 8.18616 28.3606ZM11.7692 15.6923C11.7692 14.6578 12.076 13.6464 12.6508 12.7862C13.2255 11.9261 14.0425 11.2556 14.9983 10.8597C15.9541 10.4638 17.0058 10.3602 18.0205 10.562C19.0351 10.7639 19.9672 11.2621 20.6987 11.9936C21.4303 12.7251 21.9284 13.6572 22.1303 14.6718C22.3321 15.6865 22.2285 16.7382 21.8326 17.694C21.4367 18.6498 20.7663 19.4668 19.9061 20.0415C19.0459 20.6163 18.0346 20.9231 17 20.9231C15.6127 20.9231 14.2823 20.372 13.3013 19.391C12.3203 18.4101 11.7692 17.0796 11.7692 15.6923ZM27.7492 26.5478C26.2908 24.4344 24.24 22.7993 21.8548 21.8483C23.136 20.8391 24.071 19.4558 24.5296 17.8907C24.9882 16.3256 24.9477 14.6564 24.4137 13.1154C23.8797 11.5744 22.8787 10.2381 21.55 9.29228C20.2213 8.3465 18.6309 7.83827 17 7.83827C15.3691 7.83827 13.7787 8.3465 12.45 9.29228C11.1213 10.2381 10.1204 11.5744 9.58635 13.1154C9.05235 14.6564 9.01183 16.3256 9.47043 17.8907C9.92903 19.4558 10.864 20.8391 12.1452 21.8483C9.76 22.7993 7.70923 24.4344 6.25078 26.5478C4.40786 24.4754 3.20332 21.9144 2.7822 19.1732C2.36108 16.4321 2.74133 13.6276 3.87718 11.0976C5.01302 8.56752 6.85603 6.41975 9.18426 4.9129C11.5125 3.40604 14.2267 2.60434 17 2.60434C19.7733 2.60434 22.4875 3.40604 24.8157 4.9129C27.144 6.41975 28.987 8.56752 30.1228 11.0976C31.2587 13.6276 31.6389 16.4321 31.2178 19.1732C30.7967 21.9144 29.5921 24.4754 27.7492 26.5478Z" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-atyp border border-brand-orange bg-transparent rounded-full px-8 py-3 pb-4">
              $99/mo
              </span>
            </div>
            <h3 className="text-4xl md:text-normal font-atyp mb-2.5">
            Basic Plan
            </h3>
            <p className="md:text-lg mb-6">
            Vitae commodo consectetur volutpat aolme atolmerol euismod amet at arcu volutpa.
            </p>
            <div className="flex flex-col gap-4 mb-14">
              {basic.map((item,idx) => (
                <div className="flex items-center gap-3.5" key={idx}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={26} viewBox="0 0 27 26" fill="none">
                      <g clipPath="url(#clip0_2001_480)">
                        <path d="M13.2124 26C20.3923 26 26.2124 20.1799 26.2124 13C26.2124 5.8201 20.3923 0 13.2124 0C6.0325 0 0.212402 5.8201 0.212402 13C0.212402 20.1799 6.0325 26 13.2124 26Z" fill="#FF462D" />
                        <path d="M7.3291 13.8405L10.6909 17.2023L19.0955 8.79773" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2001_480">
                          <rect width={26} height={26} fill="white" transform="translate(0.212402)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center justify-center bg-brand-orange rounded-full h-14 pb-1 text-lg font-atyp hover:bg-transparent border border-brand-orange px-9">
            Get started
            </button>
          </div>
          {/* second card */}
          <div className="w-full lg:max-w-[704px] bg-brand-black/70 p-4 md:p-10 rounded-2xl">
            <div className="flex items-center lg:min-w-[394px] justify-between mb-6">
              <div className="flex w-[72px] h-[72px] items-center justify-center border border-brand-black-100 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width={31} height={28} viewBox="0 0 31 28" fill="none">
                  <path d="M27.7749 4.66667H22.0265V3.5C22.0265 2.57174 21.6631 1.6815 21.0163 1.02513C20.3695 0.368749 19.4922 0 18.5775 0H11.6794C10.7647 0 9.88739 0.368749 9.24057 1.02513C8.59375 1.6815 8.23037 2.57174 8.23037 3.5V4.66667H2.48198C1.87215 4.66667 1.2873 4.9125 0.856083 5.35008C0.42487 5.78767 0.182617 6.38116 0.182617 7V25.6667C0.182617 26.2855 0.42487 26.879 0.856083 27.3166C1.2873 27.7542 1.87215 28 2.48198 28H27.7749C28.3847 28 28.9696 27.7542 29.4008 27.3166C29.832 26.879 30.0743 26.2855 30.0743 25.6667V7C30.0743 6.38116 29.832 5.78767 29.4008 5.35008C28.9696 4.9125 28.3847 4.66667 27.7749 4.66667ZM10.5297 3.5C10.5297 3.19058 10.6509 2.89383 10.8665 2.67504C11.0821 2.45625 11.3745 2.33333 11.6794 2.33333H18.5775C18.8824 2.33333 19.1748 2.45625 19.3904 2.67504C19.606 2.89383 19.7272 3.19058 19.7272 3.5V4.66667H10.5297V3.5ZM27.7749 7V17.5H2.48198V7H27.7749ZM27.7749 25.6667H2.48198V19.8333H27.7749V25.6667Z" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-atyp border border-brand-orange bg-transparent rounded-full px-8 py-3 pb-4">
              $399/mo
              </span>
            </div>
            <h3 className="text-4xl md:text-normal font-atyp mb-2.5">
            Enterprise Plan
            </h3>
            <p className="md:text-lg mb-6">
            Vitae commodo consectetur volutpat a atolmerol euismod amet at arcu volutpat aliquet justo.
            </p>
            <div className="flex w-full gap-4 justify-between items-center flex-wrap">
              <div className="flex flex-col gap-4 mb-14">
                {basic.map((item,idx) => (
                  <div className="flex items-center gap-3.5" key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={27} height={26} viewBox="0 0 27 26" fill="none">
                        <g clipPath="url(#clip0_2001_534)">
                          <path d="M13.5654 26C20.7453 26 26.5654 20.1799 26.5654 13C26.5654 5.8201 20.7453 0 13.5654 0C6.38553 0 0.56543 5.8201 0.56543 13C0.56543 20.1799 6.38553 26 13.5654 26Z" fill="#121212" />
                          <path d="M7.68213 13.8405L11.0439 17.2023L19.4485 8.79773" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2001_534">
                            <rect width={26} height={26} fill="white" transform="translate(0.56543)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 mb-14">
                {enterprise.map((item,idx) => (
                  <div className="flex items-center gap-3.5" key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={27} height={26} viewBox="0 0 27 26" fill="none">
                        <g clipPath="url(#clip0_2001_534)">
                          <path d="M13.5654 26C20.7453 26 26.5654 20.1799 26.5654 13C26.5654 5.8201 20.7453 0 13.5654 0C6.38553 0 0.56543 5.8201 0.56543 13C0.56543 20.1799 6.38553 26 13.5654 26Z" fill="#121212" />
                          <path d="M7.68213 13.8405L11.0439 17.2023L19.4485 8.79773" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2001_534">
                            <rect width={26} height={26} fill="white" transform="translate(0.56543)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="flex items-center justify-center bg-brand-orange rounded-full h-14 pb-1 text-lg font-atyp hover:bg-transparent border border-brand-orange px-9">
            Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


const basic = ["Reservation Alerts", "Basic Support", "Monthly Reports", "Mobile App Access"]

const enterprise = ["Limited Restaurant Access", "Email Notifications", "Data Analytics", "Social Media Integration"]