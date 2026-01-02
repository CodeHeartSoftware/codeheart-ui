import styled from "styled-components";

interface Props {
    href?: string;
    children: any;
}

const Component = styled.a`
    font-weight: bold;
    color: black;
    text-decoration: unset;
    &:hover {
        text-decoration: underline;
    }
`;

const TextLink = ({href = '', children}: Props) => {
    return <Component href={href}>{children}</Component>;
}

export default TextLink;