import { animate, useMotionValue, useTransform } from "framer-motion";
import { AllHTMLAttributes, FC, ReactNode, useEffect, useState } from "react";

import { easings } from "~/features/core/animations/constants";
import { colors } from "~/features/ui/theme/colors";

import { Arrow } from "../../icons/ButtonArrow";
import { Lines } from "./parts/Lines";
import {
  BackgroundColor,
  ButtonContainer,
  HoverableButton,
  StaticButton,
  Text,
} from "./styles";

const hoverTransition = { duration: 0.7, ease: easings.cubic1 };
const hoverAnimation = {
  hoverIn: { x: "-99%", transition: hoverTransition },
  hoverOut: { x: 0, transition: hoverTransition },
};

type Props = AllHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isStatic: boolean;
};

const AnimatedButton: FC<Props> = ({ children, isStatic }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLineAnimationFinished, setIsLineAnimationFinished] = useState(false);

  const lineMotionValue = useMotionValue(0);

  const backgroundMotion = useTransform(
    lineMotionValue,
    [120, 200],
    [colors.background.default, colors.text.default]
  );

  useEffect(() => {
    const controls = animate(lineMotionValue, 200, {
      duration: 1.6,
      delay: 0.8,
      onComplete: () => {
        setIsLineAnimationFinished(true);
      },
    });
    return controls.stop;
  }, []);

  const { hoverIn, hoverOut } = hoverAnimation;

  const renderStaticButton = () => (
    <StaticButton style={{ backgroundColor: backgroundMotion }}>
      {!isLineAnimationFinished && <Lines lineMotionValue={lineMotionValue} />}
      {children}
    </StaticButton>
  );

  const renderHoverableButton = () => (
    <>
      <HoverableButton
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <BackgroundColor
          animate={isHovered ? hoverIn : hoverOut}
          style={{ backgroundColor: backgroundMotion }}
        />
        <BackgroundColor animate={isHovered ? hoverIn : hoverOut} />
        {!isLineAnimationFinished && (
          <Lines lineMotionValue={lineMotionValue} />
        )}
        <Text
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {children}
        </Text>
      </HoverableButton>
      <Arrow isHovered={isHovered} />
    </>
  );

  return (
    <ButtonContainer>
      {isStatic ? renderStaticButton() : renderHoverableButton()}
    </ButtonContainer>
  );
};

export { AnimatedButton };
