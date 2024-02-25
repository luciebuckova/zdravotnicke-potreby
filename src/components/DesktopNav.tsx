import IsStoreOpen from "../utils/IsStoreOpen";

function DesktopNav() {
  return (
    <nav className="flex items-baseline justify-between">
      <div>
        <IsStoreOpen />
        <p className="font-medium">pondělí až čtvrtek 8 - 17, pátek 8 - 16</p>
      </div>
      <ul className="flex gap-16 text-xl font-medium">
        <li>
          <a href="#onas" className="text-blue hover:text-pink">
            O nás
          </a>
        </li>
        <li>
          <a href="#produkty" className="text-blue hover:text-pink">
            Produkty
          </a>
        </li>
        <li>
          <a href="#kontakt" className="text-blue hover:text-pink">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
