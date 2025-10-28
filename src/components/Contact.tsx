import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5519982922509";
    const message = "Olá! Gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para dar o primeiro passo? Entre em contato para agendar uma consulta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center animate-fade-in">
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-muted-foreground">(19) 98292-2509</p>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">teresamortatti@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="pt-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Localização</h3>
              <p className="text-muted-foreground">Campinas, São Paulo</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Fale Comigo pelo WhatsApp</h3>
                <p className="text-muted-foreground">
                  Clique no botão abaixo para iniciar uma conversa e agendar sua consulta
                </p>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg"
                  size="lg"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Conversar no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
