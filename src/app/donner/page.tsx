"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTAButton from "@/components/CTAButton";

export default function Donner() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-linear-to-br from-[#184236] to-[#255948] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Donner</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Votre générosité permet de faire avancer l&apos;œuvre de Dieu et
              de bénir notre communauté
            </p>
          </div>
        </section>

        {/* Messages de Vie */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-2xl p-8 md:p-12 text-white mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Organisation Messages de Vie
                </h2>
                <p className="text-lg mb-6 text-center text-white/90">
                  Le Ministère Messages de Vie, dirigé par le Pasteur Mohammed
                  Sanogo, œuvre pour répandre l&apos;évangile à travers les
                  nations.
                </p>
                <div className="text-center">
                  <a
                    href="https://messagesdevie.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-white text-[#DBC05E] rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Visiter Messages de Vie
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#faf9f6] rounded-2xl p-6 border-2 border-[#DBC05E]/20">
                  <h3 className="text-2xl font-bold text-[#184236] mb-4">
                    Campagne Jésus Sauve
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Participez à la campagne d&apos;évangélisation &quot;Jésus
                    Sauve&quot; qui touche des millions de vies à travers le
                    monde.
                  </p>
                  <a
                    href="https://messagesdevie.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DBC05E] font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    En savoir plus
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-[#faf9f6] rounded-2xl p-6 border-2 border-[#4ecdc4]/20">
                  <h3 className="text-2xl font-bold text-[#184236] mb-4">
                    Campagne IN du Pasteur Mohammed Sanogo
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Soutenez les campagnes Impact Nation (IN) du Pasteur
                    Mohammed Sanogo pour transformer des nations.
                  </p>
                  <a
                    href="https://messagesdevie.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4ecdc4] font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    En savoir plus
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dons pour Tanger */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#184236] mb-6 text-center">
                Faire un don pour Vases d&apos;Honneur Tanger
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Pour soutenir nos activités locales à Tanger, contactez-nous
                directement par téléphone.
              </p>

              <div className="bg-linear-to-br from-[#184236] to-[#255948] rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#DBC05E] rounded-full flex items-center justify-center">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Contactez-nous</p>
                    <a
                      href="tel:+212776987755"
                      className="text-3xl font-bold text-white hover:text-[#DBC05E] transition-colors"
                    >
                      +212 776 987 755
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Appelez-nous pour organiser votre don ou pour toute question
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lien vers Messages de Vie */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#184236] mb-6">
              Pour les dons internationaux
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Pour soutenir les campagnes internationales du Ministère Messages
              de Vie, visitez leur site officiel.
            </p>
            <CTAButton
              href="https://messagesdevie.org/"
              variant="primary"
              className="inline-block"
            >
              Faire un don sur Messages de Vie
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
