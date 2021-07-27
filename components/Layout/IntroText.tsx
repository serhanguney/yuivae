import styles from "./Layout.module.scss";

export default function IntroText({ title, paragraph, componentStyle = null }) {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.paragraph}>{paragraph}</p>
      <style jsx>
        {`
          ${componentStyle}
        `}
      </style>
    </div>
  );
}
