import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
interface IServices {
  id: number;
  title: string;
  text: string;
}

const arr: IServices[] = [
  {
    id: 1,
    title: "Prawo cywilne",
    text: "W tym najobszerniejszym z działów prawa kancelaria doradza i prowadzi postępowania z zakresu prawa zobowiązań oraz prawa rzeczowego.",
  },
  {
    id: 2,
    title: "Prawo rodzinne",
    text: "Radca prawny Paulina Czapla – Zdanowska traktuje sprawy rodzinne z należytą uwagą i zaangażowaniem, reprezentując swoich klientów osobiście podczas spotkań, negocjacji oraz rozpraw sądowych. Dąży do szybkiego rozwiązania z korzyścią dla klienta, dbając jednak o niezaostrzanie konfliktu.",
  },
  {
    id: 3,
    title: "Pomoc frankowiczom",
    text: "Kancelaria prowadzi postępowania w zakresie kredytów indeksowanych oraz denominowanych do CHF. W przedmiotowych sprawach wnosimy o uznanie przez sądy tzw. kredytów frankowych za kredyty złotowe, w których element przeliczania do CHF nie ma zastosowania. W zależności od woli klienta oraz jego sytuacji ekonomicznej występujemy o „odfrankowanie” kredytów CHF lub ich unieważnienie.",
  },
  {
    id: 4,
    title: "Prawo cywilne",
    text: "W tym najobszerniejszym z działów prawa kancelaria doradza i prowadzi postępowania z zakresu prawa zobowiązań oraz prawa rzeczowego.",
  },
  {
    id: 5,
    title: "Prawo rodzinne",
    text: "Radca prawny Paulina Czapla – Zdanowska traktuje sprawy rodzinne z należytą uwagą i zaangażowaniem, reprezentując swoich klientów osobiście podczas spotkań, negocjacji oraz rozpraw sądowych. Dąży do szybkiego rozwiązania z korzyścią dla klienta, dbając jednak o niezaostrzanie konfliktu.",
  },
  {
    id: 6,
    title: "Pomoc frankowiczom",
    text: "Kancelaria prowadzi postępowania w zakresie kredytów indeksowanych oraz denominowanych do CHF. W przedmiotowych sprawach wnosimy o uznanie przez sądy tzw. kredytów frankowych za kredyty złotowe, w których element przeliczania do CHF nie ma zastosowania. W zależności od woli klienta oraz jego sytuacji ekonomicznej występujemy o „odfrankowanie” kredytów CHF lub ich unieważnienie.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 pt-8">
      <div className="flex flex-col bg-gray-100 text-slate-500 mt-16 w-5/6 ml-auto mr-auto dev_border">
        <h2 className="text-4xl mb-5 uppercase text-center">USŁUGI</h2>
        <div
          className="text-3xl mb-5"
          style={{ height: "2px", borderBottom: "2px solid lightgrey" }}
        ></div>
      </div>
      <div className="bg-gray-100 mt-4">
        <div className="p-6 w-5/6 ml-auto mr-auto">
          <h3 className="text-center text-slate-500 text-3xl">Sprawy sądowe:</h3>
          <div className="grid">
            {arr.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col   text-slate-500 p-10 rounded "
              >
                <h3 className=" text-yellow-900 pb-4 text-3xl">{item.title}</h3>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
