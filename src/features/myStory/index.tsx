import { useState } from "react";

import MyStoryDetails from "~/features/myStory/components/Details";
import TheRing from "~/features/myStory/components/theRing";
import { stories, Story } from "~/features/myStory/constants/stories";
import { Project } from "~/features/myWork/constants/projects";

import { Container, SectionTitle } from "./styles";

const MyStory = () => {
  const [story, setStory] = useState<Story>(stories[0]);
  console.log("Section");
  // TODO #1 (search for #1.YV in the project)
  const onChange = (changedStory: Story | Project) =>
    setStory(changedStory as Story);

  return (
    <>
      <SectionTitle>My Story</SectionTitle>
      <Container>
        <TheRing story={story} />
        <MyStoryDetails story={story} drillForNavigation={{ onChange }} />
      </Container>
    </>
  );
};

export default MyStory;
