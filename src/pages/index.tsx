import { m } from "framer-motion";
import type { NextPage } from "next";
import styled from "styled-components";

import { revealParagraph } from "~/features/core/animations/constants";
import useResize from "~/features/hooks/useResize";
import MyStory from "~/features/myStory";
import { MyWork } from "~/features/myWork";
import AnimatedSection from "~/features/ui/components/AnimatedSection";
import Layout from "~/features/ui/components/Layout";
import { GithubLink, LinkedinLink } from "~/features/ui/iconLinks";
import { mediaQueries, ScreenSize } from "~/features/ui/theme/mediaQueries";
import { typography } from "~/features/ui/theme/typography";

const Container = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: clamp(30rem, 60vw, 90rem);
  text-align: center;

  ${mediaQueries.mobileMin} {
    min-height: 100vh;
  }
`;

const HomePageTitle = styled.h2`
  ${typography.pageTitle};
  display: flex;
  justify-content: center;
  margin-top: clamp(6rem, 6vw, 10rem);

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

const LinkContainer = styled.ul`
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
      animate={{ width: 80, opacity: 1 }}
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

  const isMobile = controlledWidth && controlledWidth < ScreenSize.medium;
  const delayStart = 1.5;

  return (
    <Layout
      title="Yuivae"
      description="A website that showcases Serhan Guney's portfolio"
    >
      <Container>
        {isMobile ? renderMobileTitle() : renderDesktopTitle()}
        <HomePageText
          initial={revealParagraph.initial}
          animate={revealParagraph.animate(1)}
          style={{ marginTop: "3rem" }}
        >
          Hi. This is my portfolio website where I present everything I find
          worth mentioning when it comes to my career.
        </HomePageText>
        <HomePageText
          initial={revealParagraph.initial}
          animate={revealParagraph.animate(delayStart)}
          style={{ marginTop: "clamp(4rem, 4vw,10rem)" }}
        >
          Or you can just skip the whole thing...
        </HomePageText>
        <LinkContainer>
          <m.li
            initial={revealParagraph.initial}
            animate={revealParagraph.animate(delayStart + 0.1)}
          >
            <LinkedinLink />
          </m.li>
          <m.li
            initial={revealParagraph.initial}
            animate={revealParagraph.animate(delayStart + 0.2)}
          >
            <GithubLink />
          </m.li>
        </LinkContainer>
      </Container>
      <AnimatedSection id="my-work">
        <MyWork />
      </AnimatedSection>
      <AnimatedSection id="my-story">
        <MyStory />
      </AnimatedSection>
    </Layout>
  );
};

export default Home;
