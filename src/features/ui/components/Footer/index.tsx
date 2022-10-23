import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

import { LINKS } from "~/features/core/constants";
import { colors } from "~/features/ui/theme/colors";
import { typography } from "~/features/ui/theme/typography";
import Github from "~/icons/Github";
import Linkedin from "~/icons/Linkedin";

const footerLinks = [
  {
    text: "My work",
    link: "#my-work",
  },
  {
    text: "My story",
    link: "#my-story",
  },
  {
    text: "Yuipass",
    link: "/yuipass",
  },
];

const Container = styled.footer`
  background-color: ${colors.background.darkTheme};
  padding: 4rem 2rem;
`;
const LinkContainer = styled.ul`
  display: flex;
  padding-top: 4rem;
  a {
    ${typography.p};
    margin: 0 1rem;
    color: ${colors.text.darkTheme};
    &:hover {
      color: ${colors.secondary.default};
    }
  }
`;

const IconContainer = styled.ul`
  display: flex;
  a {
    margin: 0 1rem;
    color: ${colors.text.darkTheme};
    &:hover {
      color: ${colors.secondary.default};
    }
    svg {
      fill: currentColor;
    }
  }
`;
const Footer: FC = () => {
  return (
    <Container>
      <IconContainer>
        <Link href={LINKS.GITHUB}>
          <a target="_blank">
            <Github />
          </a>
        </Link>
        <Link href={LINKS.LINKEDIN}>
          <a target="_blank">
            <Linkedin />
          </a>
        </Link>
      </IconContainer>
      <LinkContainer>
        {footerLinks.map((item) => (
          <li key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </LinkContainer>
    </Container>
  );
};

export default Footer;
