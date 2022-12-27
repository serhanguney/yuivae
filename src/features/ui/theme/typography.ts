import { css } from "styled-components";

import { colors } from "./colors";

export const font = {
  base: '"League Spartan", sans-serif',
  headings: '"Cardo", sans-serif',
};

const defaultStyles = css`
  font-weight: inherit;
  color: ${colors.text.default};
`;
const defaultHeadingStyles = css`
  font-family: ${font.headings};
  font-weight: lighter;
`;
const defaultParagraphStyles = css`
  font-family: ${font.base};
  font-size: clamp(1.6rem, 1.1vw, 2.5rem);
  line-height: 1.3em;
`;
export const typography = {
  h1: css`
    ${defaultHeadingStyles};
    margin-bottom: 1.5rem;
  `,
  h2: css`
    ${defaultHeadingStyles};
    margin-bottom: 1rem;
  `,
  pageTitle: css`
    ${defaultHeadingStyles};
    font-size: clamp(7rem, 6vw, 9.5rem);
  `,
  p: css`
    ${defaultParagraphStyles};
  `,
  tag: css`
    ${defaultParagraphStyles};
    color: ${colors.tag.default};
  `,
  button: css`
    ${defaultStyles};
    font-family: ${font.base};
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 2rem;
    white-space: nowrap;
  `,
};
