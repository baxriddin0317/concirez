'use client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React from "react";

export const HowItWork = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 lg:px-5 text-center mt-24">
      {/* head */}
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-brand-orange text-lg font-bold uppercase">how</p>
        <h3 className="font-atyp text-5xl capitalize font-semibold">
          How it <span className="text-brand-orange">Works?</span>
        </h3>
        <p className="text-lg">
          Concirez streamlines the process of securing exclusive restaurant
          reservations for reservation traders. With our easy-to-use desktop
          application, you can access some of the most sought-after restaurants
          in the world.
        </p>
      </div>
      {/* tab */}
      <TabGroup className="flex flex-col lg:flex-row items-center gap-10 mt-14">
        <TabList className="w-full max-w-[541px] flex-1 flex flex-col gap-6">
          <Tab className="bg-secondary backdrop-blur-xl text-left px-11 py-7 border border-brand-black-100 rounded-2xl data-[selected]:bg-tab data-[selected]:py-12 data-[selected]:outline-none">
            {({ hover, selected }) => (
              <>
                <h3 className="text-2xl font-atyp">
                01. Browse Exclusive Restaurants
                </h3>
                <p className={`text-xl mt-2.5 ${selected ? '' : 'hidden'}`}>
                Discover a curated selection of the world's top restaurants.
                </p>
              </>
            )}
          </Tab>
          <Tab className="bg-secondary backdrop-blur-xl text-left px-11 py-7 border border-brand-black-100 rounded-2xl data-[selected]:bg-tab data-[selected]:py-12 data-[selected]:outline-none">
          {({ hover, selected }) => (
              <>
                <h3 className="text-2xl font-atyp">
                02. Reserve with Ease
                </h3>
                <p className={`text-xl mt-2.5 ${selected ? '' : 'hidden'}`}>
                Discover a curated selection of the world's top restaurants.
                </p>
              </>
            )}
          </Tab>
          <Tab className="bg-secondary backdrop-blur-xl text-left px-11 py-7 border border-brand-black-100 rounded-2xl data-[selected]:bg-tab data-[selected]:py-12 data-[selected]:outline-none">
          {({ hover, selected }) => (
              <>
                <h3 className="text-2xl font-atyp">
                03. Enjoy Exclusive Dining
                </h3>
                <p className={`text-xl mt-2.5 ${selected ? '' : 'hidden'}`}>
                Discover a curated selection of the world's top restaurants.
                </p>
              </>
            )}
          </Tab>
        </TabList>
        <TabPanels className="w-full max-h-[500px] h-[500px] flex-1 overflow-y-scroll bg-secondary backdrop-blur-xl border border-brand-black-100 rounded-2xl">
          <TabPanel className="w-full flex flex-col gap-2 px-4 sm:px-16 lg:px-4 xl:px-16 py-5">
            {[...Array(18)].map((item, idx) => (
              <TabCard key={idx} />
            ))}
          </TabPanel>
          <TabPanel className="w-full flex flex-col gap-2 px-12 lg:px-16 py-5">
            {[...Array(5)].map((item, idx) => (
              <TabCard key={idx} />
            ))}
          </TabPanel>
          <TabPanel className="w-full flex flex-col gap-2 px-12 lg:px-16 py-5">
            {[...Array(3)].map((item, idx) => (
              <TabCard key={idx} />
            ))}
          </TabPanel>
        </TabPanels>
      </TabGroup>

      
    </section>
  );
};

const TabCard = () => {
  return (
    <div className="flex items-center bg-card px-3 py-2.5 border border-brand-black-100 rounded-lg text-brand-gray">
      <div className="flex items-center gap-2">
        <Image className="rounded" src={'/img/card-1.png'} width={30} height={30} alt="" />
        <h4 className="text-xxs">
        Hells Kitchen
        </h4>
      </div>
      <div className="flex items-center gap-1 ml-8">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.37575 0.727631C5.29099 0.727631 4.2306 1.0493 3.32865 1.65196C2.42671 2.25462 1.72373 3.1112 1.30861 4.11339C0.89349 5.11557 0.784876 6.21835 0.996502 7.28227C1.20813 8.34618 1.73049 9.32345 2.49753 10.0905C3.26457 10.8575 4.24184 11.3799 5.30575 11.5915C6.36967 11.8031 7.47245 11.6945 8.47463 11.2794C9.47682 10.8643 10.3334 10.1613 10.9361 9.25937C11.5387 8.35742 11.8604 7.29702 11.8604 6.21227C11.8589 4.75812 11.2805 3.36398 10.2523 2.33574C9.22404 1.3075 7.8299 0.729166 6.37575 0.727631ZM9.84373 9.29263C9.37319 8.61078 8.71156 8.08327 7.94204 7.77644C8.3554 7.45087 8.65703 7.00458 8.80499 6.49963C8.95294 5.99468 8.93987 5.45617 8.76759 4.959C8.5953 4.46182 8.27237 4.03069 7.8437 3.72556C7.41503 3.42043 6.90193 3.25646 6.37575 3.25646C5.84957 3.25646 5.33647 3.42043 4.9078 3.72556C4.47913 4.03069 4.1562 4.46182 3.98392 4.959C3.81163 5.45617 3.79856 5.99468 3.94652 6.49963C4.09447 7.00458 4.39611 7.45087 4.80947 7.77644C4.03994 8.08327 3.37831 8.61078 2.90777 9.29263C2.3132 8.62401 1.92459 7.79777 1.78872 6.9134C1.65286 6.02904 1.77554 5.12425 2.14199 4.30799C2.50844 3.49173 3.10304 2.79881 3.85419 2.31266C4.60534 1.82651 5.48101 1.56786 6.37575 1.56786C7.27049 1.56786 8.14616 1.82651 8.89731 2.31266C9.64846 2.79881 10.2431 3.49173 10.6095 4.30799C10.976 5.12425 11.0986 6.02904 10.9628 6.9134C10.8269 7.79777 10.4383 8.62401 9.84373 9.29263Z" fill="#E7E7F6" />
          </svg>
        </span>
        <p className="text-xxs">
        Profile 3
        </p>
      </div>
      <div className="ml-5">
        <p className="text-xxs ">
        May 27,2024 / 08:17:57 AM
        </p>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width={12} height={13} viewBox="0 0 12 13" fill="none">
            <path d="M1.86503 0.478189L10.8458 5.67314V5.67432C10.9901 5.7575 11.1094 5.87437 11.1922 6.01372C11.2749 6.15306 11.3184 6.31019 11.3184 6.47001C11.3184 6.62982 11.2749 6.78695 11.1922 6.9263C11.1094 7.06564 10.9901 7.18252 10.8458 7.26569L1.86753 12.4606C1.71056 12.5512 1.53028 12.5991 1.34643 12.5992C1.08303 12.6001 0.830008 12.5021 0.642994 12.3267C0.455979 12.1513 0.350276 11.9128 0.349121 11.6638V1.27505C0.349377 1.10901 0.396401 0.946031 0.485356 0.802871C0.574312 0.659711 0.701988 0.541539 0.855256 0.460507C1.01 0.378196 1.18517 0.336439 1.36269 0.339548C1.5402 0.342656 1.71362 0.390517 1.86503 0.478189Z" fill="#27AE60" />
          </svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
              <path d="M2.67627 4.5726H3.96677H14.2908" stroke="#E7E7F6" strokeWidth="1.2905" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.90255 4.57261V3.28211C5.90255 2.93985 6.03851 2.6116 6.28053 2.36959C6.52255 2.12757 6.85079 1.99161 7.19305 1.99161H9.77406C10.1163 1.99161 10.4446 2.12757 10.6866 2.36959C10.9286 2.6116 11.0646 2.93985 11.0646 3.28211V4.57261M13.0003 4.57261V13.6061C13.0003 13.9484 12.8644 14.2766 12.6223 14.5187C12.3803 14.7607 12.0521 14.8966 11.7098 14.8966H5.2573C4.91504 14.8966 4.58679 14.7607 4.34478 14.5187C4.10276 14.2766 3.9668 13.9484 3.9668 13.6061V4.57261H13.0003Z" stroke="#E7E7F6" strokeWidth="1.2905" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
      </div>
    </div>
  );
};