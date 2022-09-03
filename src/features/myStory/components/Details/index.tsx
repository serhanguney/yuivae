import { FC } from "react";

import { Story } from "~/features/myStory/constants/stories";
import {
  ProjectDescription,
  ProjectTitle,
  Tag,
} from "~/features/ui/components/Details";

import {
  MyStoryTagContainer,
  StoryDetailsContainer,
  TextWrapper,
} from "./styles";

type Props = {
  story: Story;
};

const MyStoryDetails: FC<Props> = ({ story }) => {
  const { title, details, tags } = story;
  return (
    <StoryDetailsContainer>
      <MyStoryTagContainer>
        {tags.map((tag) => (
          <Tag key={tag.name}>{tag.name}</Tag>
        ))}
      </MyStoryTagContainer>
      <TextWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{details}</ProjectDescription>
      </TextWrapper>
    </StoryDetailsContainer>
  );
};

export default MyStoryDetails;
