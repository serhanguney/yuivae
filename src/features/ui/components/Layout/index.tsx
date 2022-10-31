import Head from "next/head";
import { FC, ReactNode } from "react";
import styled from "styled-components";

import Footer from "~/features/ui/components/Footer";
import Header from "~/features/ui/components/Header";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.main`
  margin-bottom: clamp(25rem, 30vw, 45rem); ;
`;
const Layout: FC<Props> = ({ children, title, description }) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <MainSection>{children}</MainSection>
    <Footer />
  </Container>
);

export default Layout;
