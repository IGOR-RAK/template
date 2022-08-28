import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
interface IAbout {
  job: string;
  name: string;
  about: string;
}

export default function About({ job, name, about }: IAbout) {
  const [state, setState] = React.useState(false);
  const isReady = React.useRef<boolean>(true);
  const myRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        if (isReady.current) {
          setState(true);
          isReady.current = false;
        }
      }
    });
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  }, []);

  return (
    <section className="static md:relative flex flex-col bg-white text-slate-500 mt-16 ml-auto mr-auto about__height dev_border border ">
      <div className="mt-0 md:mt-60" ref={myRef}></div>
      <div className={state ? "static md:absolute w-full md:w-1/2 about__right-box" : "about__hide"}>
        <div className="relative h-96 md:h-full">
        <Image
          src="/lawyer2.webp"
          className="z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 20%"
        />
        </div>
      </div>
      <div className={state ? "static md:absolute w-full md:w-1/2 about__left-box" : "about__hide"}>
        <div className="py-8 md:py-12 px-4 md:px-24 text-white">
          <h3 className="text-xl mb-6 uppercase">{job}</h3>
          <h2 className="text-4xl mb-6">{name}</h2>
          <ReactMarkdown className="markdown text-lg">{about}</ReactMarkdown>
        </div>
      </div>
      
    </section>
  )
}
