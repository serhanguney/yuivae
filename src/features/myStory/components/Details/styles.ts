import { m } from "framer-motion";
import styled from "styled-components";

import { TagContainer } from "~/features/ui/components/Details";
import { colors } from "~/features/ui/theme/colors";

const StoryDetailsContainer = styled(m.div)`
  display: flex;
  grid-column: 8/13;
  margin-left: clamp(2vw, 5rem, 4vw);
`;

const TextWrapper = styled.div`
  padding-left: 2rem;
  border-left: 1px solid ${colors.tag.default};
`;

const MyStoryTagContainer = styled(TagContainer)`
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
`;

export { MyStoryTagContainer, StoryDetailsContainer, TextWrapper };
