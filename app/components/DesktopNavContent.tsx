import {styled} from "styled-components";
import NavItem from "./NavItem";
import type RouteItem from "../types/RouteItem";

const Wrapper = styled.div`
    padding-right: 0.6rem;
`;

const Component = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

interface Props {
    routeList: RouteItem[];
}

const DesktopNavContent = ({routeList}: Props) => {
    return (
        <Wrapper>
            <Component>
                {routeList.map((route: RouteItem) => <NavItem title={route.title} route={route.route}/>)}

                <NavItem title={"Contact"} route={"/contact"} />
            </Component>
        </Wrapper>
    );
}

export default DesktopNavContent;
