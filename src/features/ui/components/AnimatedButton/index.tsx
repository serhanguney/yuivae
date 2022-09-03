import { animate, m, useMotionValue, useTransform } from "framer-motion";
import { FC, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

import { easings } from "~/features/core/animations/constants";
import { colors } from "~/features/ui/theme/colors";
import { typography } from "~/features/ui/theme/typography";

import { Arrow } from "./parts/Arrow";

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
  svg {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 1.4rem;
    height: auto;
  }
`;
const Button = styled(m.button)`
  ${typography.button}
  position: relative;
  color: ${colors.background.default};
  padding: 2rem 2.5rem;
  cursor: pointer;
  overflow: hidden;
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

const hoverTransition = { duration: 0.7, ease: easings.cubic1 };
const hoverAnimation = {
  hoverIn: { x: "-99%", transition: hoverTransition },
  hoverOut: { x: 0, transition: hoverTransition },
};

const borders = Array.from({ length: 4 }, (_, i) => i);

const AnimatedButton: FC<{ children: ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasToGo, setHasToGo] = useState(false);

  const lineMotionValue = useMotionValue(0);

  const lineMotion = useTransform(
    lineMotionValue,
    (value) => `${100 - value / 2}%`
  );
  const reverseLineMotion = useTransform(
    lineMotionValue,
    (value) => `-${100 - value / 2}%`
  );

  const backgroundMotion = useTransform(
    lineMotionValue,
    [150, 200],
    [colors.background.default, colors.text.default]
  );

  useEffect(() => {
    const controls = animate(lineMotionValue, 200, {
      duration: 1.6,
      delay: 0.8,
      onComplete: () => {
        setHasToGo(true);
      },
    });
    return controls.stop;
  }, []);

  const { hoverIn, hoverOut } = hoverAnimation;

  return (
    <ButtonContainer>
      <Button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <BackgroundColor
          animate={isHovered ? hoverIn : hoverOut}
          style={{ backgroundColor: backgroundMotion }}
        />
        <BackgroundColor animate={isHovered ? hoverIn : hoverOut} />
        {!hasToGo &&
          borders.map((borderNo) => {
            const isEven = borderNo % 2 === 0;
            const isReversed = borderNo === 2 || borderNo === 3;
            return (
              <Line
                key={borderNo}
                $borderNo={borderNo}
                style={{
                  x: isEven ? 0 : isReversed ? reverseLineMotion : lineMotion,
                  y: !isEven ? 0 : isReversed ? reverseLineMotion : lineMotion,
                }}
                transition={{ duration: 1 }}
              />
            );
          })}

        <Text
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {children}
        </Text>
      </Button>
      <Arrow isHovered={isHovered} />
    </ButtonContainer>
  );
};

export { AnimatedButton };
