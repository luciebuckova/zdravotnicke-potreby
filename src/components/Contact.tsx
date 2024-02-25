import GoogleMap from "../utils/GoogleMap";

function Contact() {
  return (
    <section id="kontakt" className="py-8 md:py-32">
      <h3 className="text-gradient mb-8 inline-block text-2xl font-bold md:mb-14 md:text-4xl">
        Kontakt
      </h3>
      <h4 className="text-fuchsia-600 mb-4 text-lg font-medium md:text-xl">
        Otevírací doba:
      </h4>
      <ul className="md:text-lg">
        <li>pondělí až čtvrtek 8 - 17</li>
        <li>pátek 8 - 16</li>
      </ul>
      <div className="mt-8">
        <GoogleMap />
      </div>
      <div className="text-blue-700 mt-8 flex flex-col justify-between gap-4 lg:flex-row">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map-pin"
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
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p className="font-bold md:text-xl">
            <a href="#kontakt">Široká 27/3, Liberec</a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <p className="font-bold md:text-xl">
            <a href="mailto:lidabuckova@centrum.cz">lidabuckova@centrum.cz</a>
          </p>
        </div>
        <div className="flex items-center gap-2">
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
          <p className="font-bold md:text-xl">
            <a href="tel:+420604687034"> +420 604 687 034 </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
