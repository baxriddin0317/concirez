import Image from 'next/image'
import React from 'react'

export const Block = () => {
  return (
    <section className='relative mt-14'>
      <div className='max-w-7xl relative mx-auto px-4 lg:px-5'>
        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 max-w-96 w-full h-48 md:max-w-[942px] md:h-[425px] bg-brand-orange blur-[136px]'></div>
        <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-full max-w-[556px] h-[109px] rounded-[756.046px] blur-[109px] bg-brand-orange"></div>
        <div className='w-full max-h-[642px] h-full overflow-y-scroll bg-primary backdrop-blur-xl border border-brand-black-100 rounded-2xl px-5 pt-5 pb-8'>
          <Image className='w-full rounded-2xl overflow-hidden' src={'/img/dashboard.jpg'} alt='ddashboard' width={1156} height={822} />
        </div>
      </div>
      <div className='max-w-7xl relative mx-auto px-4 lg:px-5 my-20'>
        <div className='flex flex-wrap items-center justify-between gap-8'>
          {logos.map((item,idx) => (
            <Image key={idx} src={`/img/${item}.svg`} width={111} height={26} alt='' />
          ))}
        </div>
      </div>
    </section>
  )
}

const logos = ["google", "facebook", "youtube", "pinterest", "twitch", "webflow"]
