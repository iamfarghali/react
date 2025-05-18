import { useLang } from '../contexts/LangContext';

function LangChanger() {
  const { setLang } = useLang();

  return (
    <div className="flex gap-1 items-center absolute top-4 left-0 z-999">
      <button
        className="bg-theme-200 text-accent-950 cursor-pointer px-2 py-1"
        onClick={() => setLang('ar')}
      >
        Arabic
      </button>
      <button
        className="bg-theme-200 text-accent-950 cursor-pointer px-2 py-1"
        onClick={() => setLang('en')}
      >
        English
      </button>
    </div>
  );
}

export default LangChanger;
