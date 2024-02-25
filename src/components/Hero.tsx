function Hero() {
  return (
    <section className="h-screen max-w-4xl py-8 md:pt-64">
      <h1 className="text-gradient mb-8 text-4xl font-bold leading-tight md:text-7xl">
        Zdravotnické potřeby Ludmila Bučková
      </h1>
      <h2 className="mb-14 text-lg font-medium tracking-wider md:text-2xl">
        V centru <strong className="text-fuchsia-600">Liberce</strong> Vám
        nabízíme mimo jiné široký sortiment inkontinenčních pomůcek, zdravotních
        punčoch a obuvi
      </h2>
      <div>
        <a
          href="#kontakt"
          className="text-white bg-purple-600 hover:bg-fuchsia-700 rounded-lg px-8 py-4 font-medium duration-300 md:text-2xl"
        >
          Kde nás najdete →
        </a>
      </div>
    </section>
  );
}

export default Hero;
