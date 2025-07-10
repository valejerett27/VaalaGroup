
import { Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Servicio por definir",
      description: "Aplicaciones web modernas y escalables con las últimas tecnologías",
      features: ["Características"]
    },
    {
      icon: Smartphone,
      title: "Servicio por definir",
      description: "Aplicaciones nativas e híbridas para iOS y Android",
      features: ["Características"]
    },
    {
      icon: Globe,
      title: "Servicio por definir",
      description: "Tiendas online optimizadas para conversión y ventas",
      features: ["Características"]
    }
    // {
    //   icon: Database,
    //   title: "Big Data & Analytics",
    //   description: "Análisis de datos y business intelligence para decisiones estratégicas",
    //   features: ["Data Mining", "Machine Learning", "Dashboards"]
    // },
    // {
    //   icon: Shield,
    //   title: "Ciberseguridad",
    //   description: "Protección integral de sistemas y datos empresariales",
    //   features: ["Auditorías", "Pentesting", "Compliance"]
    // },
    // {
    //   icon: Zap,
    //   title: "Automatización",
    //   description: "Optimización de procesos mediante herramientas inteligentes",
    //   features: ["RPA", "Workflows", "Integrations"]
    // }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#006699] mb-6">
            Nuestros
            <span className="text-[#33CCFF] bg-clip-text text-transparent"> Servicios</span>
          </h2>
          <p className="text-xl text-[#006699] font-semibold max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales que impulsan el crecimiento 
            y la transformación digital de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#006699] to-[#33CCFF] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#006699] mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-[#006699] mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#006699]">
                    <div className="w-2 h-2 bg-[#33CCFF] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-200 flex items-center gap-2 group-hover:gap-3">
                  Saber más
                  <span className="transition-all duration-200">→</span>
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
