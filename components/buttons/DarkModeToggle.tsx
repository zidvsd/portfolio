"use client";

import { useTheme } from "@/providers/providers";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${
        theme === "light"
          ? "bg-light-gray border-neutral-300"
          : "bg-dark-gray border-neutral-600"
      } border relative w-[92px] h-[42px] rounded-full flex items-center justify-between px-3  
      transition-colors duration-300 focus:outline-none`}
    >
      {/* Sun Icon */}
      <div
        className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
          theme === "light" ? "bg-gray" : "bg-transparent"
        }`}
      >
        <Sun
          className={`size-5 transition-colors duration-300 ${
            theme === "light" ? "text-dark-gray" : "text-light-gray"
          }`}
        />
      </div>

      {/* Moon Icon */}
      <div
        className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
          theme === "dark" ? "bg-neutral-600" : "bg-transparent"
        }`}
      >
        <Moon
          className={`size-5 transition-colors duration-300 ${
            theme === "dark" ? "text-foreground" : "text-off-gray"
          }`}
        />
      </div>
    </button>
  );
}
