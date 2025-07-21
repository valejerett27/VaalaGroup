import { Send } from "lucide-react";
import { useState } from "react";
import iconMail from "../img/CONTACTO-CORREO.png";
import iconOffice from "../img/CONTACTO-OFICINA.png";
import iconSupport from "../img/CONTACTO-SOPORTE.png";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


interface FormData {
  name: string;
  email: string;
  city: string;
  phone: string;
  asunto: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    city: "",
    phone: "",
    asunto: "",
    message: "",
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

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          city: formData.city,
          phone: formData.phone,
          asunto: formData.asunto,
          message: formData.message,
          date: new Date().toLocaleString("es-CL"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
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
              message: "",
            });
            setErrors({});
          }, 4000);
        },
        (error) => {
          console.error("Error al enviar correo:", error);
          setAlertType("error");
          setFormSent(true);
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3500);
          setTimeout(() => setFormSent(false), 4000);
        }
      );


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
        message: "",
      });
      setErrors({});
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50 text-[#022E46] font-['Work_Sans']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            DESARROLLEMOS{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33CCFF] to-[#209ACE]">
              TU IDEA
            </span>
          </h2>
          <p className="text-md lg:text-xl px-4 lg:px-0 font-medium text-[#3F3F3F] max-w-3xl mx-auto">
            Estamos listos para convertir tus ideas en realidad. Contáctanos y
            descubre cómo podemos impulsar tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#33CCFF]">
              Solicita una Consulta Gratuita
            </h3>

            {formSent && (
              <motion.div
                className={`mb-6 transition-all duration-500 ease-in-out ${showAlert ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: showAlert ? 1 : 0, y: showAlert ? 0 : -20 }}
              >
                <div
                  className={`relative px-6 py-4 rounded-lg shadow-lg text-center font-semibold max-w-md mx-auto ${alertType === "success"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                    }`}
                >
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
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white mb-2">Nombre *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white mb-2">Ciudad *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600"
                  />
                  {errors.city && (
                    <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-white mb-2">Teléfono *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Asunto *</label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600"
                />
                {errors.asunto && (
                  <p className="text-red-400 text-sm mt-1">{errors.asunto}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#006699] to-[#33CCFF] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar Solicitud
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#112139] rounded-2xl px-3 md:px-8 py-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 text-[#33CCFF]">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <img src={iconMail} alt="Email" className="min-w-[50px] w-[50px]" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">comunicaciones@vaalagroup.cl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={iconOffice} alt="Oficina" className="w-[50px]" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Oficina</h4>
                    <p className="text-gray-300">Viña del Mar, Chile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={iconSupport} alt="Soporte" className="w-[50px]" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horarios de Atención</h4>
                    <p className="text-gray-300">Lun - Vie: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sáb: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
