'use client';

import Image from 'next/image';

import { motion } from 'motion/react';

import { MotionButton } from '~/components/ui/motion-button';

export function Cta() {
  return (
    <div className='relative flex h-dvh items-center'>
      <Image src='/cta.jpg' alt='cta' className='absolute inset-0 -z-10 object-cover object-center' fill />
      <div className='max-w-lg pl-[10%] text-balance sm:pl-40'>
        <motion.h1
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { delay: 0.3 },
          }}
          className='font-heading mb-4 text-[50px] leading-[1.1em] font-semibold text-white'
        >
          For All Your Web Solutions
        </motion.h1>
        <motion.p
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { delay: 0.5 },
          }}
          className='mb-4 text-white'
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta veritatis numquam, quis dicta sint
          perferendis alias quam ratione?
        </motion.p>
        <MotionButton
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { delay: 0.7 },
          }}
        >
          View More
        </MotionButton>
      </div>
    </div>
  );
}
