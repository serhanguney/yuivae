import { useState, useEffect } from "react";
import Blog from "../components/Layout/Blog";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/MyThoughts.module.scss";
export default function myThoughts() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function getArticle() {
      const result = await fetch("/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await result.json();
      console.log(response.results);
      setArticle(response.results);
    }
    getArticle();
  }, []);
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      {article && <Blog article={article} title="My Thoughts" />}
    </div>
  );
}
