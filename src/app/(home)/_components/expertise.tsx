'use client';

import { useState } from 'react';
import Image from 'next/image';

import { cn } from '~/lib/cn';

export function Expertise() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='padding-right flex flex-col gap-11.5 pb-40 lg:flex-row'>
      <div className='relative min-h-[473px] flex-[64%]'>
        <Image src='/expertise.jpg' alt='expertise' className='object-cover object-center' fill />
      </div>
      <div className='flex-[36%] pl-[calc((100%-86%)/2)] lg:p-0'>
        <div className='font-heading text-[13px] font-medium tracking-[4px] text-[#8A8A8A] uppercase'>Expertise</div>
        <h2 className='font-heading mt-[9px] mb-[37px] max-w-xs text-[40px] leading-[1.1em] font-semibold'>
          Achieve Success With Our Team
        </h2>
        <div className='relative flex gap-10 after:absolute after:top-[calc(100%-1px)] after:left-0 after:h-px after:w-full after:bg-[#5cc2ed] lg:justify-between'>
          <button
            className={cn(
              'font-heading relative cursor-pointer border-b border-transparent pb-2 text-2xl leading-[1.1em] font-semibold after:absolute after:top-full after:left-0 after:z-10 after:h-px after:w-0 after:bg-black after:transition-all after:duration-400',
              activeTab === 1 && 'after:w-full'
            )}
            onClick={() => setActiveTab(1)}
          >
            Design
          </button>
          <button
            className={cn(
              'font-heading relative cursor-pointer border-b border-transparent pb-2 text-2xl leading-[1.1em] font-semibold after:absolute after:top-full after:left-0 after:z-10 after:h-px after:w-0 after:bg-black after:transition-all after:duration-400',
              activeTab === 2 && 'after:w-full'
            )}
            onClick={() => setActiveTab(2)}
          >
            Marketing
          </button>
          <button
            className={cn(
              'font-heading relative cursor-pointer border-b border-transparent pb-2 text-2xl leading-[1.1em] font-semibold after:absolute after:top-full after:left-0 after:z-10 after:h-px after:w-0 after:bg-black after:transition-all after:duration-400',
              activeTab === 3 && 'after:w-full'
            )}
            onClick={() => setActiveTab(3)}
          >
            Devs
          </button>
        </div>
        <p className='mt-[21px] mb-[25px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium eum delectus nostrum deleniti
          autem nulla dolorem repellat, doloremque qui?
        </p>
        <ul className='list-disc pl-5'>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, optio.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, optio.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, optio.</li>
        </ul>
      </div>
    </div>
  );
}
