'use client';

import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Button } from '~/components/ui/button';

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 9000 })]);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex'>
        <div className='relative flex h-dvh min-w-0 flex-none basis-full items-center overflow-hidden'>
          <Image
            src='/home1.jpg'
            alt='home'
            className='subtle-zoom absolute inset-0 -z-10 object-cover object-center'
            fill
          />
          <div className='max-w-2xl pl-[10%] sm:pl-40'>
            <h1 className='font-heading mb-7.5 text-6xl font-bold text-white sm:text-7xl'>
              Digital Agency for Creators
            </h1>
            <Button>View More</Button>
          </div>
        </div>
        <div className='relative flex h-dvh min-w-0 flex-none basis-full items-center overflow-hidden'>
          <Image
            src='/home2.jpg'
            alt='home'
            className='subtle-zoom absolute inset-0 -z-10 object-cover object-center'
            fill
          />
          <div className='max-w-2xl pl-[10%] sm:pl-40'>
            <h1 className='font-heading mb-7.5 text-6xl font-bold text-white sm:text-7xl'>Proper Database Security</h1>
            <Button>View More</Button>
          </div>
        </div>
      </div>
      <div className='absolute right-22 bottom-10 flex items-center gap-4'>
        <button
          className='gradient-hover cursor-pointer text-xs tracking-[0.2em] text-white uppercase'
          onClick={() => emblaApi?.scrollPrev()}
        >
          Prev
        </button>
        <div className='h-px w-32 bg-white'></div>
        <button
          className='gradient-hover cursor-pointer text-xs tracking-[0.2em] text-white uppercase'
          onClick={() => emblaApi?.scrollNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
