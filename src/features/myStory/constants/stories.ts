import { ImageProps } from "next/image";

import { colors } from "~/features/ui/theme/colors";

import accolade from "../assets/Accolade.jpg";
import freelancer from "../assets/freelancer.jpg";
import jewelryShop from "../assets/jewelryShop.jpg";
import rossum from "../assets/rossum.jpg";
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
    title: "Retail",
    details: `This is where I started using basic coding and experimenting with different tools. I created a system that automates the schedules of 40 employees, sales & finance processes and inventory control. This experience experience has been the eye opener leading me to become a developer.`,
    tags: [
      "Inventory automation",
      "Finance automation",
      "Sales automation",
      "Schedule system",
    ],
    coverImage: jewelryShop,
    color: colors.text.hover,
  },
  {
    title: "Freelance projects",
    details:
      "Over the first year of programming I completed a few freelance projects. <i>Learning by doing</i> helped me to gain a steady foundation. The lack of knowledge in re-usable code, project architecture and typescript has led me to make important of mistakes that taught me the value of a solid foundation.",
    tags: ["HTML & CSS", "JavaScript", "ReactJS", "NextJS"],
    coverImage: freelancer,
    color: colors.pyc.primary,
  },
  {
    title: "Frontend Academy",
    details: `While working at my first job as a software engineer I decided to speed up my improvement and applied to the frontend academy led by <a href="https://strv.com" target="_blank" rel="noreferrer">STRV</a>. During the academy I had a chance to peek at high-level programming, different ways to solve various problems.`,
    tags: [
      "React under the hood",
      "Project Architecture",
      "HTML in Depth",
      "TypeScript",
      "NextJS",
      "CI/CD",
    ],
    coverImage: STRV,
    color: colors.text.hover,
  },
  {
    title: "Software engineer",
    details:
      "As a software engineer I have been involved in different teams that operate on member applications with complex state management, and marketing websites. Collaborating with teams of senior engineers and UX/UI designers has been a big step forward in my career that provided me a much broader perspective on software engineering.",
    tags: ["TypeScript", "ReactJS", "NextJS", "Redux", "CI/CD"],
    coverImage: accolade,
    color: colors.accolade.primary,
  },
  {
    title: "Software engineer II",
    details: `Involved in the frontend team as mid-senior engineer working on a complex application that deals with heavy user interactivity. Integration with extensions, complex user interactions, dashboard and statistics were the main features of the app. My experience at <a href="https://rossum.ai" target="_blank" rel="noreferrer">Rossum</a> drastically improved the way I write & review code, deal with complex app structures in a performant, simple and scalable way.`,
    tags: [
      "Software Architecture",
      "Redux Observable",
      "React Query",
      "TypeScript",
      "ReactJS",
      "Zod",
    ],
    coverImage: rossum,
    color: colors.rossum.primary,
  },
];
