"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NewVisitorPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenNewVisitorPopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 30000); // 30 secondes

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNewVisitorPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-linear-to-r from-[#DBC05E] to-[#C9A648] rounded-full flex items-center justify-center mx-auto mb-4">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-[#184236] mb-2">
            Première visite ?
          </h3>
          <p className="text-gray-600 mb-6">
            Recevez notre guide du nouveau venu avec toutes les informations
            pour bien commencer votre parcours avec nous.
          </p>

          <div className="space-y-3">
            <Link
              href="/contact?guide=nouveau-venu"
              className="block w-full px-6 py-3 bg-linear-to-r from-[#DBC05E] to-[#C9A648] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              onClick={handleClose}
            >
              Recevoir le guide
            </Link>
            <button
              onClick={handleClose}
              className="block w-full px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
