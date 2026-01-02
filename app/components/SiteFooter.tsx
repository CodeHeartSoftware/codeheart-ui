import styled from "styled-components";
import NavItem from "./NavItem";
import Logo from "../assets/logoBlack.svg";
import Copyright from "./Copyright";
import AllRightsReserved from "./AllRightsReserved";

const Component = styled.div`
    width: 100%;
`;

const FooterRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const Row1 = styled(FooterRow)`
    justify-content: flex-start;
    gap: 1rem;
    border-bottom: rgba(0, 0, 0, .1) 1px solid;
`;

const Row2 = styled(FooterRow)`
    justify-content: space-between;
`;

const Row2SubsectionA = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
`;

const HeaderLogo = styled.img`
    height: 5rem;
    width: auto;
`;

const SiteFooter = () => {
    return (
        <Component>
            <Row1>
                {<HeaderLogo src={Logo}/>}
                <NavItem title={'Contact'} route={'/contact'}/>
                <NavItem title={'Back to Top'} route={'#'}/>
            </Row1>
            <Row2>
                <Row2SubsectionA>
                    <Copyright/>
                    <NavItem title={'Legal'} route={'/legal'}/>
                    <NavItem title={'Privacy'} route={'/privacy'}/>
                </Row2SubsectionA>
                <AllRightsReserved/>
            </Row2>
        </Component>
    );
}

export default SiteFooter;