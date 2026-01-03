import {useMediaQuery} from "react-responsive";
import {useEffect, useState} from "react";
import type {ScreenSize} from "~/types/ScreenSize";

const MOBILE_BREAKPOINT = 800;
const TABLET_BREAKPOINT = 1200;

const useLayoutMediaQueries = () => {
    const isTablet = useMediaQuery({query: `(max-width: ${TABLET_BREAKPOINT}px)`});
    const isMobile = useMediaQuery({query: `(max-width: ${MOBILE_BREAKPOINT}px)`});
    const isDesktop = !isTablet && !isMobile;
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    const [screenMode, setScreenMode] = useState<ScreenSize>('desktop');

    useEffect(() => {
        if (isMobile) {
            setScreenMode('mobile');
        } else if (isTablet) {
            setScreenMode('tablet');
        } else if (isDesktop) {
            setScreenMode('desktop');
        }

    }, [isTablet, isMobile, isDesktop])

    return {
        screenMode,
        isPortrait
    };
};

export default useLayoutMediaQueries;