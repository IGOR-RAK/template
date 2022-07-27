import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import Form from "../components/Form";


const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline"> Contacts</h1>
      <Form/>

    </>
  );
};
export default Contacts;

Contacts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
