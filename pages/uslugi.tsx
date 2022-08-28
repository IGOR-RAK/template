import { ReactElement } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";

import Layout from "../components/Layout";
import CustomLanding from "../components/ui/CustomLanding";
import ServicesComponent from "../components/Services";

type Atributes = { id: number; title: string; text: string };

type dataType = {
  id: number;
  attributes: Atributes;
};

interface Data {
  data: dataType;
  greeting: string;
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://sheltered-river-97651.herokuapp.com/api/zasady"
  );
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Services = ({
  data,
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
        <h1 style={{textShadow:"0 2px 4px rgba(0, 0, 0, 0.4)"}} className="font-semibold text-white text-6xl  text-center ">
          Usługi
        </h1>
      </CustomLanding>
      <ServicesComponent />
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
