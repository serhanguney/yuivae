import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { typography } from "~/features/ui/theme/typography";

const Button = styled.button`
  ${typography.button}
  padding: 2rem 2.5rem;
  background-color: ${colors.backgroundHover.default};
  color: ${colors.text.darkTheme};

  @media (hover: hover) {
    &:hover {
      background-color: ${colors.text.default};
    }
  }

  &:active {
    background-color: ${colors.text.hover};
  }
  &:disabled {
    background-color: ${colors.text.hover};
  }
`;

export { Button };
