import { useMemo } from 'react';
import { styled } from 'styled-components';
import useLayoutMediaQueries from '~/hooks/useLayoutMediaQueries';

interface Props {
  pageNumber: number;
  title: string;
  illustrationComponent: React.ReactNode;
  children: React.ReactNode;
}

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 80px;
`;

const SectionNumber = styled.p`
  text-transform: uppercase;
  font-size: var(--font-size-heading1);
  line-height: calc(1.4 * var(--font-size-heading1));
  letter-spacing: calc(-0.02 * var(--font-size-heading1));
  font-weight: bold;
  color: var(--theme-color-dark);
`;

const DesktopHeading = styled.h3`
  text-transform: uppercase;
  font-size: var(--font-size-heading1);
  line-height: calc(1.4 * var(--font-size-heading1));
  letter-spacing: calc(-0.02 * var(--font-size-heading1));
  font-weight: bold;
`;

const MobileHeading = styled(DesktopHeading)`
  font-size: var(--font-size-heading3);
  line-height: calc(1.4 * var(--font-size-heading3));
  letter-spacing: calc(0.02 * var(--font-size-heading3));
`;

const Body = styled.h3``;

const WhatWeDoSection = ({ pageNumber, title, illustrationComponent, children }: Props) => {
  const { screenMode } = useLayoutMediaQueries();

  const Heading = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
      case 'tablet':
        return DesktopHeading;
      case 'mobile':
        return MobileHeading;
    }
  }, [screenMode]);

  return (
    <Component>
      <SectionNumber>{pageNumber}</SectionNumber>
      {illustrationComponent}
      <Heading>{title}</Heading>
      <Body>{children}</Body>
    </Component>
  );
};

export default WhatWeDoSection;
