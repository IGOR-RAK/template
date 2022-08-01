import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Kancelaria Radcy Pravnego</title>
        <meta name="description" content="Kancelaria Radcy Pravnego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col  justify-center items-center w-4/5">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
       
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
