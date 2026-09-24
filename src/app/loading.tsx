const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d10]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-lime-400"></div>

        <p className="text-sm text-gray-400">Loading workouts...</p>
      </div>
    </main>
  );
};

export default Loading;
