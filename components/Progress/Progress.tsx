import { useEffect, useRef, useState } from "react";
import styles from "./Progress.module.scss";

type Props = {
  stats: {
    vote: number;
    total: number;
  };
  index: number;
};
export default function Progress({ stats, index }: Props) {
  const { vote, total } = stats;

  const percentage = total === 0 ? 0 : (vote / total) * 100;
  const [radius, setRadius] = useState(0);

  //the circle ref will be used to prepare a dynamic sizing feature
  let circleRef = useRef(null);

  useEffect(() => {
    //the radius of the circles will be as half as their height;
    const r = circleRef.current.getBoundingClientRect().height / 2;
    setRadius(2 * Math.PI * r);
  }, []);
  return (
    <div>
      <h3 className={styles.title}>{index + 1}</h3>
      <div className={`${styles.progressContainer} center`}>
        <svg>
          <circle
            ref={circleRef}
            className={styles.back}
            cy="50%"
            cx="50%"
            r="35%"
            strokeDasharray={radius}
          />
          <circle
            className={styles.front}
            cy="50%"
            cx="50%"
            r="35%"
            strokeDasharray={radius}
            strokeDashoffset={
              percentage === 0
                ? radius
                : (radius - (radius * percentage) / 100).toFixed(2)
            }
          />
        </svg>
        <div className={styles.stats}>
          <h3>{Math.floor(percentage)}%</h3>
          <p>{vote} votes</p>
        </div>
      </div>
    </div>
  );
}
