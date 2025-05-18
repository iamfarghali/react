import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { themes } from '../constants';

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const updateTheme = (newTheme) => {
    setIsOpen(false);
    if (newTheme === theme) return;
    setTheme(newTheme);
  };

  return (
    <div className="">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed ${isOpen ? 'top-4 -right-100' : 'top-4 right-4'} 
          p-2 bg-theme-950 text-theme-50 cursor-pointer 
          aspect-square rounded-full z-999 transition-all ease-out duration-300`}
      >
        {theme.includes('dark') ? <Sun /> : <Moon />}
      </button>

      <div
        className={`fixed ${isOpen ? 'top-0 right-0' : 'top-0 -right-100'} 
        flex flex-col justify-center gap-2 rounded-bl-2xl 
        bg-theme-950 p-4 z-999 transition-all ease-out duration-300`}
      >
        {themes.map((theme, idx) => (
          <button
            key={idx}
            className="p-2 border rounded-xl text-xs font-semibold bg-background-800 border-none text-background-300 cursor-pointer"
            onClick={() => updateTheme(theme.className)}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeChanger;
