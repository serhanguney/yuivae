import { AnimatePresence, useScroll } from "framer-motion";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  id: string;
  offset: number;
};
const AnimatedSection: FC<Props> = ({ children, id, offset }) => {
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const sectionPosition = ref.current.getBoundingClientRect().y;

    return scrollY.onChange((latest) => {
      if (sectionPosition - offset < latest && !isPresent) {
        setIsPresent(true);
      }
    });
  }, [scrollY, isPresent, id, offset]);

  return (
    <section ref={ref} id={id}>
      {isPresent ? (
        <AnimatePresence>{children}</AnimatePresence>
      ) : (
        <div style={{ height: "40vh", width: "100vw", background: "white" }} />
      )}
    </section>
  );
};

export default AnimatedSection;
