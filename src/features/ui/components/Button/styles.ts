import styled, { css } from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { typography } from "~/features/ui/theme/typography";

const Button = styled.button`
  ${typography.button}
  padding: 2rem 2.5rem;
  background-color: ${colors.backgroundHover.default};
  color: ${colors.text.darkTheme};
  &:hover {
    background-color: ${colors.text.default};
  }
`;

export { Button };
