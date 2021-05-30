import React, { ReactElement } from "react";
import styles from "./Button.module.scss";
export type ButtonType = {
  onClick?: (e) => void;
  icon?: ReactElement | null;
  text?: string | null;
  disabled?: boolean;
};
export default function Button({
  onClick = null,
  icon = null,
  text = "",
  disabled = false,
}: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`${
        text === "" ? styles.buttonSecondary : styles.buttonPrimary
      } ${disabled ? styles.disabled : ""}`}
    >
      {icon}
      {text}
    </button>
  );
}
