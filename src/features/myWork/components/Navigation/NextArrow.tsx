import { motion } from "framer-motion";
import { FC } from "react";

import {
  arrowAnimation,
  ArrowProps,
} from "~/features/myWork/components/Navigation/PreviosArrow";

const NextArrow: FC<ArrowProps> = ({ isHidden }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="19"
    fill="none"
    viewBox="0 0 30 19"
  >
    <motion.path
      animate={isHidden ? arrowAnimation.hide : arrowAnimation.reveal}
      d="M0 10H30"
      stroke="currentColor"
      strokeWidth="2"
    />
    <motion.path
      animate={isHidden ? arrowAnimation.hide : arrowAnimation.reveal}
      d="M20.5428 17.5661L29.3523 10.1741"
      stroke="currentColor"
      strokeWidth="2"
    />
    <motion.path
      animate={isHidden ? arrowAnimation.hide : arrowAnimation.reveal}
      d="M20.6572 0.765991L27.5516 6.55108"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default NextArrow;
