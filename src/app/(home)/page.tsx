import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='relative h-dvh'>
      <Image src='/home1.jpg' alt='home' className='absolute inset-0 -z-10 object-cover object-center' fill />
    </div>
  );
}
