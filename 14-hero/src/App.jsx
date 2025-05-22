import Hero from './components/Hero';
import LangSwitcher from './components/LangSwitcher';
import Settings from './components/Settings';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="relative font-font">
      <Settings>
        <ThemeSwitcher />
        <LangSwitcher />
      </Settings>

      <div className="container mx-auto">
        <Hero />
      </div>
    </div>
  );
}

export default App;
