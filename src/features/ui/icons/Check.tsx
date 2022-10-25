import { FC, SVGAttributes } from "react";

const Check: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="11"
    fill="none"
    viewBox="0 0 14 11"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 1L4.75 9.25 1 5.5"
    />
  </svg>
);

export default Check;
