import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/organisms/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Kream</title>
          <meta name="description" content="Fake Kream page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello from Docker!</h1>
        <h1>Hello from Docker!</h1>
        <h1>Hello from Docker!</h1>
        <h1>Hello from Docker!</h1>
        <h1>Hello from Docker!</h1>
        <h1>Hello from Docker!</h1>
        <h1>Hello from Docker!</h1>
      </Layout>
    </>
  );
};

export default Home;
