import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLangs } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  const navLinks = [
    { label: t.nav.about, href: "#chi-siamo" },
    { label: t.nav.services, href: "#servizi" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#orari" },
    { label: t.nav.contact, href: "#contatti" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col">
          <span
            className={`font-serif text-xl font-semibold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            TI-SMOL
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 text-sm ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Globe className="h-4 w-4" />
              <span>Lingua</span>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-md shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              {otherLangs.map((lang) => (
                <Link
                  key={lang.lang}
                  to={lang.path}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition"
                >
                  {lang.lang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <Button asChild size="sm">
            <a href="tel:+41768010114">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm text-foreground hover:text-primary transition py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border pt-3 space-y-2">
              {otherLangs.map((lang) => (
                <Link
                  key={lang.lang}
                  to={lang.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-foreground hover:text-primary transition py-2"
                >
                  <Globe className="h-4 w-4 inline mr-2" />
                  {lang.lang.toUpperCase()}
                </Link>
              ))}
            </div>
            <Button asChild size="sm" className="w-full">
              <a href="tel:+41768010114">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
