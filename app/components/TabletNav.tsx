import {styled} from "styled-components";
import TabletNavContent from "./TabletNavContent";
import {SiteLogoTitle} from "./SiteLogoTitle";
import RouteList from "../routes/routeList"
import NavItem from "~/components/NavItem";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    background-color: white; //TODO: move color to stylesheet
    border-bottom: rgba(0, 0, 0, .1) 1px solid;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 4rem);
    padding: 0.5rem;
    border-bottom: rgba(0, 0, 0, .1) 1px solid;
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

    return (
        <Component>
            <TitleWrapper>
                <SiteLogoTitle variant={'tablet'}/>
                <NavItem title={"Contact"} route={"/contact"}/>
            </TitleWrapper>
            <ContentWrapper>
                <TabletNavContent routeList={RouteList}/>
            </ContentWrapper>
        </Component>
    );
};

export default TabletNav;