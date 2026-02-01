import { styled } from 'styled-components';
import type RouteItem from '../types/RouteItem';

const Component = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1rem;
`;
const ComponentText = styled.h1`
  font-family: var(--font-display);
  font-size: var(--font-size-large);
  line-height: var(--font-size-large);
  color: var(--theme-color-cherry-red);
  &:hover {
    cursor: pointer;
  }
`;

const NavItem = ({ title, route }: RouteItem) => {
  //TODO: setup navigation
  const handleOnClick = () => {
    console.log(`clicked: should nav to ${route}`);
  };

  return (
    <Component onClick={handleOnClick}>
      <ComponentText>{title}</ComponentText>
    </Component>
  );
};

export default NavItem;
