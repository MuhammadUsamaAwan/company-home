'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Burger } from './burger';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className='relative h-screen'>
      <header className='flex h-[70px] items-center justify-between bg-white px-[7%] md:px-[40px] lg:h-[150px] lg:bg-transparent lg:px-[73px]'>
        <Link href='/' className='text-[14px] font-semibold tracking-[0.2em] uppercase lg:text-white'>
          Company
        </Link>
        <nav className='hidden items-center space-x-[44px] lg:flex'>
          <Link
            className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
            href='/'
          >
            Home
          </Link>
          <Link
            className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
            href='/'
          >
            Pages
          </Link>
          <Link
            className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
            href='/'
          >
            Portfolio
          </Link>
          <Link
            className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
            href='/'
          >
            Shop
          </Link>
          <Link
            className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
            href='/'
          >
            Blog
          </Link>
        </nav>
        <Burger open={open} setOpen={setOpen} />
        <nav
          ref={ref}
          className={'absolute top-[70px] left-0 w-full overflow-hidden bg-white duration-400 lg:hidden'}
          style={{
            maxHeight: open ? ref.current?.scrollHeight : 0,
          }}
        >
          <div className='px-[7%] pt-4.5 pb-9 md:px-[40px]'>
            <Link href='/' className='block py-3 text-[13px] font-semibold tracking-[0.2em] uppercase'>
              Home
            </Link>
            <Link href='/' className='block py-3 text-[13px] font-semibold tracking-[0.2em] uppercase'>
              Pages
            </Link>
            <Link href='/' className='block py-3 text-[13px] font-semibold tracking-[0.2em] uppercase'>
              Portfolio
            </Link>
            <Link href='/' className='block py-3 text-[13px] font-semibold tracking-[0.2em] uppercase'>
              Shop
            </Link>
            <Link href='/' className='block py-3 text-[13px] font-semibold tracking-[0.2em] uppercase'>
              Blog
            </Link>
          </div>
        </nav>
      </header>
      <Image src='/home1.jpg' alt='home' className='absolute inset-0 -z-10 object-cover object-center' fill />
    </div>
  );
}
