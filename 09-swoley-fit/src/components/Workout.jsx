import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

function Workout({workout}) {
  console.log(workout);
  return (
    <SectionWrapper
      header="Welcome to"
      title={["The", "DANGER", "Zone"]}
    >
     <div className="flex flex-col gap-4">
     {workout.map((exercise, idx) => <ExerciseCard key={idx} exercise={exercise} idx={idx} />)}
     </div>
    </SectionWrapper>
  );
}

export default Workout;
