import { ReactElement } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";

import Layout from "../components/Layout";
import CustomLanding from "../components/ui/CustomLanding";
import ServicesComponent from "../components/Services"


type Atributes = { id: number; title: string; text: string };

type dataType = {
  id: number;
  attributes: Atributes;
};

interface Data {
  data: dataType;
  greeting:string
}

export const getServerSideProps = async () => {
  const greeting =process.env.GREETING
  console.log("Greeting :",process.env.GREETING)
  const res = await fetch(
    "https://sheltered-river-97651.herokuapp.com/api/zasady"
  );
  const data: Data = await res.json();

  return {
    props: {
      data,
      greeting
    },
  };
};

const Services = ({
  data,
  greeting
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const array = data.data.attributes.text.split("\n");

  return (
    <>
      <Head>
        <title>Usługi</title>
        <meta name="description" content="Usługi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomLanding
          src="/landing_uslugi.webp"
          container_class="uslugi__landing_container"
        >
          <h1 className="font-semibold text-cyan-600 text-6xl  text-center ">
            Usługi
          </h1>
         
        </CustomLanding>
        <ServicesComponent/>
        <h1 className="font-semibold text-cyan-600 text-6xl  text-center ">
            {greeting}
          </h1>
          <h1 className="font-semibold text-cyan-600 text-6xl  text-center ">
            {process.env.NEXT_PUBLIC_API_KEY}
          </h1>
          
      
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
