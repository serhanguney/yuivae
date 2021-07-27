import styles from "./FormInput.module.scss";
import React, { forwardRef } from "react";

type Field = {
  name: string;
  type: string;
  error?: string;
};
type Props = {
  field: Field;
  label?: string | null;
  disabled?: boolean;
};
function FormInput({ field, label = null, disabled = false }: Props) {
  return (
    <div className={styles.inputContainer}>
      <input className={disabled ? styles.disabled : ""} {...field} required />
      <label>{label && <span>{label}</span>}</label>
    </div>
  );
}
export default FormInput;
