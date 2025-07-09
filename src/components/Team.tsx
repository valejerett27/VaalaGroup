
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Diego Martínez",
      role: "CEO & Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Líder visionario con 8+ años en desarrollo web y estrategia digital.",
      skills: ["React", "Node.js", "AWS", "Leadership"]
    },
    {
      name: "Sofia Herrera",
      role: "UI/UX Design Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Diseñadora creativa especializada en experiencias de usuario excepcionales.",
      skills: ["Figma", "Adobe Suite", "Prototyping", "User Research"]
    },
    {
      name: "Alejandro Ruiz",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Experto en desarrollo móvil con enfoque en performance y user experience.",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      name: "Valentina Castro",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Especialista en análisis de datos y machine learning para insights de negocio.",
      skills: ["Python", "TensorFlow", "SQL", "Business Intelligence"]
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestro
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible cada proyecto. 
            Un equipo multidisciplinario comprometido con la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {member.name}
              </h3>
              
              <p className="text-cyan-600 font-semibold mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            ¿Te gustaría formar parte de nuestro equipo?
          </p>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Ver Oportunidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
