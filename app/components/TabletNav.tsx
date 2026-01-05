import { styled } from 'styled-components';
import TabletNavContent from './TabletNavContent';
import { SiteLogoTitle } from './SiteLogoTitle';
import Button from './Buttons';
import Divider from './Divider';
import RouteList from '../routes/routeList';

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: var(--theme-color-pink);
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 4rem);
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const TabletNav = () => {
  const handleButtonClick = () => console.log('handleButtonClick');

  return (
    <Component>
      <TitleWrapper>
        <SiteLogoTitle variant={'tablet'} />
        {/*<NavItem title={"Contact"} route={"/contact"}/>*/}
        <Button buttonText={'Contact'} onClick={handleButtonClick} />
      </TitleWrapper>
      <Divider />
      <ContentWrapper>
        <TabletNavContent routeList={RouteList} />
      </ContentWrapper>
      <Divider />
    </Component>
  );
};

export default TabletNav;
