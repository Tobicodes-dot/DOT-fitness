
export function generateWorkout({
    exercises,
    trainingProfile,
    muscleLoad = {},
    exerciseCount = 6
}) {
    // 1. Remove exercises requiring unavailable equipment
    const availableExercises = exercises.filter(exercise =>
        exercise.equipment.every(item =>
            trainingProfile.equipment.includes(item)
        )
    );

    // 2. Remove exercises that heavily target recovering muscles
    const recoveredExercises = availableExercises.filter(exercise => {
        const muscles = [
            ...exercise.muscles.primary,
            ...exercise.muscles.secondary
        ];

        return !muscles.some(muscle => (muscleLoad[muscle] || 0) >= 4);
    });

    // 3. Prioritize exercises targeting focus muscles
    const rankedExercises = recoveredExercises
        .map(exercise => {
            const focusScore = exercise.muscles.primary.filter(muscle =>
                trainingProfile.focusMuscles.includes(muscle)
            ).length;

            return { ...exercise, focusScore };
        })
        .sort((a, b) => b.focusScore - a.focusScore);

    // 4. Select exercises without repeating movement patterns
    const selectedExercises = [];
    const usedPatterns = new Set();

    for (const exercise of rankedExercises) {
        if (selectedExercises.length >= exerciseCount) break;

        if (usedPatterns.has(exercise.movementPattern)) continue;

        selectedExercises.push({
            exerciseId: exercise.id,
            sets: 3,
            reps: 12,
            restSeconds: 60
        });

        usedPatterns.add(exercise.movementPattern);
    }

    // 5. Return workout
    return {
        id: `workout-${Date.now()}`,
        name: "Daily Training",
        generatedAt: new Date().toISOString(),
        exercises: selectedExercises
    };
}
