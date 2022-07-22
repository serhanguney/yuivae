export const ScreenSize = {
  medium: 768,
  large: 1200,
};
const percentage = 62.5 / 100;

export const mq = {
  smallOnly: `@media (max-width: ${ScreenSize.medium * percentage}rem)`,
  medium: `@media (min-width: ${ScreenSize.medium * percentage}rem)`,
  large: `@media (min-width: ${ScreenSize.large * percentage}rem)`,
};
