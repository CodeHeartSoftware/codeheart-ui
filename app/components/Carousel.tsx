import {styled} from "styled-components";
import LogoLoop from "~/components/LogoLoop";
import type {LogoMetadata} from "~/types/LogoMetadata";

interface Props {
    logos: LogoMetadata[]
}

const Component = styled.div``;

const Carousel = ({logos}: Props) => {
    return (
        <Component>
            <LogoLoop logos={logos} logoHeight={300}/>
        </Component>
    );
}

export default Carousel;