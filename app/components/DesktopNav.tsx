import { styled } from 'styled-components';
import RouteList from '../routes/routeList';
import type RouteItem from '~/types/RouteItem';
import NavItem from '~/components/NavItem';

const Component = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;

  z-index: 20;
`;

export interface DesktopNavProps {
  isNotAtTop?: boolean;
}

const DesktopNav = ({ isNotAtTop }: DesktopNavProps) => {
  return (
    <Component className={isNotAtTop ? 'bg-(--theme-color-off-white)' : ''}>
      {RouteList.map((route: RouteItem) => (
        <NavItem title={route.title} route={route.route} />
      ))}
    </Component>
  );
};

export default DesktopNav;
