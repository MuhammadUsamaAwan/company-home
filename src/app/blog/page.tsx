import Image from 'next/image';

export default function BlogPage() {
  return (
    <div>
      <div className='mt-[150px] flex h-[110px] items-center justify-center'>
        <h1 className='font-heading text-center text-[60px] font-semibold text-[#9e9e9e]'>Blog</h1>
      </div>
      <div className='padding-left padding-right mt-20'>
        <div className='mb-20'>
          <div className='relative h-[807px] w-full'>
            <Image src='/blogpage1.jpg' alt='Blog Image' fill />
          </div>
          <div className='font-heading mt-[30px] mb-2 text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase'>
            November 23, 2021 / Design
          </div>
          <div className='font-heading text-[50px] leading-[1.1em] font-semibold'>
            Best Way to Find a Perfect Design for your New Logo and Rebrand your Whole Look
          </div>
        </div>
        <div className='mb-20'>
          <div className='relative h-[807px] w-full'>
            <Image src='/blogpage1.jpg' alt='Blog Image' fill />
          </div>
          <div className='font-heading mt-[30px] mb-2 text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase'>
            November 23, 2021 / Design
          </div>
          <div className='font-heading text-[50px] leading-[1.1em] font-semibold'>
            Best Way to Find a Perfect Design for your New Logo and Rebrand your Whole Look
          </div>
        </div>
        <div className='mb-20'>
          <div className='relative h-[807px] w-full'>
            <Image src='/blogpage1.jpg' alt='Blog Image' fill />
          </div>
          <div className='font-heading mt-[30px] mb-2 text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase'>
            November 23, 2021 / Design
          </div>
          <div className='font-heading text-[50px] leading-[1.1em] font-semibold'>
            Best Way to Find a Perfect Design for your New Logo and Rebrand your Whole Look
          </div>
        </div>
      </div>
    </div>
  );
}
