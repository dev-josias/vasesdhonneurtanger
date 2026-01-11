import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sermons" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${t("title")} | ${tCommon("siteName")}`,
    description: t("subtitle"),
  };
}

export default async function Predications({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sermons");

  const sermons = [
    {
      title: t("sermon1Title"),
      speaker: t("sermon1Speaker"),
      youtubeId: "-EZaSl176WA",
      category: t("sermon1Category"),
      type: "video",
    },
    {
      title: t("sermon2Title"),
      speaker: t("sermon2Speaker"),
      youtubeId: "B9Py6eWRyKY",
      category: t("sermon2Category"),
      type: "video",
    },
    {
      title: t("sermon3Title"),
      speaker: t("sermon3Speaker"),
      youtubeId: "R9Fca6UE3q0",
      category: t("sermon3Category"),
      type: "video",
    },
  ];

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
            <p className="text-xl text-gray-300 max-w-3xl">{t("subtitle")}</p>
          </div>
        </section>

        {/* Filtres et recherche */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DBC05E]"
              />
              <select className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DBC05E]">
                <option>{t("allCategories")}</option>
                <option>{t("teaching")}</option>
                <option>{t("testimony")}</option>
                <option>{t("faith")}</option>
                <option>{t("love")}</option>
                <option>{t("grace")}</option>
                <option>{t("hope")}</option>
              </select>
              <select className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DBC05E]">
                <option>{t("allTypes")}</option>
                <option>{t("video")}</option>
                <option>{t("audio")}</option>
              </select>
            </div>
          </div>
        </section>

        {/* Liste des prédications */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {sermons.map((sermon, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative bg-linear-to-br from-[#DBC05E] to-[#C9A648] h-48 flex items-center justify-center group cursor-pointer overflow-hidden">
                      <Image
                        src={`https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`}
                        alt={sermon.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center z-10">
                        <svg
                          className="w-16 h-16 text-white drop-shadow-lg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#DBC05E]/10 text-[#DBC05E] rounded-full text-sm font-semibold mb-2">
                      {sermon.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{sermon.speaker}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 w-full px-4 py-2 bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white rounded-full font-semibold hover:shadow-lg transition-all text-center"
                    >
                      {t("watch")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-linear-to-br from-primary to-primary-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">{t("subscribeChannel")}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t("subscribeChannelDesc")}
            </p>
            <a
              href="https://www.youtube.com/c/%C3%89gliseVasesdHonneur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              {t("subscribeYouTube")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
