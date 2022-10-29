import Link from "next/link";
import { FC } from "react";
import styled, { css } from "styled-components";

import { LINKS, listOfLinks } from "~/features/core/constants";
import Github from "~/features/ui/icons/Github";
import Linkedin from "~/features/ui/icons/Linkedin";
import { Logo } from "~/features/ui/icons/Logo";
import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const Container = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${colors.background.darkTheme};
  padding: 4rem 2rem;
  margin-top: clamp(25rem, 30vw, 45rem);
  ${mediaQueries.mobileMax} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  ${mediaQueries.mobileMax} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
`;
const StyledLink = styled.li<{ $isAvailable: boolean }>`
  ${typography.p};
  margin: 0 1rem;
  ${mediaQueries.mobileMax} {
    margin: 0.5rem 0;
  }
  color: ${(props) =>
    props.$isAvailable ? colors.text.darkTheme : colors.text.hover};
  pointer-events: ${(props) => (props.$isAvailable ? "default" : "none")};
  &:hover {
    color: ${colors.secondary.darkTheme};
  }
  a {
    color: inherit;
  }
  ${(props) =>
    !props.$isAvailable &&
    css`
      &:after {
        content: "(coming soon)";
      }
    `}
`;
const IconContainer = styled.ul`
  display: flex;
  ${mediaQueries.mobileMax} {
    margin-bottom: 2rem;
  }
  a {
    &:first-of-type {
      margin-left: 0;
    }
    margin: 0 1rem;
    color: ${colors.text.darkTheme};
    &:hover {
      color: ${colors.secondary.darkTheme};
    }
    svg {
      fill: currentColor;
    }
  }
`;

const FooterLogo = styled(Logo)`
  margin-left: auto;
  color: ${colors.text.darkTheme};
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
        {listOfLinks.map((item) => (
          <StyledLink key={item.text} $isAvailable={item.isAvailable}>
            <Link href={item.link}>{item.text}</Link>
          </StyledLink>
        ))}
      </LinkContainer>
      <FooterLogo />
    </Container>
  );
};

export default Footer;
