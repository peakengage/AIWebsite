"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Activity,
  Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { ImageShowcase } from "@/components/ui/ImageShowcase";

const reportKeys = [
  { icon: Users, key: "loyaltyNonLoyalty" },
  { icon: TrendingUp, key: "sales" },
  { icon: Activity, key: "customerEngagement" },
  { icon: Mail, key: "emailSmsCampaigns" },
];

const analyticsScreenshots = [
  {
    src: "/assets/images/Dashboard/Analytics/CRMAnalytics-Cards.jpeg",
    alt: "CRM Analytics overview with key metric cards",
    label: "CRM Analytics",
  },
  {
    src: "/assets/images/Dashboard/Analytics/LoyaltyNonLoyalty.jpeg",
    alt: "Loyalty vs Non-Loyalty customer comparison report",
    label: "Loyalty vs Non-Loyalty",
  },
  {
    src: "/assets/images/Dashboard/Analytics/EmailReporting.jpeg",
    alt: "Email campaign reporting dashboard",
    label: "Email Reporting",
  },
  {
    src: "/assets/images/Dashboard/Analytics/SalesByHour.jpeg",
    alt: "Sales by hour analysis chart",
    label: "Sales by Hour",
  },
  {
    src: "/assets/images/Dashboard/Analytics/DailySales.jpeg",
    alt: "Daily sales trend report",
    label: "Daily Sales",
  },
  {
    src: "/assets/images/Dashboard/Analytics/SystemMetrics.jpeg",
    alt: "System performance metrics dashboard",
    label: "System Metrics",
  },
];

export function AnalyticsSection() {
  const t = useTranslations("Analytics");

  return (
    <SectionWrapper id={SECTION_IDS.analytics} className="bg-gray-50">
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

      {/* Dashboard Screenshots Grid */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
          {t("dashboardScreenshots")}
        </h3>
        <ImageShowcase images={analyticsScreenshots} layout="grid" />
      </motion.div>

      {/* Report Type Cards */}
      <FeatureGrid columns={4}>
        {reportKeys.map((r) => (
          <FeatureCard
            key={r.key}
            icon={r.icon}
            title={t(`reports.${r.key}.title`)}
            description={t(`reports.${r.key}.description`)}
          />
        ))}
      </FeatureGrid>
    </SectionWrapper>
  );
}
