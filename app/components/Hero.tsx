import { styled } from 'styled-components';
import Logo from '../assets/CodeHeartLogoRed.svg';
import Ballpit from '~/components/react-bits/Ballpit';
import WhoWeAre from '~/components/WhoWeAre';

const Component = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  height: 80vh;
`;

const Headline = styled.img`
  height: auto;
  width: 100%;
`;

const HeroImageFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 3rem;
`;

const HeroText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
`;

const Hero = () => {
  return (
    <Component>
      <HeroText>
        <Headline src={Logo}></Headline>
        <WhoWeAre />
      </HeroText>
      <HeroImageFrame>
        <Ballpit
          count={100}
          gravity={1.1}
          friction={0.8}
          wallBounce={2}
          followCursor={true}
          colors={[0xf83939, 0xffe2e2, 0xffffff]}
        />
      </HeroImageFrame>
    </Component>
  );
};

export default Hero;
