import {styled} from "styled-components";

interface Props {
    src: string;
}

const Component = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 30px;
`;

const CarouselItem = ({src}: Props) => {
    return (<Component src={src} />);
}

export default CarouselItem;