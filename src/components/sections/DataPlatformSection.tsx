"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  Package,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SubSectionBlock } from "@/components/ui/SubSectionBlock";
import { ImageShowcase } from "@/components/ui/ImageShowcase";

import profileTabImg from "@/../public/assets/images/Dashboard/Customers/ProfileTab.jpeg";
import notificationTabImg from "@/../public/assets/images/Dashboard/Customers/NotificationTab.jpeg";
import emailTabImg from "@/../public/assets/images/Dashboard/Customers/EmailTab.jpeg";
import smsTabImg from "@/../public/assets/images/Dashboard/Customers/SMSTab.jpeg";
import transactionsTabImg from "@/../public/assets/images/Dashboard/Customers/TransactionsTab.jpeg";
import transactionDetailsImg from "@/../public/assets/images/Dashboard/Customers/TransactionDetails.jpeg";
import engagementTabImg from "@/../public/assets/images/Dashboard/Customers/EngagementTab.jpeg";
import cardsTabImg from "@/../public/assets/images/Dashboard/Customers/CardsTab.jpeg";
import audienceBuilder1Img from "@/../public/assets/images/Dashboard/Audience/Audiencebuilder1.jpeg";
import audienceBuilder2Img from "@/../public/assets/images/Dashboard/Audience/Audiencebuilder2.jpeg";
import audienceBuilder3Img from "@/../public/assets/images/Dashboard/Audience/Audiencebuilder3.jpeg";
import menarysPromotionPageImg from "@/../public/assets/images/Dashboard/Promotion/MenarysPromotionPage.jpeg";
import menarysPromotionEditImg from "@/../public/assets/images/Dashboard/Promotion/MenarysPromotionEdit.jpeg";

const customerProfileTabs = [
  {
    src: profileTabImg,
    alt: "Customer profile tab",
    label: "Profile",
  },
  {
    src: notificationTabImg,
    alt: "Customer notifications tab",
    label: "Notifications",
  },
  {
    src: emailTabImg,
    alt: "Customer email tab",
    label: "Email",
  },
  {
    src: smsTabImg,
    alt: "Customer SMS tab",
    label: "SMS",
  },
  {
    src: transactionsTabImg,
    alt: "Customer transactions tab",
    label: "Transactions",
  },
  {
    src: transactionDetailsImg,
    alt: "Transaction detail view",
    label: "Transaction Details",
  },
  {
    src: engagementTabImg,
    alt: "Customer engagement tab",
    label: "Engagement",
  },
  {
    src: cardsTabImg,
    alt: "Customer cards tab",
    label: "Cards",
  },
];

const audienceBuilderImages = [
  {
    src: audienceBuilder1Img,
    alt: "Audience builder - filter selection",
    label: "Filter Selection",
  },
  {
    src: audienceBuilder2Img,
    alt: "Audience builder - segment criteria",
    label: "Segment Criteria",
  },
  {
    src: audienceBuilder3Img,
    alt: "Audience builder - results preview",
    label: "Results Preview",
  },
];

const promotionImages = [
  {
    src: menarysPromotionPageImg,
    alt: "Promotions management page",
    label: "Promotions List",
  },
  {
    src: menarysPromotionEditImg,
    alt: "Promotion editing interface",
    label: "Edit Promotion",
  },
];

const additionalFeatureKeys = [
  { icon: ArrowLeftRight, key: "transactions" },
  { icon: Package, key: "inventory" },
  { icon: Star, key: "loyalty" },
];

export function DataPlatformSection() {
  const t = useTranslations("DataPlatform");

  const customerProfileBullets = [
    t("customerProfile.bullets.0"),
    t("customerProfile.bullets.1"),
    t("customerProfile.bullets.2"),
    t("customerProfile.bullets.3"),
  ];

  const segmentationBullets = [
    t("segmentation.bullets.0"),
    t("segmentation.bullets.1"),
    t("segmentation.bullets.2"),
    t("segmentation.bullets.3"),
  ];

  const schemesBullets = [
    t("schemes.bullets.0"),
    t("schemes.bullets.1"),
    t("schemes.bullets.2"),
  ];

  return (
    <SectionWrapper id={SECTION_IDS.dataPlatform}>
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

      {/* Sub-section 1: Customer Profile with Tabbed Images */}
      <div className="mb-20">
        <motion.h3
          variants={fadeInUp}
          className="text-2xl font-bold font-heading mb-4"
        >
          {t("customerProfile.title")}
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="text-gray-600 leading-relaxed mb-4 max-w-3xl"
        >
          {t("customerProfile.description")}
        </motion.p>
        <motion.ul variants={fadeInUp} className="space-y-2 text-gray-600 mb-8">
          {customerProfileBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </motion.ul>
        <motion.div variants={fadeInUp}>
          <ImageShowcase images={customerProfileTabs} layout="tabs" />
        </motion.div>
      </div>

      {/* Sub-section 2: Segmentation & Audience Builder */}
      <div className="mb-20">
        <SubSectionBlock
          title={t("segmentation.title")}
          description={t("segmentation.description")}
          bullets={segmentationBullets}
          images={audienceBuilderImages}
          imageLayout="grid"
          reverse
        />
      </div>

      {/* Sub-section 3: Schemes */}
      <div className="mb-16">
        <SubSectionBlock
          title={t("schemes.title")}
          description={t("schemes.description")}
          bullets={schemesBullets}
          images={promotionImages}
          imageLayout="grid"
        />
      </div>

      {/* Additional Feature Cards */}
      <FeatureGrid columns={3}>
        {additionalFeatureKeys.map((f) => (
          <FeatureCard
            key={f.key}
            icon={f.icon}
            title={t(`additionalFeatures.${f.key}.title`)}
            description={t(`additionalFeatures.${f.key}.description`)}
          />
        ))}
      </FeatureGrid>
    </SectionWrapper>
  );
}
