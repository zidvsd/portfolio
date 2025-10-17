"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { motion } from "motion/react";
import profile from "@/data/profile.json";
import TechStackIcons from "@/components/TechStackIcons";
export default function page() {
  return (
    <div className="custom-container  mx-auto ">
      <section className="pb-8">
        <h1 className="text-2xl font-semibold">Hi, I&apos;m {profile.name}</h1>
        <ul className="lg:flex text-neutral-600 dark:text-neutral-400 list-disc list-inside mt-2 text-sm gap-4 space-y-2">
          <li>
            Based in {profile.location.city}, {profile.location.country}{" "}
          </li>
          <li>{profile.location.workPreference}</li>
        </ul>
        <article className="leading-8 mt-4 text-neutral-500 dark:text-custom-gray">
          {profile.bio}
        </article>
      </section>

      {/* skills */}
      <section className="pt-8 border-t border-neutral-600">
        <TechStackIcons />
      </section>
    </div>
  );
}
