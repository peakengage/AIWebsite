"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  IdCard,
  Ticket,
  Sparkles,
  Share2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { ImageShowcase } from "@/components/ui/ImageShowcase";
import { Button } from "@/components/ui/Button";

const featureKeys = [
  { icon: CreditCard, key: "loyaltyCards" },
  { icon: IdCard, key: "membershipCards" },
  { icon: Ticket, key: "couponsOffers" },
  { icon: Sparkles, key: "dynamicPasses" },
  { icon: Share2, key: "distribution" },
];

const walletHomeScreens = [
  {
    src: "/assets/images/AppleWallet/AppleWalletHomeScreen.PNG",
    alt: "Apple Wallet Home Screen with digital passes",
    label: "Apple Wallet",
  },
  {
    src: "/assets/images/GoogleWallet/GoogleWalletHomeScreen.jpg",
    alt: "Google Wallet Home Screen with digital passes",
    label: "Google Wallet",
  },
];

const examplePasses = [
  {
    src: "/assets/images/AppleWallet/MorleysReward.PNG",
    alt: "Morleys Reward loyalty pass in Apple Wallet",
    label: "Morleys Reward",
  },
  {
    src: "/assets/images/AppleWallet/Dotz.PNG",
    alt: "Dotz loyalty pass in Apple Wallet",
    label: "Dotz",
  },
  {
    src: "/assets/images/GoogleWallet/MenarysRewardMe-in-GoogleWallet.jpg",
    alt: "Menarys RewardMe pass in Google Wallet",
    label: "Menarys (Google)",
  },
  {
    src: "/assets/images/GoogleWallet/Morleys-in-GoogleWallet.jpg",
    alt: "Morleys pass in Google Wallet",
    label: "Morleys (Google)",
  },
];

export function DigitalPassesSection() {
  const t = useTranslations("DigitalPasses");

  return (
    <SectionWrapper id={SECTION_IDS.digitalPasses}>
      {/* Header */}
      <div className="text-center mb-16">
        <GradientBadge>{t("badge")}</GradientBadge>
        <motion.h2
          variants={fadeInUp}
          className="mt-4 text-3xl sm:text-4xl font-bold font-heading"
        >
          {t("heading")}{" "}
          <span className="gradient-text">{t("headingHighlight")}</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          {t("description")}
        </motion.p>
      </div>

      {/* Wallet Home Screens - side by side phones */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
          {t("walletHomeScreens")}
        </h3>
        <div className="flex justify-center">
          <ImageShowcase
            images={walletHomeScreens}
            layout="phone-carousel"
            className="justify-center"
          />
        </div>
      </motion.div>

      {/* Example Passes Carousel */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
          {t("examplePasses")}
        </h3>
        <div className="flex justify-center">
          <ImageShowcase
            images={examplePasses}
            layout="phone-carousel"
            className="justify-center"
          />
        </div>
      </motion.div>

      {/* Feature Cards */}
      <FeatureGrid columns={3}>
        {featureKeys.map((f) => (
          <FeatureCard
            key={f.key}
            icon={f.icon}
            title={t(`features.${f.key}.title`)}
            description={t(`features.${f.key}.description`)}
          />
        ))}
      </FeatureGrid>

      {/* Demo Card CTA */}
      <motion.div variants={fadeInUp} className="mt-12 text-center">
        <Button variant="primary" size="lg">
          {t("addDemoCard")}
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
