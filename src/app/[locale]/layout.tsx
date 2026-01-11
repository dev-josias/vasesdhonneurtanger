import type { Metadata, Viewport } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = (key: string) => (messages as any)[key] || key;
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return {
    title: `${tCommon("siteName")} | ${
      locale === "fr"
        ? "Église Évangélique à Tanger"
        : locale === "en"
        ? "Evangelical Church in Tangier"
        : "Iglesia Evangélica en Tánger"
    }`,
    description: tCommon("slogan"),
    keywords:
      locale === "fr"
        ? "église évangélique Tanger, culte en ligne, communauté chrétienne Tanger, église Tanger, Vases d'Honneur"
        : locale === "en"
        ? "evangelical church Tangier, online service, Christian community Tangier, church Tangier, Vases d'Honneur"
        : "iglesia evangélica Tánger, culto en línea, comunidad cristiana Tánger, iglesia Tánger, Vases d'Honneur",
    authors: [{ name: "Vases d'Honneur Tanger" }],
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: `${tCommon("siteName")} | ${
        locale === "fr"
          ? "Église Évangélique"
          : locale === "en"
          ? "Evangelical Church"
          : "Iglesia Evangélica"
      }`,
      description: tCommon("slogan"),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "en" ? "en_US" : "es_ES",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vases d'Honneur Tanger",
    description:
      locale === "fr"
        ? "Église évangélique à Tanger, Maroc"
        : locale === "en"
        ? "Evangelical church in Tangier, Morocco"
        : "Iglesia evangélica en Tánger, Marruecos",
    url: "https://vasedhonneurtanger.org",
    logo: "https://vasedhonneurtanger.org/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-776-987-755",
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["French", "English", "Spanish", "Arabic"],
    },
    sameAs: [
      "https://web.facebook.com/EgliseVasesdhonneurRabatAssembleeRoyauteeDivine",
      "https://www.youtube.com/c/%C3%89gliseVasesdHonneur",
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${openSans.variable} bg-cream text-primary antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
