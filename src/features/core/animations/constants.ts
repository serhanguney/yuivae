export const durations = {
  myWork: { long: 1, medium: 0.8, short: 0.5, veryShort: 0.25 },
};
type Easing = {
  cubic1: [number, number, number, number];
  cubic2: [number, number, number, number];
};
export const easings: Easing = {
  cubic1: [0.65, 0.05, 0.36, 1],
  cubic2: [0.86, 0, 0.07, 1],
};

export const revealParagraph = {
  initial: { y: "20%", opacity: 0, filter: "blur(5px)" },
  animate: (i: number) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: durations.myWork.medium,
      delay: i + durations.myWork.medium / 2,
    },
  }),
  exit: {
    opacity: 0,
    filter: "blur(5px)",
  },
};
