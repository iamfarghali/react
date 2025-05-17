import { useTheme } from '../contexts/ThemeContext';

import { DARK_THEME } from '../constants';
import { Sun, Moon } from 'lucide-react';

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme between Dark and Light"
      onClick={toggleTheme}
      className="flex items-center justify-center text-center cursor-pointer bg-foreground text-background rounded-full p-[10px] sm:p-[6px]"
    >
      {theme === DARK_THEME ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggler;
