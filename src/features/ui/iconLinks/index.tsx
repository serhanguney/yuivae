import Link from "next/link";
import styled from "styled-components";

import { LINKS } from "~/features/core/constants";
import Github from "~/features/ui/icons/Github";
import Linkedin from "~/features/ui/icons/Linkedin";
import { colors } from "~/features/ui/theme/colors";

const AnchorTag = styled(Link)<{ $isDark?: boolean }>`
  color: ${colors.text.default};
  @media (hover: hover) {
    &:hover {
      color: ${colors.secondary.default};
    }
  }
`;

const LinkedinLink = () => (
  <AnchorTag
    href={LINKS.LINKEDIN}
    target="_blank"
    aria-label="Go to Linkedin profile"
    rel="noreferrer"
  >
    <Linkedin />
  </AnchorTag>
);
const GithubLink = () => (
  <AnchorTag
    href={LINKS.GITHUB}
    target="_blank"
    aria-label="Go to Github profile"
    rel="noreferrer"
  >
    <Github />
  </AnchorTag>
);

export { GithubLink, LinkedinLink };
