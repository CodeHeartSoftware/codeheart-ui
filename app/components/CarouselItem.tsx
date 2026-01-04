import {styled} from "styled-components";
import useLayoutMediaQueries from "~/hooks/useLayoutMediaQueries";
import {useMemo} from "react";

interface Props {
    src: string;
}

const DesktopComponent = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 30px;
`;

const TabletComponent = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 20px;
`;

const MobileComponent = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 15px;
`;

const CarouselItem = ({src}: Props) => {
    const {screenMode} = useLayoutMediaQueries();

    const Component = useMemo(() => {
        switch (screenMode) {
            case "desktop":
                return DesktopComponent;
            case "tablet":
                return TabletComponent;
            case "mobile":
                return MobileComponent;
            default:
                return DesktopComponent;
        }
    }, [screenMode])

    return (<Component src={src} />);
}

export default CarouselItem;