import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <section id="header">
      <div className="flex justify-between w-full bg-green-500 text-[#325527]  text-l md:p-3">
        <Link href="/">
          <div className="flex items-center space-x-2 md:ml-16">
            <div className="w-8 h-8">
              <Image src="/icon.png" alt="logo" width={60} height={60} />
            </div>
            <p className="tracking-wider font-bold hover:text-[#142210]">
              ISARI
            </p>
          </div>
        </Link>
        <div className="flex items-center">
          <li className="flex space-x-5 mr-2 md:mr-0 md:space-x-20">
            <ul className="hover:text-[#142210]">
              <a href="#go-abroad">Work Abroad</a>
            </ul>
            <ul className="hover:text-[#142210]">
              <a href="#chat">Chat</a>
            </ul>
          </li>
        </div>
        <div className="flex items-center hidden md:block">
          <a
            href="https://www.linkedin.com/in/isariyaporn-kanta-6b2865243/"
            target="_blank"
          >
            <button className="rounded-xl px-2 py-1 md:mr-16 border border-[#325527] hover:bg-[#325527] hover:text-white">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
