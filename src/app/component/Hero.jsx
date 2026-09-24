import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-3 sm:px-5">
      <div className="relative flex min-h-97.5 flex-col justify-center overflow-hidden rounded-xl border border-white/10 bg-[#15181e] px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-10">
        <div className="w-full lg:w-[60%]">
          <p className="mb-5 text-xs font-bold tracking-wider text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1
            className="text-3xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-4xl lg:text-[44px] xl:text-5xl"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <span className="block whitespace-nowrap">
              TRAIN WITH INTENT. LOG
            </span>
            <span className="block whitespace-nowrap">EVERY SET.</span>
          </h1>

          <p className="mt-6 max-w-120 text-sm leading-5 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="flex justify-center lg:hidden">
            <Image
              src="/assets/banner.png"
              alt="Workout"
              width={380}
              height={300}
              className="my-6 h-auto w-64 object-contain sm:w-72"
            />
          </div>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-xs font-bold text-black"
          >
            BROWSE WORKOUTS
            <ArrowDown size={14} />
          </Link>
        </div>

        <Image
          src="/assets/banner.png"
          alt="Workout"
          width={380}
          height={300}
          className="hidden h-auto w-95 object-contain lg:block"
        />
      </div>
    </section>
  );
};

export default Hero;
