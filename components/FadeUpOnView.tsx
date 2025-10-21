"use client";

import { motion } from "motion/react";

export default function FadeUpOnView({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
