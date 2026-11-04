import { WHATSAPP_URL } from "@/lib/contact";

const Hero = () => {
  return (
    <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text column */}
        <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-freijo" />
            <span className="text-xs uppercase tracking-[0.2em] text-freijo font-medium">
              Atendimento Presencial e Online
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-normal text-charcoal">
            Um espaço de escuta, <i className="font-serif italic text-sage">sustentação</i> e elaboração subjetiva.
          </h1>

          <p className="text-base sm:text-lg text-muted font-light leading-relaxed max-w-xl">
            Clínica psicanalítica dedicada a adultos e adolescentes. Atendimentos presenciais e online.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-7 py-4 bg-sage text-linen text-xs uppercase tracking-[0.18em] hover:bg-sageDark transition-all duration-300 rounded shadow-sm"
            >
              Agendar primeira conversa
            </a>
            <a
              href="#clinica"
              className="inline-flex justify-center sm:justify-start items-center text-sm text-charcoal hover:text-freijo transition-colors group py-2"
            >
              <span className="border-b border-freijo/50 group-hover:border-freijo pb-0.5">
                Conhecer a proposta clínica
              </span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform text-freijo"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Visual column: editorial frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] bg-suede rounded-lg p-6 sm:p-8 border border-suedeDark shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Sunlight beam */}
            <div className="absolute -top-16 -right-16 w-72 h-96 bg-gradient-to-bl from-[#FBF9F5] via-[#F7F4EF]/60 to-transparent transform -rotate-12 pointer-events-none" />

            <div className="relative z-10 border border-freijo/30 rounded h-full p-6 flex flex-col justify-between bg-linen/40 backdrop-blur-[2px]">
              <div className="flex justify-between items-start">
                <span className="font-serif italic text-sm text-muted">Escuta, ética &amp; sustentação</span>
                <span className="w-2 h-2 rounded-full bg-sage/60" />
              </div>

              <div className="my-auto py-6 flex justify-center items-center relative">
                <svg
                  className="w-48 h-48 sm:w-56 sm:h-56 shadow-leaf"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="105" cy="95" r="68" fill="#E5DEC9" fillOpacity="0.65" />
                  <path d="M45 140 C 45 75, 145 75, 145 140" stroke="#A67C52" strokeWidth="1.2" fill="none" />
                  <path d="M85 155 C 65 120, 90 65, 135 55 C 145 95, 125 140, 85 155 Z" fill="#5E6F64" fillOpacity="0.82" />
                  <path d="M75 165 Q 105 110 130 45" stroke="#2C2A29" strokeWidth="1" strokeLinecap="round" />
                  <path d="M97 120 Q 82 108 72 112" stroke="#2C2A29" strokeWidth="0.9" strokeLinecap="round" />
                  <path d="M108 95 Q 125 85 136 88" stroke="#2C2A29" strokeWidth="0.9" strokeLinecap="round" />
                  <circle cx="130" cy="45" r="2.5" fill="#A67C52" />
                </svg>
              </div>

              <div className="border-t border-suedeDark pt-4">
                <p className="font-serif italic text-sm text-charcoal/90 leading-snug">
                  “É uma alegria estar escondido, mas um desastre não ser encontrado.”
                </p>
                <span className="block text-[11px] uppercase tracking-widest text-freijo mt-1">
                  — D. W. Winnicott
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
