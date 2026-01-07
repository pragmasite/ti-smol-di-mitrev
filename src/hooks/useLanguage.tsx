import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.it;
  otherLangs: { lang: Language; path: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "it"; // Default to Italian for Ticino (6600 postal code)

  if (location.pathname.startsWith("/de")) {
    lang = "de";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  // Generate paths for other languages
  const otherLangs: { lang: Language; path: string }[] = [];
  const availableLangs: Language[] = ["it", "de", "en"];

  for (const otherLang of availableLangs) {
    if (otherLang !== lang) {
      let path = "/";
      if (otherLang === "de") path = "/de";
      else if (otherLang === "en") path = "/en";
      otherLangs.push({ lang: otherLang, path });
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
