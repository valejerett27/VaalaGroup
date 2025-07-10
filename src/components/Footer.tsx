
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="src/img/Negativa_Horizontal_Sin_Fondo.png"
              alt="Vaala Group"
              className="h-8 lg:h-10 mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. 
              Somos tu socio estratégico en la era digital, comprometidos 
              con impulsar el crecimiento de tu negocio.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={18} />
                <span className="text-gray-300">contacto@vaalagroup.com</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} />
                <span className="text-gray-300">+52 (55) 1234-5678</span>
              </div> */}
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" size={18} />
                <span className="text-gray-300">Viña del Mar, Chile</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Proyectos", href: "#proyectos" },
                // { name: "Equipo", href: "#equipo" },
                { name: "Contacto", href: "#contacto" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Por Definir",
                "Por Definir",
                "Por Definir"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-400">Mantente Actualizado</h4>
              <p className="text-gray-300">Recibe las últimas noticias sobre tecnología e innovación.</p>
            </div>
            <div className="flex gap-2 w-full max-w-md">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div> */}

        {/* Social Media & Copyright */}
        <div className="py-8 border-t border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-center lg:text-left">
            <p>&copy; 2025 Vaala Group. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-2 justify-center lg:justify-start">
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm">Política de Privacidad</a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm">Términos de Servicio</a>
              <a href="#" className="hover:text-cyan-400 transition-colors text-sm">Cookies</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm mr-2">Síguenos:</span>
            {[
              { icon: Facebook, href: "#", color: "hover:text-blue-500" },
              { icon: Twitter, href: "#", color: "hover:text-blue-400" },
              { icon: Instagram, href: "#", color: "hover:text-pink-500" },
              { icon: Linkedin, href: "#", color: "hover:text-blue-600" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
