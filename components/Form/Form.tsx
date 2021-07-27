import styles from "./Form.module.scss";

type Props = {
  children: React.ReactNode;
  middle?: boolean;
};
export default function Form({ children, middle = false }: Props) {
  return (
    <form className={`${styles.form} ${middle ? styles.middle : ""}`}>
      {children}
    </form>
  );
}
