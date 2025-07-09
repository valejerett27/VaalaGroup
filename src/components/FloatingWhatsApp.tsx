
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+5215512345678"; // Replace with actual WhatsApp number
  const message = "¡Hola! Me interesa conocer más sobre los servicios de Vaala Group.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* WhatsApp Button */}
      <div className="relative">
        <button
          onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
          1
        </div>

        {/* Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-2xl w-80 border border-gray-200 animate-scale-in">
            <div className="bg-green-500 text-white p-4 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Vaala Group</h3>
                  <p className="text-sm opacity-90">En línea</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                <p className="text-gray-800 text-sm">
                  ¡Hola! 👋 Somos Vaala Group. ¿En qué podemos ayudarte hoy?
                </p>
                <div className="text-xs text-gray-500 mt-2">Hace unos momentos</div>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                >
                  💻 Consulta sobre desarrollo web
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                >
                  📱 Información sobre apps móviles
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                >
                  🛒 E-commerce y tiendas online
                </button>
                <button
                  onClick={openWhatsApp}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm"
                >
                  💬 Hablar con un especialista
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-b-2xl border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Powered by WhatsApp</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">En línea</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
