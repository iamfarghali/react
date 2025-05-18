import Hero from './components/Hero';
import LangChanger from './components/LangChanger';
import ThemeChanger from './components/ThemeChanger';
import { LangProvider } from './contexts/LangContext';

import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <ThemeChanger />
        <LangChanger />
        <Hero />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
