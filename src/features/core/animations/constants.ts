export const durations = {
  myWork: { long: 1, medium: 0.8, short: 0.5, veryShort: 0.25 },
};
type Easing = {
  [name: string]: [number, number, number, number];
};
export const easings: Easing = {
  cubic1: [0.65, 0.05, 0.36, 1],
  cubic2: [0.86, 0, 0.07, 1],
};
