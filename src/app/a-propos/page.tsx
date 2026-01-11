import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "À propos | Vases d'Honneur Tanger",
  description:
    "Découvrez notre histoire, notre vision, nos valeurs et notre équipe pastorale. Une communauté qui partage l'amour de Christ.",
};

export default function APropos() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-linear-to-br from-[#184236] to-[#255948] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">À propos</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Découvrez qui nous sommes, notre mission et notre vision pour
              Tanger et au-delà
            </p>
          </div>
        </section>

        {/* Histoire */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#184236] mb-6">
                  Notre histoire
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Vases d&apos;Honneur Tanger est née d&apos;une vision : créer
                  une communauté où chacun peut découvrir son potentiel en
                  Christ et être transformé par l&apos;amour de Dieu.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Depuis nos débuts, nous avons vu des vies transformées, des
                  familles restaurées et une communauté grandir dans la foi et
                  l&apos;amour fraternel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nous croyons que chaque personne est un vase d&apos;honneur,
                  créé pour porter la présence de Dieu et faire une différence
                  dans ce monde.
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
              <h2 className="text-4xl font-bold text-[#184236] mb-4">
                Notre vision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Partager l&apos;amour de Christ pour changer le monde
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-full flex items-center justify-center mb-6">
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
                </div>
                <h3 className="text-2xl font-bold text-[#184236] mb-4">
                  Communauté
                </h3>
                <p className="text-gray-700">
                  Bâtir une communauté unie, accueillante et transformatrice où
                  chacun trouve sa place.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-linear-to-br from-[#4ecdc4] to-[#6eddd6] rounded-full flex items-center justify-center mb-6">
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
                </div>
                <h3 className="text-2xl font-bold text-[#184236] mb-4">
                  Enseignement
                </h3>
                <p className="text-gray-700">
                  Proclamer la Parole de Dieu avec clarté et pertinence pour
                  transformer des vies.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-linear-to-br from-[#ff6b6b] to-[#ff8e8e] rounded-full flex items-center justify-center mb-6">
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
                </div>
                <h3 className="text-2xl font-bold text-[#184236] mb-4">
                  Amour
                </h3>
                <p className="text-gray-700">
                  Vivre et partager l&apos;amour inconditionnel de Christ avec
                  tous ceux qui nous entourent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#184236] mb-12 text-center">
              Nos valeurs
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Intégrité",
                  desc: "Vivre avec authenticité et transparence",
                },
                {
                  title: "Excellence",
                  desc: "Donner le meilleur de nous-mêmes dans tout ce que nous faisons",
                },
                {
                  title: "Service",
                  desc: "Servir notre communauté avec amour et dévouement",
                },
                {
                  title: "Unité",
                  desc: "Marcher ensemble dans la diversité et l&apos;harmonie",
                },
              ].map((valeur, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#DBC05E] to-[#C9A648] rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-[#184236] mb-2">
                      {valeur.title}
                    </h3>
                    <p className="text-gray-700">{valeur.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-linear-to-br from-[#184236] to-[#255948] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Rejoignez-nous</h2>
            <p className="text-xl text-gray-300 mb-8">
              Vous êtes le bienvenu ! Venez découvrir une communauté qui vous
              accueille comme vous êtes.
            </p>
            <CTAButton href="/contact" variant="primary">
              Nous contacter
            </CTAButton>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
