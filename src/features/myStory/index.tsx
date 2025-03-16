import { useState } from "react";

import { revealParagraph } from "~/features/core/animations/constants";
import { routes } from "~/features/core/constants";
import MyStoryDetails from "~/features/myStory/components/Details";
import TheRing from "~/features/myStory/components/theRing";
import { stories, Story } from "~/features/myStory/constants/stories";
import { Project } from "~/features/myWork/constants/projects";

import { Container, SectionTitle } from "./styles";

const MyStory = () => {
  const [story, setStory] = useState<Story>(stories[0]);

  // TODO #1 (search for #1.YV in the project)
  const onChange = (changedStory: Story | Project) =>
    setStory(changedStory as Story);

  return (
    <Container>
      <SectionTitle
        initial={revealParagraph.initial}
        animate={revealParagraph.animate(0)}
      >
        {routes.myBackground.label}
      </SectionTitle>
      <TheRing story={story} />
      <MyStoryDetails story={story} drillForNavigation={{ onChange }} />
    </Container>
  );
};

export default MyStory;
