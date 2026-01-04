import Hero from '~/components/Hero';
import Carousel from '~/components/Carousel';
import CarouselItem from '~/components/CarouselItem';
import WhatWeDo from '~/components/WhatWeDo';
import WorkWithUs from '~/components/WorkWithUs';

const otherLogos = [
  { node: <CarouselItem src="/skills/SkillsAWS.png" />, alt: 'Amazon AWS', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsAzure.png" />, alt: 'Microsoft Azure', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsFigma.png" />, alt: 'Figma', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsPostgres.png" />, alt: 'Postgres', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsReact.png" />, alt: 'React', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsTerraform.png" />, alt: 'Terraform', href: 'https://company1.com' }
];

export function Home() {
  return (
    <main>
      <Hero />
      <Carousel logos={otherLogos} />
      <WhatWeDo />
      <WorkWithUs />
    </main>
  );
}
