import styled from "styled-components";
import SiteFooter from "./SiteFooter";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SiteBody = () => {
    return <Component>
        <SiteFooter/>
    </Component>;
}

export default SiteBody;