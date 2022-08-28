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
      <div className="mt-10 ">
        <CustomLanding src="/zasady.webp" container_class="zasady__landing_container">
          <h1 style={{textShadow:"0 2px 4px rgba(0, 0, 0, 0.4)"}} className="font-semibold text-white text-lg md:text-6xl  text-center ">
            {data.data.attributes.title}
          </h1>
        </CustomLanding>
      </div>
      <div className="md:w-4/6 mx-auto my-20 text-lg ">
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
