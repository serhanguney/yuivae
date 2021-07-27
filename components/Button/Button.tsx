import React, { ReactElement } from "react";
import styles from "./Button.module.scss";
export type ButtonType = {
  onClick: (e) => void;
  icon?: ReactElement | null;
  text?: string | null;
  disabled?: boolean;
  type: {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    fourth?: boolean;
  };
  props?: any;
};
export default function Button({
  onClick = null,
  icon = null,
  text = "",
  disabled = false,
  type,
  props,
}: ButtonType) {
  let currentClass: string;
  if (type.primary) {
    currentClass = styles.buttonPrimary;
  } else if (type.secondary) {
    currentClass = styles.buttonSecondary;
  } else if (type.tertiary) {
    currentClass = styles.buttonTertiary;
  } else if (type.fourth) {
    currentClass = styles.buttonFourth;
  }
  return (
    <button
      onClick={onClick}
      className={`${currentClass} center ${disabled ? styles.disabled : ""}`}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
}
