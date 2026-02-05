import { styled } from 'styled-components';
import TabletNavContent from './TabletNavContent';
import Divider from './Divider';
import RouteList from '../routes/routeList';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: var(--theme-color-off-white);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const TabletNav = () => {
  return (
    <Component>
      <ContentWrapper>
        <TabletNavContent routeList={RouteList} />
      </ContentWrapper>
      <Divider />
    </Component>
  );
};

export default TabletNav;
