import { m } from "framer-motion";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const Line = styled(m.span)<{ $borderNo: number }>`
  background-color: ${colors.text.default};
  position: absolute;
  left: ${(props) => (props.$borderNo === 2 ? "99%" : "0")};
  top: ${(props) => (props.$borderNo === 3 ? "96%" : "0")};
  height: ${(props) => (props.$borderNo % 2 === 0 ? "100%" : "0")};
  width: ${(props) => (props.$borderNo % 2 === 0 ? "1%" : "100%")};
  padding-top: ${(props) => (props.$borderNo % 2 === 0 ? "0" : "1%")};
`;

const ButtonContainer = styled.div`
  position: relative;
  margin-top: auto;
  ${mediaQueries.mobileMax} {
    margin-top: 0;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 1.4rem;
    height: auto;
  }
`;

const HoverableButton = styled(m.a)`
  ${typography.button};
  display: block;
  position: relative;
  color: ${colors.background.default};
  padding: 2rem clamp(1.5rem, 1.8vw, 2.5rem);
  overflow: hidden;
  text-align: center;
  width: clamp(21rem, 60%, 30rem);
  //max-width: 21rem;
  margin-left: auto;
  span:nth-of-type(1) {
    left: 0;
  }
  span:nth-of-type(2) {
    left: 100%;
    background-color: ${colors.background.default};
  }
  span:nth-of-type(3),
  span:nth-of-type(4) {
  }
`;

const StaticButton = styled(m.a)`
  ${typography.button};
  position: relative;
  color: ${colors.background.default};
  padding: 2rem 2.5rem;
  overflow: hidden;
`;
const Text = styled(m.span)`
  position: relative;
  mix-blend-mode: difference;
  opacity: 0;
`;
const BackgroundColor = styled(m.span)`
  top: 0;
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export {
  BackgroundColor,
  ButtonContainer,
  HoverableButton,
  Line,
  StaticButton,
  Text,
};
