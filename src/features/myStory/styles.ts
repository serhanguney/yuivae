import { m } from "framer-motion";
import styled from "styled-components";

import Navigation from "~/features/ui/components/Navigation";
import { sectionStyles } from "~/features/ui/theme/constants";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const SectionTitle = styled(m.h2)`
  ${typography.h2};
  grid-column: span 12;
  font-size: 6rem;
  margin-left: 4rem;
  ${mediaQueries.mobileMax} {
    text-align: right;
    margin-bottom: 4rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${sectionStyles.spacing};
  ${mediaQueries.mobileMin} {
    ${sectionStyles.grid};
  }
`;

const MyStoryNavigation = styled(Navigation)`
  width: 70%;
  ${mediaQueries.mobileMin} {
    margin-top: auto;
  }

  ${mediaQueries.mobileMax} {
    margin-left: auto;
    order: 1;
    margin-bottom: 2rem;
  }
`;

export { Container, MyStoryNavigation, SectionTitle };
