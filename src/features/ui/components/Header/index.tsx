import { useElementScroll } from "framer-motion";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { listOfLinks } from "~/features/core/constants";
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

const ScrollCurtain = styled.p<{ $isHidden: boolean }>`
  ${mediaQueries.mobileMin} {
    display: none;
  }
  ${typography.p};
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
  svg {
    color: inherit;
    margin-right: 1rem;
  }
`;
const Header: FC = () => {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollX } = useElementScroll(ref);
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
        <a aria-label="Go to homepage">
          <HeaderLogo />
        </a>
      </Link>
      <LinkContainer>
        <ul ref={ref}>
          <li>
            <ScrollCurtain $isHidden={isScrolled}>
              scroll
              <PreviosArrow isHidden={isScrolled} />
            </ScrollCurtain>
          </li>
          {listOfLinks.map((item) => (
            <StyledLink key={item.text} $isAvailable={item.isAvailable}>
              <Link href={item.link}>
                <a>{item.text}</a>
              </Link>
            </StyledLink>
          ))}
        </ul>
      </LinkContainer>
    </HeaderContainer>
  );
};
export default Header;
