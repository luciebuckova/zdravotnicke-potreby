import { useState } from "react";
import HamburgerBtn from "./HamburgerBtn";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className="flex justify-between">
      <div className="flex items-center gap-2 text-white md:text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-phone"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
        <p className="font-bold">
          <a href="tel:+420604687034"> +420 604 687 034 </a>
        </p>
      </div>
      <HamburgerBtn toggleOpen={toggleOpen} isOpen={isOpen} />
      {isOpen ? (
        <div className="absolute right-0 top-0 z-40 h-screen w-full bg-purple-950 p-8 pt-28 font-medium text-white">
          <ul className="flex flex-col gap-8">
            <li onClick={toggleOpen}>
              <a href="#onas" className="text-fuchsia-200">
                O nás
              </a>
            </li>
            <li onClick={toggleOpen}>
              <a href="#produkty" className="text-fuchsia-200">
                Produkty
              </a>
            </li>
            <li onClick={toggleOpen}>
              <a href="#kontakt" className="text-fuchsia-200">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default MobileNav;
