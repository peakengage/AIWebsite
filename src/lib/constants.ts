export const SITE_CONFIG = {
  name: "PeakEngage",
  tagline:
    "Mobile First Customer Engagement and Analytics Platform for Businesses",
  description:
    "PeakEngage is a mobile-first customer engagement and analytics platform — digital passes in Apple and Google Wallet, multi-channel campaigns, data platform, analytics, and AI assistants.",
  url: "https://peakengage.com",
  email: "info@peakengage.com",
};

export const SECTION_IDS = {
  hero: "hero",
  digitalPasses: "digital-passes",
  campaigns: "campaigns-communications",
  dataPlatform: "data-platform",
  analytics: "analytics-reporting",
  solutions: "solutions",
} as const;

export const NAV_ITEMS = [
  { labelKey: "digitalPasses", href: `#${SECTION_IDS.digitalPasses}` },
  { labelKey: "campaigns", href: `#${SECTION_IDS.campaigns}` },
  { labelKey: "dataPlatform", href: `#${SECTION_IDS.dataPlatform}` },
  { labelKey: "analytics", href: `#${SECTION_IDS.analytics}` },
  { labelKey: "solutions", href: `#${SECTION_IDS.solutions}` },
];
