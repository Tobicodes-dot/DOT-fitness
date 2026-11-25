export function calculateRecovery( workoutHistory, exercises, recoveryHours = 48) {
    const now = Date.now();

    const muscleLoad = {};

    workoutHistory.forEach(session => {
        const hoursSinceWorkout = 
        
            (now - new Date(session.completedAt).getTime()) / (1000 * 60 * 60);

        if(hoursSinceWorkout >= recoveryHours) return; 

        session.exercises.forEach(item => {
            const exercise = exercises.find(
                exercise => exercise.id === item.id
            );

            if(!exercise) return;

            exercise.muscles.primary.forEach(muscle => {
                muscleLoad[muscle] = (muscleLoad[muscle] || 0) + 2;
            });

            exercise.muscles.secondary.forEach(muscle => {
                muscleLoad[muscle] = (muscleLoad[muscle] || 0) + 1;
            });
        });
    });

    return muscleLoad;

}