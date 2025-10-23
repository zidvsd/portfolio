"use client";
import aboutData from "@/data/about.json";
import { Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function WorkExperience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="flex items-center gap-2 dark:text-neutral-300">
        <Briefcase />
        <h1 className="text-2xl font-semibold">Work Experience</h1>
      </div>
      <h3 className="text-neutral-500 mt-1">My professional journey.</h3>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {aboutData.career.experiences.map((exp, index) => (
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
            <div className="relative size-16 sm:size-12 shrink-0">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                fill
                className="object-contain rounded-full"
              />
            </div>

            {/* Info */}
            <div className="space-y-1 flex-1">
              <p className="font-medium">{exp.role}</p>

              {/* Company + Location */}
              <div className="flex flex-row flex-wrap items-center gap-2 text-sm dark:text-neutral-500">
                <p>{exp.company}</p>
                <span className=" text-neutral-400">•</span>
                <p>{exp.location}</p>
              </div>

              {/* Dates */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 text-sm dark:text-neutral-500">
                <div className="flex items-center gap-2">
                  <p>{exp.start_date}</p>
                  <span className="text-neutral-400">-</span>
                  <p>{exp.end_date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-neutral-400">•</span>
                  <p>{exp.duration}</p>
                  <span className="block  text-neutral-400">•</span>
                  <p>{exp.work_mode}</p>
                </div>
              </div>

              {/* Toggle Button */}
              <button
                className="flex cursor-pointer mt-2 items-center gap-2 text-neutral-500 group text-sm hover:text-white transition-all"
                onClick={() => toggleOpen(index)}
              >
                <ChevronRight
                  className={`transition-transform size-4 ${
                    openIndex === index ? "rotate-90" : ""
                  } group-hover:text-white`}
                />
                {openIndex === index
                  ? "Hide responsibilities"
                  : "Show responsibilities"}
              </button>

              {/* Responsibilities */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    className="list-disc ml-6 mt-2 space-y-2 text-neutral-500 dark:text-neutral-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {exp.responsibilities.map((res, idx) => (
                      <motion.li
                        className="text-sm text-neutral-700 dark:text-neutral-400"
                        key={idx}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: idx * 0.05,
                        }}
                      >
                        {res}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
