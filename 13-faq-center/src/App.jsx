import ThemeToggler from './components/ThemeToggler';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen container mx-auto flex flex-col items-center gap-8 p-8">
        <ThemeToggler />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-bold">
            FAQ Center
          </h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
