
import { ArrowRight, Play } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pb-24 flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mt-20
           mb-6 leading-tight">
            SOLUCIÓN E INNOVACIÓN


            <span className="block bg-gradient-to-r from-[#33CCFF] to-[#209ACE] font-extrabold bg-clip-text text-transparent">
              TECNOLÓGICA
            </span>

          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-8 max-w-2xl mx-auto leading-none">
            Transformamos ideas en sistemas tecnológicos que suman valor, orden y eficiencia a nuestros clientes.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("#contacto")}
              className="group bg-gradient-to-r from-[#33CCFF] to-[#006699] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Impulsa tu solución
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>

            <button
              onClick={() => scrollToSection("#servicios")}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Play size={20} />
              Explorar soluciones
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#33CCFF] mb-2">50+</div>
              <div className="text-gray-300">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#33CCFF] mb-2">6+</div>
              <div className="text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#33CCFF] mb-2">24/7</div>
              <div className="text-gray-300">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
