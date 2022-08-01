import Link from "next/link";
import Navbar from "./Navbar";

interface INavbar {
  isIntersecting:boolean
  init:boolean
}



export default function Header({ isIntersecting,init}:INavbar) {
  return (
    <header 
    className={`flex justify-center items-center bg-white text-slate-500 ${init ? "header_init" : isIntersecting ? "header_fat" : "header_slim"}`}>
      <div className="flex justify-between items-center w-4/5">
        <Link href="/">
          <a>Kancelaria Radcy Pravnego</a>
        </Link>
        <Navbar
         ulStyle={'flex justify-between items-center ml-1 myitems'} 
         aStyle={'link_color'}
         aStyleActive={'link_active_color'}
         />
      </div>
    </header>
  );
}
