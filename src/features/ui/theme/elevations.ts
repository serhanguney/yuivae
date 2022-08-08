import { css } from "styled-components";

export const elevations = {
  0: css`
    z-index: 0;
  `,
  1: css`
    z-index: 1;
  `,
  100: css`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  `,
  900: css`
    box-shadow: -4px -4px 16px rgba(0, 0, 0, 0.05),
      4px 4px 16px rgba(0, 0, 0, 0.05);
    z-index: 900;
  `,
};
