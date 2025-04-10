import Image from 'next/image';

import { Button } from '~/components/ui/button';

export default function HomePage() {
  return (
    <div className='relative flex h-dvh items-center'>
      <Image src='/home1.jpg' alt='home' className='absolute inset-0 -z-10 object-cover object-center' fill />
      <div className='max-w-2xl pl-[10%] sm:pl-40'>
        <h1 className='font-heading mb-7.5 text-6xl font-bold text-white sm:text-7xl'>Digital Agency for Creators</h1>
        <Button>View More</Button>
      </div>
    </div>
  );
}
