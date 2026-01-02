import styled from "styled-components";

interface Props {
    variant?: 'default';
    children?: any;
}

const DefaultComponent = styled.h4`
    color: black;
`;



const TextLink = ({variant = 'default', children}: Props) => {
    let Component;
    switch (variant) {
        default:
            Component = DefaultComponent;
            break;
    }

    return <Component>{children}</Component>;
}

export default TextLink;