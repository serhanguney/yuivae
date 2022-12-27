import { m } from "framer-motion";
import styled from "styled-components";

import { TagContainer } from "~/features/ui/components/Details";
import Navigation from "~/features/ui/components/Navigation";
import { sectionStyles } from "~/features/ui/theme/constants";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const myWorkConstants = {
  mobileWidth: { value: 100, unit: "rem" },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${sectionStyles.spacing};
  ${mediaQueries.mobileMin} {
    ${sectionStyles.grid};
  }
`;

const SectionTitle = styled(m.h2)`
  ${typography.h1};
  grid-column: span 12;
  font-size: clamp(5rem, 4.6vw, 6rem);
  margin-right: 4rem;
  text-align: right;
  ${mediaQueries.mobileMax} {
    margin-right: 0;
    margin-bottom: 4rem;
  }
`;

const MyWorkDetails = styled(m.div)`
  display: flex;
  flex-direction: column;
  grid-column: 1/-1;
  grid-row: 2;
  text-align: right;

  ${mediaQueries.mobileMin} {
    min-height: 50rem;
    grid-column: 3/6;
  }
  margin-right: clamp(2rem, 2.2vw, 5rem);
  ${mediaQueries.mobileMax} {
    margin-right: 0;
  }
`;

const MyWorkTagContainer = styled(TagContainer)`
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
  white-space: nowrap;
`;

const MyWorkNavigation = styled(Navigation)`
  align-self: flex-end;
  grid-column: span 2;
  grid-row: 2;
  margin-left: auto;
`;

const ComingSoon = styled(m.h3)`
  ${typography.h2};
  font-size: 4rem;
  margin: auto 0 0 0;
  .stroked {
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
  }
`;
export {
  ComingSoon,
  Container,
  myWorkConstants,
  MyWorkDetails,
  MyWorkNavigation,
  MyWorkTagContainer,
  SectionTitle,
};
