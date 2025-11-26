import { Quote } from "lucide-react";

const Psychoanalysis = () => {
  return (
    <section id="psychoanalysis" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Quote */}
        <div className="mb-20 animate-fade-in">
          <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-6 md:p-16 shadow-xl border border-primary/20 overflow-hidden">
            <Quote className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 text-primary/20" />
            <Quote className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-primary/20 rotate-180" />

            <blockquote className="relative z-10 text-center">
              <p className="text-xl md:text-3xl lg:text-4xl font-serif italic text-foreground leading-relaxed mb-8">
                "O que me encanta ao ler Freud, quando o compreendo, é sua força, sua loucura, sua
                força louca e genial de querer explicar qual é a fonte íntima que nos anima, a nós
                humanos. O prazer de ler Freud é descobrir que, para além das palavras, é de nós que
                ele está falando".
              </p>
              <footer className="text-lg text-muted-foreground">
                — NASIO, J. D. <cite className="font-normal italic">O prazer de ler Freud</cite>.
                Rio de Janeiro: Zahar, 1995
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1 */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que é a Psicanálise e para quem ela se destina?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Muitas vezes, sentimo-nos presos em padrões que se repetem, lidamos com ansiedades que
              não compreendemos totalmente, ou enfrentamos{" "}
              <b>sentimentos de vazio e uma tristeza profunda que se manifesta como depressão</b>.
              Se você busca não apenas um alívio para esses sintomas, mas uma compreensão profunda
              das suas causas e como eles afetam sua vida, a psicanálise pode ser o caminho.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trata-se de uma abordagem teórica e clínica, desenvolvida originalmente por Sigmund
              Freud, que nos convida a explorar a complexa interação entre o nosso{" "}
              <b>consciente </b>
              (aquilo que percebemos e sabemos sobre nós mesmos) e o nosso <b>inconsciente</b>.
              Desde então, o campo expandiu-se e aprofundou-se significativamente, contando com as
              contribuições essenciais de figuras como Melanie Klein, Donald Winnicott e Jacques
              Lacan, que beberam na fonte freudiana para enriquecer e diversificar a compreensão do
              psiquismo humano.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">A Escuta do Inconsciente</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A premissa fundamental da psicanálise é que muitas das nossas emoções, pensamentos e
              comportamentos são influenciados por processos inconscientes. Estes processos são
              formados pelas nossas experiências de vida, memórias e desejos que, embora não estejam
              diretamente acessíveis à nossa consciência, encontram formas de se manifestar por
              vezes em sonhos, atos falhos, sintomas físicos ou nos próprios conflitos que nos
              trazem sofrimento.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O objetivo da análise não é simplesmente "descobrir" esses conteúdos, mas sim criar um
              espaço para que eles possam ser falados, escutados e elaborados.
            </p>
          </div>

          {/* Section 3 */}
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Um Espaço Seguro para a Sua Fala
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O processo psicanalítico acontece num ambiente que privilegia a segurança, a
              confidencialidade absoluta e, acima de tudo, a ausência total de julgamentos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Neste espaço, você é convidado a falar livremente sobre o que lhe vier à mente. O
              papel do analista é o de facilitar essa exploração, ajudando a identificar e a
              compreender as dinâmicas subjacentes que moldam a sua experiência.
            </p>
          </div>

          {/* Section 4 */}
          <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">O Caminho para a Mudança</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ao longo do tempo, este trabalho permite a "elaboração" de conflitos antigos e a
              ressignificação de experiências. Mais do que uma "cura", a psicanálise busca promover
              um entendimento mais profundo de si mesmo, o que, por sua vez, permite o
              desenvolvimento de formas mais saudáveis de lidar com os desafios da vida e uma maior
              liberdade para fazer novas escolhas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoje, a psicanálise é amplamente aplicada não só em casos de ansiedade, trauma,
              depressão e sentimentos de vazio, mas também como uma poderosa ferramenta de
              <b> autoconhecimento</b> para quem deseja explorar as camadas mais profundas da sua
              própria mente e viver de forma mais plena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psychoanalysis;
