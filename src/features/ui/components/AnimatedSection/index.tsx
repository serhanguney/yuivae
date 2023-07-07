import { AnimatePresence } from "framer-motion";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import useScroll from "~/features/hooks/useScroll";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";

type Props = {
  children: ReactNode;
  id: string;
  offset?: number;
};
const StyledSection = styled.section`
  padding: 1px;
  min-height: 100vh;
  margin: 4rem 0;
  ${mediaQueries.mobileMax} {
    margin: 12rem 0;
  }
`;
const Placeholder = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  ${mediaQueries.mobileMin} {
    height: 100vh;
  }
`;
const AnimatedSection: FC<Props> = ({ children, id, offset = 200 }) => {
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const scrollY = useScroll((y) => (y ? Math.floor(y / 100) * 100 : undefined));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !scrollY || typeof window === "undefined") return;

    const sectionPosition = ref.current.getBoundingClientRect();

    if (sectionPosition.y < window.innerHeight - offset && !isPresent) {
      setIsPresent(true);
    }
  }, [scrollY, isPresent, id, offset]);

  return (
    <StyledSection ref={ref} id={id}>
      {isPresent ? (
        <AnimatePresence>{children}</AnimatePresence>
      ) : (
        <Placeholder />
      )}
    </StyledSection>
  );
};

export default AnimatedSection;
