
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    // {
    //   name: "María González",
    //   role: "CEO, TechStart Solutions",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    //   content: "Vaala Group transformó completamente nuestro e-commerce. Las ventas aumentaron un 300% en los primeros 6 meses. Su equipo es excepcional.",
    //   rating: 5
    // },
    // {
    //   name: "Carlos Mendoza",
    //   role: "Director de Operaciones, LogiCorp",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    //   content: "El sistema de gestión que desarrollaron nos ayudó a reducir costos operativos en un 60%. La automatización de procesos fue clave para nuestro crecimiento.",
    //   rating: 5
    // },
    // {
    //   name: "Ana Rodríguez",
    //   role: "Fundadora, FoodDelivery Plus",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    //   content: "Nuestra app móvil superó las 50,000 descargas gracias al excelente trabajo de Vaala Group. La UX es perfecta y el soporte técnico inmejorable.",
    //   rating: 5
    // }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#006699] mb-6">
            Lo Que Dicen Nuestros
            <span className="text-[#33CCFF] bg-clip-text"> Clientes</span>
          </h2>
          <p className="text-xl text-[#006699] font-semibold max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
            Descubre por qué confían en nosotros para sus proyectos más importantes.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 text-cyan-200 group-hover:text-cyan-300 transition-colors" size={32} />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div> */}

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white rounded-2xl px-6 md:px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#006699] mb-1">98%</div>
              <div className="text-gray-600 text-sm">Satisfacción</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="block md:hidden w-full h-px bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-[#33ccff] mb-1">100+</div>
              <div className="text-gray-600 text-sm">Clientes Felices</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="block md:hidden w-full h-px bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-[#006699] mb-1">24h</div>
              <div className="text-gray-600 text-sm">Tiempo Respuesta</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
