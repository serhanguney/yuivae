import styles from "./Blog.module.scss";
import { memo } from "react";

function Block({ content }) {
  let klass: string = "";
  let paint: any = null;
  switch (content.type) {
    // case "heading_1":
    //   klass = styles.heading1;
    //   // paint = <h1>{content[content.type].text[0]?.plain_text}</h1>;
    //   paint = null;
    //   break;
    case "heading_2":
      klass = styles.heading2;
      paint = <h2>{content[content.type].text[0]?.plain_text}</h2>;
      break;
    case "heading_3":
      klass = styles.heading3;
      paint = <h3>{content[content.type].text[0]?.plain_text}</h3>;
      break;
    case "paragraph":
      klass = styles.paragraph;
      paint = <p>{content[content.type].text[0]?.plain_text}</p>;
      break;
  }
  return (
    <li className={klass} data-id={content.id}>
      {paint}
    </li>
  );
}

export default memo(Block);
