import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Prédications | Vases d'Honneur Tanger",
  description:
    "Bibliothèque de sermons audio et vidéo. Écoutez et regardez nos prédications pour grandir dans la foi.",
};

export default function Predications() {
  const sermons = [
    {
      title: "La foi qui transforme",
      speaker: "Pasteur Principal",
      date: "15 Janvier 2024",
      duration: "45 min",
      type: "Vidéo",
      category: "Foi",
    },
    {
      title: "L'amour inconditionnel",
      speaker: "Pasteur Principal",
      date: "8 Janvier 2024",
      duration: "38 min",
      type: "Audio",
      category: "Amour",
    },
    {
      title: "Vivre dans la grâce",
      speaker: "Pasteur Principal",
      date: "1 Janvier 2024",
      duration: "42 min",
      type: "Vidéo",
      category: "Grâce",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-linear-to-br from-[#184236] to-[#255948] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Prédications
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Grandissez dans la foi en écoutant et regardant nos prédications
            </p>
          </div>
        </section>

        {/* Filtres et recherche */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Rechercher une prédication..."
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DBC05E]"
              />
              <select className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DBC05E]">
                <option>Toutes les catégories</option>
                <option>Foi</option>
                <option>Amour</option>
                <option>Grâce</option>
                <option>Espérance</option>
              </select>
              <select className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DBC05E]">
                <option>Tous les types</option>
                <option>Vidéo</option>
                <option>Audio</option>
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
                  <div className="bg-linear-to-br from-[#DBC05E] to-[#C9A648] h-48 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#DBC05E]/10 text-[#DBC05E] rounded-full text-sm font-semibold mb-2">
                      {sermon.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#184236] mb-2">
                      {sermon.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{sermon.speaker}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{sermon.date}</span>
                      <span>{sermon.duration}</span>
                    </div>
                    <button className="mt-4 w-full px-4 py-2 bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white rounded-full font-semibold hover:shadow-lg transition-all">
                      {sermon.type === "Vidéo" ? "Regarder" : "Écouter"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-linear-to-br from-[#184236] to-[#255948] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Abonnez-vous à notre chaîne
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ne manquez aucune prédication en vous abonnant à notre chaîne
              YouTube
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              S&apos;abonner sur YouTube
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
