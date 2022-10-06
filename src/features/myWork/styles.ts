import { m } from "framer-motion";
import styled from "styled-components";

import { TagContainer } from "~/features/ui/components/Details";
import Navigation from "~/features/ui/components/Navigation";
import { typography } from "~/features/ui/theme/typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries.laptopMin} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 160rem;
    margin: 4rem;
  }
`;

const SectionTitle = styled.h1`
  ${typography.h1};
  font-size: 6rem;
  margin-right: 4rem;
  text-align: right;
`;

const MyWorkDetails = styled(m.div)`
  display: flex;
  flex-direction: column;
  grid-column: 3/6;
  text-align: right;
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
  MyWorkDetails,
  MyWorkNavigation,
  MyWorkTagContainer,
  SectionTitle,
};
