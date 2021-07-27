import styles from "./Layout.module.scss";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={`${styles.pageContainer} grid background`}>{children}</div>
  );
}
