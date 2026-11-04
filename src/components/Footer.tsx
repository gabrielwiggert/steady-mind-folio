const Footer = () => {
  return (
    <footer className="bg-linen border-t border-suedeDark py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted font-light">
        <div>
          <span className="font-serif text-lg text-charcoal mr-2">Teresa Mortatti</span>
          <span>• Psicanálise e Supervisão Clínica</span>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="https://g.page/r/Cb1DcDzy8xV7EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-freijo transition-colors underline underline-offset-4"
          >
            Perfil e Avaliações no Google
          </a>
          <span>&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
