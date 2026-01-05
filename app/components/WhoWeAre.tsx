import { styled } from 'styled-components';
import useLayoutMediaQueries from '~/hooks/useLayoutMediaQueries';
import { useMemo } from 'react';
import Button from '~/components/Buttons';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const MobileComponent = styled(Component)`
  height: 100%;
`;

const TabletComponent = styled(Component)`
  padding: 4rem 4rem;
`;

const DesktopComponent = styled(Component)`
  padding: 11rem 7.5rem;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Headline = styled.p`
  font-size: var(--font-size-heading2);
  line-height: calc(1.1 * var(--font-size-heading2));
  letter-spacing: calc(-0.025 * var(--font-size-heading2));
  color: var(--theme-color-dark);
  font-weight: bold;
`;

const DesktopAccent = styled.span``;

const MobileAccent = styled(DesktopAccent)`
  font-family: var(--font-display);
  color: var(--theme-color-red);
`;

const WhoWeAre = () => {
  const { screenMode } = useLayoutMediaQueries();

  const handleAboutUsOnClick = () => console.log('About us clicked');

  const Component = useMemo(() => {
    switch (screenMode) {
      case 'mobile':
        return MobileComponent;
      case 'desktop':
        return DesktopComponent;
      default:
        return TabletComponent;
    }
  }, [screenMode]);

  const Accent = useMemo(() => {
    switch (screenMode) {
      default:
      case 'tablet':
      case 'desktop':
        return DesktopAccent;
      case 'mobile':
        return MobileAccent;
    }
  }, [screenMode]);

  return (
    <Component>
      <TextBlock>
        <Headline>
          We&apos;re <Accent>CodeHeart</Accent>, and we love building quality digital products.
        </Headline>
      </TextBlock>
      <Button buttonText={'About Us'} onClick={handleAboutUsOnClick} />
    </Component>
  );
};

export default WhoWeAre;
