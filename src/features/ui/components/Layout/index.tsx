import Head from "next/head";
import { FC, ReactNode } from "react";

import Footer from "~/features/ui/components/Footer";
import Header from "~/features/ui/components/Header";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};
const Layout: FC<Props> = ({ children, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
