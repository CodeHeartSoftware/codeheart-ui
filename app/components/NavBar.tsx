import useLayoutMediaQueries from "../hooks/useLayoutMediaQueries";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import TabletNav from "./TabletNav";


const NavBar = () => {
    const {screenMode} = useLayoutMediaQueries();

    const renderNav = () => {
        switch (screenMode) {
            case "mobile":
                return (
                    <MobileNav/>
                )
            case "desktop":
                return (
                    <DesktopNav/>
                )
            default:
                return (
                    <TabletNav/>
                );


        }

    }

    return renderNav();
};

export default NavBar;