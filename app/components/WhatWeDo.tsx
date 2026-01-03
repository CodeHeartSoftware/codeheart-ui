import {styled} from "styled-components";
import Divider from "~/components/Divider";
import WhatWeDoSection from "~/components/WhatWeDoSection";
import StackPlatter from "~/assets/illustrations/StackPlatter.svg";
import MobileHeart from "~/assets/illustrations/MobileHeart.svg";
import CloudHeart from "~/assets/illustrations/CloudHeart.svg";

const Component = styled.div``;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    text-align: center;
`;

const Headline = styled.h2`
    color: var(--theme-color-dark);
    text-transform: uppercase;
    line-height: calc(1.4 * var(--font-size-heading1));
    letter-spacing: calc(-0.02 * var(--font-size-heading1));
`;

const Paragraph = styled.p``;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 100px 40px;
`;


const Illustration = styled.img`
    height: 300px;
    width: auto;
`;

const IllustrationCloudHeart = styled(Illustration)`
    height: 250px;
`;

const IllustrationMobileHeart = styled(Illustration)`
    height: 200px;
`;

const WhatWeDo = () => {
    return (
        <Component>
            <Title>
                <Headline>What we do</Headline>
                <Paragraph>We do more than just simply ‘write good code’. Collaboration, transparency, and work ethic
                    are a few things we pride ourselves in.</Paragraph>
                <Divider/>
            </Title>
            <Body>
                <WhatWeDoSection
                    pageNumber={1}
                    illustrationComponent={<Illustration src={StackPlatter}/>}
                    title="Full-Stack Development">
                    We are capable of tackling multiple different kinds of projects in various different tech stacks. A
                    lot of our work tends to be front-end focused, but that does not mean we are not capable of working
                    with different kinds of code.
                </WhatWeDoSection>
                <Divider/>
                <WhatWeDoSection
                    pageNumber={2}
                    illustrationComponent={<IllustrationMobileHeart src={MobileHeart}/>}
                    title="Mobile App Development">
                    From wireframes to app stores, our team is capable of fostering mobile projects from inception onto
                    the point where it can be marketed to the public. Furthermore, we are also capable of offering
                    support for any post-release events/incidents that may arise.
                </WhatWeDoSection>
                <Divider/>
                <WhatWeDoSection
                    pageNumber={3}
                    illustrationComponent={<IllustrationCloudHeart src={CloudHeart}/>}
                    title="Devops + Cloud infrastructure">
                    Digital products oftentimes require some kind of infrastructure to run and host their operations. At
                    CodeHeart, we pride ourselves in being capable of writing code to automate infrastructure management
                    as well as automating how code changes make it into various testing- and production-level
                    environments.
                </WhatWeDoSection>
                <Divider/>
            </Body>
        </Component>
    );
}

export default WhatWeDo;