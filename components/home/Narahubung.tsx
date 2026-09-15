"use client";

import ContactCard from "@/components/ui/ContactCard";
import {
  WHATSAPP_AYU,
  WHATSAPP_DIKI,
  whatsappLink,
} from "@/lib/site";

export default function Narahubung() {
  return (
<section
        id="narahubung"
        className="relative overflow-hidden bg-[#e9e1d2] py-20 sm:py-24 md:py-28"
      >

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_85%_85%,rgba(245,217,138,0.16),transparent_30%),linear-gradient(135deg,#eee7da,#e4d9c7,#dcd0bd)]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center md:gap-14">

            {/* LEFT */}

            <div>

              <p className="section-label">
                Narahubung
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-[1] tracking-tight text-[#170401] sm:text-5xl md:text-6xl">
                Ada yang ingin

                <br />

                <span className="text-[#a77c2f]">
                  ditanyakan?
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
                Hubungi kami untuk informasi seputar
                pendaftaran, tahapan pemilihan, maupun
                hal lainnya mengenai Jegeg Bagus FEB
                Unmas 2027
              </p>

            </div>

            {/* CONTACT CARDS */}

            <div className="grid grid-cols-2 gap-3 sm:gap-4">

              <ContactCard
                name="Ayu"
                role="Wakil Ketua"
                image="/YUA.webp"
                href={whatsappLink(
                  WHATSAPP_AYU,
                  "Halo Kak Ayu, saya ingin bertanya mengenai Pemilihan Jegeg Bagus FEB Unmas 2027"
                )}
              />

              <ContactCard
                name="Diki"
                role="Ketua Panitia"
                image="/DIKI.webp"
                href={whatsappLink(
                  WHATSAPP_DIKI,
                  "Halo Kak Diki, saya ingin bertanya mengenai Pemilihan Jegeg Bagus FEB Unmas 2027"
                )}
              />

            </div>

          </div>
        </div>
      </section>
  );
}
