import { m } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { revealParagraph } from "~/features/core/animations/constants";
import { LINKS } from "~/features/core/constants";
import MyStory from "~/features/myStory";
import { MyWork } from "~/features/myWork";
import AnimatedSection from "~/features/ui/components/AnimatedSection";
import Footer from "~/features/ui/components/Footer";
import Header from "~/features/ui/components/Header";
import Github from "~/features/ui/icons/Github";
import Linkedin from "~/features/ui/icons/Linkedin";
import { typography } from "~/features/ui/theme/typography";

const Container = styled.div`
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
  margin-top: 20rem;
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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Serhan&apos;s Portfolio Website</title>
        <meta name="description" content="Portfolio website of Serhan Guney." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
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
        <HomePageText
          initial={revealParagraph.initial}
          animate={revealParagraph.animate(1)}
          style={{ marginTop: "3rem" }}
        >
          Hi. This is my portfolio website where I present everything I find
          worth mentioning when it comes to my career. Here you can see me
          ‘bragging’ about the software I built during my career and the
          knowledge I gathered over the years.
        </HomePageText>
        <HomePageText
          initial={revealParagraph.initial}
          animate={revealParagraph.animate(1.5)}
          style={{ marginTop: "30rem" }}
        >
          Or you can just skip the whole thing...
        </HomePageText>
        <LinkContainer>
          <Link href={LINKS.LINKEDIN}>
            <m.a
              initial={revealParagraph.initial}
              animate={revealParagraph.animate(1.6)}
              target="_blank"
            >
              <Linkedin />
            </m.a>
          </Link>
          <Link href={LINKS.GITHUB}>
            <m.a
              initial={revealParagraph.initial}
              animate={revealParagraph.animate(1.7)}
              target="_blank"
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
      <Footer />
    </div>
  );
};

export default Home;
