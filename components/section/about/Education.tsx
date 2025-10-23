"use client";
import aboutData from "@/data/about.json";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Education() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 dark:text-neutral-300">
        <GraduationCap />
        <h1 className="text-2xl font-semibold">Education</h1>
      </div>
      <h3 className="text-neutral-500 mt-1">My educational journey.</h3>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {aboutData.education.records.map((education, index) => (
          <div
            key={index}
            className="
              relative flex flex-col sm:flex-row items-start gap-4 p-6 
              border border-neutral-300 rounded-lg 
              dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 
              transition-all duration-300 
              dark:hover:border-neutral-600
              dark:hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.08)]
              dark:hover:z-10 shadow-md
            "
          >
            {/* Logo */}
            <div className="relative size-16 sm:size-12 shrink-0 rounded-full overflow-hidden">
              <Image
                src={education.logo}
                alt={`${education.school} logo`}
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>

            {/* Info */}
            <div className="space-y-1 flex-1">
              <p className="font-medium">{education.school}</p>

              {/* Degree + Field */}
              <div className="flex flex-row flex-wrap items-center gap-2 text-sm dark:text-neutral-500">
                <p>{education.degree}</p>
                <span className=" text-neutral-400">•</span>
                <p>{education.field}</p>
              </div>

              {/* Dates + Location */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 text-sm dark:text-neutral-500">
                <div className="flex items-center gap-2">
                  <p>{education.start_year}</p>
                  <span className="text-neutral-400">-</span>
                  <p>{education.end_year}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-neutral-400">•</span>
                  <p>{education.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
