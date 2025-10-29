"use client";
import Link from "next/link";
import {
  LayoutPanelLeft,
  FolderGit2,
  User2,
  Cpu,
  Trophy,
  Briefcase,
} from "lucide-react";
import ImageSlider from "../ui/ImageSlider";
import VerticalSlider from "../ui/VerticalSlider";
import NewsTicker from "../ui/NewsTicker";
import FadeUpOnView from "../FadeUpOnView";
import AchievementsSlider from "./AchievementsSlider";
import { handleScrollToSection } from "@/lib/utils";

export default function Featured() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-start text-left">
        <LayoutPanelLeft />
        <h2 className="text-xl font-bold">Featured Sections</h2>
      </div>

      <p className="dark:text-custom-gray">
        Explore everything I&apos;ve crafted, contributed, and accomplished.
      </p>

      <section className="w-full  text-white">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
            auto-rows-[minmax(180px,auto)]
            gap-4 xl:gap-2 
          "
        >
          {/* ITEM 1 */}
          <div
            className="
              dark:bg-neutral-800 text-off-gray border border-neutral-300 dark:border-neutral-600 
              rounded-2xl p-4 flex justify-between
              xl:col-span-2 gap-4
            "
          >
            <FadeUpOnView className="w-full flex justify-between gap-4">
              <div className="w-1/2 space-y-2 flex flex-col items-start">
                <div className="flex items-start flex-col gap-2">
                  <Link
                    href={"/projects"}
                    className="rounded-md p-4 bg-neutral-200 dark:bg-neutral-700"
                  >
                    <FolderGit2 />
                  </Link>
                  <h2 className="text-lg font-semibold">Projects Showcase</h2>
                </div>
                <p className="text-neutral-400 text-sm">
                  A selection of real apps built to solve real problems.
                </p>
              </div>
              <div className="w-1/2">
                <VerticalSlider />
              </div>
            </FadeUpOnView>
          </div>
          {/* ITEM 2 */}
          <div className="dark:bg-neutral-800 text-center text-off-gray border border-neutral-300 dark:border-neutral-600 rounded-2xl p-4">
            <FadeUpOnView>
              <div className="flex items-center flex-col gap-2">
                <Link
                  href={"/about"}
                  className="rounded-md p-4 bg-neutral-200 dark:bg-neutral-700"
                >
                  <User2 />
                </Link>
                <h2 className="text-lg font-semibold">About Me</h2>
              </div>
              <p className="text-neutral-400 text-sm">
                Who I am and what I do.
              </p>
              <ImageSlider />
            </FadeUpOnView>
          </div>
          {/* ITEM 3 */}
          <div className="dark:bg-neutral-800 text-off-gray border border-neutral-300 dark:border-neutral-600 rounded-2xl">
            <FadeUpOnView className="p-4">
              <div className="flex text-center items-center flex-col gap-2">
                <button
                  onClick={() => handleScrollToSection("skills-section")}
                  className="cursor-pointer rounded-md p-4 bg-neutral-200 dark:bg-neutral-700"
                >
                  <Cpu />
                </button>
                <h2 className="text-lg font-semibold">Skills & Tools</h2>
                <p className="text-neutral-400 text-sm">
                  Covering web, mobile, and UI/UX technologies.
                </p>
              </div>
              <NewsTicker />
            </FadeUpOnView>
          </div>
          {/* ITEM 4 */}
          <div className="dark:bg-neutral-800 text-off-gray border border-neutral-300 dark:border-neutral-600 rounded-2xl p-4 xl:col-span-2">
            <FadeUpOnView>
              <div className="flex items-center flex-col gap-2">
                <Link
                  href={"/achievements"}
                  className="rounded-md p-4 bg-neutral-200 dark:bg-neutral-700"
                >
                  <Trophy />
                </Link>
                <h2 className="text-lg font-semibold">Achievements</h2>
              </div>
              <p className="text-neutral-400 text-sm">
                Milestones from programs, projects, and communities.
              </p>
              <AchievementsSlider />
            </FadeUpOnView>
          </div>

          {/* ✅ ITEM 5 - Services (Fixed) */}
          <div
            className="
              dark:bg-neutral-800 text-off-gray border border-neutral-300 dark:border-neutral-600 
              rounded-2xl p-4 flex justify-between items-center
              md:col-span-2 lg:col-span-2 xl:col-span-2
            "
          >
            <FadeUpOnView className="w-full flex justify-between gap-4">
              <div className="w-1/2 space-y-2 flex flex-col items-start">
                <div className="flex items-start flex-col gap-2">
                  <Link
                    href="/contact"
                    className="rounded-md p-4 bg-neutral-200 dark:bg-neutral-700"
                  >
                    <Briefcase />
                  </Link>
                  <h2 className="text-lg font-semibold">Services</h2>
                </div>
                <p className="text-neutral-400 text-sm">
                  End-to-end solutions in web, mobile, AI, and design.
                </p>
              </div>
              {/* Optional: add subtle motion or image preview here later */}
              <div className="hidden md:block w-1/2">
                <VerticalSlider />
              </div>
            </FadeUpOnView>
          </div>
        </div>
      </section>
    </div>
  );
}
