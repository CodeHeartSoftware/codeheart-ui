import { styled } from 'styled-components';
import Logo from '../assets/CodeHeartLogoRed.svg';
import Ballpit from '~/components/react-bits/Ballpit';
import WhoWeAre from '~/components/WhoWeAre';
import useLayoutMediaQueries from '~/hooks/useLayoutMediaQueries';
import { useMemo } from 'react';

const DesktopComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  height: 60vh;
`;

const TabletComponent = styled(DesktopComponent)`
  height: 40vh;
`;

const MobileComponent = styled(DesktopComponent)`
  height: 30vh;
`;

const Headline = styled.img`
  height: auto;
  width: 100%;
`;

const DesktopImageFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border-radius: 3rem;
`;

const TabletImageFrame = styled(DesktopImageFrame)`
  height: 40vh;
`;

const MobileImageFrame = styled(DesktopImageFrame)`
  height: 30vh;
`;

const DesktopHeroText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  z-index: 2;
`;

const TabletHeroText = styled(DesktopHeroText)`
  height: 40vh;
`;

const MobileHeroText = styled(DesktopHeroText)`
  height: 30vh;
`;

const Hero = () => {
  const { screenMode } = useLayoutMediaQueries();

  const Component: any = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
        return DesktopComponent;
      case 'tablet':
        return TabletComponent;
      case 'mobile':
        return MobileComponent;
    }
  }, [screenMode]);

  const HeroImageFrame: any = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
        return DesktopImageFrame;
      case 'tablet':
        return TabletImageFrame;
      case 'mobile':
        return MobileImageFrame;
    }
  }, [screenMode]);

  const HeroText: any = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
        return DesktopHeroText;
      case 'tablet':
        return TabletHeroText;
      case 'mobile':
        return MobileHeroText;
    }
  }, [screenMode]);

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
