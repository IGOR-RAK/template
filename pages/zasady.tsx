import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { InferGetServerSidePropsType } from 'next'



type Atributes= { id:number, title:string, text: string }

type dataType = {
    id:number,
    attributes:Atributes
}

interface Data {
    data:dataType


}



export const getServerSideProps = async () => {
  const res = await fetch('https://sheltered-river-97651.herokuapp.com/api/zasady')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}


const Rules = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
     
     const array = data.data.attributes.text.split("\n")
     console.log('zasady', array)
  return (
    <>
      <Head>
        <title>Zasady</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline"> {data.data.attributes.title}</h1>
      <div>{
        array.map(i=><p className="mb-4">{i}</p>)
        }</div>

     
    </>
  );
};

export default Rules;

Rules.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};