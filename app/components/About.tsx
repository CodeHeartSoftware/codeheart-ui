import { styled } from 'styled-components';
import PersonalPortrait from './../assets/tom.png';

const Component = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  background-color: var(--theme-color-off-white);
  align-items: flex-end;
  padding: 2rem 7rem 3rem 3.5rem;
`;

const Headline = styled.h1`
  position: relative;
  font-family: var(--font-display);
  font-size: var(--font-size-xxlarge);
  line-height: var(--font-size-xxlarge);
  color: var(--theme-color-cherry-red);
  width: 100%;
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const ParagraphColumn = styled.p`
  font-family: var(--font-tertiary);
  font-size: var(--font-size-small);
  color: var(--theme-color-cherry-red);
  max-width: 18rem;
`;
const ParagraphColumn1 = styled(ParagraphColumn)`
  padding-top: 5rem;
`;
const ParagraphColumn2 = styled(ParagraphColumn)``;

const PortraitWrapper = styled.div`
  position: absolute;
  align-self: flex-start;
  justify-self: flex-start;
  height: 75%;
`;
const Portrait = styled.img`
  padding-left: 10rem;
`;

const About = () => {
  return (
    <Component>
      <PortraitWrapper>
        <Portrait data-usal="fade-r" src={PersonalPortrait} />
      </PortraitWrapper>
      <Headline data-usal="fade-u">About</Headline>
      <AboutText>
        {/* TODO: re-write this section with my own words */}
        <ParagraphColumn1 data-usal="fade-l delay-400">
          I help small businesses and creative entrepreneurs bring their ideas to life with thoughtful branding and
          websites that actually work.
          <br />
          <br />
          My approach is simple: design with purpose, not just for looks. I believe your brand should feel like you —
          clear, confident, and ready to connect with the right people. Whether you’re launching something new or
          leveling up what you already have, I’m here to make the design process feel easy (and maybe even fun). I’ve
          been designing for over 6 years, and in that time, I’ve worked with coaches, makers, freelancers, and founders
          from all kinds of industries.
        </ParagraphColumn1>
        <ParagraphColumn2 data-usal="fade-l delay-600">
          When I’m not designing, you’ll usually find me curled up with a good book, walking my rescue dog, Luna, or
          trying to perfect my oat milk latte at home. I’m a big believer in slow mornings, creative freedom, and
          building a business that fits your version of success.
          <br />
          <br />
          If you’re ready for a brand and website that feels like home and helps your business grow, I’d love to hear
          from you.
        </ParagraphColumn2>
      </AboutText>
    </Component>
  );
};

export default About;
