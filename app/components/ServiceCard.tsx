import { styled } from 'styled-components';

const Component = styled.div`
  display: flex;
  background-color: var(--theme-color-off-white);
  max-height: 800px;
`;

const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3rem;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h2`
  font-family: var(--font-display);
  font-size: var(--font-size-xlarge);
  font-weight: normal;
  line-height: 80px;
  color: var(--theme-color-cherry-red);
  text-transform: lowercase;
`;
const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: var(--font-size-small);
  color: var(--theme-color-cherry-red);
`;
const Blurb = styled.p`
  font-family: var(--font-tertiary);
  font-size: var(--font-size-small);
  color: var(--theme-color-cherry-red);
`;

const LeftImage = styled.img``;

interface ServiceCardProps {
  title: string;
  titleSecondLine?: string;
  subtitle: string;
  blurb: string;
  leftImage: string; //yes you can pass images as strings. wild. i know.
}

const ServiceCard = ({ title, titleSecondLine, subtitle, blurb, leftImage }: ServiceCardProps) => {
  return (
    <Component>
      <RightBody>
        <TitleSection>
          <div>
            <Title>{title}</Title>
            <Title>{titleSecondLine}</Title>
          </div>
          <Subtitle>{subtitle}</Subtitle>
        </TitleSection>
        <Blurb>{blurb}</Blurb>
      </RightBody>
      <LeftImage src={leftImage} />
    </Component>
  );
};

export default ServiceCard;
