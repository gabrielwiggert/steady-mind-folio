import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Brain, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Individual Therapy",
    description:
      "One-on-one sessions tailored to your unique needs, focusing on personal growth and emotional well-being.",
  },
  {
    icon: Users,
    title: "Family Counseling",
    description:
      "Strengthen family bonds and improve communication through collaborative therapeutic approaches.",
  },
  {
    icon: Brain,
    title: "Anxiety & Depression",
    description:
      "Evidence-based treatments including CBT and mindfulness techniques to manage symptoms and build resilience.",
  },
  {
    icon: Sparkles,
    title: "Trauma Recovery",
    description:
      "Specialized support for processing traumatic experiences and developing healthy coping mechanisms.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized therapeutic services designed to support your mental health journey
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
