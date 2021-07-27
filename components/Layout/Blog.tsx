import styles from "./Blog.module.scss";
import Block from "./Block";
import { useEffect, useRef, useState } from "react";

export default function Blog({ article, title }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isRead, setIsRead] = useState(false);
  let blogRef = useRef(null);
  const headers = article.filter((item) => item.type.includes("heading"));
  function handleScroll(e) {
    const parent = e.target;
    const scrollableHeight =
      parent.scrollHeight - parent.getBoundingClientRect().height;
    setScrollProgress(
      100 - ((scrollableHeight - parent.scrollTop) / scrollableHeight) * 100
    );
  }
  useEffect(() => {
    if (scrollProgress === 100) {
      setIsRead(true);
    } else if (scrollProgress < 85) {
      setIsRead(false);
    }
  }, [scrollProgress]);

  function goToHeader(item) {
    const parent = blogRef.current;
    const children = parent.children;
    const scrollTarget = Array.from(children).filter(
      (el) => el["dataset"].id === item.id
    )[0] as HTMLElement;
    parent.scrollTo({
      behavior: "smooth",
      top: scrollTarget.offsetTop - parent.offsetTop,
    });
    console.log(scrollTarget, parent.offsetTop);
  }

  function scrollToTop() {
    blogRef.current.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className={styles.blog}>
      <section className={styles.headers}>
        <div
          className={styles.scrollProgress}
          style={{ height: `${scrollProgress}%` }}
        ></div>
        <button
          className={`${styles.scrollUpButton} ${
            isRead ? styles.buttonReveal : ""
          }`}
          onClick={scrollToTop}
        >
          Scroll up
        </button>

        <ul className={styles.headersList}>
          {headers.map((item) => (
            <li
              key={item.id}
              style={{
                marginLeft: `${10 * item.type[item.type.length - 1]}px`,
              }}
              className={styles.headerElement}
            >
              <button onClick={() => goToHeader(item)}>
                {item[item.type].text[0]?.plain_text}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.article}>
        <div className={styles.articleInfo}>
          <h1 className={styles.articleTitle}>{title}</h1>
          <p className={styles.articleDetails}>by Serhan Guney</p>
        </div>

        <ul
          ref={blogRef}
          className={styles.articleContent}
          onScroll={(e) => handleScroll(e)}
        >
          {article.map((item) => (
            <Block key={item.id} content={item} />
          ))}
          <div className={styles.author}>
            <p>Thanks for reading</p>
          </div>
        </ul>
      </section>
    </main>
  );
}
