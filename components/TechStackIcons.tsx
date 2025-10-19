"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function TechStackIcons() {
  const icons = [
    { src: "/icons/html.svg", alt: "HTML" },
    { src: "/icons/css.svg", alt: "CSS" },
    { src: "/icons/js.svg", alt: "JavaScript" },
    { src: "/icons/react.svg", alt: "React" },
    { src: "/icons/nextjs.svg", alt: "Next.js" },
    { src: "/icons/node.svg", alt: "Node.js" },
    { src: "/icons/express.svg", alt: "Express" },
    { src: "/icons/mongodb.svg", alt: "MongoDB" },
    { src: "/icons/postgresql.svg", alt: "PostgreSQL" },
    { src: "/icons/supabase.svg", alt: "Supabase" },
    { src: "/icons/vite.svg", alt: "Vite" },
    { src: "/icons/tailwind.svg", alt: "TailwindCSS" },
    { src: "/icons/motion.png", alt: "Framer Motion" },
    { src: "/icons/figma.svg", alt: "Figma" },
    { src: "/icons/git.svg", alt: "Git" },
    { src: "/icons/npm.svg", alt: "npm" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-8 shadow-xl backdrop-blur-sm
        border border-gray-300/30 dark:border-gray-800/30
        bg-gradient-to-br from-white/60 to-gray-100/40 
        dark:from-[#0c0c0c]/60 dark:to-[#1a1a1a]/40 "
    >
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <span className="text-green-500">&lt;/&gt;</span> Skills
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mt-1 mb-6">
        My professional skills.
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="transition-all  duration-200 hover:drop-shadow-[0_0_8px_rgba(0,255,100,0.3)] cursor-pointer"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={48}
              height={48}
              className="mx-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
