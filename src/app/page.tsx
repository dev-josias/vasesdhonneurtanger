import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import NewVisitorPopup from "@/components/NewVisitorPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-br from-[#184236] via-[#0f1f35] to-[#255948] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#DBC05E] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1E3A5F] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-[#DBC05E] to-[#C9A648] bg-clip-text text-transparent">
                Vases d&apos;Honneur
              </span>
              <br />
              <span className="text-white">Tanger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Partager l&apos;amour de Christ pour changer le monde
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Une communauté accueillante où chacun peut grandir dans la foi et
              découvrir son potentiel en Christ
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/evenements" variant="primary">
                Rejoindre le prochain culte
              </CTAButton>
              <CTAButton href="/a-propos" variant="secondary">
                Découvrir notre communauté
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Prochains Événements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#184236] mb-4">
                Prochains événements
              </h2>
              <p className="text-xl text-gray-600">
                Rejoignez-nous pour vivre des moments forts ensemble
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Événement 1 */}
              <div className="bg-linear-to-br from-[#184236] to-[#255948] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#DBC05E] rounded-full flex items-center justify-center font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Mardi</p>
                    <p className="font-semibold">Mardi de Prière</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Restauration</h3>
                <p className="text-gray-300 mb-4">
                  Temps de prière et de communion
                </p>
                <div className="flex items-center gap-2 text-[#DBC05E] font-semibold">
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
                  <span>21:00 - 22:00</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">Avec le GEM Tanger</p>
              </div>

              {/* Événement 2 */}
              <div className="bg-linear-to-br from-[#DBC05E] to-[#C9A648] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                    D
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Dimanche</p>
                    <p className="font-semibold">Culte Dominical</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Adoration & Parole</h3>
                <p className="text-white/90 mb-4">
                  Culte principal de la semaine
                </p>
                <div className="flex items-center gap-2 text-white font-semibold">
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
                  <span>11:00 - 13:00</span>
                </div>
                <p className="text-sm text-white/80 mt-2">
                  Suivi d&apos;un temps de communion
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <CTAButton href="/evenements" variant="primary">
                Voir tous les événements
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#184236] mb-4">
                Témoignages
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez comment Dieu transforme des vies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-full"></div>
                    <div>
                      <p className="font-semibold text-[#184236]">Témoin {i}</p>
                      <p className="text-sm text-gray-500">
                        Membre depuis 2023
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    &quot;Ma vie a été transformée depuis que j&apos;ai rejoint
                    cette communauté. L&apos;amour et l&apos;accueil que
                    j&apos;ai reçus m&apos;ont aidé à grandir dans ma foi.&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nouveaux Visiteurs */}
        <section className="py-20 bg-linear-to-br from-[#184236] to-[#255948] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nouveaux visiteurs
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Vous êtes le bienvenu ! Venez comme vous êtes. Nous sommes une
                communauté accueillante qui croit en la puissance de
                l&apos;amour de Christ pour transformer des vies.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#DBC05E] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="font-semibold mb-2">
                    Communauté accueillante
                  </h3>
                  <p className="text-sm text-gray-300">
                    Un environnement chaleureux où chacun trouve sa place
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#4ecdc4] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="font-semibold mb-2">Enseignement biblique</h3>
                  <p className="text-sm text-gray-300">
                    Des prédications qui transforment et inspirent
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#ff6b6b] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <h3 className="font-semibold mb-2">Amour inconditionnel</h3>
                  <p className="text-sm text-gray-300">
                    Venez comme vous êtes, vous serez accepté
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/contact?guide=nouveau-venu" variant="primary">
                  Recevoir le guide du nouveau venu
                </CTAButton>
                <CTAButton href="/a-propos" variant="secondary">
                  En savoir plus
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Section Assemblées au Maroc */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#184236] mb-4">
                Nos assemblées au Maroc
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vous êtes de passage à Rabat ou Casablanca ? Retrouvez nos
                autres assemblées Vases d&apos;Honneur dans ces villes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Assemblée Rabat */}
              <div className="bg-linear-to-br from-[#184236] to-[#255948] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">
                      Assemblée Royauté Divine
                    </h3>
                    <p className="text-gray-300 mb-4">Rabat</p>
                    <p className="text-white/90">
                      Rejoignez notre assemblée à Rabat pour vivre des moments
                      forts de communion et d&apos;adoration.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-[#DBC05E] rounded-xl flex items-center justify-center text-2xl font-bold text-[#184236] ml-4 flex-shrink-0">
                    R
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#DBC05E] font-semibold">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Rabat, Maroc</span>
                </div>
                <a
                  href="https://web.facebook.com/EgliseVasesdhonneurRabatAssembleeRoyauteeDivine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block w-full px-6 py-3 bg-[#DBC05E] text-[#184236] rounded-xl font-semibold text-center hover:bg-[#C9A648] transition-all"
                >
                  Découvrir l&apos;assemblée
                </a>
              </div>

              {/* Assemblée Casablanca */}
              <div className="bg-linear-to-br from-[#1E3A5F] to-[#0f1f35] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">
                      Assemblée Force Divine
                    </h3>
                    <p className="text-gray-300 mb-4">Casablanca</p>
                    <p className="text-white/90">
                      Connectez-vous avec notre assemblée à Casablanca pour
                      grandir dans la foi ensemble.
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-[#DBC05E] rounded-xl flex items-center justify-center text-2xl font-bold text-white ml-4 flex-shrink-0">
                    C
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#DBC05E] font-semibold">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Casablanca, Maroc</span>
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href="https://www.instagram.com/vasesdhonneurcasablanca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-[#DBC05E] text-white rounded-xl font-semibold text-center hover:bg-[#C9A648] transition-all"
                  >
                    Découvrir l&apos;assemblée
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs Stratégiques */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-[#ff6b6b] to-[#ff8e8e] text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Je veux donner ma vie à Christ
                </h3>
                <p className="mb-6 text-white/90">
                  Découvrez comment commencer votre relation avec Jésus
                </p>
                <CTAButton
                  href="/contact?action=donner-vie"
                  variant="secondary"
                  className="bg-white text-[#ff6b6b] hover:bg-gray-100"
                >
                  En savoir plus
                </CTAButton>
              </div>

              <div className="bg-linear-to-br from-[#4ecdc4] to-[#6eddd6] text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Recevoir une prière</h3>
                <p className="mb-6 text-white/90">
                  Nous prions pour vous et vos besoins
                </p>
                <CTAButton
                  href="/contact?action=priere"
                  variant="secondary"
                  className="bg-white text-[#4ecdc4] hover:bg-gray-100"
                >
                  Demander une prière
                </CTAButton>
              </div>

              <div className="bg-linear-to-br from-[#DBC05E] to-[#C9A648] text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Rejoindre un groupe</h3>
                <p className="mb-6 text-white/90">
                  Connectez-vous avec d&apos;autres croyants
                </p>
                <CTAButton
                  href="/contact?action=groupe"
                  variant="secondary"
                  className="bg-white text-[#DBC05E] hover:bg-gray-100"
                >
                  Trouver un groupe
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <NewVisitorPopup />
    </>
  );
}
