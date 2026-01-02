import {styled} from "styled-components";
import type RouteItem from "../types/RouteItem";

const Component = styled.h4`
    display: flex;
    align-items: flex-start;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    color: black;
`;

const NavItem = ({title, route}: RouteItem) => {
    //TODO: setup navigation
    const handleOnClick = () => {
        console.log(`clicked: should nav to ${route}`);
    }

    return <Component onClick={handleOnClick}>{title}</Component>

}

export default NavItem;