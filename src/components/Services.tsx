import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Terapia Individual",
    description:
      "Sessões personalizadas e individuais focadas nas suas necessidades únicas, crescimento pessoal e bem-estar emocional.",
  },
  {
    icon: Users,
    title: "Psicanálise",
    description:
      "Exploração profunda do inconsciente para entender padrões de comportamento e promover mudanças duradouras na vida pessoal.",
  },
  {
    icon: Brain,
    title: "Ansiedade e Depressão",
    description:
      "Tratamentos baseados em evidências e técnicas para gerenciar sintomas e construir resiliência.",
  },
  {
    icon: Sparkles,
    title: "Recuperação de Traumas",
    description:
      "Suporte especializado para processar experiências traumáticas e desenvolver mecanismos saudáveis de enfrentamento.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços Oferecidos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serviços terapêuticos especializados desenhados para apoiar sua jornada de saúde mental
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
