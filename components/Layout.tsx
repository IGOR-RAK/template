import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children?: React.ReactNode;
  };
const Layout = ({children}:Props) => {
  const [init,setInit] = React.useState(true)
  const [state,setState] = React.useState(true)
  const myRef=React.useRef<HTMLDivElement>(null)
  React.useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]      
      setState(entry.isIntersecting)
    })
    if(myRef.current){ observer.observe(myRef.current)}
   
  },[])
  React.useEffect(() => {
    const height = 100
    window.addEventListener('scroll', () => {
        if (window.scrollY > height ) {
          setInit(false) /* remove .header_init */        
        } 
    });
}, []);

  return (
    <>
        <Header  isIntersecting ={state} init={init}/>
        <div className="h-px" ref={myRef}></div>
        <main className="flex flex-col items-center mt-32">
        {children}
        </main>
        <Footer/>
    </>
  )
}
export default Layout