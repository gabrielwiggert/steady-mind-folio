import { CheckCircle2 } from "lucide-react";
import officeImage from "@/assets/office-bg.jpg";

const credentials = [
  "Graduada em Ciências Sociais – Universidade Estadual de Campinas (UNICAMP)",
  "Docente no curso de Graduação - Centro Universitário Nossa Senhora do Patrocínio, Itu, São Paulo.",
  "Pesquisadora junto ao CNPq na Faculdade de Educação da Universidade Estadual de Campinas no Projeto “Educação para o Trabalho“.",
  "Membro integrante do LESC (Laboratório de Estudos Sociedade e Cultura) na PUC Campinas.",
  "Autora do livro Atualidades no Cinema, Editora Entremares, 2014 (ISBN: 978-85-917823-0-7).",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={officeImage}
                alt="Consultório de Teresa Mortatti"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Teresa Mortatti</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Psicanalista e educadora pós-graduada em Psicanálise pelo Cefas (Centro de Formação e
              Assistência à Saúde).
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pós-graduada em Neuropsicanálise e Psicanálise de Grupo. <br />
              Pós-Graduada Grupanálise pelo Instituto Gerar <br />
              Integrante e fundadora do Coletivo “Vão-Psicanálise e Contemporaneidade” <br />
              Membro da Casa Fluxo, coletivo de Psicanálise e Contemporaneidade.
            </p>

            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
