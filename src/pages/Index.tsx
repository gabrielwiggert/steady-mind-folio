import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Psychoanalysis from "@/components/Psychoanalysis";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Psychoanalysis />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
