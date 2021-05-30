import Button from "../Button/Button";
import styles from "./FormInput.module.scss";
import { ButtonType } from "../Button/Button";

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
export default function FormInput({
  field,
  label = null,
  disabled = false,
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <input className={disabled ? styles.disabled : ""} {...field} required />
      <label>{label && <span>phrase</span>}</label>
    </div>
  );
}
