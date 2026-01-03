import {styled} from "styled-components";
import NavItem from "./NavItem";
import type RouteItem from "../types/RouteItem";
import Button from "./Buttons";

const Wrapper = styled.div`
    padding-right: 0.6rem;
`;

const Component = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

interface Props {
    routeList: RouteItem[];
}

const DesktopNavContent = ({routeList}: Props) => {
    const handleContactButtonClick = () => console.log("handleContactButtonClick");

    return (
        <Wrapper>
            <Component>
                {routeList.map((route: RouteItem) => <NavItem title={route.title} route={route.route}/>)}

                <Button buttonText={"Contact"} onClick={handleContactButtonClick}/>
            </Component>
        </Wrapper>
    );
}

export default DesktopNavContent;
