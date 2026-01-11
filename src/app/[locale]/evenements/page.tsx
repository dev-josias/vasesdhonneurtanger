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
  const t = await getTranslations({ locale, namespace: "events" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${t("title")} | ${tCommon("siteName")}`,
    description: t("subtitle"),
  };
}

export default async function Evenements({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("events");
  const tHome = await getTranslations("home");
  const tCommon = await getTranslations("common");

  const events = [
    {
      title: tHome("sundayService"),
      day: tHome("sunday"),
      time: "11:00 - 13:00",
      description: tHome("mainService"),
      type: t("service"),
      color: "from-[#DBC05E] to-[#C9A648]",
    },
    {
      title: tHome("prayerTuesday"),
      day: tHome("tuesday"),
      time: "21:00 - 22:00",
      description: tHome("prayerTime"),
      type: t("prayer"),
      color: "from-primary to-primary-light",
    },
    {
      title: tHome("honorAcademyThursday"),
      day: tHome("thursday"),
      time: tHome("honorAcademyTime"),
      description: t("honorAcademyDescOnline"),
      type: t("training"),
      color: "from-[#ff6b6b] to-[#ff8e8e]",
      online: true,
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

        {/* Calendrier */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, i) => (
                <div
                  key={i}
                  className={`bg-linear-to-br ${event.color} text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-2">
                        {event.type}
                      </span>
                      <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                      <p className="text-white/90">{event.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-semibold">{event.day}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold">{event.time}</span>
                    </div>
                    {event.online && (
                      <div className="flex items-center gap-2 text-white/80">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-semibold">{tHome("online")}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Événements spéciaux */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              {t("specialEvents")}
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  É
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    {t("upcomingEvent")}
                  </h3>
                  <p className="text-gray-600">{t("dateToConfirm")}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{t("stayConnected")}</p>
              <CTAButton href="/contact" variant="primary">
                {t("subscribeNewsletter")}
              </CTAButton>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-linear-to-br from-primary to-primary-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">{t("questionEvents")}</h2>
            <p className="text-xl text-gray-300 mb-8">{t("contactForInfo")}</p>
            <CTAButton href="/contact" variant="primary">
              {tCommon("contact")}
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
