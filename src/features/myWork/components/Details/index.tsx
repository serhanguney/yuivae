import { AnimatePresence } from "framer-motion";
import { FC } from "react";

import { durations } from "~/features/core/animations/constants";
import { Project } from "~/features/myWork/constants/projects";
import { AnimatedButton } from "~/features/ui/components/AnimatedButton";
import {
  DetailsWrapper,
  ProjectDescription,
  ProjectTitle,
  Tag,
} from "~/features/ui/components/Details";

import { MyWorkDetails, MyWorkTagContainer } from "../../styles";

const MOTION = {
  register: { initial: {}, animate: {}, exit: {} },
  revealParagraph: {
    initial: { y: "20%", opacity: 0, filter: "blur(5px)" },
    animate: (i: number) => ({
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: durations.myWork.medium,
        delay: i + durations.myWork.medium / 2,
      },
    }),
    exit: {
      opacity: 0,
      filter: "blur(5px)",
    },
  },
};

type Props = {
  project: Project;
};

export const Details: FC<Props> = ({ project }) => (
  <MyWorkDetails
    initial="initial"
    animate="animate"
    exit="exit"
    variants={MOTION.register}
  >
    <AnimatePresence exitBeforeEnter>
      <DetailsWrapper
        key={`${project.title}-details`}
        variants={MOTION.register}
      >
        <ProjectTitle
          custom={0}
          variants={MOTION.revealParagraph}
          exit={MOTION.revealParagraph.exit}
        >
          {project.title}
        </ProjectTitle>
        <ProjectDescription
          custom={0.2}
          variants={MOTION.revealParagraph}
          exit={MOTION.revealParagraph.exit}
        >
          {project.description}
        </ProjectDescription>
        <MyWorkTagContainer>
          {project.tags.map((tag, index) => (
            <Tag
              key={tag}
              custom={(index + durations.myWork.medium) * 0.25}
              variants={MOTION.revealParagraph}
              exit={MOTION.revealParagraph.exit}
            >
              {tag}
            </Tag>
          ))}
        </MyWorkTagContainer>
      </DetailsWrapper>
    </AnimatePresence>
    <AnimatedButton>Go to project</AnimatedButton>
  </MyWorkDetails>
);
