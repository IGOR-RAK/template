import Head from "next/head";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import MyForm from "../components/form/Form";
import ContactData from "../components/ContactData";
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
        <h1 style={{textShadow:"0 2px 4px rgba(0, 0, 0, 0.4)"}} className="font-semibold text-white  text-6xl  text-center ">
          Kontakty
        </h1>
      </CustomLanding>
      <div className="">
        <div className="mt-20 w-full md:w-5/6 mx-auto">

          <ContactData props={contact_info} />

          <div className="mt-20">
            {/* <Map API_KEY={API_KEY} /> */}
            <div className="w-full mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.9263030234524!2d15.483984815924748!3d51.935297787147015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470611580f7c2161%3A0x5875e2cdd392c6b3!2zNjUtNjEwINCX0LXQu9GR0L3QsC3Qk9GD0YDQsA!5e0!3m2!1sru!2spl!4v1661543332873!5m2!1sru!2spl"
                width="100%"
                height="450"
                style={{ border: "1px solid lightgrey" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="lg:flex flex-row mt-20 p-10 bg-white">
            <div className="lg:basis-1/2 border">
              <div className="relative h-full w-full">
                <Image
                  src="/lawyer2.webp"
                  className=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
            </div>
            <div className="lg:basis-1/2 bg-white">
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
