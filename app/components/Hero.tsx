import {styled} from "styled-components";
import Logo from "../assets/CodeHeartLogoRed.svg";
import HeroPic from "../assets/stockFlower.png";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
`;

const Headline = styled.img`
    height: auto;
    width: 100%;
`;

const HeroImageFrame = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    border-radius: 3rem;
`;

const HeroImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 3rem;
`;

const Hero = () => {
    return <Component>
        <Headline src={Logo}></Headline>
        <HeroImageFrame>
            <HeroImage src={HeroPic}></HeroImage>
        </HeroImageFrame>
    </Component>
};

export default Hero;