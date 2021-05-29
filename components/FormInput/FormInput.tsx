import styles from "./FormInput.module.scss";

export default function FormInput({ field }) {
  return (
    <div className={styles.inputContainer}>
      <input {...field} />
      <label></label>
      {/* {!errors.isNone && <p>{field.error}</p>} */}
    </div>
  );
}
