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


const Services = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
     
     const array = data.data.attributes.text.split("\n")
    
  return (
    <>
      <Head>
        <title>Usługi</title>
        <meta name="description" content="Usługi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-4/6 mt-20">
      <h1 className="text-3xl font-bold underline">Uslugi</h1>
      </div>
      {/* <div>{
        array.map((i,index)=><p key={index} className="mb-4">{i}</p>)
        }</div> */}

     
    </>
  );
};

export default Services;

Services.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};