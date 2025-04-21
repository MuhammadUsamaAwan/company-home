import { Join } from './_components/join';

export default function ContactUsPage() {
  return (
    <div>
      <div className='mt-[150px] flex h-[110px] items-center justify-center'>
        <h1 className='font-heading text-center text-[60px] font-semibold text-[#9e9e9e]'>Contact Us</h1>
      </div>
      <div className='padding-left padding-right mt-32 grid gap-10 lg:grid-cols-3'>
        <div className='text-center lg:text-left'>
          <h2 className='font-heading mb-2 text-[35px] leading-[1.14em] font-semibold lg:max-w-xs'>
            London office design teams contact
          </h2>
          <div>London +(123) 456 -7890</div>
          <div>deon@qodeinteractive.com</div>
          <div>95 Place de la Garep</div>
        </div>
        <div className='text-center lg:text-left'>
          <h2 className='font-heading mb-2 text-[35px] leading-[1.14em] font-semibold lg:max-w-xs'>
            London office design teams contact
          </h2>
          <div>London +(123) 456 -7890</div>
          <div>deon@qodeinteractive.com</div>
          <div>95 Place de la Garep</div>
        </div>
        <div className='text-center lg:text-left'>
          <h2 className='font-heading mb-2 text-[35px] leading-[1.14em] font-semibold lg:max-w-xs'>
            London office design teams contact
          </h2>
          <div>London +(123) 456 -7890</div>
          <div>deon@qodeinteractive.com</div>
          <div>95 Place de la Garep</div>
        </div>
      </div>

      <div className='padding-left padding-right py-32'>
        <h2 className='font-heading mb-[25px] text-[35px] leading-[1.14em] font-semibold'>Get in touch</h2>
        <div className='grid grid-cols-2 gap-2'>
          <input
            className='gradient-border px-[30px] py-[23px] outline-none placeholder:text-[#6e6e6e] placeholder:duration-400 focus:placeholder:text-black'
            placeholder='Your name'
          />
          <input
            className='gradient-border px-[30px] py-[23px] outline-none placeholder:text-[#6e6e6e] placeholder:duration-400 focus:placeholder:text-black'
            placeholder='Your email'
          />
        </div>
        <textarea
          className='gradient-border mt-2 w-full px-[30px] py-[23px] outline-none placeholder:text-[#6e6e6e] placeholder:duration-400 focus:placeholder:text-black'
          placeholder='Your message'
          rows={4}
        />
        <button className='gradient-border hover-bg-gradient block cursor-pointer px-12 py-4 font-sans text-xs font-medium tracking-[0.2em] uppercase hover:text-white'>
          Send
        </button>
      </div>

      <Join />
    </div>
  );
}
