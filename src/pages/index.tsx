import type { NextPage } from "next";
import Head from "next/head";

import { MyWork } from "~/features/myWork";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyWork />
    </div>
  );
};

export default Home;
