import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import React from 'react'

export const FAQs = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 lg:px-5 py-24 my-1'>
      {/* head */}
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <p className="text-brand-orange md:text-lg font-bold uppercase">FAQs</p>
        <h3 className="font-atyp text-4xl md:text-5xl capitalize font-semibold">
        Get Your <span className="text-brand-orange">Answers</span>
        </h3>
        <p className="md:text-lg">
        Explore our FAQ section to find solutions to your queries about Concirez and our exclusive reservation services.
        </p>
      </div>
      {/* dropdowns */}
      <div className='grid lg:grid-cols-2 gap-x-10 gap-y-6 mt-10'>
        <div className='flex flex-col gap-y-6'>
          {disclosureData.filter(item => item.id % 2 !== 0).map(item => (
            <Disclosure as="div" key={item.id} defaultOpen={item.id === 1} className="bg-secondary backdrop-blur-lg border border-brand-black-100 p-4 md:p-7 rounded-2xl">
              <DisclosureButton className="w-full h-20 group flex items-center justify-between">
                <span className='line-clamp-2 text-2xl text-left'>
                {item.title}
                </span>
                <span className='group-data-[open]:rotate-90 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={35} viewBox="0 0 36 35" fill="none">
                    <path d="M11.8003 30.625L24.9379 17.5L11.8003 4.375" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </DisclosureButton>
                <DisclosurePanel className="md:text-lg leading-8 pt-4">
                  {item.text}
                </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
        <div className='flex flex-col gap-y-6'>
          {disclosureData.filter(item => item.id % 2 == 0).map(item => (
            <Disclosure as="div" key={item.id} className="bg-secondary backdrop-blur-lg border border-brand-black-100 p-4 md:p-7 rounded-2xl">
              <DisclosureButton className="w-full h-20 group flex items-center justify-between">
                <span className='line-clamp-2 text-2xl text-left'>
                {item.title}
                </span>
                <span className='group-data-[open]:rotate-90 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={35} viewBox="0 0 36 35" fill="none">
                    <path d="M11.8003 30.625L24.9379 17.5L11.8003 4.375" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </DisclosureButton>
                <DisclosurePanel className="md:text-lg leading-8 pt-4">
                  {item.text}
                </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-stretch md:items-center justify-center mt-10 gap-6'>
        <button className="flex items-center justify-center bg-brand-orange rounded-full h-14 pb-1 md:text-lg font-atyp border border-brand-orange px-9">
        Ask Question
        </button>
        <button className="flex items-center justify-center bg-transparent rounded-full h-14 pb-1 md:text-lg font-atyp border border-brand-orange px-9">
        View More Question
        </button>
      </div>
    </section>
  )
}

const disclosureData = [
  {
    id: 1,
    title: "How does Concirez secure exclusive restaurant reservations?",
    text: "Concirez partners with premier New York restaurants to secure exclusive reservations, prioritizing member access to sought-after tables."
  },
  {
    id: 2,
    title: "What Are You Doing?",
    text: " reservations, prioritizing member access to sought-after tables."
  },
  {
    id: 3,
    title: "Can I choose specific restaurants and times for my reservations?",
    text: "Concirez partners with premier New York restaurants to secure exclusive reservations, prioritizing member access to sought-after tables."
  },
  {
    id: 4,
    title: "What Are You Doing?",
    text: "Concirez partners with premier New York restaurants to secure exclusive reservations, prioritizing member access to sought-after tables."
  },
  {
    id: 5,
    title: "What Are You Doing?",
    text: "Concirez partners with premier New York restaurants to secure exclusive reservations, prioritizing member access to sought-after tables."
  },
  {
    id: 6,
    title: "What Are You Doing?",
    text: "Concirez partners with premier New York restaurants to secure exclusive reservations, prioritizing member access to sought-after tables."
  },
]