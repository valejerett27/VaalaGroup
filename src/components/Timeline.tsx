import React from 'react';

const timelineData = [
  {
    year: '2021',
    text: 'Comenzamos como un pequeño equipo enfocado en soluciones tecnológicas para el área de salud.',
  },
  {
    year: '2022',
    text: 'Con el tiempo entendimos que nuestro valor no estaba solo en lo que hacíamos, sino en cómo lo articulábamos: conectando talento, propósito y visión.',
  },
  {
    year: '2023',
    text: 'Renacimos como un holding para escalar ese impacto.',
  },
  {
    year: '2024',
    text: 'Hoy somos Vaalagroup, un ecosistema donde conviven unidades especializadas que comparten un mismo objetivo: transformar industrias y mejorar la vida de las personas a través de la tecnología.',
  },
  {
    year: '2025',
    text: 'Consolidación de nuestras unidades y expansión nacional e internacional.',
  },
];

const Timeline = () => {
  return (
    <section className="w-full bg-[#003B51] py-16 px-4 relative overflow-x-hidden">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        NUESTRA HISTORIA
        <div className="w-16 h-1 bg-cyan-400 mt-2 mx-auto" />
      </h2>

      {/* Línea central */}
      <div className="absolute top-[79%] left-0 w-full h-[6px] bg-cyan-400 z-0 rounded hidden sm:block" />


      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 max-w-7xl mx-auto relative z-10">
        {timelineData.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full md:w-[230px] relative transform transition duration-500 hover:-translate-y-3  hover:scale-105">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg p-5 text-sm font-medium text-black relative z-10 h-[200px] w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-cyan-100 text-cyan-500 font-bold rounded-full px-2 py-1 text-xs">
                  0{index + 1}
                </span>
                <span className="text-cyan-600 font-semibold text-sm">{item.year}</span>
              </div>
              <p className="leading-tight text-sm font-semibold">{item.text}</p>

              {/* Flecha inferior */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-white" />
            </div>

            {/* Círculo + año */}
            <div className="flex flex-col items-center mt-8">
              <div className="w-8 h-8 rounded-full border-4 border-cyan-400 bg-[#003B51] z-10" />
              <span className="text-white text-sm font-semibold mt-2">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;