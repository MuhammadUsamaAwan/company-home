import Image from 'next/image';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <div className='relative h-screen'>
      <header className='flex h-[150px] items-center justify-between px-[73px]'>
        <Link href='/' className='text-[14px] font-semibold tracking-[0.2em] text-white uppercase'>
          Company
        </Link>
        <nav className='flex items-center space-x-[44px]'>
          <div className='group relative'>
            <Link
              className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
              href='/'
            >
              Home
            </Link>
            <div className='invisible absolute top-full left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
              <div className='flex flex-col gap-y-2.5 bg-white px-[38px] py-[23px]'>
                <Link href='/' className='gradient-hover w-max'>
                  Main Home
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  App Presentation
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Digital Services
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Product Showcase
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Company Home
                </Link>
              </div>
            </div>
          </div>
          <div className='group relative'>
            <Link
              className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
              href='/'
            >
              Pages
            </Link>
            <div className='invisible absolute top-full left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
              <div className='flex flex-col gap-y-2.5 bg-white px-[38px] py-[23px]'>
                <Link href='/' className='gradient-hover w-max'>
                  Main Home
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  App Presentation
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Digital Services
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Product Showcase
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Company Home
                </Link>
              </div>
            </div>
          </div>
          <div className='group relative'>
            <Link
              className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
              href='/'
            >
              Portfolio
            </Link>
            <div className='invisible absolute top-full left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
              <div className='flex flex-col gap-y-2.5 bg-white px-[38px] py-[23px]'>
                <Link href='/' className='gradient-hover w-max'>
                  Main Home
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  App Presentation
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Digital Services
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Product Showcase
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Company Home
                </Link>
              </div>
            </div>
          </div>
          <div className='group relative'>
            <Link
              className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
              href='/'
            >
              Shop
            </Link>
            <div className='invisible absolute top-full left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
              <div className='flex flex-col gap-y-2.5 bg-white px-[38px] py-[23px]'>
                <Link href='/' className='gradient-hover w-max'>
                  Main Home
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  App Presentation
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Digital Services
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Product Showcase
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Company Home
                </Link>
              </div>
            </div>
          </div>
          <div className='group relative'>
            <Link
              className='gradient-hover block py-[68px] text-[13px] font-semibold tracking-[0.2em] text-white uppercase'
              href='/'
            >
              Blog
            </Link>
            <div className='invisible absolute top-full left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'>
              <div className='flex flex-col gap-y-2.5 bg-white px-[38px] py-[23px]'>
                <Link href='/' className='gradient-hover w-max'>
                  Main Home
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  App Presentation
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Digital Services
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Product Showcase
                </Link>
                <Link href='/' className='gradient-hover w-max'>
                  Company Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Image src='/home1.jpg' alt='home' className='absolute inset-0 -z-10 object-cover object-center' fill />
    </div>
  );
}
