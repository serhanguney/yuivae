export const ScreenSize = {
  medium: 768,
  large: 1280,
  wide: 1700,
};
const defaultFontSize = 16;

export const mediaQueries = {
  mobileMax: `@media (max-width: ${ScreenSize.medium / defaultFontSize}rem)`,
  mobileMin: `@media (min-width: ${ScreenSize.medium / defaultFontSize}rem)`,
  laptopMin: `@media (min-width: ${ScreenSize.large / defaultFontSize}rem)`,
  desktopMin: `@media (min-width: ${ScreenSize.wide / defaultFontSize}rem)`,
};
