import { motion } from "framer-motion";
import { FC } from "react";

const initialDelay = 0.2;
const animate = ({ withDelay }: { withDelay: boolean }) => ({
  reveal: {
    pathLength: 1,
    transition: {
      duration: 0.25,
      delay: withDelay ? initialDelay + 0.2 : initialDelay,
    },
  },
  hide: {
    pathLength: 0,
    transition: {
      duration: 0.25,
      delay: withDelay ? 0.2 : 0,
    },
  },
});

export const Arrow: FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <svg viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.line
      x1="1.04771"
      y1="1.03555"
      x2="7.31922"
      y2="6.75116"
      stroke="#212121"
      strokeWidth="2"
      animate={
        isHovered
          ? animate({ withDelay: false }).reveal
          : animate({ withDelay: true }).hide
      }
    />
    <motion.line
      x1="0.960022"
      y1="19.2259"
      x2="10.7302"
      y2="8.50556"
      stroke="#212121"
      strokeWidth="2"
      style={{ scale: -1 }}
      animate={
        isHovered
          ? animate({ withDelay: true }).reveal
          : animate({ withDelay: false }).hide
      }
    />
  </svg>
);
