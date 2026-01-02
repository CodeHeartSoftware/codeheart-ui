import {useMediaQuery} from "react-responsive";
import {useEffect} from "react";

const MOBILE_BREAKPOINT = 650;
const TABLET_BREAKPOINT = 850;

const useLayoutMediaQueries = () => {
    const isTablet = useMediaQuery({query: `(max-width: ${TABLET_BREAKPOINT}px)`});
    const isMobile = useMediaQuery({query: `(max-width: ${MOBILE_BREAKPOINT}px)`});
    const isDesktop = !isTablet && !isMobile;
    const isPortrait = useMediaQuery({query: '(orientation: portrait)'});

    useEffect(() => {
        console.log(`useLayoutMediaQueries called. Value changed to ${isDesktop ? 'desktop' : isTablet ? 'tablet' : isMobile ? 'mobile' : 'other'}`);

    }, [isTablet, isMobile, isDesktop])

    return {
        isMobile,
        isTablet,
        isDesktop,
        isPortrait
    };
};

export default useLayoutMediaQueries;