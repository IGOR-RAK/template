import Navbar from "./Navbar";

export default function Footer() {
  return (
    <footer className=" bg-sky-400  text-white px-4 py-6 mt-20">
      <div className="flex flex-col lg:w-4/6 lg:mx-auto">
        <h2 className="text-2xl text-center mb-4">
          Kancelaria Radcy Prawnego Paweł Zdanowski
        </h2>
        <div className="mb-4 lg:flex lg:justify-center lg:items-start lg:w-full">
          <div className="flex justify-center lg:basis-1/2 ">
          <div className="mb-4 ">
            <p className="lg:pb-2">Adres: ul. Nyska 75/1, 50 – 505 Wrocław</p>
            <p className="lg:pb-2">Telefon: 508 170 762</p>
            <p className="lg:pb-2">Mail: kancelaria@czapla-zdanowska.pl</p>
          </div>
          </div>
          <div className="lg:basis-1/2 ">
            <Navbar navStyle="capitalize flex justify-center" liStyle="pb-2" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-center ">
          Strona korzysta z plików cookies w celu realizacji usług zgodnie z
          Polityką Prywatności.
          </div>
        </div>
      </div>
    </footer>
  );
}
