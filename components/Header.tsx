import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center bg-sky-400 text-white ">
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
      <nav>
        <ul>
          <li>O nas</li>
          <li>Nasza Oferta</li>
          <li>
            <Link href="/contacts">
              <a>Kontakty</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
