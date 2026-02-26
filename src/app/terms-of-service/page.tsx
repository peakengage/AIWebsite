"use client";

import { useTranslations } from "next-intl";

export default function TermsOfServicePage() {
  const t = useTranslations("TermsOfService");

  const singleContentSections = [
    "welcome",
    "terminology",
    "iframes",
    "reservationOfRights",
    "contentLiability",
    "disclaimer",
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

        <div className="prose prose-gray max-w-none space-y-8">
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

          {/* License - with list */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.license.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("sections.license.content")}
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <li key={i}>{t(`sections.license.prohibitedItems.${i}`)}</li>
              ))}
            </ul>
          </section>

          {/* Hyperlinking - 2 paragraphs */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.hyperlinking.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("sections.hyperlinking.content1")}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t("sections.hyperlinking.content2")}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">
              {t("sections.contact.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Email: <a href={`mailto:${t("sections.contact.email")}`} className="text-primary hover:text-primary-dark focus:outline-none focus:text-primary-dark">{t("sections.contact.email")}</a><br />
              Phone: {t("sections.contact.phone")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
