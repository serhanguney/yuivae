import { m } from "framer-motion";
import styled from "styled-components";

import { TagContainer } from "~/features/ui/components/Details";
import { typography } from "~/features/ui/theme/typography";

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

export { MyWorkDetails, MyWorkTagContainer, SectionTitle };
