import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='padding-left padding-right flex min-h-dvh flex-col bg-[#1b1b1b] pt-24'>
      <div className='flex flex-1 flex-col items-center gap-y-7.5 lg:flex-row'>
        <div className='w-full flex-1 text-white'>
          <div className='text-sans mb-8 font-sans text-[40px] font-semibold tracking-[0.2em] uppercase'>Company</div>
          <div className='grid items-center gap-7.5 sm:flex'>
            <div className='space-y-2'>
              <div className='gradient-hover'>A: Seestrasse 21</div>
              <div className='gradient-hover'>T: 00 1 23 45 67 89</div>
              <div className='gradient-hover'>E: qi@example.com</div>
              <div className='gradient-hover'>T: 99 8 76 54 321</div>
            </div>
            <div className='space-y-2'>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Home
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Pages
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Portfolio
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Shop
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Blog
              </Link>
            </div>
            <div className='space-y-2'>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                About Us
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                About Me
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Our Process
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Our Team
              </Link>
              <Link
                href='/'
                className='gradient-hover block font-sans text-[13px] font-medium tracking-[0.2em] uppercase'
              >
                Pricing Plan
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full flex-1'>
          <div className='font-heading text-[30px] leading-[1.1em] font-semibold text-white'>Our Newsletter</div>
          <input
            type='email'
            placeholder='Your email'
            className='mt-6 mb-7.5 w-full border-b border-[#5cc2ed] py-[11px] text-white outline-none placeholder:text-[#6e6e6e] placeholder:duration-400 focus:placeholder:text-white'
          />
          <button className='group flex min-w-48 items-center space-x-4'>
            <div className='h-px w-20 bg-white duration-400 group-hover:w-0'></div>
            <span className='font-sans text-xs font-medium tracking-[0.2em] text-white uppercase'>Subscribe</span>
          </button>
        </div>
      </div>
      <p className='pt-24 pb-12 text-[15px] text-[#6e6e6e]'>
        © {new Date().getFullYear()} Company, All Rights Reserved
      </p>
    </footer>
  );
}
