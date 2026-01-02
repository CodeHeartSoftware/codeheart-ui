import useLayoutMediaQueries from "../hooks/useLayoutMediaQueries";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import TabletNav from "./TabletNav";


const NavBar = () => {
    const {isMobile, isTablet} = useLayoutMediaQueries();

    const renderNav = () => {
        if (isMobile) {
            return <MobileNav />;
        }
        if (isTablet) {
            return <TabletNav />;
        }

        return <DesktopNav />;

    }

    return renderNav();
};

export default NavBar;