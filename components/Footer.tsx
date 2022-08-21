import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer className="footer flex bg-white  md:bg-sky-400 text-slate-600 md:text-white  md:mt-20  md:py-6 ">
      <div className="w-full md:w-4/6 mx-auto flex flex-col justify-center items-center">
        <h2 className="mb-8 text-2xl">Kancelaria Radcy Prawnego Paweł Zdanowski</h2>
        <div className=" static md:flex md:justify-center md:items-center">
          <div className="md:px-20">           
            <p className="mb-2">Adres:ul. Nyska 75/1, 50 – 505 Wrocław</p>
            <p className="mb-2">Telefon: 508 170 762</p>
            <p className="mb-2">Mail: kancelaria@czapla-zdanowska.pl</p>{" "}
          </div>
          <div className="px-20">           
            <Navbar navStyle="lowercase " />
          </div>
        </div>
        <div className="mt-10">Strona korzysta z plików cookies w celu realizacji usług zgodnie z Polityką Prywatności.</div>
      </div>
    </footer>
  );
}
