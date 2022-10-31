import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import DG_DESKTOP from "../assets/DG_Desktop.jpg";
import DG_MOBILE_1 from "../assets/DG_Mobile_1.jpg";
import DG_MOBILE_2 from "../assets/DG_Mobile_2.jpg";
import PYC_DESKTOP from "../assets/PYC_Desktop.jpg";
import PYC_MOBILE_1 from "../assets/PYC_Mobile_1.jpg";
import PYC_MOBILE_2 from "../assets/PYC_Mobile_2.jpg";
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
const DIANA_GUNEY: Project = {
  title: "Diana Guney",
  description:
    "This is the first project I did in my first year; a portfolio website that focuses on visual presentation of an architect's projects.",
  tags: ["UI/UX", "CSS", "ReactJS", "Animation"],
  link: "https://dianaguney.com",
  colors: {
    primary: colors.dianaGuney.primary,
    secondary: colors.dianaGuney.secondary,
  },
  images: [DG_DESKTOP, DG_MOBILE_1, DG_MOBILE_2],
  comingSoon: false,
};

const PYC: Project = {
  title: "Private Yacht",
  description:
    "This is the second freelance project I did in my first year; a gallery website to present private yacht charter services and display various types of yachts.",
  tags: ["UI/UX", "ReactJS", "Animation", "SASS"],
  link: "https://privateyachtingturkey.com/",
  colors: { primary: colors.pyc.primary, secondary: colors.pyc.secondary },
  images: [PYC_DESKTOP, PYC_MOBILE_1, PYC_MOBILE_2],
  comingSoon: false,
};

const YUI_LEARN: Project = {
  title: "YuiLearn",
  description:
    "An application to learn Czech. This is an app that will enable you to create your own database by adding your own phrases, create your own custom tags and have practice modules tailored to you. As you level up by adding phrases and practicing, you'll be earning physical rewards that you can utilise in real life.",
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

export const myWorkArray = [DIANA_GUNEY, PYC, YUI_LEARN];
