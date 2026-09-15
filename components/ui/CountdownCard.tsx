"use client";

import Link from "next/link";
import type { CountdownValue } from "@/hooks/useCountdown";
import CountdownUnit from "@/components/ui/CountdownUnit";

export default function CountdownCard({
  title,
  dateLabel,
  countdown,
}: {
  title: string;
  dateLabel: string;
  countdown: CountdownValue;
}) {
  return (
    <div className="relative aspect-[4/5] min-w-[86vw] snap-center overflow-hidden rounded-[30px] border border-white/[0.12] bg-white/[0.075] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl sm:min-w-[500px] sm:p-6 md:min-w-0 md:p-6">

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#fff6df]/10 blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#f5b446]/[0.07] blur-[70px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#100201]/80 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col">

        <div className="flex items-start justify-between gap-3">

          <div>

            <p className="text-[8px] uppercase tracking-[0.25em] text-[#f5d98a]/65 sm:text-[9px]">
              Puncak Acara
            </p>

            <h3 className="mt-1.5 font-serif text-[1.45rem] leading-tight text-white sm:text-3xl">
              {title}
            </h3>

          </div>

          <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[7px] uppercase tracking-[0.1em] text-white/45 sm:px-3 sm:text-[9px]">
            {dateLabel}
          </div>

        </div>

        <div className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2">

          <CountdownUnit
            value={countdown.days}
            label="Hari"
          />

          <CountdownUnit
            value={countdown.hours}
            label="Jam"
          />

          <CountdownUnit
            value={countdown.minutes}
            label="Menit"
          />

          <CountdownUnit
            value={countdown.seconds}
            label="Detik"
          />

        </div>

        <div className="mt-auto border-t border-white/[0.08] pt-4">

          <Link
            href="/grand-final"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5d98a] hover:text-[#170401]"
          >
            Selengkapnya
          </Link>

          <div className="relative mt-4 overflow-hidden rounded-[20px] border border-white/10 bg-black/20 p-1 shadow-[0_20px_45px_rgba(0,0,0,0.22)]">

            <div className="relative overflow-hidden rounded-[16px]">

              <img
                src="/Grand Final.webp"
                alt="Grand Final Jegeg Bagus FEB Unmas 2027"
                className="h-[165px] w-full object-cover transition-transform duration-700 hover:scale-[1.025] sm:h-[180px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170401]/60 via-transparent to-transparent" />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
