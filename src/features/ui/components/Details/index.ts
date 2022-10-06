import { m } from "framer-motion";
import styled from "styled-components";

import { typography } from "~/features/ui/theme/typography";

const DetailsWrapper = styled(m.div)`
  margin-bottom: 4rem;
`;

const ProjectTitle = styled(m.h2)`
  ${typography.h2}
  font-size: clamp(3.5rem,3.5vw,4.6rem);
  margin-top: clamp(1rem, 2.3vw, 3rem);
`;
const ProjectDescription = styled(m.p)`
  ${typography.p}
  margin-left: auto;
`;
const Tag = styled(m.p)`
  ${typography.tag}
  margin: 0.5rem 1rem;
  flex: 0;
`;
const TagContainer = styled(m.div)`
  display: flex;
  margin: 3rem 0 0 auto;
  width: fit-content;
`;

export { DetailsWrapper, ProjectDescription, ProjectTitle, Tag, TagContainer };
