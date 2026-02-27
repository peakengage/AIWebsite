"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Receipt,
  ShoppingBag,
  Monitor,
  Cloud,
  Rocket,
  Settings,
  LayoutDashboard,
  ArrowDownUp,
  ShieldCheck,
  Globe,
  CreditCard,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SubSectionBlock } from "@/components/ui/SubSectionBlock";
import { ImageShowcase } from "@/components/ui/ImageShowcase";
import { Button } from "@/components/ui/Button";

import posLoyaltyAppImg from "@/../public/assets/images/PeakPOSApp/pos-loyalty-app.png";
import saleNotificationImg from "@/../public/assets/images/AppleWallet/SaleNotification.PNG";
import salesNotificationPassDetailImg from "@/../public/assets/images/AppleWallet/SalesNotificationOnPassDetail.PNG";
import saleReceiptsImg from "@/../public/assets/images/AppleWallet/SaleReceipts.PNG";
import registerOrGetCardImg from "@/../public/assets/images/Dashboard/OtherPages/RegisterOrGetYourCard.PNG";
import selfRegisterImg from "@/../public/assets/images/Dashboard/OtherPages/Self-Register.PNG";
import existingMemberGetCardImg from "@/../public/assets/images/Dashboard/OtherPages/ExistingMemberGetCard.PNG";
import futuraLoyaltyImg from "@/../public/assets/images/Dashboard/Analytics/FuturaLoyalty.jpeg";

interface SolutionsSectionProps {
  onContactClick: () => void;
}

const posAppImages = [
  {
    src: posLoyaltyAppImg,
    alt: "Peak Loyalty POS mobile app",
    label: "Peak Loyalty POS App",
  },
];

const emailReceiptImages = [
  {
    src: saleNotificationImg,
    alt: "Sale notification on customer device",
    label: "Sale Notification",
  },
  {
    src: salesNotificationPassDetailImg,
    alt: "Sale notification on pass detail screen",
    label: "Pass Detail",
  },
  {
    src: saleReceiptsImg,
    alt: "Digital sale receipts",
    label: "Sale Receipts",
  },
];

const crmImages = [
  {
    src: registerOrGetCardImg,
    alt: "Register or get your card page",
    label: "Registration",
  },
  {
    src: selfRegisterImg,
    alt: "Customer self-registration page",
    label: "Self-Register",
  },
  {
    src: existingMemberGetCardImg,
    alt: "Existing member get card page",
    label: "Get Card",
  },
];

const loyaltyDashboardImage = [
  {
    src: futuraLoyaltyImg,
    alt: "Futura loyalty analytics dashboard",
    label: "Loyalty Dashboard",
  },
];

const saasFeatures = [
  { icon: Rocket, key: "easy" },
  { icon: Settings, key: "configurable" },
  { icon: LayoutDashboard, key: "dashboard" },
  { icon: ArrowDownUp, key: "importExport" },
  { icon: ShieldCheck, key: "gdpr" },
  { icon: Globe, key: "multilingual" },
  { icon: CreditCard, key: "subscriptions" },
];

export function SolutionsSection({ onContactClick }: SolutionsSectionProps) {
  const t = useTranslations("Solutions");

  const aiBullets = [
    t("aiAssistants.bullets.0"),
    t("aiAssistants.bullets.1"),
    t("aiAssistants.bullets.2"),
    t("aiAssistants.bullets.3"),
    t("aiAssistants.bullets.4"),
    t("aiAssistants.bullets.5"),
    t("aiAssistants.bullets.6"),
  ];

  const receiptBullets = [
    t("emailReceipts.bullets.0"),
    t("emailReceipts.bullets.1"),
    t("emailReceipts.bullets.2"),
  ];

  const crmBullets = [
    t("crmForRetail.bullets.0"),
    t("crmForRetail.bullets.1"),
    t("crmForRetail.bullets.2"),
    t("crmForRetail.bullets.3"),
    t("crmForRetail.bullets.4"),
  ];

  const posBullets = [
    t("posIntegration.bullets.0"),
    t("posIntegration.bullets.1"),
    t("posIntegration.bullets.2"),
    t("posIntegration.bullets.3"),
  ];

  const saasBullets = [
    t("saasPlatform.bullets.0"),
    t("saasPlatform.bullets.1"),
    t("saasPlatform.bullets.2"),
    t("saasPlatform.bullets.3"),
    t("saasPlatform.bullets.4"),
    t("saasPlatform.bullets.5"),
    t("saasPlatform.bullets.6"),
  ];

  return (
    <SectionWrapper id={SECTION_IDS.solutions} className="bg-gray-900">
      {/* Header */}
      <div className="text-center mb-16">
        <GradientBadge>
          <span className="text-tertiary">{t("badge")}</span>
        </GradientBadge>
        <motion.h2
          variants={fadeInUp}
          className="mt-4 text-3xl sm:text-4xl font-bold font-heading text-white"
        >
          {t("heading")}{" "}
          <span className="gradient-text">{t("headingHighlight")}</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          {t("description")}
        </motion.p>
      </div>

      {/* Sub-section 1: AI Assistants */}
      <motion.div
        className="mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <BrainCircuit className="w-8 h-8 text-tertiary" />
              <h3 className="text-2xl font-bold font-heading text-white">
                {t("aiAssistants.title")}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t("aiAssistants.description")}
            </p>
            <ul className="space-y-2 text-gray-400 mb-6">
              {aiBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">{t("aiAssistants.appStoreNote")}</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ImageShowcase images={posAppImages} layout="phone-carousel" className="justify-center" />
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-20" />

      {/* Sub-section 2: Email Receipts */}
      <motion.div
        className="mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp} className="lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Receipt className="w-8 h-8 text-tertiary" />
              <h3 className="text-2xl font-bold font-heading text-white">
                {t("emailReceipts.title")}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t("emailReceipts.description")}
            </p>
            <ul className="space-y-2 text-gray-400">
              {receiptBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="lg:order-1">
            <ImageShowcase images={emailReceiptImages} layout="phone-carousel" className="justify-center" />
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-20" />

      {/* Sub-section 3: CRM for Retail */}
      <motion.div
        className="mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-tertiary" />
              <h3 className="text-2xl font-bold font-heading text-white">
                {t("crmForRetail.title")}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t("crmForRetail.description")}
            </p>
            <ul className="space-y-2 text-gray-400">
              {crmBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-6">
            <ImageShowcase images={crmImages} layout="phone-carousel" className="justify-center" />
            <ImageShowcase images={loyaltyDashboardImage} layout="single" />
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-20" />

      {/* Sub-section 4: POS Integration */}
      <motion.div
        className="mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="w-8 h-8 text-tertiary" />
          <h3 className="text-2xl font-bold font-heading text-white">
            {t("posIntegration.title")}
          </h3>
        </div>
        <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-4 max-w-3xl">
          {t("posIntegration.description")}
        </motion.p>
        <motion.ul variants={fadeInUp} className="space-y-2 text-gray-400 mb-4">
          {posBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-20" />

      {/* Sub-section 5: SaaS Platform */}
      <motion.div
        className="mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Cloud className="w-8 h-8 text-tertiary" />
          <h3 className="text-2xl font-bold font-heading text-white">
            {t("saasPlatform.title")}
          </h3>
        </div>
        <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
          {t("saasPlatform.description")}
        </motion.p>
        <motion.ul variants={fadeInUp} className="grid sm:grid-cols-2 gap-3 text-gray-400">
          {saasBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center pt-8 border-t border-gray-800"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
          {t("cta.heading")}
        </h3>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {t("cta.description")}
        </p>
        <Button size="lg" onClick={onContactClick}>
          {t("cta.button")}
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
