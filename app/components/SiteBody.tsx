import { styled } from 'styled-components';
import SiteFooter from './SiteFooter';
import useLayoutMediaQueries from '~/hooks/useLayoutMediaQueries';
import { useMemo } from 'react';
import NavBar from '~/components/NavBar';

interface Props {
  children: any;
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MobileBody = styled(Body)`
  margin-left: 0;
  margin-right: 0;
`;

const SiteBody = ({ children }: Props) => {
  const { screenMode } = useLayoutMediaQueries();

  const Component = useMemo(() => {
    switch (screenMode) {
      default:
      case 'desktop':
      case 'tablet':
        return Body;
      case 'mobile':
        return MobileBody;
    }
  }, [screenMode]);

  return (
    <Component>
      <NavBar />
      {children}
      <SiteFooter />
    </Component>
  );
};

export default SiteBody;
