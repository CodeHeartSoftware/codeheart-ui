import {styled} from 'styled-components';
import CardSwap, {Card} from "~/components/react-bits/CardSwap";
import Button from "~/components/Buttons"

const Component = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 600px;
    overflow: hidden;
    border-radius: 30px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2rem;
    gap: 3rem;
`;

const Headline = styled.h1``;
const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const SubtitleText = styled.h2``;

const WorkWithUs = () => {
    return (
        <Component>
            <Title>
                <Headline>Work with us!</Headline>
                <Subtitle>
                    <SubtitleText>Discover how we can turn your ideas into a digital reality.</SubtitleText>

                    <div><Button buttonText={'Get started'}/></div>
                </Subtitle>
            </Title>
            <CardSwap cardDistance={60}
                      verticalDistance={70}
                      delay={3000}
                      pauseOnHover={false}>
                <Card>
                    <h1>Reliable</h1>
                </Card>
                <Card>
                    <h1>Experienced</h1>
                </Card>
                <Card>
                    <h1>Communicative</h1>
                </Card>
                <Card>
                    <h1>Collaborative</h1>
                </Card>
                <Card>
                    <h1>Transparent</h1>
                </Card>
                <Card>
                    <h1>Fast</h1>
                </Card>
            </CardSwap>
        </Component>
    );
}

export default WorkWithUs;