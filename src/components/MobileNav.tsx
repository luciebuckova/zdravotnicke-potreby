import { useState } from "react";
import IsStoreOpen from "../utils/IsStoreOpen";
import HamburgerBtn from "./HamburgerBtn";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className="flex justify-end">
      <HamburgerBtn toggleOpen={toggleOpen} isOpen={isOpen} />
      {isOpen ? (
        <div className="absolute right-0 top-0 h-screen bg-darker p-8 pt-28 font-medium">
          <div className="mb-16">
            <IsStoreOpen />
            <p>pondělí až čtvrtek 8 - 17</p>
            <p>pátek 8 - 16</p>
          </div>
          <ul className="flex flex-col gap-8">
            <li onClick={toggleOpen}>
              <a href="#onas">O nás</a>
            </li>
            <li onClick={toggleOpen}>
              <a href="#produkty">Produkty</a>
            </li>
            <li onClick={toggleOpen}>
              <a href="#kontakt">Kontakt</a>
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
