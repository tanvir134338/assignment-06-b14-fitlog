"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Clock3, Flame, Star, X, Check } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { usePlan, Workout } from "../context/PlanContext";
import Image from "next/image";

const MyPlanPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sortBy, setSortBy] = useState("duration");

  const { plan, saved, removeFromPlan, removeFromSaved } = usePlan();

  const activeTab = searchParams.get("tab") === "saved" ? "saved" : "today";

  const currentList = activeTab === "today" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalMinutes = currentList.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="flex min-h-screen flex-col bg-[#0b0d10]">
      <Navbar activePage="my-plan" />

      <section className="mx-auto w-full max-w-7xl flex-1 px-3 py-8 sm:px-5 sm:py-10">
        <div className="mb-5">
          <h1
            className="text-2xl font-bold uppercase text-white sm:text-3xl"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            MY PLAN
          </h1>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-[#15181e]">
          <div className="border-r border-white/5 px-4 py-5 sm:px-5">
            <p className="text-[10px] text-gray-500 sm:text-xs">Exercises</p>

            <p className="mt-1 text-2xl font-bold text-lime-400 sm:text-3xl">
              {currentList.length}
            </p>
          </div>

          <div className="border-r border-white/5 px-4 py-5 sm:px-5">
            <p className="text-[10px] text-gray-500 sm:text-xs">Minutes</p>

            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {totalMinutes}
            </p>
          </div>

          <div className="px-4 py-5 sm:px-5">
            <p className="text-[10px] text-gray-500 sm:text-xs">Calories</p>

            <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex rounded-lg border border-white/10 bg-[#15181e] p-1">
            <button
              onClick={() => {
                router.push("/my-plan?tab=today");
              }}
              className={
                activeTab === "today"
                  ? "rounded-md bg-[#202631] px-3 py-1.5 text-[10px] text-white sm:px-5 sm:text-xs"
                  : "px-3 py-1.5 text-[10px] text-gray-500 sm:px-5 sm:text-xs"
              }
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => {
                router.push("/my-plan?tab=saved");
              }}
              className={
                activeTab === "saved"
                  ? "rounded-md bg-[#202631] px-3 py-1.5 text-[10px] text-white sm:px-5 sm:text-xs"
                  : "px-3 py-1.5 text-[10px] text-gray-500 sm:px-5 sm:text-xs"
              }
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-gray-500 sm:inline">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-white/10 bg-[#15181e] px-2 py-1.5 text-[10px] text-gray-300 outline-none sm:px-3 sm:text-xs"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {sortedList.length === 0 ? (
          <div className="mt-5 flex min-h-55 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-5 text-center sm:min-h-60">
            <h2
              className="text-lg font-bold uppercase text-white"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              NOTHING HERE YET
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-5 rounded-full bg-lime-400 px-5 py-2.5 text-[10px] font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            {sortedList.map((workout) => (
              <WorkoutPlanCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
                removeFromPlan={removeFromPlan}
                removeFromSaved={removeFromSaved}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};

const WorkoutPlanCard = ({
  workout,
  activeTab,
  removeFromPlan,
  removeFromSaved,
}: {
  workout: Workout;
  activeTab: string;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}) => {
  const handleDone = () => {
    removeFromPlan(workout.id);
    toast.info("Task completed");
  };

  const handleCancel = () => {
    removeFromPlan(workout.id);
    toast.error("Task canceled");
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#15181e] p-3 sm:p-4">
      <Image
        src={workout.image}
        alt={workout.name}
        width={140}
        height={80}
        className="h-16 w-24 shrink-0 rounded-lg object-cover sm:h-20 sm:w-28"
      />

      <div className="min-w-0 flex-1">
        <h3
          className="truncate text-sm font-bold uppercase text-white sm:text-base"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          {workout.name}
        </h3>

        <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">
          {workout.equipment}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-[9px] text-gray-400 sm:text-[10px]">
          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={11} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={11} />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="hidden rounded-full border border-white/10 px-3 py-2 text-[9px] text-gray-300 sm:block"
        >
          View Details
        </Link>

        {activeTab === "today" && (
          <button
            onClick={handleDone}
            className="hidden rounded-full bg-lime-400 px-3 py-2 text-[9px] font-bold text-black sm:flex sm:items-center sm:gap-1"
          >
            <Check size={11} />
            Mark as Done
          </button>
        )}

        <button
          onClick={() => {
            if (activeTab === "today") {
              handleCancel();
            } else {
              removeFromSaved(workout.id);
              toast.error("Task canceled");
            }
          }}
          className="flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:text-white"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default MyPlanPage;
