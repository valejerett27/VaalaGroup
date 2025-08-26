import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";
import { features } from "process";
import Servicio1 from '../img/SERVICIOS_01.png';
import Servicio2 from '../img/SERVICIOS_02.png';
import Servicio3 from '../img/SERVICIOS_03.png';
import FondoEtapa02 from '../img/bg/FondoEtapa02.png';

const Services = () => {
  const services = [
    {
      icon: Servicio1,
      title: "Consultoría y Desarrollo de Sistemas",
      description: "Creamos sistemas personalizados que responden a los desafíos y flujos específicos de cada organización.",
      features: ["Análisis funcional y técnico", "Soluciones escalables y adaptables", "Integración con sistemas existentes"]
    },
    {
      icon: Servicio2,
      title: "Implementación y Optimización de Procesos",
      description: "Digitalizamos procesos clave para mejorar la eficiencia, trazabilidad y toma de decisiones.",
      features: ["Automatización y control", "Mejora continua", "Visión estratégica de datos"]
    },
    {
      icon: Servicio3,
      title: "Soporte, Capacitación y Acompañamiento",
      description: "Aseguramos la continuidad operacional mediante soporte técnico, capacitación y mejoras progresivas.",
      features: ["Asistencia continua", "Capacitación a usuarios", "Ajustes y evolutivos según requerimientos"]
    }
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-cover bg-top bg-no-repeat"

      style={{ backgroundImage: `url(${FondoEtapa02})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl max-w-5xl mx-auto uppercase font-extrabold text-[#022E46] mb-6">
            Somos una{" "}
            <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent uppercase">
              plataforma de impulso
            </span>{" "}
            para nuevas soluciones
          </h2>

          <p className="text-md lg:text-xl px-4 lg:px-0 text-[#3F3F3F] font-medium max-w-3xl mx-auto">
            Cada uno de nuestros servicios se adapta a las necesidades del cliente y al contexto de su industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-900 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-[#006699] to-[#33CCFF] w-16 h-16 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-900">
                <img src={service.icon} alt={service.title} className="w-16 h-16" />
              </div>

              <h3 className="text-xl font-bold text-[#006699] mt-2 group-hover:text-cyan-600 transition-colors duration-900">
                {service.title}
              </h3>

              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
                <p className="text-[#006699] mt-2 mb-4 text-sm leading-relaxed px-2">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm px-1 pb-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#006699] text-left">
                      <span className="w-2 h-2 mt-1 bg-[#33CCFF] rounded-full shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
