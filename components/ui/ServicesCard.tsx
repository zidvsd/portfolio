"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import FadeUpOnView from "@/components/FadeUpOnView"; // adjust path if needed

const services = ["Web", "UI", "Analytics", "Design", "Branding", "SEO"];

export default function ServicesCard() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Cycle highlight every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % services.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" w-full
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

        {/* 🔹 2-Column Highlight Grid */}
        <div className="w-1/2 grid grid-cols-2 gap-3 place-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service}
              animate={{
                opacity: highlightedIndex === index ? 1 : 0.4,
                scale: highlightedIndex === index ? 1.15 : 1,
                filter: highlightedIndex === index ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="
                text-md font-semibold py-6 px-4 rounded-xl 
                bg-neutral-200 dark:bg-neutral-700 text-center
                dark:text-neutral-100 text-neutral-800 select-none
              "
            >
              {service}
            </motion.div>
          ))}
        </div>
      </FadeUpOnView>
    </div>
  );
}
