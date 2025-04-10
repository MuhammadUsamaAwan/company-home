'use client';

import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export function Portfolio() {
  const [emblaRef] = useEmblaCarousel({ loop: false, inViewThreshold: 1 }, [Autoplay({ delay: 4000 })]);

  return (
    <div className='py-[173px] pl-[calc((100%-86%)/2)] md:pl-[calc((100%-768px)/2)] lg:pl-[calc((100%-1100px)/2)] xl:pl-[calc((100%-1300px)/2)]'>
      <div className='font-heading text-[13px] font-medium tracking-[4px] text-[#8A8A8A] uppercase'>Porfolio</div>
      <h2 className='font-heading mt-[9px] max-w-md text-[50px] leading-[1.1em] font-semibold'>
        Inovation and Digital Branding
      </h2>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-5 pt-[41px]'>
          <div className='group flex-none basis-[5/2]'>
            <div className='relative h-[376px] w-[685px] overflow-hidden'>
              <Image
                src='/portfolio1.jpg'
                alt='portfolio'
                className='scale-105 object-cover duration-400 group-hover:scale-100'
                fill
              />
              <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-50'></div>
            </div>
            <div className='font-heading mt-3 text-[30px] leading-[1.1em] font-semibold'>Digital Strategy</div>
          </div>
          <div className='group flex-none basis-[5/2]'>
            <div className='relative h-[376px] w-[685px] overflow-hidden'>
              <Image
                src='/portfolio2.jpg'
                alt='portfolio'
                className='scale-105 object-cover duration-400 group-hover:scale-100'
                fill
              />
              <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-50'></div>
            </div>
            <div className='font-heading mt-3 text-[30px] leading-[1.1em] font-semibold'>Digital Strategy</div>
          </div>
          <div className='group flex-none basis-[5/2]'>
            <div className='relative h-[376px] w-[685px] overflow-hidden'>
              <Image
                src='/portfolio3.jpg'
                alt='portfolio'
                className='scale-105 object-cover duration-400 group-hover:scale-100'
                fill
              />
              <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-50'></div>
            </div>
            <div className='font-heading mt-3 text-[30px] leading-[1.1em] font-semibold'>Digital Strategy</div>
          </div>
          <div className='group flex-none basis-[5/2]'>
            <div className='relative h-[376px] w-[685px] overflow-hidden'>
              <Image
                src='/portfolio1.jpg'
                alt='portfolio'
                className='scale-105 object-cover duration-400 group-hover:scale-100'
                fill
              />
              <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-50'></div>
            </div>
            <div className='font-heading mt-3 text-[30px] leading-[1.1em] font-semibold'>Digital Strategy</div>
          </div>
          <div className='group flex-none basis-[5/2]'>
            <div className='relative h-[376px] w-[685px] overflow-hidden'>
              <Image
                src='/portfolio2.jpg'
                alt='portfolio'
                className='scale-105 object-cover duration-400 group-hover:scale-100'
                fill
              />
              <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-50'></div>
            </div>
            <div className='font-heading mt-3 text-[30px] leading-[1.1em] font-semibold'>Digital Strategy</div>
          </div>
          <div className='group flex-none basis-[5/2]'>
            <div className='relative h-[376px] w-[685px] overflow-hidden'>
              <Image
                src='/portfolio3.jpg'
                alt='portfolio'
                className='scale-105 object-cover duration-400 group-hover:scale-100'
                fill
              />
              <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-400 group-hover:opacity-50'></div>
            </div>
            <div className='font-heading mt-3 text-[30px] leading-[1.1em] font-semibold'>Digital Strategy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
