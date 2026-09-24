import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d10] px-4">
      <div className="text-center">
        <p className="text-sm font-bold tracking-widest text-lime-400">
          FITLOG
        </p>

        <h1
          className="mt-3 text-7xl font-bold text-white sm:text-8xl"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          404
        </h1>

        <h2 className="mt-3 text-lg font-bold uppercase text-white">
          PAGE NOT FOUND
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          The workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-lime-400 px-5 py-3 text-xs font-bold text-black"
        >
          BACK TO WORKOUTS
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
