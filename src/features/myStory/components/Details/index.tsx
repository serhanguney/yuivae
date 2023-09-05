import { AnimatePresence } from 'framer-motion';
import parse from 'html-react-parser';
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import {
  durations,
  revealParagraph,
} from '~/features/core/animations/constants';
import { stories, Story } from '~/features/myStory/constants/stories';
import { MyStoryNavigation } from '~/features/myStory/styles';
import { Project } from '~/features/myWork/constants/projects';
import {
  ProjectDescription,
  ProjectTitle,
  Tag,
} from '~/features/ui/components/Details';

import {
  MyStoryTagContainer,
  StoryDetailsContainer,
  TextWrapper,
} from './styles';

type Props = {
  story: Story;
  drillForNavigation: { onChange: (changedProject: Project | Story) => void };
};

const MOTION = {
  register: { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {} },
  revealParagraph: {
    initial: revealParagraph.initial,
    animate: (i: number) => revealParagraph.animate(i),
    exit: revealParagraph.exit,
  },
};

const MyStoryDetails: FC<Props> = ({ story, drillForNavigation }) => {
  const { title, details, tags } = story;

  return (
    <StoryDetailsContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={MOTION.register}
    >
      <MyStoryTagContainer>
        {tags.map((tag, index) => (
          <Tag
            key={uuid()}
            custom={(index + durations.myWork.medium) * 0.25}
            variants={MOTION.revealParagraph}
            exit={MOTION.revealParagraph.exit}
          >
            {tag}
          </Tag>
        ))}
      </MyStoryTagContainer>

      <TextWrapper variants={MOTION.register} style={{ minHeight: '480px' }}>
        <AnimatePresence exitBeforeEnter>
          <ProjectTitle
            key={story.title}
            style={{ marginTop: 'auto' }}
            custom={0}
            variants={MOTION.revealParagraph}
            exit={MOTION.revealParagraph.exit}
          >
            {title}
          </ProjectTitle>
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          <ProjectDescription
            key={story.details}
            custom={0.2}
            variants={MOTION.revealParagraph}
            exit={MOTION.revealParagraph.exit}
          >
            {parse(details)}
          </ProjectDescription>
        </AnimatePresence>
        <MyStoryNavigation
          projectCount={stories.length}
          onChange={drillForNavigation.onChange}
          arrayToMatchPageStateWith={stories}
        />
      </TextWrapper>
    </StoryDetailsContainer>
  );
};

export default MyStoryDetails;
