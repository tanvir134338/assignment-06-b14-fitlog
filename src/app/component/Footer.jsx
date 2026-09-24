import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10 bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-5">
        <Image
          src="/assets/Brand Logo Left.png"
          alt="FitLog"
          width={100}
          height={30}
          className="h-6 w-auto"
        />

        <p className="text-[8px] text-gray-500 sm:text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
