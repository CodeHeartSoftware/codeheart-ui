import {styled} from "styled-components";
import NavItem from "./NavItem";
import type RouteItem from "../types/RouteItem";


const Component = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;


interface Props {
    routeList: RouteItem[];
}

const TabletNavContent = ({routeList}: Props) => {
    return (
        <Component>
            {routeList.map((route: RouteItem) => <NavItem title={route.title} route={route.route}/>)}
        </Component>
    )
}

export default TabletNavContent;