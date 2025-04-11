import { Blog } from './_components/blog';
import { Clients } from './_components/clients';
import { Cta } from './_components/cta';
import { Expertise } from './_components/expertise';
import { Hero } from './_components/hero';
import { Portfolio } from './_components/portfolio';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Cta />
      <Blog />
      <Expertise />
      <Clients />
    </>
  );
}
