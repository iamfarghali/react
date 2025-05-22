import { CheckCircle } from 'lucide-react';
import { useLang } from '../contexts/LangContext';
import T from './T';

function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex flex-col gap-4 p-1">
      <p className="mx-2 text-lg font-bold text-background-950">
        <T k={'langSettings'} />
      </p>

      <div className="flex flex-col justify-center gap-2">
        <button
          className="disabled:bg-background-100 disabled:text-background-900 disabled:cursor-not-allowed capitalize flex items-center justify-between px-4 py-3 rounded-xl font-semibold bg-background-800 text-background-200 cursor-pointer hover:bg-background-700 duration-300"
          onClick={() => setLang('ar')}
          disabled={lang === 'ar'}
          aria-label="Change language into Arabic"
        >
          <T k="langAr" />
          {lang === 'ar' && <CheckCircle className="w-5 h-6" />}
        </button>
        <button
          className="disabled:bg-background-100 disabled:text-background-900 disabled:cursor-not-allowed capitalize flex items-center justify-between px-4 py-3 rounded-xl font-semibold bg-background-800 text-background-200 cursor-pointer hover:bg-background-700 duration-300"
          onClick={() => setLang('en')}
          disabled={lang === 'en'}
          aria-label="Change language into English"
        >
          <T k="langEn" />
          {lang === 'en' && <CheckCircle className="w-5 h-6" />}
        </button>
      </div>
    </div>
  );
}

export default LangSwitcher;
