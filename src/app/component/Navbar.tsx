"use client";

import Link from "next/link";
import Image from "next/image";
import { usePlan } from "../context/PlanContext";

const Navbar = ({ activePage = "workouts" }) => {
  const { plan, saved } = usePlan();

  return (
    <nav className="border-b border-white/10 bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-5 sm:px-5 sm:py-5">
        <Link href="/" className="flex shrink-0 items-center gap-1.5">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={100}
            height={30}
            className="h-5 w-auto sm:h-6"
          />

          <span
            className="text-sm font-bold text-white sm:text-base"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            FITLOG
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-0.5 text-xs sm:gap-2 sm:text-sm">
          <Link
            href="/"
            className={
              activePage === "workouts"
                ? "rounded-full bg-[#182b0b] px-2.5 py-1.5 font-semibold text-lime-400 sm:px-4 sm:py-2"
                : "px-2.5 py-1.5 text-gray-400 sm:px-4 sm:py-2"
            }
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={
              activePage === "my-plan"
                ? "rounded-full bg-[#182b0b] px-2.5 py-1.5 font-semibold text-lime-400 sm:px-4 sm:py-2"
                : "px-2.5 py-1.5 text-gray-400 sm:px-4 sm:py-2"
            }
          >
            My Plan
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-[10px] text-gray-300 sm:gap-5 sm:text-sm">
          <span className="flex items-center gap-1">
            Plan
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black sm:h-5 sm:w-5 sm:text-xs">
              {plan.length}
            </span>
          </span>

          <span className="flex items-center gap-1">
            Saved
            <span className="text-gray-400">{saved.length}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
