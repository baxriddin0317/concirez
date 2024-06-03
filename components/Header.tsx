import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'

const links = [
  {
    id: 1,
    name: "Pricing",
    href: "#"
  },
  {
    id: 1,
    name: "How?",
    href: "#"
  },
  {
    id: 1,
    name: "FAQs",
    href: "#"
  },
]

export const Header = () => {
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
        <button className='md:hidden'>
          <RiMenu3Fill className='text-white text-3xl hover:text-brand-orange' />
        </button>
      </div>
    </header>
  )
}
