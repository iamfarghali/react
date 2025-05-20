import { useLang } from '../contexts/LangContext';
import T from './T';

function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex gap-1 items-center absolute top-4 left-0 z-999">
      <button
        className="bg-theme-200 text-accent-950 cursor-pointer px-2 py-1 disabled:bg-background-200 disabled:text-background-800 disabled:cursor-not-allowed capitalize"
        onClick={() => setLang('ar')}
        disabled={lang === 'ar'}
        aria-label="Change language into Arabic"
      >
        <T k="langAr" />
      </button>
      <button
        className="bg-theme-200 text-accent-950 cursor-pointer px-2 py-1 disabled:bg-background-200 disabled:text-background-800 disabled:cursor-not-allowed capitalize"
        onClick={() => setLang('en')}
        disabled={lang === 'en'}
        aria-label="Change language into English"
      >
        <T k="langEn" />
      </button>
    </div>
  );
}

export default LangSwitcher;
