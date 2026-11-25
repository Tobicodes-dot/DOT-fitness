import test from "node:test";
// eslint-disable-next-line no-unused-vars
import assert from "node:assert/strict";

import { exercises } from "../data/exercises.js";
import { filterExercises } from "../utils/filterExercises.js";

import { generateWorkout } from "../utils/generateWorkout.js";
import { trainingProfile } from "../data/trainingProfile.js";
import { calculateRecovery } from "../utils/calculateRecovery.js";
import { workoutHistory } from "../data/workoutHistory.js";

test("finds exercises that train shoulders", () => {

    const result = filterExercises(exercises, {
        muscles: "shoulders"
    });

    console.log(result.map(exercise => exercise.id));

});

const muscleLoad = calculateRecovery(
    // eslint-disable-next-line no-undef
    workoutHistory,
    exercises
);

const workout = generateWorkout({
    exercises,
    trainingProfile,
    muscleLoad
});

console.log(workout);