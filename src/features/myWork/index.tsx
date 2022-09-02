import { useState } from "react";

import { durations } from "~/features/core/animations/constants";
import { Background } from "~/features/myWork/components/Background";
import { Details } from "~/features/myWork/components/Details";
import Navigation from "~/features/myWork/components/Navigation";
import { myWorkArray, Project } from "~/features/myWork/constants/projects";
import { Grid } from "~/features/ui/components/Grid";

import { SectionTitle } from "./styles";

const MyWork = () => {
  const [project, setProject] = useState<Project>(myWorkArray[0]);
  const changeProject = (chosenProject: Project) => setProject(chosenProject);

  return (
    <>
      <SectionTitle>My Work</SectionTitle>
      <Grid>
        <Navigation
          animation={{ delay: 1.5 }}
          projectCount={2}
          onChange={changeProject}
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
