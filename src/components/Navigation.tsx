import { useState } from "react";

const desktopLinks = [
  { href: "#clinica", label: "O Espaço" },
  { href: "#atuacao", label: "A Clínica" },
  { href: "#supervisao", label: "Endereço" },
  { href: "#percurso", label: "Percurso" },
  { href: "#ensaios", label: "Escritos" },
  { href: "#contato", label: "Contato" },
];

const mobileLinks = [
  { href: "#clinica", label: "O Espaço" },
  { href: "#atuacao", label: "A Clínica" },
  { href: "#supervisao", label: "Supervisão" },
  { href: "#percurso", label: "Percurso & Referenciais" },
  { href: "#ensaios", label: "Escritos" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-linen/90 backdrop-blur-md border-b border-suedeDark/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        {/* Typographic logo */}
        <a href="#" className="group focus:outline-none">
          <span className="block font-serif text-2xl md:text-3xl tracking-wide text-charcoal font-medium">
            Maria Teresa Mortatti
          </span>
          <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-freijo mt-0.5">
            Psicanalista
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wide text-muted">
          {desktopLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-charcoal transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-linen bg-sage hover:bg-sageDark transition-colors duration-300 rounded"
          >
            Agendar conversa
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Abrir Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden p-2 text-charcoal focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-linen border-b border-suedeDark px-6 pt-4 pb-8 space-y-4">
          {mobileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block py-2 font-serif text-xl text-charcoal border-b border-suedeDark/50"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" onClick={closeMenu} className="block pt-4">
            <span className="inline-block w-full text-center py-3 text-xs uppercase tracking-[0.15em] text-linen bg-sage rounded">
              Agendar conversa
            </span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
