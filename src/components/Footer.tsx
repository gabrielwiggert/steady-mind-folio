const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Teresa Mortati</h3>
            <p className="text-muted-foreground">
              Psicóloga Clínica dedicada a ajudá-lo a encontrar seu caminho para o bem-estar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Segunda a Sexta: 9h - 18h</li>
              <li>Sábado: 10h - 15h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Teresa Mortati. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
