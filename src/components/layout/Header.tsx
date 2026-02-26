"use client";

import { useState, useEffect } from "react";
import { Menu, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/constants";
import { useScrollspy } from "@/hooks/useScrollspy";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("Nav");

  const sectionIds = Object.values(SECTION_IDS);
  const activeSection = useScrollspy(sectionIds, 80);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1304px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo variant={scrolled ? "dark" : "light"} />

            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? scrolled
                        ? "text-primary bg-primary/10"
                        : "text-white bg-white/20"
                      : scrolled
                        ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant={scrolled ? "primary" : "outline"}
                size="sm"
                onClick={onContactClick}
                className="hidden md:inline-flex"
              >
                {t("contactUs")}
              </Button>
              <a
                href="https://eu.peakengage.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-50 border border-gray-200"
                    : "text-white hover:bg-white/10 border border-white/30"
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                Login
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className={`p-2 rounded-lg md:hidden transition-colors ${
                  scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
                }`}
              >
                <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
