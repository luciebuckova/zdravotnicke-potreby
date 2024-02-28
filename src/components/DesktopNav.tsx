import IsStoreOpen from "../utils/IsStoreOpen";

function DesktopNav() {
  return (
    <nav className="flex items-baseline justify-between text-white">
      <div>
        <IsStoreOpen />
        <p className="font-medium">pondělí až čtvrtek 8 - 17, pátek 8 - 16</p>
      </div>
      <ul className="flex gap-16 text-xl font-medium">
        <li>
          <a href="#onas" className=" hover:text-fuchsia-400">
            O nás
          </a>
        </li>
        <li>
          <a href="#produkty" className=" hover:text-fuchsia-400">
            Produkty
          </a>
        </li>
        <li>
          <a href="#kontakt" className=" hover:text-fuchsia-400">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
