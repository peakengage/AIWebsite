"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Mail,
  MessageSquare,
  MessageCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { SECTION_IDS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientBadge } from "@/components/ui/GradientBadge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { ImageShowcase } from "@/components/ui/ImageShowcase";

import campaignListPageImg from "@/../public/assets/images/Dashboard/Campaign/CampaignListPage.jpeg";
import audienceAndChannelTabImg from "@/../public/assets/images/Dashboard/Campaign/AudienceAndChannelTab.jpeg";
import contentTabImg from "@/../public/assets/images/Dashboard/Campaign/ContentTab.jpeg";
import scheduleRunTabImg from "@/../public/assets/images/Dashboard/Campaign/ScheduleRunTab.jpeg";
import emailEditorImg from "@/../public/assets/images/Dashboard/Campaign/EmailEditor.jpeg";

const channelKeys = [
  { icon: Bell, key: "pushNotifications" },
  { icon: Mail, key: "email" },
  { icon: MessageSquare, key: "sms" },
  { icon: MessageCircle, key: "whatsapp" },
];

const campaignStepImages = [
  {
    src: campaignListPageImg,
    alt: "Campaign list page showing all campaigns",
    label: "Campaign List",
  },
  {
    src: audienceAndChannelTabImg,
    alt: "Audience and channel selection for campaigns",
    label: "Audience & Channel",
  },
  {
    src: contentTabImg,
    alt: "Campaign content creation tab",
    label: "Content",
  },
  {
    src: scheduleRunTabImg,
    alt: "Campaign scheduling and run options",
    label: "Schedule & Run",
  },
  {
    src: emailEditorImg,
    alt: "Email template editor",
    label: "Email Editor",
  },
];

export function CampaignsSection() {
  const t = useTranslations("Campaigns");

  return (
    <SectionWrapper id={SECTION_IDS.campaigns} className="bg-gray-50">
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

      {/* Campaign Step-Through (Tabs) */}
      <motion.div variants={fadeInUp} className="mb-16">
        <ImageShowcase images={campaignStepImages} layout="tabs" />
      </motion.div>

      {/* Channel Cards */}
      <FeatureGrid columns={4}>
        {channelKeys.map((c) => (
          <FeatureCard
            key={c.key}
            icon={c.icon}
            title={t(`channels.${c.key}.title`)}
            description={t(`channels.${c.key}.description`)}
          />
        ))}
      </FeatureGrid>
    </SectionWrapper>
  );
}
