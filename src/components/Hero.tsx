function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="hero h-screen">
      {children}
      <div className="mx-auto max-w-7xl p-8 md:pt-64">
        <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-7xl">
          Zdravotnické potřeby Ludmila Bučková
        </h1>
        <h2 className="mb-14 text-lg font-medium tracking-wider text-white md:text-2xl">
          V centru <strong className="text-fuchsia-400">Liberce</strong> Vám
          nabízíme mimo jiné široký sortiment inkontinenčních pomůcek,
          zdravotních punčoch a obuvi
        </h2>
        <div>
          <a
            href="#kontakt"
            className="rounded-lg bg-fuchsia-700 px-8 py-4 font-medium text-white duration-300 hover:bg-fuchsia-600 md:text-2xl"
          >
            Kde nás najdete →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
