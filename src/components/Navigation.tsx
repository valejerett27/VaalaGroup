
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoVaala from '../img/Negativa_Horizontal_Sin_Fondo.png';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    // { name: "Equipo", href: "#equipo" },
    // { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-[#022E46] to-[#006699] backdrop-blur-lg shadow-lg border-b border-cyan-100"
          // ? "bg-gradient-to-b from-[#006699] to-[#33CCFF] backdrop-blur-lg shadow-lg border-b border-cyan-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 pl-3">
            <img
              src={logoVaala}
              alt="Vaala Group"
              className="h-8 lg:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white uppercase hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contacto")}
              className="bg-gradient-to-r uppercase from-[#006699] to-[#4BC2F1] text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white pr-3 hover:text-cyan-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg h-screen border-t border-cyan-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contacto")}
                className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200"
              >
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
