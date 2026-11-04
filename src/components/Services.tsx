const services = [
  {
    number: "01.",
    title: "Clínica de Adultos e Adolescentes",
    description:
      "Escuta dedicada às angústias contemporâneas, crises de transição, processos de luto, inibições, sintomas ansiosos, impasses amorosos ou familiares e questões de identidade e subjetivação.",
    tag: "Presencial & Online",
    cta: "Agendar →",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    number: "02.",
    title: "Atendimento Online Sem Fronteiras",
    description:
      "Sessões realizadas em ambiente virtual reservado, acolhendo pessoas em diferentes regiões do Brasil e brasileiros que vivem no exterior, oferecendo escuta na própria língua materna.",
    tag: "Horários Flexíveis",
    cta: "Consultar →",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "supervisao",
    number: "03.",
    title: "Grupos de Estudo",
    description:
      "Espaço de reflexão compartilhada para psicanalistas, psicólogos e demais interessados nas questões do sofrimento contemporâneo.",
    tag: "Individual ou Grupo",
    cta: "Agendar →",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

const Services = () => {
  return (
    <section id="atuacao" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-freijo block mb-2">Atendimentos</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
            A Clínica Psicanalítica
          </h2>
        </div>
        <p className="text-sm text-muted max-w-md mt-4 md:mt-0 font-light">
          Um trabalho fundamentado no respeito à singularidade e no compromisso ético com a vida psíquica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.number}
            id={service.id}
            className="editorial-card bg-suede/60 border border-suedeDark rounded-lg p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-freijo mb-6">
                <span className="font-serif italic text-lg">{service.number}</span>
                <svg className="w-5 h-5 stroke-sage" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d={service.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4 font-medium">{service.title}</h3>
              <p className="text-sm text-muted font-light leading-relaxed">{service.description}</p>
            </div>
            <div className="pt-8 mt-8 border-t border-suedeDark/70 flex items-center justify-between text-xs text-sage uppercase tracking-widest">
              <span>{service.tag}</span>
              <a href="#contato" className="hover:text-freijo transition-colors">
                {service.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
