import {
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  // Facebook,
  Phone,
  MessageCircle
} from "lucide-react"; // WhatsApp será representado con MessageCircle
import logoVaala from "../img/vaala_principal.png";

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
    <footer className="bg-[#022E46] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logoVaala} alt="Vaala Group" className="h-20 mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Somos tu
              socio estratégico en la era digital, comprometidos con impulsar
              el crecimiento de tu negocio.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={18} />
                <span className="text-gray-300">
                  comunicaciones@vaalagroup.cl
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" size={18} />
                <span className="text-gray-300">Viña del Mar, Chile</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Unidades", href: "#proyectos" },
                { name: "Contacto", href: "#contacto" },
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
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">
              Servicios
            </h4>
            <ul className="space-y-1">
              {[
                "Consultoría",
                "Desarrollo de Sistemas",
                "Implementación y Optimización de Procesos",
                "Soporte",
                "Capacitación",
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

        {/* Social Media & Copyright */}
        <div className="py-8 border-t border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-center lg:text-left">
            <p>&copy; 2025 Vaala Group. Todos los derechos reservados.</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm mr-2">Síguenos:</span>
            {[
              {
                icon: MessageCircle,
                href: "https://wa.me/56926865401",
                color: "hover:text-green-500",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/vaalagroup?igsh=bWx4djE3MDMxaTR2",
                color: "hover:text-pink-500",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/company/vaalagroup-innovaci%C3%B3n-tecnol%C3%B3gica/posts/?feedView=all",
                color: "hover:text-blue-600",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
