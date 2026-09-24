import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

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

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="block overflow-hidden rounded-lg border border-white/10 bg-[#15181e]"
    >
      <Image
        src={workout.image}
        alt={workout.name}
        width={400}
        height={220}
        className="h-86 w-full object-cover sm:h-90"
      />

      <div className="px-3 py-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2 py-0.5 text-[11px] font-bold uppercase leading-none text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-[17px] font-bold uppercase leading-tight text-white sm:text-base">
          {workout.name}
        </h3>

        <p className="mt-1 text-[12px] text-gray-500">{workout.equipment}</p>

        <div className="mt-3 flex items-center gap-3 border-t border-white/5 pt-2.5 text-[13px] text-gray-500 sm:text-[12px]">
          <span className="flex items-center gap-1">
            <Clock3 size={13} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={13} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={13} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
