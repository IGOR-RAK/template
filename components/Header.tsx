import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";

interface INavbar {
  isIntersecting: boolean;
  init: boolean;
}

export default function Header({ isIntersecting, init }: INavbar) {
  const [active, setActive] = React.useState(false);
  return (
    <header className="header">
      <div
        className={`z-50 flex justify-center items-center bg-white text-slate-500 ${
          init ? "header_init" : isIntersecting ? "header_fat" : "header_slim"
        }`}
      >
        <div className="flex justify-between items-center w-4/5">
          <Link href="/">
            <a>            
              <Image src="/logo.svg" width={272} height={40} alt="backgroud" />
            </a>
          </Link>
          <div className="activeOnDesktop">
            <Navbar
              ulStyle={"flex justify-between items-center ml-1 myitems"}
              liStyle="link_color hover-underline-animation"
              aStyle={"link_active"}
              aStyleActive={"link_active_color"}
            />
          </div>
          <div className="activeOnMobile">
            <div
              className={active ? "burger-btn active" : "burger-btn"}
              onClick={() => {
                setActive(!active);
              }}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile_nav w-full ">
        <div className={`z-10 w-4/5 ${active ? "mobile active" : "mobile"}`}>
          <div className="bg-sky-400 h-px"></div>
          <Navbar
            navStyle="bg-white text-slate-500 p-2"
            ulStyle="mp-2 flex flex-col justify-center items-center"
            liStyle="li pb-2"
          />
        </div>
      </div>
    </header>
  );
}
