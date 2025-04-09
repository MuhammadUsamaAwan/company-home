import Image from 'next/image';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <div className='relative h-screen'>
      <header className='flex h-[150px] items-center justify-between px-[73px] text-white'>
        <Link href='/' className='text-[14px] font-semibold tracking-[0.2em] uppercase'>
          Company
        </Link>
        <nav className='space-x-[44px] text-[13px] font-semibold tracking-[0.2em] uppercase'>
          <Link className='gradient-hover' href='/'>
            Home
          </Link>
          <Link className='gradient-hover' href='/'>
            Pages
          </Link>
          <Link className='gradient-hover' href='/'>
            Portfolio
          </Link>
          <Link className='gradient-hover' href='/'>
            Shop
          </Link>
          <Link className='gradient-hover' href='/'>
            Blog
          </Link>
        </nav>
      </header>
      <Image src='/home1.jpg' alt='home' className='absolute inset-0 -z-10 object-cover object-center' fill />
    </div>
  );
}
