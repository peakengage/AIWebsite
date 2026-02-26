"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "glass";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "p-6 rounded-2xl transition-all duration-300 group",
        variant === "default" &&
          "bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20",
        variant === "glass" && "glass-card hover:bg-white/10",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          variant === "default" && "bg-primary/10",
          variant === "glass" && "bg-white/10"
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6",
            variant === "default" && "text-primary",
            variant === "glass" && "text-tertiary"
          )}
        />
      </div>
      <h3
        className={cn(
          "text-lg font-bold mb-2 font-heading",
          variant === "glass" && "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-sm leading-relaxed",
          variant === "default" && "text-gray-600",
          variant === "glass" && "text-gray-300"
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}
