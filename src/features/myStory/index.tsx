import { useState } from "react";

import MyStoryDetails from "~/features/myStory/components/Details";
import TheRing from "~/features/myStory/components/theRing";
import { stories, Story } from "~/features/myStory/constants/stories";
import { Grid } from "~/features/ui/components/Grid";

import { SectionTitle } from "./styles";

const MyStory = () => {
  const [story, setStory] = useState<Story>(stories[0]);
  return (
    <>
      <SectionTitle>My Story</SectionTitle>
      <Grid>
        <TheRing stories={stories} />
        <MyStoryDetails story={story} />
      </Grid>
    </>
  );
};

export default MyStory;
