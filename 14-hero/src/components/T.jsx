import { useLang } from '../contexts/LangContext';
import { TRANSLATIONS } from '../data';

function T({ k, components = {} }) {
  const { lang } = useLang();
  const entey = TRANSLATIONS[lang]?.[k];

  if (typeof entey === 'function') {
    return entey(components);
  }
  // fallback: plain string
  return entey || k;
}

export default T;
