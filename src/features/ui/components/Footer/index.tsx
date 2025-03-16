import Link from "next/link";
import { FC } from "react";
import styled, { css } from "styled-components";

import { routes } from "~/features/core/constants";
import { GithubLink, LinkedinLink } from "~/features/ui/iconLinks";
import { Logo } from "~/features/ui/icons/Logo";
import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const Container = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${colors.background.darkTheme};
  padding: 4rem 2rem;
  margin-top: auto;
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
  color: ${colors.text.darkTheme};
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
  li {
    &:first-of-type {
      margin-left: 0;
    }
    margin: 0 1rem;
  }
  a {
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
        <li>
          <GithubLink />
        </li>
        <li>
          <LinkedinLink />
        </li>
      </IconContainer>
      <LinkContainer>
        {Object.values(routes).map((item) => (
          <StyledLink key={item.key} $isAvailable>
            <Link
              href={item.path}
              target={item.isExternal ? "_blank" : "_self"}
              referrerPolicy={item.isExternal ? "no-referrer" : "origin"}
            >
              {item.label}
            </Link>
          </StyledLink>
        ))}
      </LinkContainer>
      <FooterLogo />
    </Container>
  );
};

export default Footer;
