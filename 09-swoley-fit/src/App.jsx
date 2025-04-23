import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";

function App() {
  const [workout, setWorkout] = useState(null);
  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white flex flex-col gap-16">
      <Hero />
      <Generator />
      {workout && <Workout />}
    </main>
  );
}

export default App;
