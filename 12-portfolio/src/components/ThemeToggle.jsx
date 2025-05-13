import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('isDarkMode')) || false
  );

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    return () => {};
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className={cn(
        'hidden sm:block fixed top-[14px] right-2 z-9999 p-2 rounded-full',
        'focus:outline-hidden cursor-pointer'
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-200" />
      ) : (
        <Moon className="h-6 w-6 text-indigo-950" />
      )}
    </button>
  );
}

export default ThemeToggle;
