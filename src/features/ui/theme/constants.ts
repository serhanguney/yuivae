import { css } from "styled-components";

import { mediaQueries } from "~/features/ui/theme/mediaQueries";

export const sectionStyles = {
  spacing: css`
    margin: 20rem clamp(2rem, 2vw, 4rem) 0 clamp(2rem, 2vw, 4rem);
    ${mediaQueries.desktopMin} {
      margin: 20rem auto;
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 260rem;
  `,
};
