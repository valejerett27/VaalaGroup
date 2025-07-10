
import { Award, Users, Clock, Target, Lightbulb, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Título por definir",
      description: "Más de 50 proyectos exitosos con reconocimiento internacional"
    },
    {
      icon: Users,
      title: "Título por definir",
      description: "Profesionales certificados con amplia experiencia en tecnologías de vanguardia"
    },
    {
      icon: Clock,
      title: "Título por definir",
      description: "Metodologías ágiles que garantizan cumplimiento de plazos"
    },
    // {
    //   icon: Target,
    //   title: "Enfoque Estratégico",
    //   description: "Soluciones alineadas con tus objetivos de negocio"
    // },
    // {
    //   icon: Lightbulb,
    //   title: "Innovación Constante",
    //   description: "Adoptamos las últimas tendencias tecnológicas del mercado"
    // },
    // {
    //   icon: Headphones,
    //   title: "Soporte 24/7",
    //   description: "Acompañamiento continuo en todas las fases del proyecto"
    // }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#006699] mb-6">
            ¿Por Qué Elegir
            <span className="text-[#33CCFF] bg-clip-text text-transparent"> Vaala Group</span>?
          </h2>
          <p className="text-xl text-[#006699] font-semibold max-w-3xl mx-auto">
            Somos más que un proveedor de tecnología. Somos tu socio estratégico 
            en la transformación digital de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-[#006699] to-[#33CCFF] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#006699] to-[#33CCFF] rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Transformar tu Negocio?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 100 empresas que ya confían en nosotros
          </p>
          <button className="bg-white text-[#006699] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            CTA por definir
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
