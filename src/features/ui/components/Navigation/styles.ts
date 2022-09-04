import { m } from "framer-motion";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { elevations } from "~/features/ui/theme/elevations";
import { font } from "~/features/ui/theme/typography";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Button = styled(m.button)`
  color: ${colors.text.hover};
  cursor: pointer;
  flex: 1;
  &:hover {
    color: ${colors.text.default};
  }
`;
const PageNoContainer = styled(m.div)`
  width: 33.33%;
  flex: 1;
  display: flex;
`;
const PageNo = styled(m.h1)`
  ${elevations["1"]};
  font-family: ${font.headings};
  font-size: 10rem;
  line-height: 8rem;
  font-weight: lighter;
  pointer-events: none;
  flex-shrink: 0;
  width: 100%;
  text-align: center;
`;

export { Button, Container, PageNo, PageNoContainer };
