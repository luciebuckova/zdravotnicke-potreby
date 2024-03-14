function DesktopNav() {
  return (
    <nav className="flex items-baseline justify-between text-white">
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
      <div>
        <a
          href="tel:+420604687034"
          className="flex items-center gap-2 hover:text-fuchsia-400"
        >
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
          <p className="font-bold md:text-xl">+420 604 687 034</p>
        </a>
      </div>
    </nav>
  );
}

export default DesktopNav;
