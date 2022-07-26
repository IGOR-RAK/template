import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children?: React.ReactNode;
  };
const Layout = ({children}:Props) => {
  return (
    <>
        <Header/>
        <main className="flex flex-col items-center my-10 ">
        {children}
        </main>
        <Footer/>
    </>
  )
}
export default Layout