import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import YUILEARN_1 from "../assets/YuiLearn_1.jpg";
import YUILEARN_2 from "../assets/YuiLearn_2.jpg";
import YUILEARN_3 from "../assets/YuiLearn_3.jpg";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  colors: { primary: string; secondary: string };
  images: Array<ImageProps["src"]>;
  comingSoon: boolean;
};

const YUI_LEARN: Project = {
  title: "YuiLearn",
  description:
    "An application to learn a new language. This app will enable you to shape your learning process by adding your own phrases from your daily life. These can be the conversations you encounter, the stuff you read, the subtitles you see, etc. You can create your own custom labels to organise and track your progress.",
  tags: [
    "Project Architecture",
    "Redux",
    "NextJS",
    "Complex state-management",
    "Database / Backend",
  ],
  link: "https://yuivae.com",
  colors: {
    primary: colors.backgroundHover.default,
    secondary: colors.secondary.darkTheme,
  },
  images: [YUILEARN_1, YUILEARN_2, YUILEARN_3],
  comingSoon: true,
};

export const myWorkArray = [YUI_LEARN];
