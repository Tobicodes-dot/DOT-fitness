export function filterExercises(exercises, filters = {}) {

    const muscle = filters.muscles?.trim().toLowerCase();
    const equipment = filters.equipment?.trim().toLowerCase();
    const difficulty = filters.difficulty?.trim().toLowerCase();
    const movementPattern = filters.movementPattern?.trim().toLowerCase();

    return exercises.filter(exercise => {
        
        if (muscle && !exercise.muscles.primary.includes(filters.muscles) && !exercise.muscles.secondary.includes(filters.muscles)) {
            return false;
        }

        if (equipment && !exercise.equipment.includes(filters.equipment)) {
            return false;
        }

        if (difficulty && exercise.difficulty !== filters.difficulty) {
            return false;
        }

        if (movementPattern && exercise.movementPattern !== filters.movementPattern) {
            return false;
        }

        return true;
    });

}