import { Brands } from './_components/brands';
import { Join } from './_components/join';
import { Process } from './_components/process';
import { WhoAreWe } from './_components/who-are-we';

export default function AboutUsPage() {
  return (
    <div>
      <div className='mt-[150px] flex h-[110px] items-center justify-center'>
        <h1 className='font-heading text-center text-[60px] font-semibold text-[#9e9e9e]'>About Us</h1>
      </div>
      <WhoAreWe />
      <Process />
      <Brands />
      <Join />
    </div>
  );
}
