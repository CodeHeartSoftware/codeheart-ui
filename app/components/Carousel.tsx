import { styled } from 'styled-components';
import LogoLoop from '~/components/react-bits/LogoLoop';
import type { LogoMetadata } from '~/types/LogoMetadata';

interface Props {
  logos: LogoMetadata[];
}

const Component = styled.div`
  padding: 4rem 0;
`;

const Carousel = ({ logos }: Props) => {
  return (
    <Component>
      <LogoLoop logos={logos} logoHeight={300} />
    </Component>
  );
};

export default Carousel;
