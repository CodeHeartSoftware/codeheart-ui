import {styled} from "styled-components";
import Logo from "../assets/SiteLogoBlack.svg";

interface Props {
    variant?: 'desktop' | 'tablet' | 'mobile';
}

const Component = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MobileComponent = styled(Component)`
    gap: 1rem
`;

const HeaderLogo = styled.img`
    height: 3rem;
    width: auto;
`;

export const SiteLogoTitle = ({variant = 'desktop'}: Props) => {
    const isDesktop = variant === 'desktop';

    const LogoComponent = isDesktop ? Component : MobileComponent;

    return (
        <LogoComponent>
            {<HeaderLogo src={Logo}/>}
        </LogoComponent>
    )
}