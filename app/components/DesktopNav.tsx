import {styled} from "styled-components";
import {SiteLogoTitle} from "./SiteLogoTitle";
import DesktopNavContent from "./DesktopNavContent";
import RouteList from "../routes/routeList"

const Component = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 100%;
    background-color: var(--theme-color-pink);
    border-bottom: var(--theme-color-dark) 1px solid;
`;

const TitleWrapper = styled.div`
    display: flex;
    max-width: 12rem;
    padding: 0.5rem;
`;

const DesktopNav = () => {
    return (
        <Component>
            <TitleWrapper>
                <SiteLogoTitle/>
            </TitleWrapper>
            <DesktopNavContent routeList={RouteList}/>
        </Component>
    );
};

export default DesktopNav;