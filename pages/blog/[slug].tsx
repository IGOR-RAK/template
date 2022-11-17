import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Datum {
  id: number;
  attributes: Attributes2;
}

export interface Image {
  data: Datum[];
}

export interface Attributes3 {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Datum2 {
  id: number;
  attributes: Attributes3;
}

export interface Categories {
  data: Datum2[];
}

export interface Attributes {
  title: string;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: Image;
  categories: Categories;
}

// type Atributes = { id: number; title: string; content: string ; description:string };

type dataType = {
  id: number;
  attributes: Attributes;
};

interface Data {
  data: dataType;
}

type aboutAtributes = { job: string; name: string; about: string };

type adoutDataType = {
  id: number;
  attributes: aboutAtributes;
};

interface AboutData {
  data: adoutDataType;
}

export const getServerSideProps = async (context:any) => {
  
    const id = context.query.slug
  console.log("Blog Data", context.query.slug);
  const res = await fetch(
    `https://sheltered-river-97651.herokuapp.com/api/posts/${id}`
  );
  const data: Data = await res.json();
  const item = data.data;
  //   const resAbout = await fetch("https://sheltered-river-97651.herokuapp.com/api/about");
  //   const about:AboutData = await resAbout.json();

  return {
    props: {
      item,
    },
  };
};

const Home = ({
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full lg:w-4/6 mx-auto mt-20">
        <div key={item.id}>
          <h2 className="text-2xl text-sky-900">{item.attributes.title}</h2>
          <div className="text-sm">
            {item.attributes.description && item.attributes.description}
          </div>
          <div>
            <ReactMarkdown>{item.attributes.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
