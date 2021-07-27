import styles from "./Layout.module.scss";

type Desc = {
  array: string[];
  title: string;
};
export default function Description({ array, title }: Desc) {
  return (
    <div className={styles.description}>
      <h2 className={styles.secondaryTitle}>{title}</h2>
      <ul className={styles.list}>
        {array.map((item, index) => (
          <li key={item.length} className={styles.container}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
