import {styled} from "styled-components";

const Component = styled.div`
    width: 100%;
    border-bottom: var(--theme-color-dark) 1px solid;
`;

const Divider = () => {
    return (<Component/>);
}

export default Divider;