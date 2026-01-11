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
  const t = await getTranslations({ locale, namespace: "legal" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${t("title")} | ${tCommon("siteName")}`,
    description: t("title"),
  };
}

export default async function MentionsLegales({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const tCommon = await getTranslations("common");

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
          </div>
        </section>

        {/* Contenu */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {t("siteName")}
                  </h2>
                  <p className="text-gray-700">{t("address")}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {tCommon("contact")}
                  </h2>
                  <p className="text-gray-700">
                    <a
                      href={`mailto:${t("email")}`}
                      className="text-[#DBC05E] hover:underline"
                    >
                      {t("email")}
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <a
                      href={`tel:${t("phone").replace(/\s/g, "")}`}
                      className="text-[#DBC05E] hover:underline"
                    >
                      {t("phone")}
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {t("hosting")}
                  </h2>
                  <p className="text-gray-700">{t("hostingDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
