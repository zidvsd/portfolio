"use client";

import icons from "@/data/icons.json";
import Image from "next/image";

export default function NewsTicker() {
  return (
    <div className="overflow-hidden space-y-6 py-4 ">
      {/* RIGHT → LEFT */}
      <div className="ticker-container flex items-center">
        <div className="ticker-track animate-scroll flex items-center gap-8">
          {[...icons, ...icons].map((icon, i) => (
            <div
              key={i}
              className="ticker-item flex items-center gap-3 border border-neutral-300 dark:border-neutral-600 rounded-full px-5 py-2 min-w-fit"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {icon.alt}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* LEFT → RIGHT */}
      <div className="ticker-container flex items-center">
        <div className="ticker-track animate-scroll-reverse flex items-center gap-8">
          {[...icons, ...icons].map((icon, i) => (
            <div
              key={i}
              className="ticker-item flex items-center gap-3 border border-neutral-300 dark:border-neutral-600 rounded-full px-5 py-2 min-w-fit"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {icon.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
