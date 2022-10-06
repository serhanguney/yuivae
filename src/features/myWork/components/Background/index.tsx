import { AnimatePresence } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

import { durations, easings } from "~/features/core/animations/constants";

import {
  BackgroundContainer,
  ImageContainer,
  ImageWrapper,
  OverflowContainer,
  PrimaryColumn,
  SecondaryColumn,
} from "./styles";

type Colors = { primary: string; secondary: string };
type Props = {
  duration: number;
  colors: Colors;
  images: Array<ImageProps["src"]>;
};

const imageLayouts = {
  desktop: {
    width: "100%",
    height: "51.5%",
  },
  mobile: {
    width: "46%",
    height: "100%",
  },
};

const Background: FC<Props> = ({ duration, colors, images }) => {
  const animatePrimaryColumn = {
    initial: { height: "0%" },
    animate: { height: "100%", transition: { duration, ease: easings.cubic1 } },
    exit: { x: 10, opacity: 0, filter: "blur(10px)" },
  };
  const animateSecondaryColumn = {
    initial: { width: "0%" },
    animate: {
      width: "80%",
      transition: {
        duration,
        delay: duration - 0.2,
        ease: easings.cubic1,
      },
    },
    exit: {
      x: 15,
      opacity: 0,
      filter: "blur(10px)",
      transition: { delay: 0.1 },
    },
  };
  const animateImages = (index: number) => ({
    initial: {
      x: -20,
      opacity: 0,
      filter: "blur(5px)",
    },
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 15,
      mass: 1.5,
      delay: durations.myWork.long + index * 0.2,
    },
  });

  return (
    <OverflowContainer>
      <BackgroundContainer>
        <AnimatePresence exitBeforeEnter>
          <PrimaryColumn
            key={colors.primary}
            $color={colors.primary}
            {...animatePrimaryColumn}
          />
          <SecondaryColumn
            key={colors.secondary}
            $color={colors.secondary}
            {...animateSecondaryColumn}
          />

          <ImageContainer>
            {images.map((image, index) => {
              const isMobile = index !== 0;
              return (
                <ImageWrapper
                  key={index}
                  $isMobile={isMobile}
                  {...animateImages(index)}
                >
                  <Image
                    src={image}
                    alt=""
                    objectFit="cover"
                    layout="responsive"
                    priority={!isMobile}
                    {...(isMobile ? imageLayouts.mobile : imageLayouts.desktop)}
                  />
                </ImageWrapper>
              );
            })}
          </ImageContainer>
        </AnimatePresence>
      </BackgroundContainer>
    </OverflowContainer>
  );
};

export { Background };
