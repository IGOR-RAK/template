import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import MyForm from "../components/form/Form";
import Map from "../components/map/Map";

const Contacts = () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  return (
    
    <>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      
      <div className="mt-20">
        <MyForm />
        <Map API_KEY={API_KEY}/>
      </div>
    </>
  );
};
export default Contacts;

Contacts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
