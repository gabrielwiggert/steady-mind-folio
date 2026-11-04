const Psychoanalysis = () => {
  return (
    <section id="clinica" className="py-24 md:py-32 bg-suede border-y border-suedeDark px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Side title */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-freijo block">O Espaço Analítico</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
              A Escuta &amp; <br />
              <i className="italic text-sage">o Enquadre</i>
            </h2>
            <div className="w-12 h-[1px] bg-freijo pt-2" />
          </div>

          {/* Editorial text */}
          <div className="md:col-span-8 space-y-6 text-charcoal/90 font-light leading-relaxed text-base sm:text-lg">
            <p>
              Vivemos em um tempo que exige respostas rápidas, performance contínua e silenciamento do mal-estar. Na
              contramão dessa urgência, a clínica psicanalítica oferece uma pausa qualificada: um território ético e
              reservado onde a palavra, o silêncio e a memória podem encontrar abrigo e sentido.
            </p>
            <p>
              O processo analítico não parte de fórmulas prontas ou conselhos padronizados. Trata-se de uma construção
              singular, pautada pelo <i className="font-serif italic text-lg">holding</i> — a sustentação emocional
              necessária para que experiências difíceis, lutos, repetições e angústias não simbolizadas possam ser
              finalmente olhados e elaborados no ritmo próprio de cada sujeito.
            </p>

            {/* In-person and online */}
            <div className="mt-10 p-7 sm:p-8 bg-linen rounded-lg border border-suedeDark/90 relative">
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-sage" />
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                  Presencial e Online: a consistência do encontro
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                O enquadre analítico não se resume às paredes físicas de uma sala; ele é sustentado pela qualidade da
                presença e pela ética da escuta. Tanto presencialmente — na região de Campinas — quanto nos atendimentos
                online para quem reside em outras cidades ou no exterior, preserva-se o mesmo rigor, sigilo e intimidade
                psíquica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psychoanalysis;
