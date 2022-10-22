import { m } from "framer-motion";
import styled from "styled-components";

import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const DetailsWrapper = styled(m.div)`
  margin-bottom: 4rem;
`;

const ProjectTitle = styled(m.h2)`
  ${typography.h2}
  font-size: clamp(3.5rem,3.5vw,4.6rem);
  margin-top: clamp(1rem, 2.3vw, 3rem);
  ${mediaQueries.mobileMax} {
    order: 2;
  }
`;
const ProjectDescription = styled(m.p)`
  ${typography.p}
  margin-left: auto;
  ${mediaQueries.mobileMax} {
    order: 3;
  }
`;
const Tag = styled(m.p)`
  ${typography.tag}
  margin: 0.5rem 1rem;
  flex: 0;
  white-space: nowrap;
`;
const TagContainer = styled(m.div)`
  display: flex;
  margin-top: 3rem;
  width: fit-content;
`;

export { DetailsWrapper, ProjectDescription, ProjectTitle, Tag, TagContainer };
