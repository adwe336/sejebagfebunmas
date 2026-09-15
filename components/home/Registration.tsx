"use client";

import { useRef, useState } from "react";
import { GRAND_FINAL_TARGET, PANITIA_FORM_URL } from "@/lib/site";
import { useCountdown } from "@/hooks/useCountdown";
import RegistrationCard from "@/components/ui/RegistrationCard";
import FinalistCard from "@/components/ui/FinalistCard";
import CountdownCard from "@/components/ui/CountdownCard";

export default function Registration() {
  const countdown = useCountdown(GRAND_FINAL_TARGET);
  const [activeRegistration, setActiveRegistration] = useState(0);
  const registrationRef = useRef<HTMLDivElement>(null);

  const handleRegistrationScroll = () => {
    const container = registrationRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    const containerCenter =
      container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveRegistration(closestIndex);
  };

  return (
<section
        id="registration"
        className="relative scroll-mt-24 overflow-hidden bg-[#21100d] py-12 text-[#f5f1e8] sm:py-14 md:py-16"
      >

        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(245,217,138,0.16),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(184,126,48,0.15),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(116,35,26,0.30),transparent_40%),linear-gradient(135deg,#170401_0%,#351812_45%,#21100d_100%)]"
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d98a]/[0.035] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-8 text-center sm:mb-10">

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#f5d98a]/65 sm:text-[10px]">
              Ambil bagian dalam perjalanan
            </p>

            <h2 className="mt-2 font-serif text-2xl tracking-tight sm:text-xl md:text-4xl">
              Jegeg Bagus FEB Unmas 2027
            </h2>

          </div>

          <div
            ref={registrationRef}
            onScroll={
              handleRegistrationScroll
            }
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 scroll-smooth sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible"
          >

            <RegistrationCard
              badge="Pendaftaran diperpanjang!"
              title="Daftar Menjadi Panitia Pelaksana"
              date="12–26 September 2026"
              image="/Purnama.webp"
              buttonText="Daftar Panitia"
              href={PANITIA_FORM_URL}
              description="Terbuka bagi mahasiswa FEB Unmas"
            />

            <FinalistCard />

            <CountdownCard
              title="Grand Final"
              dateLabel="17 Januari 2027"
              countdown={countdown}
            />

          </div>

          {/* SLIDER INDICATOR */}

          <div className="mt-4 flex justify-center gap-1.5 md:hidden">

            {[0, 1, 2].map(
              (index) => (
                <span
                  key={index}
                  className={`
                    h-1.5 rounded-full
                    transition-all duration-300
                    ${
                      activeRegistration === index
                        ? "w-5 bg-[#f5d98a]"
                        : "w-1.5 bg-white/20"
                    }
                  `}
                />
              )
            )}

          </div>

        </div>
      </section>
  );
}
