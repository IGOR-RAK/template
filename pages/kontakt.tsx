import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import MyForm from "../components/form/Form";
import Map from "../components/map/Map";
import ContactData from "../components/ContactData";
import { IContactData } from "../types";
import { contact_info } from "../content";
import CustomLanding from "../components/ui/CustomLanding";
import Image from "next/image";

const Contacts = () => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  return (
    <>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomLanding
        src="/landing_uslugi.webp"
        container_class="kontakty__landing_container"
      >
        <h1 className="font-semibold text-cyan-600 text-6xl  text-center ">
          Kontakty
        </h1>
      </CustomLanding>
      <div className="bg-slate-100">
        <div className="mt-10 w-full md:w-4/6 mx-auto">
          <ContactData props={contact_info} />
          <div className="py-20">
            {" "}
            <Map API_KEY={API_KEY} />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="relative w-96 ">
              <Image
                src="/lawyer2.webp"
                className="z-1"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
            <div>              
              <MyForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;

Contacts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
