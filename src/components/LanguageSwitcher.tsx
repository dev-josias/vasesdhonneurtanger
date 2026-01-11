"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeNames: Record<string, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Get pathname without locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    // Navigate to new locale - next-intl will handle the locale prefix
    // We need to use window.location to change the locale
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-[#DBC05E] transition-colors font-medium">
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
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="uppercase">{locale}</span>
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
              locale === loc
                ? "bg-[#DBC05E]/10 text-[#DBC05E] font-semibold"
                : "text-gray-700"
            }`}
          >
            {localeNames[loc]}
          </button>
        ))}
      </div>
    </div>
  );
}
