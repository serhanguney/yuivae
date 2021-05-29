import styles from "./Button.module.scss";
export default function Button({ onClick, icon, text }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {icon}
      {text}
    </button>
  );
}
