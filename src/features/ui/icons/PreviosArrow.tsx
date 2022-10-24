import { m } from "framer-motion";
import { FC } from "react";

import { durations } from "~/features/core/animations/constants";

export type ArrowProps = {
  isHidden: boolean;
};

const transition = { duration: durations.myWork.short };

export const arrowAnimation = {
  reveal: {
    pathLength: 1,
    transition,
  },
  hide: {
    pathLength: 0,
    transition,
  },
};
const PreviousArrow: FC<ArrowProps> = ({ isHidden }) => {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="19"
      fill="none"
      viewBox="0 0 30 19"
    >
      <m.path
        animate={isHidden ? arrowAnimation.hide : arrowAnimation.reveal}
        stroke="currentColor"
        strokeWidth="2"
        d="M30 10L0 10"
      />
      <m.path
        animate={isHidden ? arrowAnimation.hide : arrowAnimation.reveal}
        stroke="currentColor"
        strokeWidth="2"
        d="M9.457 17.566L0.648 10.174"
      />
      <m.path
        animate={isHidden ? arrowAnimation.hide : arrowAnimation.reveal}
        stroke="currentColor"
        strokeWidth="2"
        d="M9.343 0.766L2.448 6.551"
      />
    </m.svg>
  );
};

export default PreviousArrow;
