"use client";

import { useEffect, useState } from "react";
import { PANITIA_FORM_URL } from "@/lib/site";

const POPUP_SESSION_KEY = "jebag-feb-panitia-popup-shown";

export default function PanitiaPopup() {
  const [showPanitiaPopup, setShowPanitiaPopup] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(POPUP_SESSION_KEY) === "1") return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(POPUP_SESSION_KEY, "1");
      setShowPanitiaPopup(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPanitiaPopup) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPanitiaPopup(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPanitiaPopup]);

  if (!showPanitiaPopup) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#170401]/45 px-4 py-5 backdrop-blur-md sm:px-6 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="panitia-popup-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setShowPanitiaPopup(false);
        }
      }}
    >
      <div className="panitia-popup group relative w-[82vw] max-w-[920px] overflow-hidden rounded-[24px] border border-white/35 bg-[#f5f1e8]/75 text-[#2a1616] shadow-[0_30px_100px_rgba(23,4,1,0.32),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl backdrop-saturate-150 animate-[popupIn_.45s_cubic-bezier(0.22,1,0.36,1)] sm:w-full sm:rounded-[30px]">
        
        {/* Background Overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(255,255,255,0.14)_42%,rgba(255,255,255,0.03)_70%,rgba(42,22,22,0.08))]" />

        <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-72 w-72 rounded-full bg-[#f5d98a]/25 blur-[90px]" />

        <div className="pointer-events-none absolute -bottom-28 -left-20 z-0 h-64 w-64 rounded-full bg-[#b58b3b]/10 blur-[90px]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setShowPanitiaPopup(false)}
          aria-label="Tutup popup"
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/40 text-base leading-none text-[#2a1616]/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:bg-white/70 hover:text-[#170401] sm:right-5 sm:top-5 sm:h-9 sm:w-9 sm:text-lg"
        >
          ×
        </button>

        {/* Main Content */}
        <div className="relative z-10 grid md:grid-cols-[0.9fr_1.1fr]">
          
          {/* Image */}
          <div className="relative m-2.5 h-[300px] overflow-hidden rounded-[18px] sm:m-4 sm:h-[320px] sm:rounded-[24px] md:m-5 md:h-[520px]">
            <img
              src="/Purnama.webp"
              alt="Panitia Pelaksana Jegeg Bagus FEB Unmas 2027"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170401]/45 via-transparent to-white/10" />
          </div>

          {/* Text Content */}
          <div className="flex min-h-0 flex-col justify-center px-4 pb-5 pt-4 text-center sm:px-9 sm:pb-9 sm:pt-8 md:px-10 md:py-12 lg:px-14">
            
            {/* Status */}
            <div className="mx-auto inline-flex w-fit items-center rounded-full border border-[#1b9b58]/15 bg-[#1b9b58]/10 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.14em] text-[#147443] sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.16em]">
              Pendaftaran diperpanjang!
            </div>

            {/* Title */}
            <h2
              id="panitia-popup-title"
              className="mt-3 font-serif text-[1.7rem] leading-[0.95] tracking-tight text-[#2a1616] sm:mt-4 sm:text-4xl md:text-[3.2rem]"
            >
              Kabar Baik!!
            </h2>

            {/* Registration Period */}
            <div className="mx-auto mt-4 w-full max-w-sm rounded-[16px] border border-black/[0.07] bg-white/30 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-xl sm:mt-7 sm:rounded-[20px] sm:px-6 sm:py-5">
              <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#9a742f] sm:text-[9px] sm:tracking-[0.24em]">
                Periode pendaftaran
              </p>

              <p className="mt-1 font-times text-base font-medium text-[#2a1616] sm:mt-1.5 sm:text-xl">
                12–26 September 2026
              </p>
            </div>

            {/* Registration Button */}
            <a
              href={PANITIA_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 inline-flex min-h-10 w-full max-w-sm items-center justify-center rounded-full bg-[#2a1616] px-5 text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(42,22,22,0.18)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] sm:mt-7 sm:min-h-12 sm:px-6 sm:text-sm"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}