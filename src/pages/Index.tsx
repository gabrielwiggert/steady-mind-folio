import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Psychoanalysis from "@/components/Psychoanalysis";
import Services from "@/components/Services";
import About from "@/components/About";
import Essays from "@/components/Essays";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Psychoanalysis />
      <Services />
      <About />
      <Essays />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
