import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const rootEl = document.documentElement;
    if (lang === 'ar') {
      rootEl.lang = 'ar';
      rootEl.style.direction = 'rtl';
    } else {
      rootEl.lang = 'en';
      rootEl.style.direction = 'ltr';
    }

    const existing = document.getElementById('lang-font');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.id = 'lang-font';
    link.rel = 'stylesheet';
    link.href =
      lang === 'ar'
        ? 'https://fonts.googleapis.com/css2?family=Cairo&display=swap'
        : 'https://fonts.googleapis.com/css2?family=Inter&display=swap';
    document.head.appendChild(link);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div
        className={` overflow-hidden ${lang === 'ar' ? 'font-ar' : 'font-en'}`}
      >
        {children}
      </div>
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
