import { FC } from "react";

import { Story } from "~/features/myStory/constants/stories";

import { Circle, Container, Image } from "./styles";

type Props = {
  stories: Story[];
};

const TheRing: FC<Props> = ({ stories }) => {
  return (
    <Container>
      <Circle />
      <Image />
    </Container>
  );
};

export default TheRing;
