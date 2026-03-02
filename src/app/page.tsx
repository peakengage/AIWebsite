"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DigitalPassesSection } from "@/components/sections/DigitalPassesSection";
import { CampaignsSection } from "@/components/sections/CampaignsSection";
import { DataPlatformSection } from "@/components/sections/DataPlatformSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ContactForm } from "@/components/ui/ContactForm";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Header onContactClick={openContact} />
      <main>
        <HeroSection />
        <DigitalPassesSection />
        <CampaignsSection />
        <DataPlatformSection />
        <AnalyticsSection />
        <SolutionsSection onContactClick={openContact} />
      </main>
      <Footer />
      <ContactForm isOpen={contactOpen} onClose={closeContact} />
    </>
  );
}
