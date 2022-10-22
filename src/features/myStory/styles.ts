import styled from "styled-components";

import Navigation from "~/features/ui/components/Navigation";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const SectionTitle = styled.h2`
  ${typography.h2};
  font-size: 6rem;
  margin-left: 4rem;
`;
const Container = styled.div`
  ${mediaQueries.mobileMax} {
    display: flex;
    flex-direction: column;
  }
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 160rem;
  min-height: 50rem;
  margin: 4rem;
  ${mediaQueries.desktopMin} {
    margin: 4rem auto;
  }
`;

const MyStoryNavigation = styled(Navigation)`
  width: 70%;
  margin-top: auto;
  margin-left: auto;
  ${mediaQueries.mobileMax} {
    order: 1;
    margin-bottom: 2rem;
  }
`;

export { Container, MyStoryNavigation, SectionTitle };
