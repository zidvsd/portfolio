"use client";

import DarkModeToggle from "../buttons/DarkModeToggle";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, TextAlignJustify, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import navs from "@/data/navs.json";
import { usePathname } from "next/navigation";
import { easeOut, easeIn } from "motion";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const path = usePathname();

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.25, ease: easeIn },
    },
  };

  return (
    <div
      className={`sticky top-0 z-50 ${
        isToggle
          ? "border-none"
          : "border-b border-neutral-300 dark:border-neutral-700"
      } bg-background/80 backdrop-blur-lg py-3`}
    >
      <div className="custom-container flex items-center justify-between pt-4">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              scale: isToggle ? 1.1 : 1, // Grows when menu opens
              rotate: isToggle ? 2 : 0, // Slight rotation for style (optional)
              borderColor: isToggle ? "#22c55e" : "#737373", // Accent border color
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            className={`relative rounded-full border-2 overflow-hidden
      ${isToggle ? "size-20 md:size-28" : "size-16 md:size-20"}`}
          >
            <Image
              fill
              src="/images/profile-picture.png"
              alt="profile-pic"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            animate={{ x: isToggle ? 8 : 0, opacity: isToggle ? 1 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col leading-tight"
          >
            <Link href={"/"}>
              <span className="font-semibold text-2xl md:text-3xl text-foreground tracking-wider">
                Rashid
              </span>
              <span className="text-neutral-500 text-md md:text-xl flex items-center gap-1">
                Visda
                <BadgeCheck className="text-accent size-4" />
              </span>
            </Link>
          </motion.div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <motion.div
            whileTap={{ scale: 0.9, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isToggle ? (
              <X
                className="size-7 cursor-pointer"
                onClick={() => setIsToggle(false)}
              />
            ) : (
              <TextAlignJustify
                className="size-7 cursor-pointer"
                onClick={() => setIsToggle(true)}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated nav dropdown */}
      <AnimatePresence mode="wait">
        {isToggle && (
          <>
            {/* Border line separated from nav items */}
            <motion.div
              key="nav-border"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="custom-container mt-4 px-4 md:px-8"
            >
              <div className="border-t border-neutral-700"></div>
            </motion.div>

            {/* Animated nav links */}
            <motion.div
              key="nav-menu"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="custom-container flex flex-col items-start justify-center gap-2 pt-4 px-4 md:px-8"
            >
              {navs.map((nav) => {
                const iconsMap = Icons as unknown as Record<string, LucideIcon>;
                const LucideIcon = iconsMap[nav.icon as keyof typeof Icons];
                const isActive = path === nav.path;

                return (
                  <motion.div
                    key={nav.path}
                    variants={itemVariants}
                    className="w-full"
                  >
                    <Link
                      onClick={() => setIsToggle(false)}
                      href={nav.path}
                      className={`w-full group text-lg rounded-md flex items-center py-2 px-4 gap-3 
transition-all duration-300 hover:bg-gray 
${
  isActive
    ? "bg-gray"
    : "hover:scale-105 hover-utility hover:text-foreground text-neutral-500"
}`}
                    >
                      {LucideIcon && (
                        <LucideIcon className="size-5 group-hover:rotate-[-15deg] hover-utility" />
                      )}
                      <span>{nav.name}</span>
                      {isActive && (
                        <ArrowRight className="ml-auto size-4 text-off-gray" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
