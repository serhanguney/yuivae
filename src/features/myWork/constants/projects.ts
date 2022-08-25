import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import DG_DESKTOP from "../assets/DG_Desktop.jpg";
import DG_MOBILE_1 from "../assets/DG_Mobile_1.jpg";
import DG_MOBILE_2 from "../assets/DG_Mobile_2.jpg";
import PYC_DESKTOP from "../assets/PYC_Desktop.jpg";
import PYC_MOBILE_1 from "../assets/PYC_Mobile_1.jpg";
import PYC_MOBILE_2 from "../assets/PYC_Mobile_2.jpg";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  colors: { primary: string; secondary: string };
  images: Array<ImageProps["src"]>;
};
const DIANA_GUNEY: Project = {
  title: "Diana Guney",
  description:
    "A portfolio website that focuses on visual presentation of an architects projects.",
  tags: ["UI/UX", "Freelance", "Animation"],
  colors: {
    primary: colors.dianaGuney.primary,
    secondary: colors.dianaGuney.secondary,
  },
  images: [DG_DESKTOP, DG_MOBILE_1, DG_MOBILE_2],
};

const PYC: Project = {
  title: "Private Yacht",
  description:
    "A gallery website to present private yacht charter services and display various types of yachts.",
  tags: ["UI/UX", "Freelance", "Animation"],
  colors: { primary: colors.pyc.primary, secondary: colors.pyc.secondary },
  images: [PYC_DESKTOP, PYC_MOBILE_1, PYC_MOBILE_2],
};

export const myWorkArray = [DIANA_GUNEY, PYC];
