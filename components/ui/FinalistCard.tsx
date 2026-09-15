"use client";

import Link from "next/link";

export default function FinalistCard() {
  return (
    <div className="group relative aspect-[4/5] min-w-[86vw] snap-center overflow-hidden rounded-[30px] border border-white/[0.14] bg-white/[0.055] shadow-[0_25px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl sm:min-w-[500px] md:min-w-0">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(245,217,138,0.14),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025)_45%,rgba(0,0,0,0.20))]" />

      <div className="pointer-events-none absolute left-1/2 top-[-15%] h-60 w-60 -translate-x-1/2 rounded-full bg-[#f5d98a]/10 blur-[90px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#100201] via-[#170401]/90 to-transparent" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">

        <div className="relative z-30">

          <div className="inline-flex items-center rounded-full border border-white/15 bg-[#008A6D]/50 px-3 py-1.5 backdrop-blur-xl">

            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FFDC0F] shadow-[0_0_8px_rgba(245,217,138,0.8)]" />

            <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-[#f5d98a] sm:text-[8px]">
              SEGERA HADIR
            </p>

          </div>

        </div>

        <div className="relative mx-auto mt-4 h-[41%] w-full max-w-[310px] shrink-0">

          {/* BAGUS */}

          <div className="absolute left-[4%] top-2 h-[92%] w-[46%] rotate-[-7deg] overflow-hidden rounded-[25px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:-translate-x-1">

            <div className="relative h-full w-full overflow-hidden rounded-[25px]">

              <img
                src="/Bagus.webp"
                alt="Bagus"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <p className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.2em] text-white/75">
                BAGUS ARIPTA
              </p>

            </div>
          </div>

          {/* JEGEG */}

          <div className="absolute right-[4%] top-7 h-[92%] w-[46%] rotate-[7deg] overflow-hidden rounded-[25px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:translate-x-1">

            <div className="relative h-full w-full overflow-hidden rounded-[25px]">

              <img
                src="/Jegeg.webp"
                alt="Jegeg"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <p className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.2em] text-white/75">
                JEGEG DIAN
              </p>

            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d98a]/10 blur-[70px]" />

        </div>

        <div className="relative z-30 mt-auto pt-3">

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5d98a]">
            01–12 Oktober 2026
          </p>

          <h3 className="mt-2 font-serif text-[1.45rem] leading-[1.05] text-white sm:text-3xl">
            Tunjukkan Potensi dan Persiapkan Dirimu!
          </h3>

          <p className="mt-2.5 max-w-[390px] text-[11px] leading-[1.45] text-white/55 sm:text-sm sm:leading-6">
            Terbuka bagi mahasiswa FEB Unmas Semester 1–3
          </p>

          <Link
            href="/pendaftaran-finalis"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[10px] font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5d98a] hover:text-[#170401] sm:text-xs"
          >
            Daftar Finalis
          </Link>

        </div>
      </div>
    </div>
  );
}
