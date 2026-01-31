import Hero from '~/components/Hero';
import Services from '~/components/Services';
import WorkWithUs from '~/components/WorkWithUs';
import About from '~/components/About';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <WorkWithUs />
    </main>
  );
}
