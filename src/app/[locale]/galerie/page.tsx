import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageGallery from "@/components/ImageGallery";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${t("title")} | ${tCommon("siteName")}`,
    description: t("subtitle"),
  };
}

export default async function Galerie({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gallery");

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-linear-to-br from-primary to-primary-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Photos des cultes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              {t("worshipServices")}
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              {t("worshipServicesDesc")}
            </p>
            <ImageGallery
              images={Array.from({ length: 10 }, (_, i) => ({
                src: `/gallery/culte-${i + 1}.jpg`,
                alt: `Culte à Tanger ${i + 1}`,
              }))}
              columns={4}
            />
          </div>
        </section>

        {/* Activités avec Lumière des Nations */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Image
                src="/lumiere-des-nations.png"
                alt="Lumière des Nations"
                width={120}
                height={60}
                className="object-contain"
              />
              <div className="h-px flex-1 bg-linear-to-r from-[#DBC05E] to-transparent"></div>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              {t("activitiesWithLumiere")}
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              {t("activitiesWithLumiereDesc")}
            </p>
            <ImageGallery
              images={Array.from({ length: 11 }, (_, i) => ({
                src: `/gallery/activite-${i + 1}.jpg`,
                alt: `Activité sociale et de dons avec Lumière des Nations ${
                  i + 1
                }`,
              }))}
              columns={4}
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
