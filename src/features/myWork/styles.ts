import { m } from "framer-motion";
import styled from "styled-components";

import { TagContainer } from "~/features/ui/components/Details";
import Navigation from "~/features/ui/components/Navigation";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const myWorkConstants = {
  mobileWidth: { value: 100, unit: "rem" },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: clamp(2rem, 2vw, 4rem);
  margin-left: clamp(2rem, 2vw, 4rem);
  margin-bottom: 20rem;
  ${mediaQueries.laptopMin} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 160rem;
  }
`;

const SectionTitle = styled(m.h2)`
  ${typography.h1};
  font-size: clamp(5rem, 4.6vw, 6rem);
  margin-right: 4rem;
  text-align: right;
`;

const MyWorkDetails = styled(m.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  text-align: right;
  ${mediaQueries.laptopMin} {
    grid-column: 3/6;
  }
  margin-right: clamp(2vw, 5rem, 4vw);
`;

const MyWorkTagContainer = styled(TagContainer)`
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const MyWorkNavigation = styled(Navigation)`
  align-self: flex-end;
  grid-column: span 2;
`;

export {
  Container,
  myWorkConstants,
  MyWorkDetails,
  MyWorkNavigation,
  MyWorkTagContainer,
  SectionTitle,
};
