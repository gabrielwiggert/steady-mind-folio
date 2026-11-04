import type { ReactNode } from "react";
import teresaPhoto from "@/assets/teresa-mortatti.jpg";

const pillars = [
  "Psicanálise Contemporânea",
  "Teoria do Amadurecimento (Winnicott)",
  "Clínica do Vazio e Limites (A. Green)",
  "Psicanálise & Cultura",
];

const Author = ({ children }: { children: ReactNode }) => (
  <strong className="font-normal text-charcoal border-b border-freijo/40">{children}</strong>
);

const About = () => {
  return (
    <section id="percurso" className="py-24 md:py-32 bg-suede border-y border-suedeDark px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-freijo/50 rounded-lg pointer-events-none" />

              <div className="relative bg-linen border border-suedeDark rounded-lg p-8 aspect-[4/5] flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-muted">
                  <span>Teresa Mortatti</span>
                  <span className="text-freijo">•</span>
                </div>

                <div className="my-auto text-center py-8">
                  <div className="w-28 h-28 mx-auto rounded-full border border-freijo/40 bg-suede/70 overflow-hidden mb-4">
                    <img
                      src={teresaPhoto}
                      alt="Retrato de Teresa Mortatti"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted font-light max-w-[210px] mx-auto leading-relaxed">
                    Escuta psicanalítica pautada pela ética, pelo rigor e pela delicadeza.
                  </p>
                </div>

                <div className="border-t border-suedeDark pt-4 flex justify-between items-center text-[11px] uppercase tracking-[0.18em] text-sage">
                  <span>Psicanalista</span>
                  <span>Grupo de estudos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <span className="text-xs uppercase tracking-[0.2em] text-freijo block">Percurso &amp; Referenciais</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-tight">
              Maria Teresa Mortatti
            </h2>

            <div className="space-y-5 text-charcoal/90 font-light leading-relaxed text-base">
              <p>
                Psicanalista dedicada à clínica com adultos e adolescentes. Minha prática é sustentada pelo tripé
                psicanalítico — análise pessoal, estudo contínuo e supervisão — e pelo compromisso com uma clínica viva,
                não dogmática e profundamente atenta à singularidade de cada história.
              </p>
              <p>
                Minha escuta dialoga de forma especial com a psicanálise contemporânea e com a tradição das relações
                objetais, encontrando ressonância no pensamento de autores como <Author>Freud</Author>,{" "}
                <Author>Winnicott</Author>, <Author>André Green</Author>, <Author>Sándor Ferenczi</Author>,{" "}
                <Author>Melanie Klein</Author> e <Author>Thomas Ogden</Author>.
              </p>
              <p>
                Acredito que a escuta analítica se enriquece quando habita uma mente povoada pela cultura. Por isso,
                mantenho um diálogo constante entre a clínica, a literatura e o cinema — territórios que ampliam nossa
                sensibilidade para escutar as sutilezas do humano, o não-dito e as múltiplas camadas do inconsciente.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-2.5">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="px-3.5 py-1.5 bg-linen border border-suedeDark rounded text-xs text-muted tracking-wide"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
