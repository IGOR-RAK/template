import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import { ReactElement } from 'react';



const Home=() => {
  return (
    <div>
      <main>
      <h1 className="text-3xl font-bold underline">
//       Page Helllo
//     </h1>
      </main>
    </div>
  )
}
export default Home




Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}