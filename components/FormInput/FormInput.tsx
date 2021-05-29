import styles from "./FormInput.module.scss";

export default function FormInput({ register }) {
  return (
    <div className={styles.inputContainer}>
      <input {...register} />
      <label></label>
      {/* {!errors.isNone && <p>{field.error}</p>} */}
    </div>
  );
}
