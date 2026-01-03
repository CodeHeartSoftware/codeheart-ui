import {styled} from "styled-components";
import useLayoutMediaQueries from "~/hooks/useLayoutMediaQueries";
import {useMemo} from "react";
import Button from "~/components/Buttons";

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

const MobileComponent = styled(Component)`
    padding: 7.5rem 2.5rem;
`;

const TabletComponent = styled(Component)`
    padding: 11rem 7.5rem;
`;

const DesktopComponent = styled(Component)`
    padding: 11rem 7.5rem;
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Caption = styled.h2`
    font-size: var(--font-size-caption);
    line-height: calc(1.4 * var(--font-size-caption));
    letter-spacing: calc(.02 * var(--font-size-caption));
    color: var(--text-color-caption);
    text-transform: uppercase;
`;

const Headline = styled.p`
    font-size: var(--font-size-heading2);
    line-height: calc(1.1 * var(--font-size-heading2));
    letter-spacing: calc(-0.025 * var(--font-size-heading2));
    color: var(--theme-color-dark);
    font-weight: bold;
`;


const WhoWeAre = () => {
    const {screenMode} = useLayoutMediaQueries();

    const Component = useMemo(() => {
        switch (screenMode) {
            case "mobile":
                return (MobileComponent);
            case "desktop":
                return (DesktopComponent);
            default:
                return (TabletComponent);

        }
    }, [screenMode]);

    return (
        <Component>
            <TextBlock>
                <Caption>Who we are</Caption>
                <Headline>We&apos;re CodeHeart and we love good digital products.</Headline>
            </TextBlock>
            <Button buttonText={'About Us'}/>
        </Component>
    );
}

export default WhoWeAre;