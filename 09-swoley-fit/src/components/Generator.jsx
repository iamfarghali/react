import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-500">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl font-medium">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

function Generator({poison, muscles, goal, setMuscles, setPoison, setGoal, updatedWorkout}) {
  const [showModal, setShowModal] = useState(false);

  function updateMuscles(muscleGroup) {
    // toggle muscleGroup
    if (muscles.includes(muscleGroup)) {
      const updatedMuscles = muscles.filter((val) => val !== muscleGroup);
      setMuscles(updatedMuscles);
      return;
    }

    if (muscles.length >= 3) return;

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles((prev) => [...prev, muscleGroup]);
    if (muscles.length === 2) setShowModal(false);
  }

  return (
    <SectionWrapper
      header="Generate your workout"
      title={["it's", "Huge", "o'clock"]}
    >
      {/* Poisons */}
      <div className="flex flex-col gap-6">
        <Header
          index="01"
          title="Pick your poison"
          description="Select the workout you wish to endure"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.keys(WORKOUTS).map((type, idx) => (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={`bg-slate-800 border border-blue-400 py-4 rounded-lg hover:border-blue-700 duration-200 cursor-pointer capitalize ${
                type == poison ? "bg-yellow-700" : ""
              }`}
              key={idx}
            >
              {type.replaceAll("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Targets */}
      <div className="flex flex-col gap-6">
        <Header
          index="02"
          title="Lock on targets"
          description="Select the muscles judged for annihilation"
        />
        <div className="bg-slate-950 p-3 border bordr-blue-400 rounded-lg">
          <button
            className="w-full flex items-center justify-between  px-4 cursor-pointer"
            onClick={() => setShowModal((prev) => !prev)}
          >
            <p className="uppercase font-medium">
              {muscles.length ? muscles.join(", ") : "Select muscles groups"}
            </p>
            {showModal ? (
              <i className="fa-solid fa-caret-up"></i>
            ) : (
              <i className="fa-solid fa-caret-down"></i>
            )}
          </button>

          {showModal && (
            <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {(poison === "individual"
                ? WORKOUTS[poison]
                : Object.keys(WORKOUTS[poison])
              ).map((muscleGroup, idx) => (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  key={idx}
                  className={`bg-slate-800 hover:bg-slate-600 px-4 py-1 rounded-lg uppercase cursor-pointer ${
                    muscles.includes(muscleGroup) ? "bg-yellow-700" : ""
                  }`}
                >
                  {muscleGroup}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Schemes */}
      <div className="flex flex-col gap-6">
        <Header
          index="03"
          title="Pick your scheme"
          description="Select the workout you wish to endure"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {Object.keys(SCHEMES).map((scheme, idx) => (
            <button
              onClick={() => setGoal(scheme)}
              className={`bg-slate-800 border border-blue-400 py-4 rounded-lg hover:border-blue-700 duration-200 cursor-pointer capitalize ${
                scheme == goal ? "bg-yellow-700" : ""
              }`}
              key={idx}
            >
              {scheme.replaceAll("_", " ")}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={updatedWorkout}>Formulate</Button>
    </SectionWrapper>
  );
}

export default Generator;
