import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import dianaGuney from "../assets/dianaGuney.jpg";
import jewelryShop from "../assets/jewelryShop.png";
import softwareEngineer from "../assets/softwareEngineer.jpg";

export type Story = {
  title: string;
  details: string;
  tags: Array<{ name: string; hasFocus: boolean }>;
  coverImage: ImageProps["src"];
  color: string;
};

export const stories: Story[] = [
  {
    title: "A boutique jewelry store",
    details:
      "A family business that has roughly 10000 incoming visitors per year.",
    tags: [
      { name: "Teamwork", hasFocus: false },
      { name: "Business understanding", hasFocus: true },
      { name: "Communication", hasFocus: true },
    ],
    coverImage: dianaGuney,
    color: colors.dianaGuney.primary,
  },
  {
    title: "Freelance projects",
    details:
      "Portfolio projects that display products/services. These projects rely on animations to boos the impact of UI/UX",
    tags: [
      { name: "Code quality", hasFocus: false },
      { name: "CI/CD", hasFocus: false },
      { name: "Programming knowledge", hasFocus: false },
      { name: "Visual Quality", hasFocus: true },
      { name: "ReactJS knowledge", hasFocus: true },
    ],
    coverImage: dianaGuney,
    color: colors.dianaGuney.secondary,
  },
  {
    title: "Software engineer",
    details:
      "Working as a team of developers indulging in complex application development. UI/UX development",
    tags: [
      { name: "Programming knowledge", hasFocus: true },
      { name: "TypeScript", hasFocus: true },
      { name: "CI/CD", hasFocus: true },
    ],
    coverImage: softwareEngineer,
    color: colors.dianaGuney.primary,
  },
];
