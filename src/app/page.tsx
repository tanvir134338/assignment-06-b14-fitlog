import Navbar from "./component/Navbar";
import Image from "next/image";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

const HomePage = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data: Workout[] = await res.json();

  console.log(data);

  return (
    <main>
      <Navbar />
      <h1>FitLog</h1>

      <div>
        {data.map((workout) => (
          <div key={workout.id}>
            <h2>{workout.name}</h2>

            <Image
              src={workout.image}
              alt={workout.name}
              width={300}
              height={200}
            />

            <p>{workout.equipment}</p>
            <p>{workout.duration} minutes</p>
            <p>{workout.caloriesBurned} kcal</p>
            <p>Rating: {workout.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
