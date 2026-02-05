import { styled } from 'styled-components';
import RouteList from '../routes/routeList';
import type RouteItem from '~/types/RouteItem';
import NavItem from '~/components/NavItem';
import useScrollDetector from '~/hooks/useScrollDetector';

const Component = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;

  z-index: 40;
`;

const NavItemWrapper = styled.div`
  padding: 1rem;
`;

const DesktopNav = () => {
  const { isAtTop } = useScrollDetector();

  return (
    <Component className={!isAtTop ? 'animate-increase-bg-opacity' : ''}>
      {RouteList.map((route: RouteItem) => (
        <NavItemWrapper>
          <NavItem title={route.title} route={route.route} />
        </NavItemWrapper>
      ))}
    </Component>
  );
};

export default DesktopNav;
