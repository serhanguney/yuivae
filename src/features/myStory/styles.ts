import styled from "styled-components";

import Navigation from "~/features/ui/components/Navigation";
import { typography } from "~/features/ui/theme/typography";

const SectionTitle = styled.h2`
  ${typography.h2};
  font-size: 6rem;
  margin-left: 4rem;
`;

const MyStoryNavigation = styled(Navigation)`
  width: 70%;
  margin-top: auto;
  margin-left: auto;
`;

export { MyStoryNavigation, SectionTitle };
