import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar() {
  const [width, setWidth] = useState(null);
  const navbarOptions = [
    "My thoughts",
    { name: "My Tools", content: ["Yuipass", "Yuipoll"] },
  ];
  function renderOptions() {
    if (width < 600) {
      return <Menu options={navbarOptions} />;
    } else {
      return (
        <ul className={styles.navbarOptions}>
          {navbarOptions.map((option, index) => (
            <li key={index} className={styles.option}>
              {typeof option === "string" ? (
                <Link href={`/${option.toLowerCase().replace(" ", "-")}`}>
                  {option}
                </Link>
              ) : (
                <Dropdown
                  array={option.content}
                  title={option.name}
                  klass={styles.option}
                />
              )}
            </li>
          ))}
        </ul>
      );
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
  }, []);
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>Yuivae</h3>
      {width && renderOptions()}
    </nav>
  );
}
