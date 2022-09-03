import { m } from "framer-motion";
import styled from "styled-components";

import { elevations } from "~/features/ui/theme/elevations";

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
const BackgroundContainer = styled.div`
  grid-column: span 7;
  position: relative;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 100%;
  margin: 4rem 2rem;
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
  PrimaryColumn,
  SecondaryColumn,
};
