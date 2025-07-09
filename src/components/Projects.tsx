
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Multitienda",
      category: "Desarrollo Web",
      description: "Plataforma de comercio electrónico con gestión multi-vendor, pagos seguros y analytics avanzados.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      results: "+300% ventas online"
    },
    {
      title: "App de Delivery",
      category: "Aplicación Móvil",
      description: "Aplicación nativa para delivery con tracking en tiempo real, pagos digitales y sistema de calificaciones.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      results: "50k+ descargas"
    },
    {
      title: "Dashboard Empresarial",
      category: "Business Intelligence",
      description: "Sistema de análisis de datos con visualizaciones interactivas y reportes automatizados para toma de decisiones.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Python", "D3.js", "PostgreSQL", "Docker"],
      results: "40% más eficiencia"
    },
    {
      title: "Sistema de Gestión",
      category: "Automatización",
      description: "ERP personalizado con módulos de inventario, facturación, CRM y reportes financieros integrados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Laravel", "Vue.js", "MySQL", "API REST"],
      results: "60% reducción de costos"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proyectos
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Destacados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros casos de éxito que han transformado 
            la manera de hacer negocios de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Github size={16} />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
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
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
                    Ver detalles
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
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
