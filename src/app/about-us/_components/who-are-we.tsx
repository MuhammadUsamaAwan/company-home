import Image from 'next/image';

export function WhoAreWe() {
  return (
    <div className='padding-right flex flex-col gap-11.5 pt-[120px] pb-[130px] lg:flex-row'>
      <div className='relative min-h-[663px] flex-[64%]'>
        <Image src='/expertise.jpg' alt='expertise' className='object-cover object-center' fill />
      </div>
      <div className='flex flex-[36%] flex-col justify-center pl-[calc((100%-86%)/2)] lg:p-0'>
        <div className='font-heading text-[13px] font-medium tracking-[4px] text-[#8A8A8A] uppercase'>Who We Are</div>
        <h2 className='font-heading mt-[9px] mb-4 max-w-xs text-[50px] leading-[1.1em] font-semibold'>
          Smart Platform Integration
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium eum delectus nostrum deleniti
          autem nulla dolorem repellat, doloremque qui?
        </p>
      </div>
    </div>
  );
}
