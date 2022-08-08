import { colors } from "~/features/ui/theme/colors";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  colors: { primary: string; secondary: string };
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
};

const PYC: Project = {
  title: "Private Yacht",
  description:
    "A gallery website to present private yacht charter services and display various types of yachts.",
  tags: ["UI/UX", "Freelance", "Animation"],
  colors: { primary: colors.pyc.primary, secondary: colors.pyc.secondary },
};

export const myWorkArray = [DIANA_GUNEY, PYC];
