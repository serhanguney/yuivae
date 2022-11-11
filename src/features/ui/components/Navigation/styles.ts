import { m } from "framer-motion";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { elevations } from "~/features/ui/theme/elevations";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { font } from "~/features/ui/theme/typography";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  max-width: 20rem;
  min-width: 20rem;
`;
const Button = styled(m.button)<{ $isHidden?: boolean }>`
  color: ${colors.text.hover};
  cursor: pointer;
  flex: 1;
  transition: opacity 400ms ease;
  opacity: ${(props) => (props.$isHidden ? 0 : 1)};
  &:hover {
    color: ${colors.text.default};
  }
  &:disabled {
    color: ${colors.text.hover};
    cursor: unset;
  }
`;

const PageNoContainer = styled(m.div)`
  width: 33.33%;
  flex: 1;
  display: flex;
  ${mediaQueries.mobileMax} {
    padding-bottom: 1rem;
  }
`;
const PageNo = styled(m.h3)`
  ${elevations["1"]};
  font-family: ${font.headings};
  font-size: clamp(8rem, 7.8vw, 10rem);
  line-height: 8rem;
  font-weight: lighter;
  pointer-events: none;
  flex-shrink: 0;
  width: 100%;
  text-align: center;
`;

export { Button, Container, PageNo, PageNoContainer };
