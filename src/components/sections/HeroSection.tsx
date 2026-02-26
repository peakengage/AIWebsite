"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Bell,
  BarChart3,
  BrainCircuit,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FeatureGrid } from "@/components/ui/FeatureGrid";

interface HeroSectionProps {
  onContactClick: () => void;
}

const capabilityKeys = [
  { icon: Wallet, key: "digitalPasses" },
  { icon: Bell, key: "multiChannel" },
  { icon: BarChart3, key: "analytics" },
  { icon: BrainCircuit, key: "aiAssistants" },
];

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const t = useTranslations("Hero");

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex flex-col justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

      {/* Hero content */}
      <motion.div
        className="relative max-w-[1304px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={slideInLeft}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-heading">
              {t("tagline")}
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Capability cards */}
      <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
        <motion.div
          className="max-w-[1304px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureGrid columns={4}>
            {capabilityKeys.map((c) => (
              <FeatureCard
                key={c.key}
                icon={c.icon}
                title={t(`capabilities.${c.key}.title`)}
                description={t(`capabilities.${c.key}.description`)}
                variant="glass"
              />
            ))}
          </FeatureGrid>
        </motion.div>
      </div>
    </section>
  );
}
