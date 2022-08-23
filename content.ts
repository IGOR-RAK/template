import { IContactData } from "./types";

export const contact_info: IContactData[] = [
  {
    id: 1,
    text: "Adres Kancelarii",
    type: "adress",
    data: "ul.Nyska 68-99 50-510 Wroclaw",
    icon: "/info/adress.png",
  },
  {
    id: 2,
    text: "Telefon",
    type: "telephone",
    data: "508 170 762",
    icon: "/info/telephone.png",
  },
  {
    id: 3,
    text: "Email",
    type: "email",
    data: "kancelaria@pawel-zdanowski.pl",
    icon: "/info/email.png",
  },
];
