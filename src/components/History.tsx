import { motion } from 'framer-motion';
import Watermark from '../img/vaala_group_horizontal.png';

type Item = {
  year: number;
  number: string;
  description: string | JSX.Element;
};

const historyData: Item[] = [
  {
    year: 2021,
    number: '01',
    description:
      'Comenzamos como un pequeño equipo enfocado en soluciones tecnológicas para el área de salud.',
  },
  {
    year: 2022,
    number: '02',
    description: (
      <>
        Con el tiempo entendimos que nuestro valor no estaba solo en lo que hacíamos, sino en cómo lo articulábamos:{' '}
        <span className="font-extrabold">conectando talento, propósito y visión</span>.
      </>
    ),
  },
  {
    year: 2023,
    number: '03',
    description:
      'Renacimos como un holding para escalar ese impacto.',
  },
  {
    year: 2024,
    number: '04',
    description: (
      <>
        Hoy somos <span className="font-extrabold">Vaalagroup</span>, un ecosistema donde conviven unidades especializadas que comparten un mismo objetivo: <span className="font-extrabold">transformar industrias y mejorar la vida de las personas a través de la tecnología.</span>
      </>
    ),
  },
  {
    year: 2025,
    number: '05',
    description:
      'Consolidación de nuestras unidades y expansión nacional e internacional.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

const History = () => {
  return (
    <section id="historia" className="relative py-16 md:py-20 bg-[#0A3850]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img src={Watermark} alt="" className="opacity-5 w-[92%] md:w-3/5 lg:w-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center uppercase mb-10 md:mb-16 text-[#FFF]">
          Nuestra{' '}
          <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent">
            Historia
          </span>
        </h2>

        {/* Mobile View */}
        <div className="md:hidden space-y-10">
          {historyData.map((item, idx) => (
            <motion.div
              key={item.year}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className="relative border-l-4 border-[#33CCFF] pl-6"
            >
              <div className="text-[#33CCFF] font-bold text-md">{item.number}</div>
              <div className="text-[#FFF] font-semibold text-lg pt-1">{item.description}</div>
              <div className="text-[#33CCFF] font-semibold text-2xl pt-2">{item.year}</div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] rounded bg-[#33CCFF]" />
          <div className="grid grid-cols-5 gap-4">
            {historyData.map((item, idx) => {
              const isDown = idx % 2 === 0;
              return (
                <div key={item.year} className="relative h-[290px]">
                  {/* Punto circular */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#33CCFF] border-white border-2 shadow" />

                  {/* Línea vertical */}
                  <div
                    className={`absolute left-1/2 ${isDown ? 'top-1/2' : 'top-[calc(50%-160px)]'} w-0.5 rounded h-40 bg-[#33CCFF] -translate-x-1/2`}
                  />

                  {/* Año */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 ${isDown ? 'top-[calc(50%-54px)]' : 'top-[calc(50%+28px)]'} font-bold text-[#33CCFF] text-2xl`}
                  >
                    {item.year}
                  </div>

                  {/* Número + Descripción */}
                  <div
                    className={`absolute left-1/2  ${isDown ? 'top-[calc(50%+54px)]' : 'top-[calc(50%-160px)]'
                      } text-center w-full px-2`}
                  >
                    <div className="text-[#33CCFF] font-bold text-xl pb-2">{item.number}</div>
                    <motion.p
                      className="mx-auto text-[#FFF] text-left leading-snug text-[13px] lg:text-sm max-w-[260px] font-semibold"
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={idx}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
