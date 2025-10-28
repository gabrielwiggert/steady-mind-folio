import { CheckCircle2 } from "lucide-react";
import officeImage from "@/assets/office-bg.jpg";

const credentials = [
  "Formação em Psicanálise pelo CEFAS",
  "Experiência com adolescentes e adultos",
  "Formação especializada em Psicanálise Freudiana e Lacaniana",
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
              Acredito que todos merecem um espaço seguro e compassivo para explorar seus pensamentos
              e sentimentos. Ajudo pacientes a navegarem pelos momentos mais desafiadores da vida.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Minha abordagem combina técnicas terapêuticas baseadas em evidências com um estilo
              acolhedor e personalizado que honra sua jornada e experiências únicas.
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
