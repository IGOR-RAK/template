import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer className=" bg-sky-400  text-white px-4 py-6 mt-20">
      <div className="flex flex-col">
        <h2 className="text-2xl text-center mb-4">
          Kancelaria Radcy Prawnego Paweł Zdanowski
        </h2>
        <div className="mb-4">
          <div className="mb-4">
            <p className="">Adres: ul. Nyska 75/1, 50 – 505 Wrocław</p>
            <p className="">Telefon: 508 170 762</p>
            <p className="">Mail: kancelaria@czapla-zdanowska.pl</p>
          </div>
          <div className="">
            <Navbar navStyle="capitalize" />
          </div>
        </div>
        <div className="">
          Strona korzysta z plików cookies w celu realizacji usług zgodnie z
          Polityką Prywatności.
        </div>
      </div>
    </footer>
  );
}
