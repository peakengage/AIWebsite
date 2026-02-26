"use client";

import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1304px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {t("brandDescription")}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("solutions")}</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {tNav(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("termsOfService")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("gdprCompliance")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("cookiePolicy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>{t("companyName")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
