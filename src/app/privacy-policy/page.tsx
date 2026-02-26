"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  const singleContentSections = [
    "overview",
    "piiCollection",
    "security",
    "externalLinks",
    "googleAdWords",
    "communications",
    "aggregatedStatistics",
    "ecommerce",
    "policyChanges",
  ] as const;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <a
          href="/"
          className="inline-block mb-8 text-primary hover:text-primary-dark font-medium transition-colors focus:outline-none focus:text-primary-dark"
        >
          &larr; {t("backToHome")}
        </a>

        <h1 className="text-4xl font-bold font-heading mb-8">{t("title")}</h1>

        <p className="text-gray-600 italic mb-8">
          &ldquo;{t("quote")}&rdquo;
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-gray-700">
            {t("companyInfo")}<br />
            {t("companyPhone")}
          </p>

          {singleContentSections.map((key) => (
            <section key={key}>
              <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t(`sections.${key}.content`)}
              </p>
            </section>
          ))}

          {/* Website Visitors - 2 paragraphs */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.websiteVisitors.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("sections.websiteVisitors.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t("sections.websiteVisitors.content2")}
            </p>
          </section>

          {/* Information Protection - 2 paragraphs */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.informationProtection.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("sections.informationProtection.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t("sections.informationProtection.content2")}
            </p>
          </section>

          {/* Cookies - 2 paragraphs */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.cookies.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("sections.cookies.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t("sections.cookies.content2")}
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.contactInformation.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Email: <a href={`mailto:${t("sections.contactInformation.email")}`} className="text-primary hover:text-primary-dark focus:outline-none focus:text-primary-dark">{t("sections.contactInformation.email")}</a><br />
              Phone: {t("sections.contactInformation.phone")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
