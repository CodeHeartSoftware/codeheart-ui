import useLayoutMediaQueries from '../hooks/useLayoutMediaQueries';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import TabletNav from './TabletNav';
import useScrollDetector from '~/hooks/useScrollDetector';

const NavBar = () => {
  const { screenMode } = useLayoutMediaQueries();
  const { isNotTop } = useScrollDetector();

  const renderNav = () => {
    switch (screenMode) {
      case 'mobile':
        return <MobileNav />;
      case 'desktop':
        return <DesktopNav isNotAtTop={isNotTop} />;
      default:
        return <TabletNav />;
    }
  };

  return renderNav();
};

export default NavBar;
