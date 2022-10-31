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
    details: `This is where I used various different tools (basic coding) to create systems to automatise the schedules of 40 employees, sales & finance processes and inventory control, which then led to me becoming a developer.`,
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
      "In my first year of learning programming I did a few freelance projects that enabled me to get basic experience. I mainly lacked the knowledge of re-usable code, project architecture and typescript which led me to make a lot of mistakes.",
    tags: [
      "Basic programming",
      "Basic hosting",
      "CSS/SASS",
      "ReactJS",
      "NextJS",
    ],
    coverImage: freelancer,
    color: colors.pyc.primary,
  },
  {
    title: "Frontend Academy",
    details: `When I was working at my first job as a software engineer I wanted to speed up my improvement and applied to the frontend academy led by <a href="https://strv.com" target="_blank" rel="noreferrer">STRV</a>. During this academy I had the opportunity to learn from the senior engineers in STRV. This was a valuable milestone for me as the knowledge I learned during the academy was not something I could learn on my own.`,
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
      "At my first job as a software engineer I was involved in different teams that dealt with member applications with complex state management, and marketing websites. Being part of teams with such senior engineers and UX/UI designers was a big step forward in my career, in that it gave me a much broader perspective on software engineering and improved my coding skills immensely.",
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
