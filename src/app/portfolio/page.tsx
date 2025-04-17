import Image from 'next/image';

export default function PortfolioPage() {
  return (
    <div>
      <div className='mt-[150px] flex h-[110px] items-center justify-center'>
        <h1 className='font-heading text-center text-[60px] font-semibold text-[#9e9e9e]'>Portfolio</h1>
      </div>
      <div className='flex justify-center gap-[54px] pt-10 pb-20'>
        <button className='gradient-hover cursor-pointer font-sans text-[13px] font-semibold tracking-[0.2em] uppercase'>
          Show All
        </button>
        <button className='gradient-hover cursor-pointer font-sans text-[13px] font-semibold tracking-[0.2em] uppercase'>
          Design
        </button>
        <button className='gradient-hover cursor-pointer font-sans text-[13px] font-semibold tracking-[0.2em] uppercase'>
          Digital
        </button>
        <button className='gradient-hover cursor-pointer font-sans text-[13px] font-semibold tracking-[0.2em] uppercase'>
          Gadgets
        </button>
      </div>
      <div className='padding-left padding-right grid grid-cols-3 gap-[30px] pb-[170px]'>
        <div className='group relative h-[413px] w-[413px] overflow-hidden'>
          <Image
            src='/portfolio1.jpg'
            alt='portfolio'
            className='scale-105 object-cover object-center duration-400 group-hover:scale-100'
            fill
          />
          <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-70'></div>
          <div className='font-heading gradient-porfolio absolute bottom-7.5 left-10 cursor-none text-[30px] leading-[1.16em] font-semibold group-hover:bg-right'>
            Tablets
          </div>
        </div>
        <div className='group relative h-[413px] w-[413px] overflow-hidden'>
          <Image
            src='/portfolio2.jpg'
            alt='portfolio'
            className='scale-105 object-cover object-center duration-400 group-hover:scale-100'
            fill
          />
          <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-70'></div>
          <div className='font-heading gradient-porfolio absolute bottom-7.5 left-10 cursor-none text-[30px] leading-[1.16em] font-semibold group-hover:bg-right'>
            Tablets
          </div>
        </div>
        <div className='group relative h-[413px] w-[413px] overflow-hidden'>
          <Image
            src='/portfolio3.jpg'
            alt='portfolio'
            className='scale-105 object-cover object-center duration-400 group-hover:scale-100'
            fill
          />
          <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-70'></div>
          <div className='font-heading gradient-porfolio absolute bottom-7.5 left-10 cursor-none text-[30px] leading-[1.16em] font-semibold group-hover:bg-right'>
            Tablets
          </div>
        </div>
        <div className='group relative h-[413px] w-[413px] overflow-hidden'>
          <Image
            src='/portfolio1.jpg'
            alt='portfolio'
            className='scale-105 object-cover object-center duration-400 group-hover:scale-100'
            fill
          />
          <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-70'></div>
          <div className='font-heading gradient-porfolio absolute bottom-7.5 left-10 cursor-none text-[30px] leading-[1.16em] font-semibold group-hover:bg-right'>
            Tablets
          </div>
        </div>
        <div className='group relative h-[413px] w-[413px] overflow-hidden'>
          <Image
            src='/portfolio2.jpg'
            alt='portfolio'
            className='scale-105 object-cover object-center duration-400 group-hover:scale-100'
            fill
          />
          <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-70'></div>
          <div className='font-heading gradient-porfolio absolute bottom-7.5 left-10 cursor-none text-[30px] leading-[1.16em] font-semibold group-hover:bg-right'>
            Tablets
          </div>
        </div>
        <div className='group relative h-[413px] w-[413px] overflow-hidden'>
          <Image
            src='/portfolio3.jpg'
            alt='portfolio'
            className='scale-105 object-cover object-center duration-400 group-hover:scale-100'
            fill
          />
          <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-70'></div>
          <div className='font-heading gradient-porfolio absolute bottom-7.5 left-10 cursor-none text-[30px] leading-[1.16em] font-semibold group-hover:bg-right'>
            Tablets
          </div>
        </div>
      </div>
    </div>
  );
}
