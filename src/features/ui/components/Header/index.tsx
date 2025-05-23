import { useScroll } from "framer-motion";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { routes } from "~/features/core/constants";
import { InvertedLogo } from "~/features/ui/icons/Logo";
import PreviosArrow from "~/features/ui/icons/PreviosArrow";
import { colors } from "~/features/ui/theme/colors";
import { mediaQueries } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const LinkContainer = styled.nav`
  position: relative;
  &:before {
    ${mediaQueries.mobileMin} {
      display: none;
    }
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      #fff,
      transparent,
      transparent,
      transparent
    );
    flex-shrink: 0;
    pointer-events: none;
  }
  margin-left: auto;

  ul {
    display: flex;
    align-items: center;

    ${mediaQueries.mobileMax} {
      width: 27rem;
      height: 5rem;
      white-space: nowrap;
      overflow-x: scroll;
    }

    &:after {
      content: "";
      display: inline-block;
      width: 40%;
      height: 100%;
      flex-shrink: 0;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledLink = styled.li<{ $isAvailable: boolean }>`
  ${typography.p};
  font-size: 1.8rem;
  display: inline-block;
  margin: 0 1rem;
  flex-shrink: 0;
  pointer-events: ${(props) => (props.$isAvailable ? "default" : "none")};
  a {
    color: ${(props) =>
      props.$isAvailable ? colors.text.default : colors.tag.default};

    &:hover {
      color: ${colors.secondary.default};
    }
    ${(props) =>
      !props.$isAvailable &&
      css`
        &:after {
          content: " (coming soon)";
        }
      `}
  }
`;
const HeaderLogo = styled(InvertedLogo)`
  width: clamp(7rem, 6vw, 8.4rem);
  height: auto;
`;

const ScrollCurtain = styled.li<{ $isHidden: boolean }>`
  ${mediaQueries.mobileMin} {
    display: none;
  }

  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  text-align: right;
  line-height: 5rem;
  padding-right: 2rem;
  opacity: ${(props) => (props.$isHidden ? 0 : 1)};
  transition: opacity 500ms ease-in-out;
  color: ${colors.text.hover};
  p {
    ${typography.p};
    color: inherit;
  }
  svg {
    color: inherit;
    margin-right: 1rem;
  }
`;
const Header: FC = () => {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollX } = useScroll({ container: ref });
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(
    () =>
      scrollX.onChange((latest) => {
        if (latest > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }),
    [isScrolled, scrollX]
  );

  return (
    <HeaderContainer>
      <Link href="/">
        <HeaderLogo />
      </Link>
      <LinkContainer>
        <ul ref={ref}>
          <ScrollCurtain $isHidden={isScrolled}>
            <p>scroll</p>
            <PreviosArrow isHidden={isScrolled} />
          </ScrollCurtain>
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
        </ul>
      </LinkContainer>
    </HeaderContainer>
  );
};
export default Header;
