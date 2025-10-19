import { CheckCircle2 } from "lucide-react";
import officeImage from "@/assets/office-bg.jpg";

const credentials = [
  "Ph.D. in Clinical Psychology, Stanford University",
  "Licensed Clinical Psychologist (CA License #12345)",
  "15+ years of experience in therapeutic practice",
  "Specialized training in CBT, DBT, and EMDR",
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
                alt="Dr. Sarah Mitchell's office"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Sarah Mitchell</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I believe that everyone deserves a safe, compassionate space to explore their thoughts
              and feelings. With over 15 years of experience, I've helped hundreds of individuals
              and families navigate life's most challenging moments.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines evidence-based therapeutic techniques with a warm, personalized
              style that honors your unique journey and experiences.
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
