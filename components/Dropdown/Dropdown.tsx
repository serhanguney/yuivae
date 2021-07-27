import React from "react";
import Link from "next/link";
import styles from "./Dropdown.module.scss";
type Props = {
  array: string[];
  title: string;
  klass: string | null;
};
export default function Dropdown({ array, title, klass = null }: Props) {
  return (
    <div className={`${styles.dropdownContainer} ${klass ? klass : ""}`}>
      {title}
      <div className={styles.dropdownOffset}>
        <ul className={styles.dropdownContent}>
          {array.map((item, index) => (
            <Link href={`/${item.toLowerCase()}`}>
              <li key={index} className={styles.dropdownItem}>
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
