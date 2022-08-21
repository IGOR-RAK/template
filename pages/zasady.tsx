import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { InferGetServerSidePropsType } from "next";
import CustomLanding from "../components/ui/CustomLanding";
import MotionBox from "../components/ui/MotionBox";

type Atributes = { id: number; title: string; text: string };

type dataType = {
  id: number;
  attributes: Atributes;
};

interface Data {
  data: dataType;
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

const Rules = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const array = data.data.attributes.text.split("\n");

  return (
    <>
      <Head>
        <title>Zasady</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10">
        <CustomLanding src="/zasady.webp" container_class="zasady__landing_container">
          <h1 className="font-semibold text-cyan-600 text-6xl  text-center ">
            {data.data.attributes.title}
          </h1>
        </CustomLanding>
      </div>
      <div className="w-4/6 p-16 text-lg ">
        <div>
          {array.map((i, index) => (
            <p key={index} className="mb-4">
              {i}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rules;

Rules.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
