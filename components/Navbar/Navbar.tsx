import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [width, setWidth] = useState(null);
  const navbarOptions = ["Blog", "Tools that I use", "Yuipass", "Login"];
  function renderOptions() {
    if (width < 600) {
      return <Menu options={navbarOptions} />;
    } else {
      return (
        <ul className={styles.navbarOptions}>
          {navbarOptions.map((option) => (
            <li key={option}>{option}</li>
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
      <h3 className={styles.logo}></h3>
      {width && renderOptions()}
    </nav>
  );
}
