import { motion } from "framer-motion";
import styled from "styled-components";

import { typography } from "~/features/ui/theme/typography";

const Container = styled(motion.div)`
  margin-bottom: 4rem;
`;
const ProjectDetails = styled(motion.div)`
  grid-column: 3/6;
  text-align: right;
  margin-right: clamp(2vw, 5rem, 4vw);
  display: flex;
  flex-direction: column;
`;
const ProjectTitle = styled(motion.h2)`
  ${typography.h2}
  font-size: 4.6rem;
  margin-top: 3rem;
`;
const ProjectDescription = styled(motion.p)`
  ${typography.p}
  margin-left: auto;
`;

const TagContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 3rem 0 0 auto;
  width: fit-content;
`;
const Tag = styled(motion.p)`
  ${typography.tag}
  margin: 0.5rem 1rem;
`;

export {
  Container,
  ProjectDescription,
  ProjectDetails,
  ProjectTitle,
  Tag,
  TagContainer,
};
