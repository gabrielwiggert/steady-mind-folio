import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional therapy space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-primary font-medium mb-4">Psicanalista</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Sua jornada de
            <span className="block text-primary mt-2">transformação psíquica encontra aqui</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            um ambiente de rigor e acolhimento, dedicado à elaboração simbólica e à constituição de
            novos sentidos para sua singularidade. <br />
            Um percurso analítico embasado em sólida tradição teórica e investigação contínua,
            oferecendo um ambiente ético de acolhimento para a ressignificação de padrões e o
            desenvolvimento de uma liberdade existencial autêntica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Agendar uma Consulta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
