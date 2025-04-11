import Image from 'next/image';

export function Clients() {
  return (
    <div className='padding-left padding-right flex flex-col justify-between gap-7.5 py-32 lg:flex-row'>
      <div className='max-w-md'>
        <div className='font-heading text-[13px] font-medium tracking-[4px] text-[#8A8A8A] uppercase'>Brands</div>
        <h2 className='font-heading mt-[9px] max-w-md text-[50px] leading-[1.1em] font-semibold'>
          Partners and Long-Term Clients
        </h2>
        <p className='mt-3.5 mb-7.5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsum possimus.
        </p>
        <button className='gradient-border hover-bg-gradient block cursor-pointer px-[50px] py-[24px] font-sans text-xs leading-[0.2em] font-medium uppercase hover:text-white'>
          View More
        </button>
      </div>
      <div className='grid grid-cols-2 gap-7.5 sm:grid-cols-3'>
        <div className='group relative mx-auto'>
          <Image src='/client1.png' alt='client' width={163} height={162} />
          <div className='font-heading absolute bottom-full left-1/2 w-max -translate-x-1/2 translate-y-7.5 bg-[#f9f9f9] px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase opacity-0 duration-400 group-hover:translate-y-0 group-hover:opacity-100'>
            Video Labs
          </div>
        </div>
        <div className='group relative mx-auto'>
          <Image src='/client2.png' alt='client' width={163} height={162} />
          <div className='font-heading absolute bottom-full left-1/2 w-max -translate-x-1/2 translate-y-7.5 bg-[#f9f9f9] px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase opacity-0 duration-400 group-hover:translate-y-0 group-hover:opacity-100'>
            C Minor
          </div>
        </div>
        <div className='group relative mx-auto'>
          <Image src='/client3.png' alt='client' width={163} height={162} />
          <div className='font-heading absolute bottom-full left-1/2 w-max -translate-x-1/2 translate-y-7.5 bg-[#f9f9f9] px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase opacity-0 duration-400 group-hover:translate-y-0 group-hover:opacity-100'>
            V A Team
          </div>
        </div>
        <div className='group relative mx-auto'>
          <Image src='/client4.png' alt='client' width={163} height={162} />
          <div className='font-heading absolute bottom-full left-1/2 w-max -translate-x-1/2 translate-y-7.5 bg-[#f9f9f9] px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase opacity-0 duration-400 group-hover:translate-y-0 group-hover:opacity-100'>
            Rooster Sound
          </div>
        </div>
        <div className='group relative mx-auto'>
          <Image src='/client5.png' alt='client' width={163} height={162} />
          <div className='font-heading absolute bottom-full left-1/2 w-max -translate-x-1/2 translate-y-7.5 bg-[#f9f9f9] px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase opacity-0 duration-400 group-hover:translate-y-0 group-hover:opacity-100'>
            Unfold
          </div>
        </div>
        <div className='group relative mx-auto'>
          <Image src='/client6.png' alt='client' width={163} height={162} />
          <div className='font-heading absolute bottom-full left-1/2 w-max -translate-x-1/2 translate-y-7.5 bg-[#f9f9f9] px-6 py-2.5 text-center text-[13px] font-medium tracking-[0.3em] text-[#8A8A8A] uppercase opacity-0 duration-400 group-hover:translate-y-0 group-hover:opacity-100'>
            Generation
          </div>
        </div>
      </div>
    </div>
  );
}
