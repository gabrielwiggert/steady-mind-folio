const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Sarah Mitchell</h3>
            <p className="text-muted-foreground">
              Licensed Clinical Psychologist dedicated to helping you find your path to wellness.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Sarah Mitchell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
