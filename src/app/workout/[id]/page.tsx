import Image from "next/image";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import WorkoutActions from "../../component/WorkoutActions";

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

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  const workout: Workout = await res.json();

  return (
    <main className="min-h-screen bg-[#0b0d10]">
      <Navbar activePage="none" />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Image
              src={workout.image}
              alt={workout.name}
              width={700}
              height={600}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>

          <div>
            <h1
              className="text-3xl font-bold uppercase leading-none text-white sm:text-4xl"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {workout.name}
            </h1>

            <p className="mt-3 text-sm leading-5 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#15181e]">
              <div className="flex justify-between border-b border-white/5 px-4 py-3 text-xs">
                <span className="text-gray-500">EQUIPMENT</span>
                <span className="text-gray-300">{workout.equipment}</span>
              </div>

              <div className="flex justify-between border-b border-white/5 px-4 py-3 text-xs">
                <span className="text-gray-500">DIFFICULTY</span>
                <span className="text-gray-300">{workout.difficulty}</span>
              </div>

              <div className="flex justify-between border-b border-white/5 px-4 py-3 text-xs">
                <span className="text-gray-500">SETS</span>
                <span className="text-gray-300">{workout.sets}</span>
              </div>

              <div className="flex justify-between border-b border-white/5 px-4 py-3 text-xs">
                <span className="text-gray-500">REPS</span>
                <span className="text-gray-300">{workout.reps}</span>
              </div>

              <div className="flex justify-between border-b border-white/5 px-4 py-3 text-xs">
                <span className="text-gray-500">DURATION</span>
                <span className="text-gray-300">{workout.duration} min</span>
              </div>

              <div className="flex justify-between border-b border-white/5 px-4 py-3 text-xs">
                <span className="text-gray-500">CALORIES</span>
                <span className="text-gray-300">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between px-4 py-3 text-xs">
                <span className="text-gray-500">RATING</span>
                <span className="text-gray-300">{workout.rating}</span>
              </div>
            </div>

            <div className="mt-6">
              <h2
                className="text-sm font-bold uppercase text-white"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                INSTRUCTIONS
              </h2>

              <ol className="mt-3 space-y-2">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-2 text-xs leading-5 text-gray-400"
                  >
                    <span>{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkoutDetailsPage;
