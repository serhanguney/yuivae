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

  const animateStory = (mappedStory: Story, mappedStoryIndex: number) => {
    const isCurrentStory = stories.indexOf(mappedStory) === currentStoryIndex;
    const isSeen = mappedStoryIndex < currentStoryIndex;
    const notYetSeen = mappedStoryIndex > currentStoryIndex;
    const diff = mappedStoryIndex - currentStoryIndex;

    if (isCurrentStory)
      return { x: 0, opacity: 1, scale: 1, filter: `blur(0px)` };

    if (isSeen)
      return {
        x: "10%",
        opacity: 0,
        filter: `blur(20px)`,
        transition: { duration: 0.3 },
      };

    if (notYetSeen) {
      return {
        x: `-${200 - (1 / diff) * 100}%`,
        filter: `blur(10px)`,
        scale: 1 - 0.3 * diff,
        opacity: (1 / diff) * 0.2,
      };
    }
  };

  useEffect(() => setCurrentStoryIndex(stories.indexOf(story)), [story]);
  const storyColor = stories[currentStoryIndex ?? 0]?.color;
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
                style={{ objectFit: "cover" }}
              />
            </ImageWrapper>
          );
        })}
      </Circle>
    </Container>
  );
};

export default TheRing;
