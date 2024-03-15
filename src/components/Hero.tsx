function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="hero h-screen">
      {children}
      <div className="absolute inset-x-0 top-1/2">
        <div className="mx-auto max-w-7xl -translate-y-1/2 p-8">
          <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-7xl md:leading-tight">
            Zdravotnické potřeby
            <br />
            Ludmila Bučková
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
      </div>
    </section>
  );
}

export default Hero;
