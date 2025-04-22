import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white flex flex-col">
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App;
