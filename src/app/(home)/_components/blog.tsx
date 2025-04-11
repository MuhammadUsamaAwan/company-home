import Image from 'next/image';

export function Blog() {
  return (
    <div className='padding-x flex flex-col gap-[30px] py-[165px] xl:flex-row'>
      <div className='group'>
        <div className='relative h-[415px] w-full xl:w-[535px]'>
          <Image src='/blog1.jpg' alt='blog' className='object-cover object-center' fill />
        </div>
        <div className='font-heading mt-[21px] mb-3.5 text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase'>
          November 23, 2021 / Design
        </div>
        <h2 className='font-heading mb-5 text-[30px] leading-[1.16em] font-semibold'>
          Digital Strategy Design and Solutions for Great Success
        </h2>
        <div className='flex items-center space-x-4'>
          <div className='h-px w-20 bg-[#5d62ee] duration-400 group-hover:w-0'></div>
          <span className='font-sans text-xs font-medium tracking-[0.2em] uppercase'>Read More</span>
        </div>
      </div>
      <div className='group'>
        <div className='relative h-[415px] w-full xl:w-[535px]'>
          <Image src='/blog2.jpg' alt='blog' className='object-cover object-center' fill />
        </div>
        <div className='font-heading mt-[21px] mb-3.5 text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase'>
          November 23, 2021 / Design
        </div>
        <h2 className='font-heading mb-5 text-[30px] leading-[1.16em] font-semibold'>
          Digital Design That Will Help You Start Your Business
        </h2>
        <div className='flex items-center space-x-4'>
          <div className='h-px w-20 bg-[#5d62ee] duration-400 group-hover:w-0'></div>
          <span className='font-sans text-xs font-medium tracking-[0.2em] uppercase'>Read More</span>
        </div>
      </div>
    </div>
  );
}
