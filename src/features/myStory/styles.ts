import styled from "styled-components";

import Navigation from "~/features/ui/components/Navigation";
import { typography } from "~/features/ui/theme/typography";

const SectionTitle = styled.h2`
  ${typography.h2};
  font-size: 6rem;
  margin-left: 4rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 160rem;
  min-height: 50rem;
  margin: 4rem;
`;

const MyStoryNavigation = styled(Navigation)`
  width: 70%;
  margin-top: auto;
  margin-left: auto;
`;

export { Container, MyStoryNavigation, SectionTitle };
