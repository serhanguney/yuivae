import { animate, MotionValue, useTransform } from "framer-motion";
import { FC, useEffect } from "react";

import { Line } from "~/features/ui/components/AnimatedButton/styles";

const borders = Array.from({ length: 4 }, (_, i) => i);

type Props = {
  lineMotionValue: MotionValue<number>;
};
const Lines: FC<Props> = ({ lineMotionValue }) => {
  const lineMotion = useTransform(
    lineMotionValue,
    (value) => `${100 - value / 2}%`
  );
  const reverseLineMotion = useTransform(
    lineMotionValue,
    (value) => `-${100 - value / 2}%`
  );

  useEffect(() => {
    const controls = animate(lineMotionValue, 200, {
      duration: 1.6,
      delay: 0.8,
    });
    return controls.stop;
  }, [lineMotionValue]);

  return (
    <>
      {borders.map((borderNo) => {
        const isEven = borderNo % 2 === 0;
        const isReversed = borderNo === 2 || borderNo === 3;
        return (
          <Line
            key={borderNo}
            $borderNo={borderNo}
            style={{
              x: isEven ? 0 : isReversed ? reverseLineMotion : lineMotion,
              y: !isEven ? 0 : isReversed ? reverseLineMotion : lineMotion,
            }}
            transition={{ duration: 1 }}
          />
        );
      })}
    </>
  );
};
export { Lines };
