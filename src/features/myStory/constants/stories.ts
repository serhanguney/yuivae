import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import accolade from "../assets/Accolade.jpg";
import freelancer from "../assets/freelancer.jpg";
import jewelryShop from "../assets/jewelryShop.jpg";
import STRV from "../assets/STRVGraduation.jpg";

export type Story = {
  title: string;
  details: string;
  tags: string[];
  coverImage: ImageProps["src"];
  color: string;
};

export const stories: Story[] = [
  {
    title: "A boutique jewelry store",
    details: `This is where I started using basic coding and experimenting with different tools. I created a system that automates the schedules of 40 employees, sales & finance processes and inventory control. This experience experience has been the eye opener leading me to become a developer.`,
    tags: [
      "Sales automation",
      "Finance automation",
      "Inventory automation",
      "Schedule system",
    ],
    coverImage: jewelryShop,
    color: colors.text.hover,
  },
  {
    title: "Freelance projects",
    details:
      "Over the first year of learning programming I completed a few freelance projects. <i>Learning by doing</i> helped me to gain a steady foundation. The lack of knowledge in re-usable code, project architecture and typescript has led me to make important of mistakes that taught me the value of a solid foundation.",
    tags: [
      "Basic programming",
      "Basic hosting",
      "HTML & CSS/SASS",
      "ReactJS",
      "NextJS",
    ],
    coverImage: freelancer,
    color: colors.pyc.primary,
  },
  {
    title: "Frontend Academy",
    details: `While working at my first job as a software engineer I decided to speed up my improvement and applied to the frontend academy led by <a href="https://strv.com" target="_blank" rel="noreferrer">STRV</a>. During the academy I had a chance to learn high-level programming techniques from the senior engineers in STRV.`,
    tags: [
      "HTML in Depth",
      "React under the hood",
      "Project Architecture",
      "TypeScript",
      "CI/CD",
      "NextJS",
      "Styled components",
    ],
    coverImage: STRV,
    color: colors.text.hover,
  },
  {
    title: "Software engineer",
    details:
      "As a software engineer I have been involved in different teams that operate on member applications with complex state management, and marketing websites. Collaborating with teams of senior engineers and UX/UI designers has been a big step forward in my career that provided me a much broader perspective on software engineering.",
    tags: [
      "Redux",
      "Advanced programming",
      "Advanced NextJS",
      "TypeScript",
      "CI/CD",
      "Basic Testing",
      "Styled components",
    ],
    coverImage: accolade,
    color: colors.accolade.primary,
  },
];
