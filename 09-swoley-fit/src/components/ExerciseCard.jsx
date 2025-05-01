function ExerciseCard({exercise, idx}) {
    return (
        <div className="flex flex-col gap-4 sm:flex-wrap p-4 rounded-md bg-slate-950">
            <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
                <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-600">
                    0{idx + 1}
                </h4>
                <h2 className="max-w-full flex-1 md:text-center capitalize text-slate-200 text-lg sm:text-xl md:text-2xl whitespace-nowrap truncate">{exercise.name.replaceAll("_", " ")}</h2>
                <p className="text-sm capitalize text-slate-400">{exercise.type}</p>
            </div>

            <div className="flex flex-col">
                <h3 className="text-slate-300  text-sm">Muscle Groups</h3>
                <p className="capitalize">{exercise.muscles.join(" & ")}</p>
            </div>
        </div>
    )
}

export default ExerciseCard
