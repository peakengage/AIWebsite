"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface GradientBadgeProps {
  children: React.ReactNode;
}

export function GradientBadge({ children }: GradientBadgeProps) {
  return (
    <motion.span
      variants={fadeIn}
      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20"
    >
      {children}
    </motion.span>
  );
}
