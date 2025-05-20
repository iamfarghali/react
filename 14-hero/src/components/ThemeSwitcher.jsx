import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { themes } from '../constants';
import T from './T';
import { TRANSLATIONS } from '../data';

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const updateTheme = (newTheme) => {
    setIsOpen(false);
    if (newTheme === theme) return;
    setTheme(newTheme);
  };

  return (
    <div className="">
      <button
        aria-label="Change theme"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`absolute ${isOpen ? 'top-4 -right-100' : 'top-4 right-4'} 
          p-2 bg-theme-950 text-theme-50 cursor-pointer 
          aspect-square rounded-full z-999 transition-all ease-out duration-300`}
      >
        {theme.includes('dark') ? <Sun /> : <Moon />}
      </button>

      <div
        className={`absolute ${isOpen ? 'top-0 right-0' : 'top-0 -right-100'} 
        flex flex-col justify-center gap-2 rounded-bl-2xl 
        bg-theme-950 p-4 z-999 transition-all ease-out duration-300`}
      >
        {themes.map((theme, idx) => (
          <button
            aria-label={`Change to ${TRANSLATIONS['en'][theme.mode]} theme, ${
              TRANSLATIONS['en'][theme.name] || theme.name
            }-Theme`}
            key={idx}
            className="p-2 border rounded-xl text-xs font-semibold bg-background-800 border-none text-background-300 cursor-pointer"
            onClick={() => updateTheme(theme.className)}
          >
            <T k={theme.mode} /> - <T k={theme.name} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
