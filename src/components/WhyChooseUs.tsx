
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
          <h2 className="text-4xl lg:text-5xl uppercase font-extrabold text-[#022E46] mb-6">
            Nuestros
            <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent uppercase"> Resultados</span>
          </h2>
          {/* <p className="text-xl text-[#006699] font-light max-w-3xl mx-auto">
            Somos más que un proveedor de tecnología. Somos tu socio estratégico
            en la transformación digital de tu empresa.
          </p> */}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-start justify-center bg-white rounded-2xl px-6 md:px-8 py-6 shadow-lg divide-y md:divide-y-0 md:divide-x divide-gray-200">

            {/* Item 1 */}
            <div className="text-center w-full md:basis-1/4 p-4">
              <div className="text-3xl font-bold text-[#006699] mb-3 leading-none">
                +890
                <span className="text-xl block">MILLONES</span>
              </div>
              <div className="text-gray-600 text-sm">
                Mensuales en transacciones soportados en nuestros sistemas
              </div>
            </div>

            {/* Item 2 */}
            <div className="text-center w-full md:basis-1/4 p-4">
              <div className="text-3xl font-bold text-[#006699] uppercase mb-3 leading-none">
                5.000
                <span className="text-xl block">Usuarios Activos</span>
              </div>
              <div className="text-gray-600 text-sm">
                en plataforma portal de Salud
              </div>
            </div>

            {/* Item 3 */}
            <div className="text-center w-full md:basis-1/4 p-4">
              <div className="text-3xl font-bold text-[#006699] mb-3 leading-none">
                120
                <span className="text-xl block">MILLONES</span>
              </div>
              <div className="text-gray-600 text-sm">
                Disminución de riesgo financiero
              </div>
            </div>

            {/* Item 4 */}
            <div className="text-center w-full md:basis-1/4 p-4">
              <div className="text-3xl font-bold text-[#006699] mb-3 leading-none">
                +480
                <span className="text-xl block">MILLONES</span>
              </div>
              <div className="text-gray-600 text-sm">
                Utilidades hemos aportando a nuestros clientes
              </div>
            </div>
          </div>
        </div>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div> */}

        <div className="mt-16 bg-gradient-to-r from-[#006699] to-[#33CCFF] rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl lg:text-4xl font-bold uppercase mb-4">
            ¿LISTO PARA DAR EL SIGUIENTE PASO EN TU TRANSFORMACIÓN DIGITAL?
          </h3>
          <p className="text-md lg:text-xl px-4 lg:px-0 mb-8 opacity-90">
            Súmate a las empresas que ya están innovando con nuestras soluciones tecnológicas.
          </p>
          <a href="#contacto">
            <button className="bg-white text-[#006699] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Conoce nuestras soluciones
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
