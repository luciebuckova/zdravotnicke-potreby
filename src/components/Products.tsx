function Products() {
  return (
    <section id="produkty" className="py-8 md:py-32">
      <h3 className="text-gradient mb-8 inline-block text-2xl font-bold md:mb-14 md:text-4xl">
        Produkty
      </h3>
      <p className="mb-4 md:text-lg">
        Široký výběr zboží skladem nebo na objednání do druhého dne!
      </p>
      <p className="md:text-lg">
        Vydáváme zdravotní pomůcky na poukazy všech zdravotních pojišťoven,
        přijímáme také <strong className="text-pink">ePoukazy</strong>.
      </p>
      <div className="grid items-start gap-8 lg:grid-cols-3">
        <div className="bg-hamburgerBg mt-16 rounded-xl p-8">
          <ul>
            <li className="mb-4">
              <strong className="text-blue">Inkontinenční vložky</strong> značek
              Tena, MoliCare, Abena
            </li>
            <li className="mb-4">
              <strong className="text-blue">Inkontinenční kalhotky</strong>{" "}
              značek Tena, MoliCare, Abena
            </li>
            <li className="mb-4">
              <strong className="text-blue">Kompresní punčochy</strong> Mediven,
              Avicenum, Maxis
            </li>
            <li>
              <strong className="text-blue">Ortopedické pomůcky</strong> -
              podpatěnky, korektory, stélky
            </li>
          </ul>
        </div>
        <div className="bg-hamburgerBg rounded-xl p-8 lg:mt-24">
          <ul>
            <li className="mb-4">
              <strong className="text-blue">Rehabilitační pomůcky</strong> -
              gymnastické míče, overbally, balanční podložky, masážní válečky,
              míčky, tejpy, podsedáky
            </li>
            <li className="mb-4">
              <strong className="text-blue">Zdravotní obuv</strong> na doma i na
              ven
            </li>
            <li className="mb-4">
              <strong className="text-blue">Zdravotní ponožky</strong> pro
              diabetiky, adjustační ponožky, bandáže, ortézy, bederní pásy
            </li>
          </ul>
        </div>
        <div className="bg-hamburgerBg rounded-xl p-8 lg:mt-32">
          <ul>
            <li className="mb-4">
              <strong className="text-blue">
                Tlakoměry, teploměry, glukometry
              </strong>
            </li>
            <li className="mb-4">
              <strong className="text-blue">
                Dezinfekční přípravky, speciální kosmetika
              </strong>{" "}
              Menalind, Seni Care, Tena
            </li>
            <li className="mb-4">
              <strong className="text-blue">Soupravy na klistýr</strong>
            </li>
            <li className="mb-4">
              <strong className="text-blue">
                Nahřívací a chladivé polštářky
              </strong>
            </li>
            <li>
              <strong className="text-blue">
                Podpažní berle, francouzské hole, vycházkové hole
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Products;
