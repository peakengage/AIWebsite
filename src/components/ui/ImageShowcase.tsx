"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ImageItem } from "@/types";

interface ImageShowcaseProps {
  images: ImageItem[];
  layout: "phone-carousel" | "grid" | "tabs" | "single";
  className?: string;
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="rounded-[2rem] border-[6px] border-gray-800 bg-gray-800 shadow-xl overflow-hidden" role="img" aria-label="Phone mockup">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-10" />
        <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden" role="img" aria-label="Browser window">
      {/* Browser top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </div>
  );
}

function PhoneCarousel({ images, className }: { images: ImageItem[]; className?: string }) {
  return (
    <div className={cn("flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide", className)}>
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          variants={fadeInUp}
          className="flex-shrink-0 snap-center"
        >
          <PhoneFrame>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top"
              sizes="220px"
            />
          </PhoneFrame>
          {img.label && (
            <p className="text-center text-sm text-gray-500 mt-2">{img.label}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ImageGrid({ images, className }: { images: ImageItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {images.map((img) => (
        <motion.div key={img.src} variants={fadeInUp}>
          <BrowserFrame>
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </BrowserFrame>
          {img.label && (
            <p className="text-center text-sm text-gray-500 mt-2">{img.label}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function ImageTabs({ images, className }: { images: ImageItem[]; className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("", className)}>
      {/* Tab labels */}
      <div className="flex flex-wrap gap-2 mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30",
              i === activeIndex
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {img.label || `Tab ${i + 1}`}
          </button>
        ))}
      </div>
      {/* Active image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex].src}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <BrowserFrame>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={1200}
              height={750}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </BrowserFrame>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SingleImage({ images, className }: { images: ImageItem[]; className?: string }) {
  const img = images[0];
  if (!img) return null;

  return (
    <motion.div variants={scaleIn} className={className}>
      <BrowserFrame>
        <Image
          src={img.src}
          alt={img.alt}
          width={1200}
          height={750}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </BrowserFrame>
    </motion.div>
  );
}

export function ImageShowcase({ images, layout, className }: ImageShowcaseProps) {
  switch (layout) {
    case "phone-carousel":
      return <PhoneCarousel images={images} className={className} />;
    case "grid":
      return <ImageGrid images={images} className={className} />;
    case "tabs":
      return <ImageTabs images={images} className={className} />;
    case "single":
      return <SingleImage images={images} className={className} />;
    default:
      return null;
  }
}
