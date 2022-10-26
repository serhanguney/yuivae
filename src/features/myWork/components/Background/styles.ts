import { m } from "framer-motion";
import styled from "styled-components";

import { myWorkConstants } from "~/features/myWork/styles";
import { elevations } from "~/features/ui/theme/elevations";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";

type Color = {
  $color?: string;
};

const PrimaryColumn = styled(m.div)<Color>`
  ${elevations["0"]};
  min-width: 20%;
  background-color: ${(props) => props.$color};
  align-self: flex-end;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const SecondaryColumn = styled(m.div)<Color>`
  background-color: ${(props) => props.$color};
  ${elevations["0"]};
  position: absolute;
  left: 20%;
  top: 0;
  bottom: 0;
`;

const OverflowContainer = styled.div`
  overflow-x: scroll;
  grid-column: span 7;
  grid-row: 2;
  margin-top: 4rem;
`;
const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  ${mediaQueries.mobileMax} {
    width: ${myWorkConstants.mobileWidth.value}${myWorkConstants.mobileWidth.unit};
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  margin: clamp(2rem, 3vw, 4rem) 2rem;
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled(m.div)<{ $isMobile: boolean }>`
  ${elevations["900"]};
  margin: 0 1rem;
  width: ${(props) => (props.$isMobile ? "14%" : "60%")};
`;

export {
  BackgroundContainer,
  ImageContainer,
  ImageWrapper,
  OverflowContainer,
  PrimaryColumn,
  SecondaryColumn,
};
