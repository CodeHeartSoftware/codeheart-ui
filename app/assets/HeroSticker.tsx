import {styled} from "styled-components";

import StickerBackground from "../assets/StickerBackground.svg";

const Wrapper = styled.div`
    position: absolute;
    height: 15rem;
    width: 15rem;
`;

const ComponentBody = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: aqua;
`;

const Sticker = styled.img`
    width: 320px`;

const StickerText = styled.h1`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Welcome = styled.h3``;
const ClickHere = styled.h2``;

const HeroSticker = () => {
    return (
        <Wrapper>
            <ComponentBody>
                <StickerText>
                    <Welcome>Welcome</Welcome>
                    <ClickHere>Click here to get in touch!</ClickHere>
                </StickerText>
                <Sticker src={StickerBackground}/>
            </ComponentBody>
        </Wrapper>
    );

}

export default HeroSticker;