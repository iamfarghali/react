import { createContext, useContext, useEffect, useState } from 'react';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return LIGHT_THEME; // Default Theme
    return localStorage.getItem('theme') !== null
      ? localStorage.getItem('theme') // User's theme
      : window.matchMedia('(prefers-color-scheme: dark)').matches // No theme set before, Match system theme
      ? DARK_THEME
      : LIGHT_THEME;
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === DARK_THEME) root.classList.add(DARK_THEME);
    else root.classList.remove(DARK_THEME);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
