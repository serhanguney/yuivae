import { m } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { revealParagraph } from "~/features/core/animations/constants";
import { LINKS } from "~/features/core/constants";
import useResize from "~/features/hooks/useResize";
import MyStory from "~/features/myStory";
import { MyWork } from "~/features/myWork";
import AnimatedSection from "~/features/ui/components/AnimatedSection";
import Layout from "~/features/ui/components/Layout";
import Github from "~/features/ui/icons/Github";
import Linkedin from "~/features/ui/icons/Linkedin";
import { ScreenSize } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const Container = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  max-width: clamp(30rem, 60vw, 90rem);
  text-align: center;
`;

const HomePageTitle = styled.h2`
  ${typography.pageTitle};
  display: flex;
  justify-content: center;
  margin-top: clamp(10rem, 14vw, 20rem);

  .stroked {
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  span {
    display: inline-block;
    overflow: hidden;
    height: min-content;
  }
`;

const HomePageText = styled(m.p)`
  ${typography.p};
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  a {
    margin: 0 1rem;
  }
`;

const renderMobileTitle = () => (
  <HomePageTitle>
    Yui
    <span className="stroked">Vae</span>
  </HomePageTitle>
);
const renderDesktopTitle = () => (
  <HomePageTitle>
    Y
    <m.span
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 72, opacity: 1 }}
      transition={{ duration: 1, delay: 0.1, ease: "easeIn" }}
    >
      ui
    </m.span>
    <span className="stroked">V</span>
    <m.span
      className="stroked"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 72, opacity: 1 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
    >
      ae
    </m.span>
  </HomePageTitle>
);

const Home: NextPage = () => {
  const controlledWidth = useResize((w) =>
    w ? Math.floor(w / 100) * 100 : undefined
  );

  return (
    <Layout
      title="Yuivae"
      description="A website that showcases Serhan Guney's portfolio"
    >
      <Container>
        {controlledWidth && controlledWidth < ScreenSize.medium
          ? renderMobileTitle()
          : renderDesktopTitle()}
        <HomePageText
          initial={revealParagraph.initial}
          animate={revealParagraph.animate(1)}
          style={{ marginTop: "3rem" }}
        >
          Hi. This is where you can see me ‘bragging’ about the software I built
          during my career and the knowledge I gathered over the years.
        </HomePageText>
        <HomePageText
          initial={revealParagraph.initial}
          animate={revealParagraph.animate(1.5)}
          style={{ marginTop: "clamp(15rem, 21vw,30rem)" }}
        >
          Or you can just skip the whole thing...
        </HomePageText>
        <LinkContainer>
          <Link href={LINKS.LINKEDIN}>
            <m.a
              initial={revealParagraph.initial}
              animate={revealParagraph.animate(1.6)}
              href={LINKS.LINKEDIN}
              target="_blank"
              aria-label="Go to Linkedin profile"
            >
              <Linkedin />
            </m.a>
          </Link>
          <Link href={LINKS.GITHUB}>
            <m.a
              initial={revealParagraph.initial}
              animate={revealParagraph.animate(1.7)}
              href={LINKS.GITHUB}
              target="_blank"
              aria-label="Go to Github profile"
            >
              <Github />
            </m.a>
          </Link>
        </LinkContainer>
      </Container>
      <AnimatedSection id="my-work" offset={100}>
        <MyWork />
      </AnimatedSection>
      <AnimatedSection id="my-story" offset={100}>
        <MyStory />
      </AnimatedSection>
    </Layout>
  );
};

export default Home;
