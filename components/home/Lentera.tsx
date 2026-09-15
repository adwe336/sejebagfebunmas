"use client";

import { useEffect, useRef, useState } from "react";
import SimpleConcept from "@/components/ui/SimpleConcept";
import TimelineItem from "@/components/ui/TimelineItem";
import MobileTimelineItem from "@/components/ui/MobileTimelineItem";

export default function Lentera() {
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = timelineRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========================================================= */}
      {/* LENTERA + ALUR */}
      {/* SATU SECTION — BACKGROUND MENYATU */}
      {/* ========================================================= */}

      <section
        id="lentera"
        className="relative overflow-hidden bg-[#170401] text-white"
      >
        {/* ======================================================= */}
        {/* LIGHT BACKGROUND */}
        {/* ======================================================= */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(245,217,138,0.18),transparent_24%),radial-gradient(circle_at_15%_42%,rgba(245,217,138,0.045),transparent_23%),radial-gradient(circle_at_85%_62%,rgba(245,217,138,0.045),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(255,238,188,0.035),transparent_35%),linear-gradient(135deg,#170401_0%,#25100b_50%,#170401_100%)]" />

        {/* ======================================================= */}
        {/* SMALL LIGHTS */}
        {/* ======================================================= */}

        <div className="pointer-events-none absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-[#f5d98a]/30 shadow-[0_0_25px_rgba(245,217,138,0.55)] blur-[1px]" />

        <div className="pointer-events-none absolute right-[15%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/35 shadow-[0_0_22px_rgba(245,217,138,0.6)]" />

        <div className="pointer-events-none absolute left-[24%] top-[66%] h-1 w-1 rounded-full bg-white/35 shadow-[0_0_20px_rgba(255,255,255,0.55)]" />

        <div className="pointer-events-none absolute right-[26%] top-[73%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 shadow-[0_0_22px_rgba(245,217,138,0.6)]" />

        {/* ======================================================= */}
        {/* LENTERA CONTENT */}
        {/* ======================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          {/* ===================================================== */}
          {/* HEADER */}
          {/* ===================================================== */}

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f5d98a]/70 sm:text-xs">
              Filosofi
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              LENTERA
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              Sebuah cahaya yang membantu menemukan arah.
              Lentera menjadi simbol semangat, harapan,
              dan keberanian untuk mengambil peran.
            </p>
          </div>

          {/* ===================================================== */}
          {/* LENTERA LOGO */}
          {/* ===================================================== */}

          <div className="relative mx-auto mt-10 flex max-w-sm items-center justify-center sm:mt-12">
            {/* OUTER GLOW */}

            <div className="pointer-events-none absolute h-[330px] w-[330px] rounded-full bg-[#f5d98a]/[0.08] blur-[100px] animate-pulse" />

            {/* INNER GLOW */}

            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#fff4c7]/[0.10] blur-[65px]" />

            {/* LIGHT CORE */}

            <div className="pointer-events-none absolute h-36 w-36 rounded-full bg-[#fff6df]/[0.08] blur-[40px]" />

            <img
              src="/LOGO PEMILIHAN.webp"
              alt="Logo Pemilihan Jegeg Bagus FEB Unmas 2027"
              className="lantern-logo-glow relative z-10 w-[75%] max-w-[350px] object-contain transition-transform duration-700 hover:scale-[1.025] sm:w-[60%] md:w-[90%]"
            />
          </div>

          {/* ===================================================== */}
          {/* CONCEPT CARDS */}
          {/* ===================================================== */}

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
            <SimpleConcept
              title="Anggakara"
              text="Berani melangkah"
            />

            <SimpleConcept
              title="Baswara"
              text="Menjadi cahaya"
            />

            <SimpleConcept
              title="Danirmala"
              text="Tulus dalam pengabdian"
            />
          </div>

          {/* ===================================================== */}
          {/* QUOTE */}
          {/* ===================================================== */}

          <div className="mx-auto mt-10 max-w-xl border-t border-white/10 pt-8 text-center sm:mt-14">
            <p className="font-serif text-lg leading-7 text-white/75 sm:text-xl">
              “Berani melangkah, menjadi cahaya,
              dan tumbuh dengan niat yang tulus.”
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ALUR */}
        {/* MASIH DI DALAM SECTION YANG SAMA */}
        {/* ========================================================= */}

        <div
          ref={timelineRef}
          id="alur"
          className="relative scroll-mt-24"
        >
          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-2 md:px-8 md:pb-32 md:pt-10">
            {/* ===================================================== */}
            {/* ALUR HEADER */}
            {/* ===================================================== */}

            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5d98a]/60 sm:text-xs">
                Perjalanan
              </p>

              <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-[#e8e2da] sm:text-5xl md:text-6xl">
                Rangkaian Pemilihan
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                Setiap tahapan menjadi bagian dari perjalanan
                untuk mengenal diri dan berkembang.
              </p>
            </div>

            {/* ===================================================== */}
            {/* MOBILE TIMELINE */}
            {/* ===================================================== */}

            <div className="relative mt-14 overflow-visible sm:hidden">
              {/* BASE LINE */}

              <div className="absolute bottom-5 left-1/2 top-5 w-px -translate-x-1/2 bg-[#f5d98a]/15" />

              {/* ANIMATED LINE */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-5
                  w-px
                  -translate-x-1/2
                  bg-[#f5d98a]
                  shadow-[0_0_12px_rgba(245,217,138,0.8)]
                  transition-all
                  duration-[1800ms]
                  ease-out
                  ${
                    timelineVisible
                      ? "h-[calc(100%-40px)] opacity-100"
                      : "h-0 opacity-0"
                  }
                `}
              />

              {/* ITEMS */}

              <div className="relative flex flex-col gap-9 overflow-visible py-2">
                <MobileTimelineItem
                  date="01-12 OKT 2026"
                  title="Pendaftaran"
                  visible={timelineVisible}
                  delay="0ms"
                  side="left"
                />

                <MobileTimelineItem
                  date="25 OKT 2026"
                  title="Seleksi"
                  visible={timelineVisible}
                  delay="180ms"
                  side="right"
                />

                <MobileTimelineItem
                  date="TBD"
                  title="Pra Karantina"
                  visible={timelineVisible}
                  delay="360ms"
                  side="left"
                />

                <MobileTimelineItem
                  date="TBD"
                  title="Karantina"
                  visible={timelineVisible}
                  delay="540ms"
                  side="right"
                />

                <MobileTimelineItem
                  date="17 JAN 2027"
                  title="Grand Final"
                  visible={timelineVisible}
                  delay="720ms"
                  side="left"
                />
              </div>
            </div>

            {/* ===================================================== */}
            {/* DESKTOP TIMELINE */}
            {/* ===================================================== */}

            <div className="no-scrollbar mt-16 hidden overflow-x-auto pb-10 pt-4 sm:block sm:mt-20">
              <div className="relative min-w-[820px] overflow-visible px-6">
                {/* BASE LINE */}

                <div className="absolute left-6 right-6 top-[19px] h-px bg-[#f5d98a]/15" />

                {/* ANIMATED LINE */}

                <div
                  className={`
                    absolute
                    left-6
                    top-[19px]
                    h-px
                    bg-gradient-to-r
                    from-[#f5d98a]
                    via-[#f5d98a]
                    to-[#f5d98a]/20
                    shadow-[0_0_12px_rgba(245,217,138,0.8)]
                    transition-all
                    duration-[1800ms]
                    ease-out
                    ${
                      timelineVisible
                        ? "w-[calc(100%-48px)] opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />

                {/* TIMELINE ITEMS */}

                <div className="relative grid grid-cols-5 overflow-visible">
                  <TimelineItem
                    date="01-12 OKT 2026"
                    title="Pendaftaran"
                    visible={timelineVisible}
                    delay="0ms"
                  />

                  <TimelineItem
                    date="25 OKT 2026"
                    title="Seleksi"
                    visible={timelineVisible}
                    delay="180ms"
                  />

                  <TimelineItem
                    date="TBD"
                    title="Pra Karantina"
                    visible={timelineVisible}
                    delay="360ms"
                  />

                  <TimelineItem
                    date="TBD"
                    title="Karantina"
                    visible={timelineVisible}
                    delay="540ms"
                  />

                  <TimelineItem
                    date="17 JAN 2027"
                    title="Grand Final"
                    visible={timelineVisible}
                    delay="720ms"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LENTERA ANIMATION */}
      {/* ========================================================= */}

      <style jsx global>{`
        @keyframes lanternGlow {
          0%,
          100% {
            filter:
              drop-shadow(0 0 16px rgba(255, 246, 223, 0.28))
              drop-shadow(0 0 38px rgba(245, 217, 138, 0.20));
          }

          50% {
            filter:
              drop-shadow(0 0 24px rgba(255, 246, 223, 0.50))
              drop-shadow(0 0 60px rgba(245, 217, 138, 0.34));
          }
        }

        .lantern-logo-glow {
          animation: lanternGlow 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .lantern-logo-glow {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}