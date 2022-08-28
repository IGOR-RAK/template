import ReactMarkdown from 'react-markdown';
interface IIntro{
  title:string;
  text:string 
}


export default function Intro({title,text}:IIntro) {
  return (
    <section className="flex flex-col bg-white text-slate-500 px-4 w-full md:w-4/6 ml-auto mr-auto">
      <h2 className="text-3xl mb-5">{title}</h2>
      <div className="text-3xl mb-5" style={{height:"2px",borderBottom:"2px solid lightgrey"}}></div>   
      <ReactMarkdown className="markdown">{text}</ReactMarkdown>
    </section>
  );
}
