"use client";
import Image from "next/image";
import { LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
export default function Featured() {
  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <LayoutPanelLeft />
        <h2 className="text-xl font-bold">Featured Sections</h2>
      </div>
      <p className="dark:text-custom-gray">
        Explore everything I've crafted, contributed, and accomplished.
      </p>
      <section className="w-full  dark:bg-neutral-900 text-white p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4">
          {/* ITEM 1 - Spans 2 columns */}
          <div className="col-span-2 row-span-1 dark:bg-neutral-800  text-off-gray border border-neutral-300 dark:border-neutral-600  rounded-2xl p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-2">Projects Showcase</h2>
            <p className="text-neutral-400 text-sm">
              A selection of real apps built to solve real problems.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="dark:bg-neutral-800  text-off-gray border border-neutral-300 dark:border-neutral-600  rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-neutral-400 text-sm">Who I am and what I do.</p>
          </div>

          {/* ITEM 3 */}
          <div className="dark:bg-neutral-800  text-off-gray border border-neutral-300 dark:border-neutral-600  rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Skills & Tools</h2>
            <p className="text-neutral-400 text-sm">
              Covering web, mobile, and UI/UX technologies.
            </p>
          </div>

          {/* ITEM 4 */}
          <div className="dark:bg-neutral-800  text-off-gray border border-neutral-300 dark:border-neutral-600  rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <p className="text-neutral-400 text-sm">
              Milestones from programs, projects, and communities.
            </p>
          </div>

          {/* ITEM 5 */}
          <div className="dark:bg-neutral-800  text-off-gray border border-neutral-300 dark:border-neutral-600  rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Chat Room</h2>
            <p className="text-neutral-400 text-sm">
              Open space to talk and collaborate.
            </p>
          </div>

          {/* ITEM 6 - Spans 2 columns */}
          <div className="col-span-2 dark:bg-neutral-800  text-off-gray border border-neutral-300 dark:border-neutral-600  rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <p className="text-neutral-400 text-sm">
              End-to-end solutions in web, mobile, AI, and design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
