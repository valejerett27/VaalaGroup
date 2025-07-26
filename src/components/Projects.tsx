
import { ExternalLink, Github } from "lucide-react";
import parkPrincipal from '../img/park_principal.png';
import principalVerde from '../img/Principal_verde.png';


const Projects = () => {
  const projects = [
    {
      title: "Park by Vaala",
      category: "Estacionamientos Inteligentes",
      description: "Solución tecnológica para la gestión eficiente, segura y conectada de estacionamientos en entornos urbanos y corporativos.",
      image: parkPrincipal,
      tags: ["Control de accesos", "Geolocalización", "KPIs en tiempo real", "Seguridad operacional", "Gestión automatizada"],
      results: "+2.000 Dispositivos activos",
      link: ""
    },
    {
      title: "Vaaladev",
      category: "Tecnología en Salud y Servicios",
      description: "Desarrollamos soluciones digitales personalizadas para mejorar la experiencia y eficiencia en clínicas, hospitales y servicios públicos.",
      image: principalVerde,
      tags: ["Aplicaciones móviles", "Notificaciones inteligentes", "Infraestructura digital", "Paneles de control", "Sector salud."],
      results: "+7.000 usuarios activos",
      link: "https://vaaladev.cl/home"
    }
  ];


  return (
    <section id="proyectos" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl uppercase font-extrabold mb-6">
            Nuestras
            <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent"> Unidades</span>
          </h2>
          <p className="text-md lg:text-xl px-4 lg:px-0 text-white font-medium max-w-3xl mx-auto">
            Descubre algunos de nuestros casos de éxito que han transformado
            la manera de hacer negocios de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1F2937] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 mx-auto p-6 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {/* <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Github size={16} />
                  </button>
                </div> */}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6  leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-bold text-lg">
                    {project.results}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    Ir a la página
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
