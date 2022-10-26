import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { easings } from "~/features/core/animations/constants";
import { stories, Story } from "~/features/myStory/constants/stories";

import { Circle, Container, ImageWrapper } from "./styles";

type Props = {
  story: Story;
};

const TheRing: FC<Props> = ({ story }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(
    stories.indexOf(story)
  );
  console.log("TheRing");

  const animateStory = (mappedStory: Story, mappedStoryIndex: number) => {
    const isCurrentStory = stories.indexOf(mappedStory) === currentStoryIndex;
    const isSeen = mappedStoryIndex < currentStoryIndex;
    const isNextOne = mappedStoryIndex - currentStoryIndex === 1;
    const isLastOne = mappedStoryIndex - currentStoryIndex === 2;

    if (isCurrentStory) return { x: 0, opacity: 1, scale: 1 };

    if (isSeen)
      return {
        x: "10%",
        opacity: 0,
        filter: `blur(20px)`,
        transition: { duration: 0.3 },
      };

    if (isNextOne)
      return {
        x: "-100%",
        scale: 0.7,
        opacity: 0.5,
      };

    if (isLastOne)
      return {
        x: "-170%",
        scale: 0.4,
        opacity: 0.2,
      };
  };

  useEffect(() => setCurrentStoryIndex(stories.indexOf(story)), [story]);
  const storyColor = stories[currentStoryIndex ?? 0].color;
  return (
    <Container>
      <Circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        $borderColor={storyColor}
      >
        {stories.map((mappedStory, index) => {
          const isCurrentStory =
            stories.indexOf(mappedStory) === currentStoryIndex;
          const delay = isCurrentStory ? 0 : 0.1;
          return (
            <ImageWrapper
              key={`${mappedStory.title}-index`}
              $hasFocus={isCurrentStory}
              initial={animateStory(mappedStory, index)}
              animate={animateStory(mappedStory, index)}
              transition={{ duration: 0.6, delay, ease: easings.cubic1 }}
            >
              <Image
                src={mappedStory.coverImage}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          );
        })}
      </Circle>
    </Container>
  );
};

export default TheRing;
