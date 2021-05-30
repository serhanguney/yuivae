import { useState } from "react";
import styles from "./Menu.module.scss";

export default function Menu({ options }) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={styles.menuContainer}>
      <button
        className={`${styles.menuIcon} ${menuActive ? styles.menuActive : ""}`}
        onClick={() => setMenuActive((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={`${styles.menu} ${menuActive ? styles.bringMenu : ""}`}
      ></div>
      <div
        className={`${styles.overlay} ${menuActive ? styles.fadeIn : ""}`}
      ></div>
    </div>
  );
}
