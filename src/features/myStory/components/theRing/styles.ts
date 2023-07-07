import { m } from "framer-motion";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-column: span 7;
  margin-right: clamp(2vw, 5rem, 4vw);
  ${mediaQueries.mobileMin} {
    min-height: 40rem;
  }
`;

const Circle = styled(m.div)<{ $borderColor: string }>`
  position: relative;
  flex: 0.4;
  margin: auto 0;
  border: 1px solid ${(props) => props.$borderColor};
  border-radius: clamp(150px, 10vw, 250px);
  height: clamp(30rem, 27vw, 60rem);
  max-width: clamp(25rem, 22vw, 50rem);
  transition: all 500ms ease;
  box-shadow: 0 0 16px ${(props) => `${props.$borderColor}40`};
  ${mediaQueries.mobileMax} {
    flex: 0.8;
    border: none;
  }
`;

const ImageWrapper = styled(m.div)<{ $hasFocus: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: clamp(150px, 10vw, 250px);
  background-color: ${(props) =>
    props.$hasFocus ? "antiquewhite" : colors.tag.default};
  background-clip: content-box;
  overflow: clip;
  overflow-clip-margin: content-box;
  ${mediaQueries.mobileMax} {
    overflow: hidden;
  }
`;

export { Circle, Container, ImageWrapper };
