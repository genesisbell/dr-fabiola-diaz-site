"use client";

import { createContext, useContext, useState } from "react";
import translations, { type Locale, type Translations } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "es",
  t: translations.es,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const toggle = () => setLocale((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
