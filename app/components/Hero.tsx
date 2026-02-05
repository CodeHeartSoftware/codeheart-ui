import { styled } from 'styled-components';
import useLayoutMediaQueries from '~/hooks/useLayoutMediaQueries';
import { useMemo } from 'react';
import Heart from './../assets/metalHeart.png';
import Arrow from './../assets/downArrowBold.png';
import { Link } from 'react-router';

const DesktopComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 85vh;
  overflow: clip;
  background-color: var(--theme-color-off-white);
  padding: 0 3.5rem;
`;
const TabletComponent = styled(DesktopComponent)`
  height: 40vh;
`;
const MobileComponent = styled(TabletComponent)`
  height: 90vh;
`;

const MetalHeart = styled.img`
  max-inline-size: 1800px;
  align-self: center;
`;

const Headline = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const HeadlineText = styled.h1`
  font-family: var(--font-display);
  color: var(--theme-color-cherry-red);
  font-size: var(--font-size-xxlarge);
  line-height: var(--font-size-xxlarge);
  font-weight: normal;
  text-transform: lowercase;
`;
const SubHeadline = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: calc(100% - 7rem);
`;

const Blurb = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 7rem);
  justify-content: center;
  align-items: flex-end;
`;
const BlurbBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const BlurbText = styled.h3`
  text-transform: uppercase;
  font-size: var(--font-size-medium);
  color: var(--theme-color-cherry-red);
  max-width: 20rem;
  margin-left: 10rem;
`;
const CallToActionWrapper = styled.div`
  width: fit-content;
  cursor: pointer;
`;
const CallToAction = styled.h2`
  font-family: var(--font-display);
  font-size: var(--font-size-large);
  color: var(--theme-color-cherry-red);
  border-bottom: 15px solid var(--theme-color-cherry-red);
  text-transform: uppercase;
`;

const DownArrowWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;
const DownArrow = styled.img``;

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

  return (
    <Component>
      <Headline>
        <HeadlineText className="z-0" data-usal="fade-r">
          Code
        </HeadlineText>
        <HeadlineText className="z-30" data-usal="fade-r delay-100">
          Heart
        </HeadlineText>
        <DownArrowWrapper data-usal="fade-d delay-500">
          <DownArrow src={Arrow} />
        </DownArrowWrapper>
      </Headline>
      <MetalHeart src={Heart} className="z-20" data-usal="fade-u" />
      <SubHeadline className="z-30" data-usal="fade-l delay-200">
        <HeadlineText>Software</HeadlineText>
      </SubHeadline>
      <Blurb className="z-30" data-usal="fade-l">
        <BlurbBody>
          <BlurbText data-usal="fade-l delay-100">
            We design and build highly-performant, secure digital products.
          </BlurbText>
          <CallToActionWrapper data-usal="fade-l delay-200">
            <CallToAction>
              <Link to="#contact">Start a project</Link>
            </CallToAction>
          </CallToActionWrapper>
        </BlurbBody>
      </Blurb>
    </Component>
  );
};

export default Hero;
