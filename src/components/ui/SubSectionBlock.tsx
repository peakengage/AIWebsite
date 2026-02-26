"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ImageShowcase } from "./ImageShowcase";
import type { ImageItem } from "@/types";

interface SubSectionBlockProps {
  title: string;
  description: string;
  bullets?: string[];
  images: ImageItem[];
  imageLayout: "phone-carousel" | "grid" | "tabs" | "single";
  reverse?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function SubSectionBlock({
  title,
  description,
  bullets,
  images,
  imageLayout,
  reverse = false,
  className,
  children,
}: SubSectionBlockProps) {
  return (
    <motion.div
      className={cn("grid lg:grid-cols-2 gap-12 items-start", className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Text */}
      <motion.div
        variants={reverse ? slideInRight : slideInLeft}
        className={cn(reverse && "lg:order-2")}
      >
        <h3 className="text-2xl font-bold font-heading mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="space-y-2 text-gray-600">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
        {children}
      </motion.div>

      {/* Images */}
      <motion.div
        variants={reverse ? slideInLeft : slideInRight}
        className={cn(reverse && "lg:order-1")}
      >
        <ImageShowcase images={images} layout={imageLayout} />
      </motion.div>
    </motion.div>
  );
}
