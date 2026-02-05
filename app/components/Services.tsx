import { styled } from 'styled-components';
import CarouselItem from '~/components/CarouselItem';
import Carousel from '~/components/Carousel';
import MockTablet from './../assets/mock0.png';
import MockMobile from './../assets/mock1.png';
import MockDesktop from './../assets/mock2.png';
import ServiceCard from '~/components/ServiceCard';

const otherLogos = [
  { node: <CarouselItem src="/skills/SkillsAWS.png" />, alt: 'Amazon AWS', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsAzure.png" />, alt: 'Microsoft Azure', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsFigma.png" />, alt: 'Figma', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsPostgres.png" />, alt: 'Postgres', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsReact.png" />, alt: 'React', href: 'https://company1.com' },
  { node: <CarouselItem src="/skills/SkillsTerraform.png" />, alt: 'Terraform', href: 'https://company1.com' }
];

const Component = styled.div``;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  text-align: center;
`;
const Headline = styled.h2`
  color: var(--theme-color-off-white);
  text-transform: lowercase;
  font-family: var(--font-display);
  font-size: var(--font-size-xxxlarge);
  font-weight: normal;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 3.5rem;
`;
const BoldTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const BoldText = styled.h1`
  font-family: var(--font-display);
  font-size: var(--font-size-xxlarge);
  font-weight: normal;
  color: var(--theme-color-off-white);
  text-transform: lowercase;
`;

const Services = () => {
  return (
    <Component id="services">
      <Title data-usal="fade-d">
        <Headline>Services</Headline>
      </Title>
      <div data-usal="fade-l">
        <Carousel logos={otherLogos} />
      </div>
      <Body>
        <ServiceCard
          title="Front End"
          titleSecondLine="Development"
          subtitle="React, React Native, Vue, Tailwind"
          blurb="While we are capable of developing entire tech stacks, most of our projects have some front-end design/development component to it."
          leftImage={MockTablet}
        />
        <ServiceCard
          title="Mobile App"
          titleSecondLine="Development"
          subtitle="Cross-platform on ios and android"
          blurb="We have extensive experience working on/with engineering teams tasked with building out mobile apps from the ground up."
          leftImage={MockMobile}
        />
        <ServiceCard
          title={`DevOps &`}
          titleSecondLine={`CICD Pipeline Management`}
          subtitle="Automating cloud infrastructure with terraform on aws and azure"
          blurb="Need cloud infrastructure to host your digital product? We can set up CI/CD pipelines that automate deployments so code changes are seamless."
          leftImage={MockDesktop}
        />
        <BoldTextSection>
          <BoldText data-usal="fade-r">Web Design</BoldText>
          <BoldText data-usal="fade-l">Mobile Design</BoldText>
          <BoldText data-usal="fade-r">Database Design</BoldText>
          <BoldText data-usal="fade-l">API Design</BoldText>
        </BoldTextSection>
      </Body>
    </Component>
  );
};

export default Services;
