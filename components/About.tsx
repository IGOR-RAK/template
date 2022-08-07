import React from "react";
import ReactMarkdown from "react-markdown";
interface IAbout{
  job:string;
  name:string;
  about:string
}

// const returnClassname = (classname: string) => {
//   setTimeout(() => {
//     return classname;
//   }, 5000);
// };

export default function About( {job,name,about}:IAbout) {


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
    <section className="relative flex flex-col bg-white text-slate-500  ml-auto mr-auto about__height dev_border">
      {/* <h2 className="text-3xl mb-5">{title}</h2> */}
      <div className="text-px dev_border mt-60" ref={myRef}></div>
      <div className={state ? "about__left-box" : "about__hide"}>
        <h3>{job}</h3>
        <h2 className="uppercase">{name}</h2>
        <p>{about}</p>
      </div>
      {/* <div className={state?returnClassname("about__left-box"):"about__hide"}></div> */}
      <div className={state ? "about__right-box" : "about__hide"}></div>

      {/* <div className="text-3xl mb-5" style={{height:"2px",borderBottom:"2px solid lightgrey"}}></div>   
      <ReactMarkdown className="markdown">{text}</ReactMarkdown> */}
    </section>
  );
}
