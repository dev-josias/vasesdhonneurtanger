import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Vases d'Honneur Tanger"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold bg-linear-to-r from-[#DBC05E] to-[#C9A648] bg-clip-text text-transparent">
              Vases d&apos;Honneur
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#DBC05E] transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className="text-gray-700 hover:text-[#DBC05E] transition-colors font-medium"
            >
              À propos
            </Link>
            <Link
              href="/evenements"
              className="text-gray-700 hover:text-[#DBC05E] transition-colors font-medium"
            >
              Événements
            </Link>
            <Link
              href="/predications"
              className="text-gray-700 hover:text-[#DBC05E] transition-colors font-medium"
            >
              Prédications
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#DBC05E] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/donner"
              className="px-4 py-2 bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Donner
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
