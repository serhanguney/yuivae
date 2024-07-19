import { useAnimationControls } from "framer-motion";
import { FC, useCallback, useEffect, useState } from "react";

import { easings } from "~/features/core/animations/constants";
import { Story } from "~/features/myStory/constants/stories";
import { Project } from "~/features/myWork/constants/projects";
import PreviousArrow from "~/features/ui/icons/PreviosArrow";

import NextArrow from "../../icons/NextArrow";
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
  const [pageState, setPageState] = useState(1);
  const [hoveredButton, setHoveredButton] = useState<-1 | 0 | 1>(0);
  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const controls = useAnimationControls();

  const pages = Array.from({ length: projectCount }, (_, i) => i + 1);
  const withAdd = (prevState: number) => clamp(0, prevState + 1, pages.length);
  const withSubtract = (prevState: number) =>
    clamp(0, prevState - 1, pages.length);

  const handleClick = (onHandle: (prevState: number) => number) => () => {
    setPageState(onHandle);
  };

  const animatePageNo = useCallback(
    (pageNo: number) => {
      const opacity = pageNo === pageState ? 1 : 0;
      const scale = pageNo === pageState ? 1 : 0.8;
      return {
        x: `${(pageState - 1) * 100 * -1}%`,
        opacity,
        scale,
        transition: {
          opacity: { delay: 0.1 },
          duration: 0.5,
          ease: easings.cubic1,
        },
      };
    },
    [pageState]
  );

  useEffect(() => {
    onChange(arrayToMatchPageStateWith[pageState - 1]);
    void controls.start((i) => animatePageNo(i));
  }, [pageState, arrayToMatchPageStateWith, controls, onChange, animatePageNo]);

  return (
    <Container className={className}>
      <Button
        onClick={handleClick(withSubtract)}
        onHoverStart={() => pageState !== pages[0] && setHoveredButton(-1)}
        onHoverEnd={() => setHoveredButton(0)}
        disabled={pageState === pages[0]}
        $isHidden={pageState === pages[0]}
      >
        <PreviousArrow isHidden={hoveredButton === 1 || !hasEnded} />
      </Button>

      <PageNoContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: animation?.delay,
          onComplete: () => setHasEnded(true),
        }}
      >
        {pages.map((pageNo) => (
          <PageNo
            key={pageNo}
            custom={pageNo}
            initial={false}
            animate={controls}
          >
            {pageNo}
          </PageNo>
        ))}
      </PageNoContainer>

      <Button
        onClick={handleClick(withAdd)}
        onHoverStart={() => pageState !== pages.length && setHoveredButton(1)}
        onHoverEnd={() => setHoveredButton(0)}
        disabled={pageState === pages.length}
        $isHidden={pageState === pages.length}
      >
        <NextArrow isHidden={hoveredButton === -1 || !hasEnded} />
      </Button>
    </Container>
  );
};

export default Navigation;

Navigation.defaultProps = {
  animation: { delay: 1.5 },
};
