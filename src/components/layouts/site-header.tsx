'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { cn } from '~/lib/cn';

import { Burger } from './burger';

export function SiteHeader() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      setIsTop(currentScrollY < window.innerHeight);
      if (currentScrollY < window.innerHeight) {
        setShowNav(true);
      } else {
        setShowNav(!isScrollingDown);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const content = (
    <>
      <Link
        href='/'
        className={cn('font-sans text-[14px] font-semibold tracking-[0.2em] uppercase', isTop && 'lg:text-white')}
      >
        Company
      </Link>
      <nav className='hidden items-center space-x-[44px] font-sans lg:flex'>
        <Link
          className={cn(
            'gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] uppercase',
            isTop && 'text-white'
          )}
          href='/'
        >
          Home
        </Link>
        <Link
          className={cn(
            'gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] uppercase',
            isTop && 'text-white'
          )}
          href='/'
        >
          Pages
        </Link>
        <Link
          className={cn(
            'gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] uppercase',
            isTop && 'text-white'
          )}
          href='/'
        >
          Portfolio
        </Link>
        <Link
          className={cn(
            'gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] uppercase',
            isTop && 'text-white'
          )}
          href='/'
        >
          Shop
        </Link>
        <Link
          className={cn(
            'gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] uppercase',
            isTop && 'text-white'
          )}
          href='/'
        >
          Blog
        </Link>
      </nav>
      <Burger open={open} setOpen={setOpen} />
      <nav
        ref={ref}
        className='absolute top-[70px] left-0 w-full overflow-hidden bg-white font-sans shadow-sm duration-400 lg:hidden'
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
    </>
  );

  return (
    <>
      <header
        className={cn(
          'absolute top-0 z-10 hidden h-[70px] w-full items-center justify-between bg-white px-[7%] md:px-[40px] lg:flex lg:h-[150px] lg:bg-transparent lg:px-[73px]'
        )}
      >
        {content}
      </header>
      <header
        className={cn(
          'fixed top-0 z-10 flex w-full items-center justify-between px-[7%] duration-400 md:px-[40px] lg:px-[73px]',
          isTop && 'lg:hidden',
          showNav ? 'h-[70px] translate-y-0 bg-white shadow-sm' : 'h-[70px] -translate-y-full'
        )}
      >
        {content}
      </header>
    </>
  );
}
