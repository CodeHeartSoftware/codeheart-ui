import { styled } from 'styled-components';
import MetalThing from './../assets/metalAbstract.png';

const Component = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  overflow: hidden;
  padding: 0 3.5rem;
`;

const Headline = styled.h1`
  position: relative;
  font-family: var(--font-display);
  font-size: var(--font-size-xxlarge);
  line-height: var(--font-size-xxlarge);
  color: var(--theme-color-off-white);

  z-index: 1;
`;

const Subheading = styled.p`
  font-family: var(--font-tertiary);
  font-size: var(--font-size-small);
  color: var(--theme-color-off-white);

  z-index: 1;
`;

const ContactRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 6rem 0;
  background-color: var(--theme-color-off-white);
  width: fit-content;
`;
const LinksWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;
const LinksWrapperRight = styled.p`
  font-family: var(--font-tertiary);
  font-size: var(--font-size-small);
  color: var(--theme-color-cherry-red);
  max-width: 40rem;
`;
const ContactLink = styled.a`
  font-family: var(--font-secondary);
  font-size: var(--font-size-small);
  color: var(--theme-color-cherry-red);
  text-transform: uppercase;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;

  z-index: 0;
`;

const BackgroundImagery = styled.img``;

const Contact = () => {
  return (
    <Component id="contact">
      <Headline data-usal="fade-d">Contact</Headline>
      <Subheading data-usal="fade-l delay-400">
        Thanks for taking the time to view the site this far! We’d love to hear from you.
      </Subheading>
      <ContactRow>
        <LinksWrapper data-usal="flip-u">
          <LinksWrapperLeft data-usal="split-item split-fade-r split-delay-400">
            <ContactLink>Upwork</ContactLink>
            <ContactLink>Fiverr</ContactLink>
            <ContactLink>Email</ContactLink>
          </LinksWrapperLeft>
          <LinksWrapperRight data-usal="fade-l delay-600">
            Here are some methods for which you can inquire more about the work we do here at CodeHeart.
          </LinksWrapperRight>
        </LinksWrapper>
      </ContactRow>
      <Background data-usal="flip-dl">
        <BackgroundImagery src={MetalThing} />
      </Background>
    </Component>
  );
};

export default Contact;
