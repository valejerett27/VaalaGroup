import { Lightbulb } from "lucide-react"; // Puedes cambiar este ícono por uno SVG o imagen personalizada
import React from "react";

const Vision = () => (
  <section
    id="vision"
    className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf6fb] via-[#f4fafe] to-white"
  >
    {/* Marca de agua o ícono central */}
    <div className="flex justify-center mb-6">
      <div className="bg-gradient-to-br from-[#006699] to-[#33CCFF] w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
        {/* Aquí puedes poner un icono SVG personalizado o un Lottie animado si prefieres */}
        <Lightbulb className="text-white w-10 h-10" />
      </div>
    </div>

    {/* Título */}
    <h2 className="text-4xl lg:text-5xl font-extrabold text-center uppercase mb-6 text-[#022E46]">
      Nuestra{" "}
      <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent">
        Visión
      </span>
    </h2>

    {/* Contenido en contenedor destacado */}
    <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md shadow-md rounded-xl p-6 md:p-10 text-center">
      <p className="text-lg lg:text-xl font-medium text-[#022E46]">
        Ser el{" "}
        <span className="font-bold text-[#006699]">
          holding tecnológico más influyente de Latinoamérica
        </span>
        , a través de soluciones de software y hardware integrados, articulando{" "}
        <span className="font-bold text-[#006699]">talento, innovación y propósito</span>{" "}
        para marcar una diferencia real.
      </p>
    </div>

    {/* Línea decorativa */}
    <div className="mt-10 h-1 w-16 mx-auto bg-gradient-to-r from-[#33CCFF] to-[#209ACE] rounded-full"></div>

   
  </section>
);

export default Vision;
