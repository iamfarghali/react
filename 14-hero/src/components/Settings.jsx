import { Settings2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLang } from '../contexts/LangContext';

function Settings({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    setIsOpen(false);
  }, [lang]);

  return (
    <div className="relative">
      <button
        aria-label="Open settings"
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 
          ${lang === 'ar' ? 'right-4' : 'left-4'} 
          p-2 bg-theme-950 text-theme-50 cursor-pointer 
          aspect-square rounded-full z-9999 transition-all ease-out duration-300`}
      >
        <Settings2 className="w-5 h-5" />
      </button>

      {/* Setting Menu */}
      {isOpen && (
        <div
          className={`h-screen fixed top-0 
            ${lang === 'ar' ? 'right-0' : 'left-0'} 
            bg-background-200 w-[300px] max-w-screen z-9999 py-4 px-2 flex flex-col gap-2`}
        >
          <button
            aria-label="Close settings"
            onClick={() => setIsOpen(false)}
            className={`self-end p-2 bg-theme-950 text-theme-50 cursor-pointer 
            aspect-square rounded-full hover:bg-theme-800 transition-all ease-out duration-300`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col gap-4 px-4">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Settings;
