import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface INavbar {
  navStyle?: string;
  ulStyle?: string;
  liStyle?: string;
  aStyle?: string;
  aStyleActive?: string;
}

export default function Navbar({
  navStyle,
  ulStyle,
  liStyle,
  aStyle,
  aStyleActive,
}: INavbar) {
  const links = [
    { slug: "/kancelaria", text: "O KANCELARII" },
    { slug: "/uslugi", text: "USŁUGI" },
    { slug: "/zasady", text: "ZASADY WSPÓŁPRACY" },
    { slug: "/kontakt", text: "KONTAKT" },
  ];
  const router = useRouter();
  const path = router.asPath;

  // const [state,setState]=React.useState([]as dataType[])

  // React.useEffect(() => {

  //   async function getUsers() {
  //     try {
  //       // 👇️ const data: GetUsersResponse
  //       const { data, status } = await axios.get<GetUsersResponse>(
  //         'http://localhost:1337/api/menu-items',
  //         {
  //           headers: {
  //             Accept: 'application/json',
  //           },
  //         },
  //       );

  //       // console.log(JSON.stringify(data, null, 4));

  //       // // 👇️ "response status is: 200"
  //       // console.log('response status is: ', status);
  //       setState(data.data)
  //       // console.log("DATA:",data.data[0]) ;
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         console.log('error message: ', error.message);
  //         return error.message;
  //       } else {
  //         console.log('unexpected error: ', error);
  //         return 'An unexpected error occurred';
  //       }
  //     }
  //   }

  //   getUsers()
  // },[]);

  if (links.length === 0) {
    return null;
  }


  return (
    <nav className={navStyle && navStyle}>
      <ul className={ulStyle && ulStyle}>
        {links.map((item, index) => {
          if (path === item.slug) {
            return (
              <li key={index} className={liStyle && liStyle}>
                <Link href={item.slug}>
                  <a className={aStyleActive && aStyleActive}>{item.text}</a>
                </Link>
              </li>
            );
          }
          return (
            <li key={index} className={liStyle && liStyle}>
              <Link href={item.slug}>
                <a className={aStyle && liStyle}>{item.text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
