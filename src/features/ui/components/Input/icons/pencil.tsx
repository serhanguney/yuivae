import { m } from "framer-motion";
import React, { FC } from "react";

type Props = {
  hasFocus?: boolean;
};
const PencilIcon: FC<Props> = ({ hasFocus }) => {
  const pickUp = {
    y: -10,
    x: -5,
    rotate: -45,
  };
  const putDown = {
    y: 0,
    x: 0,
    rotate: 0,
  };
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="8"
      fill="none"
      viewBox="0 0 26 8"
      initial={false}
      animate={hasFocus ? pickUp : putDown}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <path
        fill="currentColor"
        d="M25.677 5.956V2.328c0-.511-.199-.992-.56-1.354a1.901 1.901 0 00-1.354-.56H5.635a.525.525 0 00-.275.078L1.038 3.15a1.158 1.158 0 00-.554.992 1.157 1.157 0 00.554.993L5.36 7.793a.526.526 0 00.276.078h18.127c.511 0 .992-.2 1.353-.561.362-.362.561-.842.561-1.354zm-19.893.862L1.59 4.238a.109.109 0 01-.054-.096c0-.029.01-.069.054-.096l4.194-2.58H19.94v5.352H5.784zm17.979 0H20.99V1.466h2.772c.23 0 .446.09.609.252.163.163.253.38.253.61v3.628c0 .23-.09.447-.253.61a.855.855 0 01-.61.252z"
      />
    </m.svg>
  );
};

export { PencilIcon };
