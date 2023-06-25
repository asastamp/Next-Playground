import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section id="header" className="font-lato bg-green-500">
      <div className="flex md:p-5 w-full justify-between align-center">
        <div className="w-10 h-10">
          <Link href="/">
            <Image src="/icon.png" alt="logo" width={60} height={60} />
          </Link>
        </div>
        <div className="flex items-center">
          <li className="flex space-x-10">
            <ul>
              <a href="#go-abroad">WORK</a>
            </ul>
            <ul>
              <a>CHAT</a>
            </ul>
          </li>
        </div>
      </div>
    </section>
  );
}
