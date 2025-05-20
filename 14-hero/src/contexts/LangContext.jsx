import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children, defualtLang = 'en' }) {
  const [lang, setLang] = useState(() => {
    const preferredLang = localStorage.getItem('language');
    return preferredLang ?? defualtLang;
  });

  useEffect(() => {
    const rootEl = document.documentElement;

    // Change document's direction
    if (lang === 'ar') {
      rootEl.lang = 'ar';
      rootEl.style.direction = 'rtl';
    } else {
      rootEl.lang = 'en';
      rootEl.style.direction = 'ltr';
    }

    // Update preferred language
    localStorage.setItem('language', lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
