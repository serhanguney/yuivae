import { useState } from "react";

import { durations } from "~/features/core/animations/constants";
import { Story } from "~/features/myStory/constants/stories";
import { Background } from "~/features/myWork/components/Background";
import { Details } from "~/features/myWork/components/Details";
import { myWorkArray, Project } from "~/features/myWork/constants/projects";

import { Container, MyWorkNavigation, SectionTitle } from "./styles";

const MyWork = () => {
  const [project, setProject] = useState<Project>(myWorkArray[0]);
  // TODO Story should be removed the TypeScript error should be dealt with - #1.YV
  const changeProject = (chosenProject: Project | Story) =>
    setProject(chosenProject as Project);

  return (
    <>
      <SectionTitle>My Work</SectionTitle>
      <Container>
        <MyWorkNavigation
          animation={{ delay: 1.5 }}
          projectCount={myWorkArray.length}
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
      </Container>
    </>
  );
};

export { MyWork };
