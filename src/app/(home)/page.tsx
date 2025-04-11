import { Blog } from './_components/blog';
import { Cta } from './_components/cta';
import { Hero } from './_components/hero';
import { Portfolio } from './_components/portfolio';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Cta />
      <Blog />
    </>
  );
}
