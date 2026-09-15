"use client";

import { useEffect, useRef, useState } from "react";
import TimelineItem from "@/components/ui/TimelineItem";
import MobileTimelineItem from "@/components/ui/MobileTimelineItem";

export default function Alur() {
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef<HTMLElement>(null);

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
    <section
      ref={timelineRef}
      id="alur"
      className="relative scroll-mt-24 overflow-hidden bg-[#170401] text-white"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 15%,
              rgba(245,217,138,0.18),
              transparent 24%
            ),
            radial-gradient(
              circle at 15% 42%,
              rgba(245,217,138,0.045),
              transparent 23%
            ),
            radial-gradient(
              circle at 85% 62%,
              rgba(245,217,138,0.045),
              transparent 24%
            ),
            radial-gradient(
              circle at 50% 72%,
              rgba(255,238,188,0.035),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #170401 0%,
              #25100b 50%,
              #170401 100%
            )
          `,
        }}
      />

      {/* ========================================================= */}
      {/* DECORATIVE LIGHT */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-[#f5d98a]/30 shadow-[0_0_25px_rgba(245,217,138,0.55)] blur-[1px]" />

      <div className="pointer-events-none absolute right-[15%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/35 shadow-[0_0_22px_rgba(245,217,138,0.6)]" />

      <div className="pointer-events-none absolute left-[24%] top-[66%] h-1 w-1 rounded-full bg-white/35 shadow-[0_0_20px_rgba(255,255,255,0.55)]" />

      <div className="pointer-events-none absolute right-[26%] top-[73%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 shadow-[0_0_22px_rgba(245,217,138,0.6)]" />

      {/* Soft glow bawah */}
      <div className="pointer-events-none absolute bottom-[-15%] left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#f5d98a]/[0.025] blur-3xl" />

      {/* ========================================================= */}
      {/* CONTENT */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 md:pb-32 md:pt-24">
        {/* ======================================================= */}
        {/* HEADING */}
        {/* ======================================================= */}

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

        {/* ======================================================= */}
        {/* MOBILE */}
        {/* ======================================================= */}

        <div className="relative mt-14 overflow-visible sm:hidden">
          {/* Garis dasar */}
          <div className="absolute bottom-5 left-1/2 top-5 w-px -translate-x-1/2 bg-[#f5d98a]/15" />

          {/* Garis animasi */}
          <div
            className={`
              absolute left-1/2 top-5 w-px
              -translate-x-1/2
              bg-[#f5d98a]
              shadow-[0_0_12px_rgba(245,217,138,0.8)]
              transition-all duration-[1800ms] ease-out
              ${
                timelineVisible
                  ? "h-[calc(100%-40px)] opacity-100"
                  : "h-0 opacity-0"
              }
            `}
          />

          {/* Timeline items */}
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

        {/* ======================================================= */}
        {/* DESKTOP */}
        {/* ======================================================= */}

        <div className="no-scrollbar mt-16 hidden overflow-x-auto overflow-y-visible pb-10 pt-4 sm:block sm:mt-20">
          <div className="relative min-w-[820px] overflow-visible px-6">
            {/* Garis dasar */}
            <div className="absolute left-6 right-6 top-[19px] h-px bg-[#f5d98a]/15" />

            {/* Garis animasi */}
            <div
              className={`
                absolute left-6 top-[19px] h-px
                bg-gradient-to-r
                from-[#f5d98a]
                via-[#f5d98a]
                to-[#f5d98a]/20
                shadow-[0_0_12px_rgba(245,217,138,0.8)]
                transition-all duration-[1800ms] ease-out
                ${
                  timelineVisible
                    ? "w-[calc(100%-48px)] opacity-100"
                    : "w-0 opacity-0"
                }
              `}
            />

            {/* Timeline */}
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
    </section>
  );
}