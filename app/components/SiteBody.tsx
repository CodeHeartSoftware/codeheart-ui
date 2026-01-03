import {styled} from "styled-components";
import SiteFooter from "./SiteFooter";
import NavBar from "~/components/NavBar";

interface Props {
    children: any;
}

const Component = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SiteBody = ({children}: Props) => {
    return (
        <Component>
            <NavBar/>
            {children}
            <SiteFooter/>
        </Component>
    );
}

export default SiteBody;