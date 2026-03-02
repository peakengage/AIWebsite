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

import appleWalletHomeScreenImg from "@/../public/assets/images/AppleWallet/AppleWalletHomeScreen.PNG";
import googleWalletHomeScreenImg from "@/../public/assets/images/GoogleWallet/GoogleWalletHomeScreen.jpg";
import morleysRewardImg from "@/../public/assets/images/AppleWallet/MorleysReward.PNG";
import dotzImg from "@/../public/assets/images/AppleWallet/Dotz.PNG";
import menarysGoogleImg from "@/../public/assets/images/GoogleWallet/MenarysRewardMe-in-GoogleWallet.jpg";
import morleysGoogleImg from "@/../public/assets/images/GoogleWallet/Morleys-in-GoogleWallet.jpg";

const featureKeys = [
  { icon: CreditCard, key: "loyaltyCards" },
  { icon: IdCard, key: "membershipCards" },
  { icon: Ticket, key: "couponsOffers" },
  { icon: Sparkles, key: "dynamicPasses" },
  { icon: Share2, key: "distribution" },
];

const walletHomeScreens = [
  {
    src: appleWalletHomeScreenImg,
    alt: "Apple Wallet Home Screen with digital passes",
    label: "Apple Wallet",
  },
  {
    src: googleWalletHomeScreenImg,
    alt: "Google Wallet Home Screen with digital passes",
    label: "Google Wallet",
  },
];

const examplePasses = [
  {
    src: morleysRewardImg,
    alt: "Morleys Reward loyalty pass in Apple Wallet",
    label: "Morleys Reward",
  },
  {
    src: dotzImg,
    alt: "Dotz loyalty pass in Apple Wallet",
    label: "Dotz",
  },
  {
    src: menarysGoogleImg,
    alt: "Menarys RewardMe pass in Google Wallet",
    label: "Menarys (Google)",
  },
  {
    src: morleysGoogleImg,
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
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold font-heading"
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
        <h3 className="text-lg font-semibold font-heading text-gray-700 text-center mb-6">
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
        <h3 className="text-lg font-semibold font-heading text-gray-700 text-center mb-6">
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

    </SectionWrapper>
  );
}
