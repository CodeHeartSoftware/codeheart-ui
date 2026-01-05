import { styled } from 'styled-components';
import CardSwap, { Card } from '~/components/react-bits/CardSwap';
import Button from '~/components/Buttons';
import { useEffect, useMemo, useState } from 'react';
import useLayoutMediaQueries from '~/hooks/useLayoutMediaQueries';

const Component = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 600px;
  overflow: hidden;
  border-radius: 30px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem;
  gap: 3rem;
`;

const Headline = styled.h1``;
const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DesktopSubtitleText = styled.h2``;
const TabletSubtitleText = styled(DesktopSubtitleText)`
  font-size: var(--font-size-heading2);
`;
const MobileSubtitleText = styled(DesktopSubtitleText)``;

//Hiding the CardSwap on mobile, so no need to style it
const DesktopCarouselCardText = styled.h1`
  color: var(--theme-color-pink);
  padding-left: 0.5rem;
`;
const TabletCarouselCardText = styled(DesktopCarouselCardText)`
  font-size: var(--font-size-heading2);
`;

const WorkWithUs = () => {
  const { screenMode } = useLayoutMediaQueries();
  const [cardSwapWidth, setCardSwapWidth] = useState(500);

  const SubtitleText: any = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
        return DesktopSubtitleText;
      case 'tablet':
        return TabletSubtitleText;
    }
  }, [screenMode]);

  const CarouselCardText: any = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
        return DesktopCarouselCardText;
      case 'tablet':
        return TabletCarouselCardText;
    }
  }, [screenMode]);

  useEffect(() => {
    switch (screenMode) {
      default:
      case 'desktop':
        setCardSwapWidth(500);
        break;
      case 'tablet':
        setCardSwapWidth(375);
        break;
      case 'mobile':
        setCardSwapWidth(300);
    }
  }, [screenMode]);

  return (
    <Component>
      <Title>
        <Headline>Work with us!</Headline>
        <Subtitle>
          <SubtitleText>Discover how we can turn your ideas into a digital reality.</SubtitleText>

          <div>
            <Button buttonText={'Get started'} />
          </div>
        </Subtitle>
      </Title>
      {screenMode != 'mobile' && (
        <CardSwap width={cardSwapWidth} cardDistance={60} verticalDistance={70} delay={3000} pauseOnHover={false}>
          <Card>
            <CarouselCardText>Reliable</CarouselCardText>
          </Card>
          <Card>
            <CarouselCardText>Experienced</CarouselCardText>
          </Card>
          <Card>
            <CarouselCardText>Communicative</CarouselCardText>
          </Card>
          <Card>
            <CarouselCardText>Collaborative</CarouselCardText>
          </Card>
          <Card>
            <CarouselCardText>Transparent</CarouselCardText>
          </Card>
          <Card>
            <CarouselCardText>Fast</CarouselCardText>
          </Card>
        </CardSwap>
      )}
    </Component>
  );
};

export default WorkWithUs;
