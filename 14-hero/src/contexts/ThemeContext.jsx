import { createContext, useContext, useEffect, useState } from 'react';
import { THEME_PRIMARY_DARK, THEME_PRIMARY_LIGHT } from '../constants';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return THEME_PRIMARY_LIGHT;
    const userTheme = localStorage.getItem('theme');
    return userTheme != null
      ? userTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_PRIMARY_DARK
      : THEME_PRIMARY_LIGHT;
  });

  useEffect(() => {
    const rootEl = document.documentElement;
    const currentTheme = Array.from(rootEl.classList).filter((val) =>
      val.startsWith('theme-')
    )[0];

    if (currentTheme) rootEl.classList.remove(currentTheme);
    rootEl.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
