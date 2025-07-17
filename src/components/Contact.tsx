
import { Send } from "lucide-react";
import { useState } from "react";
import iconMail from '../img/CONTACTO-CORREO.png';
import iconOffice from '../img/CONTACTO-OFICINA.png'
import iconSupport from '../img/CONTACTO-SOPORTE.png';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    asunto: "",
    message: ""
  });
  const [formSent, setFormSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name || formData.name.trim().length < 3)
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Ingresa un correo válido.";

    if (!formData.city || formData.city.trim().length < 2)
      newErrors.city = "Indica tu ciudad o comuna.";

    if (!formData.phone || !/^\d{8,}$/.test(formData.phone))
      newErrors.phone = "Ingresa un número válido (mínimo 8 dígitos).";

    if (!formData.asunto || formData.asunto.trim().length < 3)
      newErrors.asunto = "El asunto debe tener al menos 3 caracteres.";

    if (!formData.message || formData.message.trim().length < 10)
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setAlertType("error");
      setFormSent(true);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3500);
      setTimeout(() => setFormSent(false), 4000);
      return;
    }

    // Aquí simulas envío exitoso (puedes agregar fetch o EmailJS después)
    console.log("Formulario Enviado:", formData);

    setAlertType("success");
    setFormSent(true);
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3500);
    setTimeout(() => {
      setFormSent(false);
      setFormData({
        name: "",
        email: "",
        city: "",
        phone: "",
        asunto: "",
        message: ""
      });
      setErrors({});
    }, 4000);
  };




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50 text-[#022E46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            DESARROLLEMOS
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33CCFF] to-[#209ACE]"> TU IDEA</span>
          </h2>
          <p className="text-xl font-medium text-[#3F3F3F] max-w-3xl mx-auto">
            Estamos listos para convertir tus ideas en realidad.
            Contáctanos y descubre cómo podemos impulsar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#33CCFF]">Solicita una Consulta Gratuita</h3>

            {formSent && (
              <div
                className={`mb-6 transition-all duration-500 ease-in-out ${showAlert ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
              >
                <div className={`relative px-6 py-4 rounded-lg shadow-lg text-center font-semibold max-w-md mx-auto ${alertType === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                  }`}>
                  {alertType === "success"
                    ? "✅ ¡Formulario enviado correctamente!"
                    : "❌ Hubo un problema, revisa los campos."}

                  <button
                    onClick={() => {
                      setShowAlert(false);
                      setTimeout(() => setFormSent(false), 300);
                    }}
                    className="absolute top-2 right-3 text-white hover:text-gray-200 text-xl font-bold"
                    aria-label="Cerrar alerta"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}


            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}

                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="proyecto@email.com"
                  />
                  {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                    Comuna/Ciudad*
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Ejemplo: Viña del Mar"
                  />
                  {errors.city && <p className="text-sm text-red-400 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefono*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="952183542"
                  />
                  {errors.phone && <p className="text-sm text-red-400 mt-1">{errors.phone}</p>}
                </div>

                {/* <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="mobile">Apps Móviles</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="data">Big Data & Analytics</option>
                    <option value="security">Ciberseguridad</option>
                    <option value="automation">Automatización</option>
                  </select>
                </div> */}
              </div>
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto*
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Asunto"
                />
                {errors.asunto && <p className="text-sm text-red-400 mt-1">{errors.asunto}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#006699] to-[#33CCFF] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >

                Enviar Solicitud
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20"> */}
            <div className="bg-[#112139] rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 text-[#33CCFF]">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="">
                    <img src={iconMail} alt="Email" className="text-white w-[50px]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">comunicaciones@vaalagroup.cl</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="bg-[#33CCFF] p-3 rounded-lg">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-gray-300">+52 (55) 1234-5678</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="">
                    <img src={iconOffice} alt="Oficina" className="text-white w-[50px]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Oficina</h4>
                    <p className="text-gray-300">
                      Viña del Mar, Chile
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="">
                    <img src={iconSupport} alt="Soporte" className="text-white w-[50px]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horarios de Atención</h4>
                    <p className="text-gray-300">Lun - Vie: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sáb: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-400">¿Prefieres una Reunión Virtual?</h3>
              <p className="text-gray-300 mb-6">
                Agenda una videollamada gratuita de 30 minutos para discutir tu proyecto en detalle.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                <Calendar size={18} />
                Agendar Reunión
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
