import { FC, SVGAttributes } from "react";

const Copy: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="28"
    fill="none"
    viewBox="0 0 27 28"
    {...props}
  >
    <rect
      width="18.5"
      height="20.052"
      x="0.75"
      y="0.75"
      fill="#fff"
      stroke="currentColor"
      strokeWidth="1.5"
      rx="4.25"
    />
    <rect
      width="18.5"
      height="20.052"
      x="7.75"
      y="7.198"
      fill="#fff"
      stroke="currentColor"
      strokeWidth="1.5"
      rx="4.25"
    />
  </svg>
);

export default Copy;
