"use client";
import Image from "next/image";
import aboutData from "../../data/about.json";
import { Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="custom-container space-y-2 mt-8">
      {/* About Section */}
      <h1 className="text-2xl font-semibold">About</h1>
      <h3 className="text-neutral-500">A brief introduction to who I am.</h3>

      <article className="border-t w-full dark:border-t-neutral-500 space-y-4 pt-6 mt-6 dark:text-neutral-400">
        <p>{aboutData.about.introduction}</p>
        <p>{aboutData.about.summary}</p>
        <p>{aboutData.about.mindset}</p>
        <p>{aboutData.about.closing}</p>

        <p className="font-semibold">Best regards,</p>

        <Image
          src="/signature.png"
          alt="signature"
          width={160}
          height={40}
          className="object-contain"
        />
      </article>

      {/* Work Experience Section */}
      <section className="border-t w-full dark:border-t-neutral-500 space-y-2 pt-6 mt-6">
        <div className="flex items-center gap-2 dark:text-neutral-300">
          <Briefcase />
          <h1 className="text-2xl font-semibold">Work Experience</h1>
        </div>
        <h3 className="text-neutral-500">My professional journey.</h3>

        <div className="grid grid-cols-1 gap-4 mt-4">
          {aboutData.career.experiences.map((exp, index) => (
            <div
              key={index}
              className="
    relative flex items-start gap-4 p-6 border border-neutral-300 rounded-lg 
    dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 
    transition-all duration-300
    dark:hover:border-neutral-600
    dark:hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.08)]
    dark:hover:z-10
  "
            >
              <div className="relative size-12 rounded-full overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>

              <div className="space-y-1">
                <p className="font-medium">{exp.role}</p>

                <div className="flex flex-wrap items-center text-sm dark:text-neutral-500">
                  <p>{exp.company}</p>
                  <span className="mx-2 text-neutral-400">•</span>
                  <p>{exp.location}</p>
                </div>

                <div className="flex flex-wrap items-center text-sm dark:text-neutral-500">
                  <p>{exp.start_date}</p>
                  <span className="mx-2 text-neutral-400">•</span>
                  <p>{exp.end_date}</p>
                  <span className="mx-2 text-neutral-400">•</span>
                  <p>{exp.duration}</p>
                  <span className="mx-2 text-neutral-400">•</span>
                  <p>{exp.work_mode}</p>
                </div>

                <button
                  className="flex mt-2 items-center gap-2 text-neutral-500 group text-sm hover:text-white transition-all"
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

                {/* Motion list animation */}
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
                          className="text-sm"
                          key={idx}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: idx * 0.05, // staggered reveal
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
      </section>
    </section>
  );
}
