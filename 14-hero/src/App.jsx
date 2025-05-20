import Hero from './components/Hero';
import LangSwitcher from './components/LangSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="relative overflow-x-hidden font-font h-[3000px]">
      <div className=" relative container mx-auto">
        <ThemeSwitcher />
        <LangSwitcher />
        <Hero />
      </div>
    </div>
  );
}

export default App;
