import {styled} from "styled-components";

interface Props {
    buttonText: string,
    onClick?: () => void,
}

const Component = styled.button`
    background-color: var(--theme-color-red);
    border-radius: 4px;
    padding: 8px 12px;

    &:hover {
        cursor: pointer;
    }
`;

const ButtonText = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    color: var(--theme-color-dark);
`;

const Button = ({buttonText, onClick}: Props) => {
    return (
        <Component onClick={onClick}>
            <ButtonText>{buttonText}</ButtonText>
        </Component>
    );
}

export default Button;