import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function handleWorkout() {
    if(muscles.length === 0) {
      alert("Please select a muscle group");
      return;
    }
    const updatedWorkout = generateWorkout({
      muscles,
      poison,
      goal,
    });
    setWorkout(updatedWorkout);
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-950 text-white flex flex-col gap-16">
      <Hero />
      <Generator 
        poison={poison} 
        setPoison={setPoison} 
        muscles={muscles} 
        setMuscles={setMuscles} 
        goal={goal} 
        setGoal={setGoal} 
        updatedWorkout={handleWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
