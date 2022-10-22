import { m } from "framer-motion";
import styled from "styled-components";

import { TagContainer } from "~/features/ui/components/Details";
import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";

const StoryDetailsContainer = styled(m.div)`
  display: flex;
  grid-column: 8/13;

  ${mediaQueries.mobileMax} {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const TextWrapper = styled(m.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  border-left: 1px solid ${colors.tag.default};
  max-width: 30rem; // to prevent the border from shifting
  width: 60%;
  ${mediaQueries.mobileMax} {
    width: 100%;
    text-align: right;
    border-left: none;
    order: 1;
    margin-left: auto;
  }
`;

const MyStoryTagContainer = styled(TagContainer)`
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
  flex-wrap: wrap;
  width: 40%;
  ${mediaQueries.mobileMax} {
    width: 100%;
    flex-direction: row;
    order: 2;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 0;
    p:last-child {
      margin-right: 0;
    }
  }
`;

export { MyStoryTagContainer, StoryDetailsContainer, TextWrapper };
