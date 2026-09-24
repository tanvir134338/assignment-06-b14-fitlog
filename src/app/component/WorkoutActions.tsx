"use client";

import { usePlan } from "../context/PlanContext";
import { toast, ToastContainer } from "react-toastify";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

const WorkoutActions = ({ workout }: { workout: Workout }) => {
  const { addToPlan, saveWorkout, isInPlan, isSaved } = usePlan();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    if (alreadySaved) {
      return;
    }

    saveWorkout(workout);

    toast.success("Saved for later");
  };

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={handleAddToPlan}
          disabled={alreadyInPlan}
          className="rounded-md bg-lime-400 px-4 py-3 text-xs font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          {alreadyInPlan ? "ADDED TO TODAY'S PLAN" : "ADD TO TODAY'S PLAN"}
        </button>

        <button
          onClick={handleSave}
          disabled={alreadySaved}
          className="rounded-md border border-white/10 px-4 py-3 text-xs text-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {alreadySaved ? "SAVED" : "SAVE FOR LATER"}
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default WorkoutActions;
