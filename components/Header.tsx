'use client'
import { links } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiCloseLine, RiInstagramFill, RiMenu3Fill } from 'react-icons/ri'

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='max-w-7xl mx-auto px-4 lg:px-10 mt-12 h-14'>
      <div className='flex items-center justify-between gap-2'>
        <Link href={'/'}>
          <Image src={'/img/logo.svg'} width={167} height={41} alt='logo' />
        </Link>
        <nav className='hidden md:flex items-center gap-14'>
          {links.map((link) => (
            <Link className='text-lg hover:text-brand-orange transition-all ease-in-out' href={link.href} key={link.id}>{link.name}</Link>
          ))}
        </nav>
        <button className='hidden md:flex bg-transparent items-center justify-center h-14 pb-1 px-8 rounded-full border border-brand-orange text-lg font-atyp hover:bg-brand-orange transition-all duration-300 ease-in-out'>
        Sign Up
        </button>
        <button onClick={() => setOpen(true)} className='md:hidden'>
          <RiMenu3Fill className='text-white text-3xl hover:text-brand-orange' />
        </button>
      </div>
      {/* mobile menu */}
      <div className={`fixed z-[999] md:hidden bg-black h-screen top-0 ${open ? 'left-0 ' : '-left-full'} w-full overflow-hidden px-8 pt-12 transition-all duration-300 ease-in-out`}>
        <div className='w-full flex items-center justify-between'>
          <Link href={'/'}>
            <Image src={'/img/logo.svg'} width={167} height={41} alt='logo' />
          </Link>
          <button onClick={() => setOpen(false)} className='md:hidden'>
            <RiCloseLine className='text-white text-3xl hover:text-brand-orange' />
          </button>
        </div>
        <nav className='flex flex-col items-center gap-6 mt-10'>
          {links.map((link) => (
            <Link onClick={() => setOpen(false)} className='text-lg hover:text-brand-orange transition-all ease-in-out' href={link.href} key={link.id}>{link.name}</Link>
          ))}
        </nav>
        <div className='flex items-center justify-center gap-4 mt-8'>
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

        <button onClick={() => setOpen(false)} className='flex bg-transparent items-center justify-center h-14 pb-1 px-8 rounded-full border border-brand-orange text-lg font-atyp hover:bg-brand-orange transition-all duration-300 ease-in-out mt-10 mx-auto'>
        Sign Up
        </button>
      </div>
    </header>
  )
}
