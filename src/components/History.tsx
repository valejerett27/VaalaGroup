import Watermark from '../img/vaala_group_horizontal.png';

type Item = {
    year: number;
    number: string;
    description: string;
};

const historyData: Item[] = [
    {
        year: 2021,
        number: "01",
        description:
            "Comenzamos como un pequeño equipo enfocado en soluciones tecnológicas para el área de salud.",
    },
    {
        year: 2022,
        number: "02",
        description:
            "Con el tiempo entendimos que nuestro valor no estaba solo en lo que hacíamos, sino en cómo lo articulábamos: conectando talento, propósito y visión.",
    },
    {
        year: 2023,
        number: "03",
        description:
            "Renacimos como un holding para escalar ese impacto.",
    },
    {
        year: 2024,
        number: "04",
        description:
            "Hoy somos Vaalagroup, un ecosistema donde conviven unidades especializadas que comparten un mismo objetivo: transformar industrias y mejorar la vida de las personas a través de la tecnología.",
    },
];

const History = () => {
    return (
        <section id="historia" className="relative py-16 md:py-20 bg-[#0A3850]">
            {/* Marca de agua */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <img
                    src={Watermark}
                    alt=""
                    className="opacity-5 w-[92%] md:w-3/5 lg:w-1/2"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-center uppercase mb-10 md:mb-16 text-[#FFF]">
                    Nuestra{" "}
                    <span className="bg-gradient-to-r from-[#33CCFF] to-[#209ACE] bg-clip-text text-transparent">
                        Historia
                    </span>
                </h2>

                {/* ====== MOBILE (vertical) ====== */}
                <div className="md:hidden relative pl-8">
                    {/* Línea vertical izquierda */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-[#33CCFF]/30" />
                    {historyData.map((i, idx) => (
                        <div key={i.year} className="relative mb-10">
                            <div className="absolute top-2 w-5 h-5 rounded-full bg-white border-4 border-[#33CCFF]" style={{ left: '-1.5rem' }} />
                            <div className="ml-2 text-[#022E46]">
                                <div className="font-bold">{i.year}</div>
                                <div className="text-[#33CCFF] font-bold">{i.number}</div>
                                <p className="text-sm leading-snug mt-1">
                                    {i.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* 2025 */}
                    <div className="relative">
                        <div className="absolute  top-2 w-5 h-5 rounded-full bg-white border-4 border-[#33CCFF]" style={{ left: '-1.5rem' }} />
                        <div className="ml-2 font-bold text-[#022E46]">2025</div>
                    </div>
                </div>

                {/* ====== DESKTOP/TABLET (horizontal) ====== */}
                <div className="hidden md:block relative">
                    {/* Línea horizontal central */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#FFF]/30" />

                    <div className="grid grid-cols-5 gap-4">
                        {historyData.map((item, idx) => {
                            const isDown = idx % 2 === 0; // 2021 y 2023 hacia abajo; 2022 y 2024 hacia arriba
                            return (
                                <div key={item.year} className="relative h-[260px]">
                                    {/* CÍRCULO (centrado en la línea) */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#33CCFF] border-white border-4  shadow" />

                                    {/* LÍNEA VERTICAL */}
                                    {isDown ? (
                                        <div className="absolute left-1/2 top-1/2 w-px h-10 bg-[#33CCFF] translate-x-[-50%]" />
                                    ) : (
                                        <div className="absolute left-1/2 top-[calc(50%-40px)] w-px h-10 bg-[#33CCFF] translate-x-[-50%]" />
                                    )}

                                    {/* AÑO (siempre cerca del círculo) */}
                                    {isDown ? (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-44px)] font-bold text-[#FFF]">
                                            {item.year}
                                        </div>
                                    ) : (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+18px)] font-bold text-[#FFF]">
                                            {item.year}
                                        </div>
                                    )}

                                    {/* NÚMERO + DESCRIPCIÓN */}
                                    {isDown ? (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+44px)] text-center w-full px-2">
                                            <div className="text-[#FFF] font-bold">{item.number}</div>
                                            <p className="mx-auto text-[#FFF] leading-snug
                                  text-[13px] lg:text-sm max-w-[240px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-150px)] text-center w-full px-2">
                                            <div className="text-[#FFF] font-bold">{item.number}</div>
                                            <p className="mx-auto text-[#FFF] leading-snug
                                  text-[13px] lg:text-sm max-w-[260px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* 2025 (sin número/desc) — círculo centrado y año junto a la línea */}
                        <div className="relative h-[260px]">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#33CCFF] border-white border-4  shadow-xl" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%-44px)] font-bold text-[#FFF]">
                                2025
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
