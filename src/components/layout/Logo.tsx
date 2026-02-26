"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <a href="#" className={cn("flex items-center", className)}>
      <Image
        src="/assets/images/logos/peakengage-logo.png"
        alt="PeakEngage"
        width={180}
        height={40}
        className={cn(
          "h-8 w-auto",
          variant === "light" && "brightness-0 invert"
        )}
        priority
      />
    </a>
  );
}
