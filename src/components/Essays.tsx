import { useState, type ReactNode } from "react";

type Essay = {
  category: string;
  kind: string;
  title: string;
  excerpt: string;
  body: ReactNode;
};

const essays: Essay[] = [
  {
    category: "Cinema & Psicanálise",
    kind: "Ensaio",
    title: "O cinema e as camadas do inconsciente: notas sobre “O Segredo dos Seus Olhos”",
    excerpt:
      "O que permanece congelado no tempo quando um trauma não encontra elaboração? Uma leitura psicanalítica sobre memória, olhar, paixão e os afetos que escapam à palavra, mas se revelam nos detalhes.",
    body: (
      <>
        <p>
          Tanto o cinema quanto a psicanálise trabalham com a montagem, com o que resta na penumbra e com os pequenos
          detalhes que revelam uma verdade subjetiva que a consciência tenta evitar.
        </p>
        <p>
          Em <em>O Segredo dos Seus Olhos</em>, acompanhamos personagens atravessados pelo tempo e pela tentativa de
          escrever — literalmente — uma história que ficou suspensa. Na máquina de escrever do protagonista, uma letra
          falha repetidamente: o "A", fazendo com que <em>Te amo</em> seja grafado como <em>Temo</em>.
        </p>
        <p>
          Na clínica psicanalítica, assim como na narrativa cinematográfica, o inconsciente não se apresenta como um
          discurso linear, mas nos tropeços, nos atos falhos e naquilo que o olhar denuncia antes mesmo que a voz consiga
          pronunciar. Escutar essas camadas permite transformar o que antes era repetição silenciosa em história viva.
        </p>
      </>
    ),
  },
  {
    category: "Clínica Contemporânea",
    kind: "Reflexão",
    title: "O silêncio como sustentação: o papel do enquadre na clínica atual",
    excerpt:
      "Longe de ser ausência ou vazio, o silêncio compartilhado na sessão analítica funda um espaço potencial. Notas sobre o conceito de holding em Winnicott e a importância de não apressar a interpretação.",
    body: (
      <>
        <p>
          Costuma-se pensar na psicanálise apenas como a "cura pela fala". No entanto, a psicanálise contemporânea —
          especialmente a partir das contribuições de Donald Winnicott e André Green — nos ensina que a capacidade de
          ficar em silêncio na presença de um outro confiável é uma das conquistas mais sofisticadas do amadurecimento
          humano.
        </p>
        <p>
          Para muitos pacientes sobrecarregados pelas exigências de desempenho do mundo atual, o consultório analítico é
          o único lugar onde não é preciso entreter o outro ou apresentar certezas. O <em>holding</em> (sustentação)
          oferecido pelo enquadre permite que o sujeito descanse de suas defesas mais rígidas.
        </p>
        <p>
          Não apressar a interpretação e sustentar o tempo próprio de cada processo é um gesto profundamente ético: é o
          que inaugura um espaço potencial onde o gesto espontâneo pode finalmente surgir.
        </p>
      </>
    ),
  },
  {
    category: "Literatura & Escuta",
    kind: "Notas",
    title: "Literatura e vida psíquica: o que os romances nos ensinam sobre o luto e a delicadeza",
    excerpt:
      "Como a ficção literária ajuda o analista a habitar estados emocionais complexos e oferece metáforas vivas para acompanhar os processos de perda e reconstrução subjetiva na clínica.",
    body: (
      <>
        <p>
          Sigmund Freud já reconhecia nos poetas e romancistas os mais valiosos aliados na compreensão da alma humana. A
          literatura não explica o sofrimento por meio de categorias diagnósticas frias; ela nos convida a habitar por
          dentro a experiência de um outro.
        </p>
        <p>
          Nos processos de luto, transição ou desamparo, muitas vezes faltam palavras ao sujeito para nomear a sua dor.
          Um analista cuja mente é povoada pela literatura e pela arte dispõe de uma reserva simbólica mais ampla — uma
          capacidade de <em>rêverie</em>, como diria Bion e mais tarde Thomas Ogden — para emprestar contorno e
          delicadeza ao que parecia indizível.
        </p>
        <p>
          Analisar não é traduzir sintomas em manuais, mas construir, a quatro mãos, uma narrativa onde a dor possa ser
          reconhecida com dignidade.
        </p>
      </>
    ),
  },
];

const Essays = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openEssay = openIndex === null ? null : essays[openIndex];
  const closeEssay = () => setOpenIndex(null);

  return (
    <section id="ensaios" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="border-b border-suedeDark pb-8 mb-14 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-freijo block mb-2">Escritos &amp; Reflexões</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
            Entre a Clínica <i className="italic text-sage">e a Cultura</i>
          </h2>
        </div>
        <p className="text-sm text-muted max-w-md mt-4 md:mt-0 font-light">
          Artigos e reflexões onde a escuta psicanalítica encontra o cinema, a literatura e as inquietações do nosso
          tempo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {essays.map((essay, index) => (
          <article
            key={essay.title}
            className={`group flex flex-col justify-between ${
              index < essays.length - 1 ? "border-b md:border-b-0 md:border-r border-suedeDark pb-8 md:pb-0 md:pr-8" : ""
            }`}
          >
            <div>
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-freijo mb-3">
                <span>{essay.category}</span>
                <span>•</span>
                <span>{essay.kind}</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal group-hover:text-sage transition-colors leading-snug mb-4">
                {essay.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed mb-6">{essay.excerpt}</p>
            </div>
            <button
              onClick={() => setOpenIndex(index)}
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-charcoal group-hover:text-freijo transition-colors pt-2 focus:outline-none"
            >
              <span>Ler ensaio</span>
              <span className="ml-2">→</span>
            </button>
          </article>
        ))}
      </div>

      {/* Reading modal */}
      {openEssay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={(event) => event.target === event.currentTarget && closeEssay()}
        >
          <div className="bg-linen border border-suedeDark rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-12 relative shadow-xl">
            <button
              onClick={closeEssay}
              aria-label="Fechar leitura"
              className="sticky top-0 float-right bg-suede hover:bg-suedeDark text-charcoal rounded-full p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-xs uppercase tracking-[0.2em] text-freijo block mb-3">{openEssay.category}</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mb-6">{openEssay.title}</h3>
            <div className="w-12 h-[1px] bg-freijo mb-8" />

            <div className="space-y-5 text-charcoal/90 font-light leading-relaxed text-base">{openEssay.body}</div>

            <div className="mt-10 pt-6 border-t border-suedeDark flex items-center justify-between">
              <span className="font-serif italic text-base text-muted">Por Teresa Mortatti</span>
              <button onClick={closeEssay} className="text-xs uppercase tracking-widest text-sage hover:text-freijo">
                Fechar leitura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Essays;
