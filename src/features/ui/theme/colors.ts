import { palette } from "./palette";

export const colors = {
  text: {
    default: palette.black,
    darkTheme: palette.white,
    hover: palette.gray[500],
  },
  positive: { default: palette.green },
  destructive: { default: palette.red },
  tag: { default: palette.gray[800] },
  secondary: { default: palette.darkLila, darkTheme: palette.lila },
  dianaGuney: { primary: palette.orange, secondary: palette.creme },
  pyc: { primary: palette.blue, secondary: palette.lightBlue },
  accolade: { primary: palette.accoladeGreen },
  rossum: { primary: palette.rossumGreen },
  background: { default: palette.white, darkTheme: palette.black },
  backgroundHover: { default: palette.gray[100] },
};
