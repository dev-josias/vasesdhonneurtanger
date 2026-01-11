import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${t("title")} | ${tCommon("siteName")}`,
    description: t("introduction"),
  };
}

export default async function PolitiqueConfidentialite({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-linear-to-br from-primary to-primary-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-sm text-gray-300">
              {t("lastUpdated")}:{" "}
              {new Date().toLocaleDateString(
                locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : "es-ES"
              )}
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t("introduction")}
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">
                {t("dataCollection")}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t("dataCollectionDesc")}
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">
                {t("dataUse")}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t("dataUseDesc")}
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">
                {t("dataProtection")}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t("dataProtectionDesc")}
              </p>

              <h2 className="text-3xl font-bold text-primary mb-4 mt-12">
                {t("contactUs")}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t("contactUsDesc")}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
