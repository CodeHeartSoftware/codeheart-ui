import Hero from '~/components/Hero';
import Services from '~/components/Services';
import Contact from '~/components/Contact';
import About from '~/components/About';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
