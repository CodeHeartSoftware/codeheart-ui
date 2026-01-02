import {styled} from "styled-components";
import {SiteLogoTitle} from "./SiteLogoTitle";

const Component = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    background-color: white;
    border-bottom: rgba(0, 0, 0, .1) 1px solid;
`;

const MenuButton = styled.h2`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const MobileNav = () => {
    return <Component>
        <SiteLogoTitle variant="mobile"/>
        <MenuButton>Menu</MenuButton>
    </Component>;
};

export default MobileNav;