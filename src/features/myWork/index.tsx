import { useState } from "react";

import { durations } from "~/features/core/animations/constants";
import { Story } from "~/features/myStory/constants/stories";
import { Background } from "~/features/myWork/components/Background";
import { Details } from "~/features/myWork/components/Details";
import { myWorkArray, Project } from "~/features/myWork/constants/projects";
import { Grid } from "~/features/ui/components/Grid";

import { MyWorkNavigation,SectionTitle } from "./styles";

const MyWork = () => {
  const [project, setProject] = useState<Project>(myWorkArray[0]);
  // TODO Story should be removed the TypeScript error should be dealt with - #1.YV
  const changeProject = (chosenProject: Project | Story) =>
    setProject(chosenProject as Project);

  return (
    <>
      <SectionTitle>My Work</SectionTitle>
      <Grid>
        <MyWorkNavigation
          animation={{ delay: 1.5 }}
          projectCount={2}
          onChange={changeProject}
          arrayToMatchPageStateWith={myWorkArray}
        />
        <Details project={project} />
        <Background
          duration={durations.myWork.long}
          colors={{
            primary: project.colors.primary,
            secondary: project.colors.secondary,
          }}
          images={project.images}
        />
      </Grid>
    </>
  );
};

export { MyWork };
