import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import Intro from "../components/Intro";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import { InferGetServerSidePropsType } from "next";
import About from "../components/About";
import Services from "../components/Services";

type Atributes = { id: number; title: string; text: string };

type dataType = {
  id: number;
  attributes: Atributes;
};

interface Data {
  data: dataType;
}

type aboutAtributes = { job: string; name: string; about:string };


type adoutDataType = {
  id: number;
  attributes: aboutAtributes;
};

interface AboutData {
  data:  adoutDataType;
}



export const getServerSideProps = async () => {
  const res = await fetch("https://sheltered-river-97651.herokuapp.com/api/kancelaria");
  const data: Data = await res.json();
  const resAbout = await fetch("https://sheltered-river-97651.herokuapp.com/api/about");
  const about:AboutData = await resAbout.json();

  return {
    props: {
      data,
      about
    },
  };
};

const Home = ({
  data,about
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Kancelaria Radcy Pravnego</title>
        <meta name="description" content="Kancelaria Radcy Pravnego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <div className="landing_top">
        <Intro
          title={data.data.attributes.title}
          text={data.data.attributes.text}
        />
        <About
         job={about.data.attributes.job}
         name={about.data.attributes.name}
         about={about.data.attributes.about}
        />

        <Services/>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
