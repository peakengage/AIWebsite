"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  Wallet,
  Bell,
  BarChart3,
  BrainCircuit,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { slideInLeft, slideInRight, staggerContainer, scaleIn, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

import morleysRewardImg from "@/../public/assets/images/AppleWallet/MorleysReward.PNG";
import dotzImg from "@/../public/assets/images/AppleWallet/Dotz.PNG";
import stampCardImg from "@/../public/assets/images/AppleWallet/StampCard.png";


const capabilityKeys = [
  { icon: Wallet, key: "digitalPasses", href: `#${SECTION_IDS.digitalPasses}` },
  { icon: Bell, key: "multiChannel", href: `#${SECTION_IDS.campaigns}` },
  { icon: BarChart3, key: "analytics", href: `#${SECTION_IDS.analytics}` },
  { icon: BrainCircuit, key: "aiAssistants", href: `#${SECTION_IDS.solutions}` },
];

const heroPhones = [
  {
    src: morleysRewardImg,
    altKey: "phoneAlt.morleysReward",
    position: "left",
  },
  {
    src: dotzImg,
    altKey: "phoneAlt.dotz",
    position: "center",
  },
  {
    src: stampCardImg,
    altKey: "phoneAlt.stampCard",
    position: "right",
  },
];

function HeroPhone({
  src,
  alt,
  className,
  size = "md",
  style,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}) {
  const frameSize = size === "sm"
    ? "rounded-[1.5rem] border-[5px]"
    : "rounded-[2rem] border-[6px]";
  const notchSize = size === "sm" ? "w-14 h-4 rounded-b-lg" : "w-16 h-4 rounded-b-xl";

  return (
    <div className={className} style={style}>
      <div
        className={`${frameSize} border-gray-800 bg-gray-800 shadow-2xl overflow-hidden`}
        role="img"
        aria-label={alt}
      >
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${notchSize} bg-gray-800 z-10`} />
        <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes={size === "sm" ? "180px" : "210px"}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex flex-col justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main hero content */}
      <motion.div
        className="relative max-w-[1304px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: text content */}
          <div className="text-center lg:text-left">
            <motion.h1
              variants={slideInLeft}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-heading"
            >
              {t("tagline")}
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t("subtitle")}
            </motion.p>

          </div>

          {/* Right column: phone mockup composition */}
          <motion.div
            variants={slideInRight}
            className="relative h-[340px] sm:h-[480px] lg:h-[520px] flex items-center justify-center"
          >
            {/* Left phone - rotated, hidden on mobile */}
            <motion.div variants={scaleIn} className="hidden sm:block absolute z-0 left-4 lg:left-8 top-12 sm:top-8">
              <HeroPhone
                src={heroPhones[0].src}
                alt={t(heroPhones[0].altKey)}
                className="w-[140px] sm:w-[160px] lg:w-[180px]"
                size="sm"
                style={{ transform: "rotate(-8deg)" }}
              />
            </motion.div>

            {/* Center phone - front, always visible */}
            <motion.div variants={scaleIn} className="relative z-10">
              <HeroPhone
                src={heroPhones[1].src}
                alt={t(heroPhones[1].altKey)}
                className="w-[180px] sm:w-[190px] lg:w-[210px]"
                size="md"
              />
            </motion.div>

            {/* Right phone - rotated, hidden on mobile */}
            <motion.div variants={scaleIn} className="hidden sm:block absolute z-0 right-4 lg:right-8 top-12 sm:top-8">
              <HeroPhone
                src={heroPhones[2].src}
                alt={t(heroPhones[2].altKey)}
                className="w-[140px] sm:w-[160px] lg:w-[180px]"
                size="sm"
                style={{ transform: "rotate(8deg)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Capability cards */}
      <div className="relative bg-white border-t border-gray-100">
        <motion.div
          className="max-w-[1304px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilityKeys.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.key}
                  href={c.href}
                  variants={fadeInUp}
                  className="group relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">
                    {t(`capabilities.${c.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`capabilities.${c.key}.description`)}
                  </p>
                </motion.a>
              );
            })}
          </div>
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Button
              variant="primary"
              size="lg"
              href="https://eu.peakengage.com/cd"
              target="_blank"
            >
              {t("addDemoCard")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
