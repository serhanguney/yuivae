import { m } from "framer-motion";
import styled from "styled-components";

import { colors } from "~/features/ui/theme/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-column: span 7;
`;

const Circle = styled.div<{ $borderColor: string }>`
  position: relative;
  flex: 0.4;
  margin: auto 0;
  border: 1px solid ${(props) => props.$borderColor};
  border-radius: 150px;
  max-height: clamp(34rem, 27vw, 40rem);
  min-height: 34rem;
  max-width: 32rem;
  transition: all 500ms ease;
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
`;

const Shadow = styled.div<{ $color: string }>`
  position: absolute;
  bottom: -20%;
  left: 20%;
  width: 60%;
  height: 1rem;
  filter: blur(20px);
  background-color: ${(props) => props.$color};
  transition: background-color 500ms ease;
`;
export { Circle, Container, ImageWrapper, Shadow };
