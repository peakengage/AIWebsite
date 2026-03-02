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

import crmAnalyticsCardsImg from "@/../public/assets/images/Dashboard/Analytics/CRMAnalytics-Cards.jpeg";
import loyaltyNonLoyaltyImg from "@/../public/assets/images/Dashboard/Analytics/LoyaltyNonLoyalty.jpeg";
import emailReportingImg from "@/../public/assets/images/Dashboard/Analytics/EmailReporting.jpeg";
import salesByHourImg from "@/../public/assets/images/Dashboard/Analytics/SalesByHour.jpeg";
import dailySalesImg from "@/../public/assets/images/Dashboard/Analytics/DailySales.jpeg";
import systemMetricsImg from "@/../public/assets/images/Dashboard/Analytics/SystemMetrics.jpeg";

const reportKeys = [
  { icon: Users, key: "loyaltyNonLoyalty" },
  { icon: TrendingUp, key: "sales" },
  { icon: Activity, key: "customerEngagement" },
  { icon: Mail, key: "emailSmsCampaigns" },
];

const analyticsScreenshots = [
  {
    src: crmAnalyticsCardsImg,
    alt: "CRM Analytics overview with key metric cards",
    label: "CRM Analytics",
  },
  {
    src: loyaltyNonLoyaltyImg,
    alt: "Loyalty vs Non-Loyalty customer comparison report",
    label: "Loyalty vs Non-Loyalty",
  },
  {
    src: emailReportingImg,
    alt: "Email campaign reporting dashboard",
    label: "Email Reporting",
  },
  {
    src: salesByHourImg,
    alt: "Sales by hour analysis chart",
    label: "Sales by Hour",
  },
  {
    src: dailySalesImg,
    alt: "Daily sales trend report",
    label: "Daily Sales",
  },
  {
    src: systemMetricsImg,
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

      {/* Dashboard Screenshots Grid */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h3 className="text-lg font-semibold font-heading text-gray-700 text-center mb-6">
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
