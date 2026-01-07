import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#chi-siamo" },
    { label: t.nav.services, href: "#servizi" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#orari" },
    { label: t.nav.contact, href: "#contatti" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-12 border-t border-foreground/20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-xl font-semibold">TI-SMOL</span>
              <span className="text-xs tracking-widest opacity-80">{t.footer.tagline}</span>
            </div>
            <p className="text-sm opacity-80">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t.footer.about}</h3>
            <div className="space-y-2 text-sm opacity-80">
              <p>Via Vallemaggia 9</p>
              <p>6600 Locarno, CH</p>
              <p className="mt-4">
                <a href="tel:+41768010114" className="hover:opacity-100 transition">
                  +41 76 801 01 14
                </a>
              </p>
              <p>
                <a href="mailto:lakimitrev@gmail.com" className="hover:opacity-100 transition">
                  lakimitrev@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} TI-SMOL. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
