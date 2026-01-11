import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${t("title")} | ${tCommon("siteName")}`,
    description: t("subtitle"),
  };
}

export default async function APropos({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-linear-to-br from-primary to-[#255948] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">{t("subtitle")}</p>
          </div>
        </section>

        {/* Histoire */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  {t("history")}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t("historyDesc1")}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t("historyDesc2")}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {t("historyDesc3")}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t("historyDesc4")}
                </p>
              </div>
              <div className="bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-2xl h-96 flex items-center justify-center text-white text-6xl font-bold">
                Image
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {t("vision")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("visionSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-6 text-center">
              {t("values")}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
              {t("valuesIntro")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: t("excellence"),
                  desc: t("excellenceDesc"),
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("discipleship"),
                  desc: t("discipleshipDesc"),
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("prayer"),
                  desc: t("prayerDesc"),
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("christianLife"),
                  desc: t("christianLifeDesc"),
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("mission"),
                  desc: t("missionDesc"),
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("impact"),
                  desc: t("impactDesc"),
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((valeur, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-full flex items-center justify-center mb-4">
                    {valeur.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {valeur.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{valeur.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-linear-to-br from-primary to-primary-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">{t("joinUs")}</h2>
            <p className="text-xl text-gray-300 mb-8">{t("joinUsDesc")}</p>
            <CTAButton href="/contact" variant="primary">
              {t("contactUs")}
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
