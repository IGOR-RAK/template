import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer className="footer flex bg-sky-400 text-white mt-20 py-6 ">
      <div className="w-4/6 mx-auto p-4 flex flex-col justify-center items-center">
        <h2 className="mb-8 text-2xl">Kancelaria Radcy Prawnego Paweł Zdanowski</h2>
        <div className="flex justify-center items-center">
          <div className="px-20">           
            <p className="mb-2">ul. Nyska 75/1, 50 – 505 Wrocław</p>
            <p className="mb-2">Telefon: 508 170 762</p>
            <p className="mb-2">Mail: kancelaria@czapla-zdanowska.pl</p>{" "}
          </div>
          <div className="px-20">           
            <Navbar navStyle="lowercase" />
          </div>
        </div>
        <div className="mt-10">Strona korzysta z plików cookies w celu realizacji usług zgodnie z Polityką Prywatności.</div>
      </div>
    </footer>
  );
}
