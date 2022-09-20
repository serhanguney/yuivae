import { useAnimationControls } from "framer-motion";
import { FC, useEffect, useState } from "react";

import { easings, revealParagraph } from "~/features/core/animations/constants";
import { Story } from "~/features/myStory/constants/stories";
import { Project } from "~/features/myWork/constants/projects";
import PreviousArrow from "~/features/ui/components/Navigation/PreviosArrow";

import NextArrow from "./NextArrow";
import { Button, Container, PageNo, PageNoContainer } from "./styles";

const clamp = (a: number, b: number, c: number) => Math.min(Math.max(a, b), c);

type AnimationOptions = {
  delay: number;
};
type NavigatedMaterial = Project | Story;

type Props = {
  projectCount: number;
  animation?: AnimationOptions;
  onChange: (changedWithNavigation: NavigatedMaterial) => void;
  arrayToMatchPageStateWith: Array<NavigatedMaterial>;
  className?: string;
};

const Navigation: FC<Props> = ({
  projectCount,
  animation,
  onChange,
  arrayToMatchPageStateWith,
  className,
}) => {
  const [pageState, setPageState] = useState(0);
  const [hoveredButton, setHoveredButton] = useState<-1 | 0 | 1>(0);
  const controls = useAnimationControls();

  const pages = Array.from({ length: projectCount }, (_, i) => i + 1);
  const withAdd = (prevState: number) =>
    clamp(0, prevState + 1, pages.length - 1);
  const withSubtract = (prevState: number) =>
    clamp(0, prevState - 1, pages.length);

  const handleClick = (onHandle: (prevState: number) => number) => () => {
    setPageState(onHandle);
  };

  useEffect(() => {
    onChange(arrayToMatchPageStateWith[pageState]);
    void controls.start((i) => animatePageNo(i));
  }, [pageState]);

  const animatePageNo = (pageNo: number) => {
    const opacity = pageNo === pageState ? 1 : 0;
    const scale = pageNo === pageState ? 1 : 0.8;
    return {
      x: `${pageState * 100 * -1}%`,
      opacity,
      scale,
      transition: {
        opacity: { delay: 0.1 },
        duration: 0.5,
        ease: easings.cubic1,
      },
    };
  };

  return (
    <Container className={className}>
      <Button
        onClick={handleClick(withSubtract)}
        onHoverStart={() => setHoveredButton(-1)}
        onHoverEnd={() => setHoveredButton(0)}
      >
        <PreviousArrow isHidden={hoveredButton === 1} />
      </Button>
      <PageNoContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: animation?.delay }}
      >
        {pages.map((pageNo, i) => (
          <PageNo key={pageNo} custom={i} initial={false} animate={controls}>
            {pageNo}
          </PageNo>
        ))}
      </PageNoContainer>
      <Button
        onClick={handleClick(withAdd)}
        onHoverStart={() => setHoveredButton(1)}
        onHoverEnd={() => setHoveredButton(0)}
      >
        <NextArrow isHidden={hoveredButton === -1} />
      </Button>
    </Container>
  );
};

export default Navigation;

Navigation.defaultProps = {
  animation: { delay: 1.5 },
};