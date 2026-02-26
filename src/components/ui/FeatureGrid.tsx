"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ children, columns = 3, className }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <motion.div
      variants={staggerContainer}
      className={cn("grid grid-cols-1 gap-6", gridCols[columns], className)}
    >
      {children}
    </motion.div>
  );
}
