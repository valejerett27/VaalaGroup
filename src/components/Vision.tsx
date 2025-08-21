

const Vision = () => (
  <section id="vision" className="relative py-20 bg-gray-50">
    {/* Marca de agua de Vaala en el fondo */}
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">

    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center uppercase mb-6 text-[#022E46]">
        Nuestra{" "}
        <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent">
          Visión
        </span>
      </h2>
      <p className="text-center text-lg lg:text-xl font-medium max-w-3xl py-6 mx-auto text-[#022E46]">
        Ser el{" "}
        <span className="font-bold">
          holding tecnológico más influyente de Latinoamérica
        </span>
        , a través de soluciones de software y hardware integrados,
        articulando
        <span className="font-bold"> talento, innovación y propósito </span>
        para marcar una diferencia real.
      </p>
      {/* Línea divisoria inferior como en el mockup */}
      <div className="mt-8 border-t-2 border-[#022E46] w-24 mx-auto"></div>
    </div>
  </section>
);

export default Vision;
