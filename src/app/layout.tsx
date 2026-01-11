import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Vases d'Honneur Tanger | Église Évangélique à Tanger",
  description:
    "Communauté chrétienne accueillante à Tanger. Rejoignez-nous pour partager l'amour de Christ et changer le monde. Cultes, prières, groupes de vie.",
  keywords:
    "église évangélique Tanger, culte en ligne, communauté chrétienne Tanger, église Tanger, Vases d'Honneur",
  authors: [{ name: "Vases d'Honneur Tanger" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Vases d'Honneur Tanger | Église Évangélique",
    description: "Partager l'amour de Christ pour changer le monde",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vases d'Honneur Tanger",
    description: "Église évangélique à Tanger, Maroc",
    url: "https://vasedhonneurtanger.org",
    logo: "https://vasedhonneurtanger.org/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-776-987-755",
      contactType: "customer service",
      areaServed: "MA",
      availableLanguage: ["French", "Arabic"],
    },
    sameAs: [
      "https://web.facebook.com/EgliseVasesdhonneurRabatAssembleeRoyauteeDivine",
      "https://www.youtube.com/c/%C3%89gliseVasesdHonneur",
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${openSans.variable} bg-cream text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
