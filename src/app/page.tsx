import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WorkoutCard from "./component/WorkoutCard";

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

const HomePage = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data: Workout[] = await res.json();

  console.log(data);

  return (
    <main>
      <Navbar />

      <Hero />

      <section id="library" className="mx-auto max-w-7xl px-3 py-10 sm:px-5">
        <div className="mb-5">
          <h2 className="text-xl font-black uppercase leading-none text-white">
            THE LIBRARY
          </h2>

          <p className="mt-1 text-[15px] text-gray-500 sm:text-[13px]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
