import { m } from "framer-motion";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-column: span 7;
  margin-right: clamp(2vw, 5rem, 4vw);
`;

const Circle = styled.div<{ $borderColor: string }>`
  position: relative;
  flex: 0.4;
  margin: auto 0;
  border: 1px solid ${(props) => props.$borderColor};
  border-radius: 150px;
  max-height: clamp(34rem, 27vw, 40rem);
  min-height: clamp(24rem, 24vw, 34rem);
  max-width: clamp(20rem, 22vw, 32rem);
  transition: all 500ms ease;
  ${mediaQueries.mobileMax} {
    flex: 0.8;
  }
`;

const ImageWrapper = styled(m.div)<{ $hasFocus: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 150px;
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
