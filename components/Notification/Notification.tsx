import styles from "./Notification.module.scss";
type Props = {
  text: string;
};
export default function Notification({ text }: Props) {
  return <div className={styles.notification}>{text}</div>;
}
