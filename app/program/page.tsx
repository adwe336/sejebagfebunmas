"use client";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Narahubung from "@/components/home/Narahubung";

/* ---------------------------------------------------------------- */
/* Image placeholders */
/* ---------------------------------------------------------------- */

const heroImages = [
  "/Raksa 1.webp",
  "/Raksa 2.webp",
  "/Raksa 3.webp",
  "/Raksa 4.webp",
];

const triLokaImages = [
  "/triloka-01.webp",
  "/triloka-02.webp",
  "/triloka-03.webp",
  "/triloka-04.webp",
];

const kreaproImages = [
  "/kreapro-01.webp",
  "/kreapro-02.webp",
  "/kreapro-03.webp",
  "/kreapro-04.webp",
];

const beyondCampusImages = [
  "/beyond-01.webp",
  "/beyond-02.webp",
  "/beyond-03.webp",
  "/beyond-04.webp",
];

/* ---------------------------------------------------------------- */
/* Film Strip */
/* ---------------------------------------------------------------- */

function FilmRail({
  images,
  dark = false,
  speed = "normal",
}: {
  images: string[];
  dark?: boolean;
  speed?: "normal" | "slow";
}) {
  const duplicated = [...images, ...images];

  return (
    <div
      className={`relative overflow-hidden ${
        dark ? "bg-[#12352e]" : "bg-[#e1e6dc]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r ${
          dark ? "from-[#12352e]" : "from-[#e1e6dc]"
        } to-transparent sm:w-28`}
      />

      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l ${
          dark ? "from-[#12352e]" : "from-[#e1e6dc]"
        } to-transparent sm:w-28`}
      />

      <div
        className={`program-rail flex w-max gap-2.5 py-3 sm:gap-3 sm:py-4 ${
          speed === "slow" ? "program-rail-slow" : ""
        }`}
      >
        {duplicated.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="w-[190px] shrink-0 sm:w-[260px] md:w-[330px]"
          >
            <div
              className={`group overflow-hidden rounded-[20px] border p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] ${
                dark
                  ? "border-white/10 bg-white/[0.07]"
                  : "border-white/70 bg-white/45"
              }`}
            >
              <div className="overflow-hidden rounded-[15px]">
                <img
                  src={image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .program-rail {
          animation: programRail 36s linear infinite;
          will-change: transform;
        }

        .program-rail-slow {
          animation-duration: 44s;
        }

        @keyframes programRail {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 6px));
          }
        }

        @media (max-width: 640px) {
          .program-rail {
            animation-duration: 31s;
          }

          .program-rail-slow {
            animation-duration: 38s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .program-rail,
          .program-rail-slow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Program Image */
/* ---------------------------------------------------------------- */

function ProgramImage({
  images,
  dark = false,
}: {
  images: string[];
  dark?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border shadow-[0_25px_70px_rgba(23,4,1,0.14)] ${
        dark
          ? "border-white/10 bg-white/[0.035]"
          : "border-black/[0.08] bg-white/30"
      }`}
    >
      <FilmRail
        images={images}
        dark={dark}
        speed="slow"
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Tri Loka Card */
/* ---------------------------------------------------------------- */

function TriLokaCard({
  number,
  loka,
  title,
  description,
  examples,
}: {
  number: string;
  loka: string;
  title: string;
  description: string;
  examples: string;
}) {
  return (
    <article className="group relative overflow-hidden border-t border-black/10 py-7 sm:py-8">
      <div className="flex items-start justify-between gap-4">
        <p className="font-serif text-3xl leading-none text-[#a77c2f]/60 sm:text-4xl">
          {number}
        </p>

        <p className="pt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a742f] sm:text-[10px]">
          {loka}
        </p>
      </div>

      <h3 className="mt-5 font-serif text-2xl leading-tight text-[#170401] sm:text-3xl">
        {title}
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
        {description}
      </p>

      <div className="mt-5 rounded-[16px] border border-black/[0.06] bg-white/25 px-4 py-3">
        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9a742f]">
          Contoh kegiatan
        </p>

        <p className="mt-1.5 text-xs leading-5 text-black/55 sm:text-sm">
          {examples}
        </p>
      </div>

      <div className="pointer-events-none absolute right-0 top-8 h-20 w-20 rounded-full bg-[#f5d98a]/20 blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}

/* ---------------------------------------------------------------- */
/* Main Program Page */
/* ---------------------------------------------------------------- */

export default function ProgramPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e1d2] text-[#191814]">

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f1e8] pt-24 sm:pt-28">
        <div className="pointer-events-none absolute -right-28 top-8 h-80 w-80 rounded-full bg-[#315e50]/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

        <div className="mx-auto max-w-7xl px-5 pb-9 md:px-8 md:pb-12">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">

            <div>
              <p className="section-label !text-[#315e50]">
                Program
              </p>

              <h1 className="mt-2 font-serif text-[3.15rem] leading-[0.88] tracking-tight text-[#170401] sm:text-6xl md:text-7xl">
                Raksa Bhuana
                <br />
                <span className="text-[#315e50]">
                  Jagadhita
                </span>
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="font-serif text-xl leading-7 text-[#2a1616]/80 sm:text-2xl">
                Bertumbuh, berkontribusi, dan mengambil peran.
              </p>

              <p className="mt-3 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
                Ruang untuk mengembangkan potensi anggota
                sekaligus memberi manfaat bagi lingkungan dan
                masyarakat.
              </p>
            </div>

          </div>
        </div>

        <FilmRail images={heroImages} />
      </section>

      {/* ========================================================= */}
      {/* INTRO */}
      {/* ========================================================= */}

      <section className="bg-[#e9e1d2] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-12">

            <div>
              <h2 className="mt-2 font-serif text-3xl leading-[0.98] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">
                Tumbuh bukan hanya{" "}
                <span className="text-[#315e50]">
                  untuk diri sendiri.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Raksa Bhuana Jagadhita menghadirkan ruang untuk
              mengembangkan kemampuan, membangun pengalaman,
              dan memberi manfaat melalui berbagai bentuk
              kegiatan.
            </p>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#e9e1d2] py-11 sm:py-14">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">

          <p className="section-label !text-[#315e50]">
            Pemilihan Jegeg Bagus FEB Unmas 2027
          </p>

          <h2 className="mt-2 font-serif text-3xl leading-[0.98] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">
            Siap mengambil{" "}
            <span className="text-[#315e50]">
              peranmu?
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-black/50">
            Kenali potensimu, kembangkan kemampuanmu, dan
            temukan ruang untuk terus bertumbuh.
          </p>

          <Link
            href="/pendaftaran"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#12352e] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401]"
          >
            Daftar Menjadi Finalis
          </Link>

        </div>
      </section>

      {/* ========================================================= */}
      {/* NARAHUBUNG */}
      {/* ========================================================= */}

      <Narahubung />

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <Footer />

    </main>
  );
}