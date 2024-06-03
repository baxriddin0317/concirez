import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { links } from './Header'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import Form from './common/Form'

export const Footer = () => {
  return (
    <footer className='overflow-y-hidden relative pb-10'>
      <div className='max-w-7xl flex flex-col items-center mx-auto px-4 lg:px-5'>
        <Link href={'/'}>
          <Image src={'/img/mini-logo.svg'} width={167} height={41} alt='logo' />
        </Link>
        <nav className='flex items-center gap-14 mt-2'>
          {links.map((link) => (
            <Link className='md:text-lg hover:text-brand-orange transition-all ease-in-out' href={link.href} key={link.id}>{link.name}</Link>
          ))}
        </nav>
        <div className='flex items-center gap-4 mt-8'>
          <Link className='h-9 w-9 rounded hover:bg-brand-orange transition-all duration-300 border border-brand-orange bg-transparent flex items-center justify-center' href={'#'}>
            <FaFacebookF className='text-white' />
          </Link>
          <Link className='h-9 w-9 rounded hover:bg-brand-orange transition-all duration-300 border border-brand-orange bg-transparent flex items-center justify-center' href={'#'}>
            <BsTwitterX className='text-white' />
          </Link>
          <Link className='h-9 w-9 rounded hover:bg-brand-orange transition-all duration-300 border border-brand-orange bg-transparent flex items-center justify-center' href={'#'}>
            <RiInstagramFill className='text-white' />
          </Link>
          <Link className='h-9 w-9 rounded hover:bg-brand-orange transition-all duration-300 border border-brand-orange bg-transparent flex items-center justify-center' href={'#'}>
            <FaLinkedinIn className='text-white' />
          </Link>
        </div>
        <p className='mt-8 text-center mb-4'>
        Subscribe to our newsletter
        </p>
        <Form />

        <div className='w-full flex flex-col lg:flex-row gap-4 items-center justify-between mt-16'>
          <p className='md:text-lg text-center md:text-left'>Copyright © 2023 Concirez | All Rights Reserved </p>
          <nav className='flex items-center gap-4 sm:gap-8 mt-2'>
            {terms.map((link) => (
              <Link className='text-sm hover:text-brand-orange transition-all ease-in-out underline' href={link.href} key={link.id}>{link.name}</Link>
            ))}
          </nav>
        </div>
        <div className='w-full h-px bg-secondary-2 mt-3'></div>
      </div>
      <div className="absolute -bottom-40 left-1/2 translate-y-full -translate-x-1/2 w-[600px] md:w-[1440px] h-[735px] bg-brand-orange blur-[250px]"></div>
    </footer>
  )
}

const terms = [
  {
    id: 1,
    name: "Privacy Policy",
    href: "#"
  },
  {
    id: 2,
    name: "Terms of Service",
    href: "#"
  },
  {
    id: 3,
    name: "Cookie Policy",
    href: "#"
  },
]