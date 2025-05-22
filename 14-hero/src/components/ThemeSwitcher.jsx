import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../constants';
import T from './T';
import { TRANSLATIONS } from '../data';
import { CheckCircle } from 'lucide-react';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const updateTheme = (newTheme) => {
    if (newTheme === theme) return;
    setTheme(newTheme);
  };

  return (
    <div className="flex flex-col gap-4 p-1">
      <p className="mx-2 text-lg font-bold text-background-950">
        <T k={'themeSettings'} />
      </p>

      <div className="flex flex-col justify-center gap-2">
        {themes.map((t, idx) => (
          <button
            aria-label={`Change to ${TRANSLATIONS['en'][t.mode]} theme, ${
              TRANSLATIONS['en'][t.name] || t.name
            }-Theme`}
            key={idx}
            className="flex items-center justify-between px-4 py-3 border rounded-xl font-semibold bg-background-800 border-none text-background-200 cursor-pointer hover:bg-background-700 duration-300 disabled:bg-background-100 disabled:text-background-900 disabled:cursor-not-allowed"
            onClick={() => updateTheme(t.className)}
            disabled={theme === t.className}
          >
            <T k={t.mode} /> - <T k={t.name} />
            {theme === t.className && <CheckCircle className="w-5 h-5" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
