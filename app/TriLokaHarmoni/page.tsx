"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ---------------------------------------------------------------- */
/* Image placeholders */
/* ---------------------------------------------------------------- */

const heroImages = [
  "Raksa 1.webp",
  "Raksa 2.webp",
  "Raksa 3.webp",
  "Raksa 4.webp",
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
/* Navbar */
/* ---------------------------------------------------------------- */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        menuOpen &&
        !target.closest("[data-navbar]")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  return (
    <nav
      data-navbar
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 rounded-full border border-black/[0.08] bg-[#f5f1e8]/60 shadow-[0_8px_30px_rgba(23,4,1,0.08)] backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="flex h-12 items-center justify-between px-3 sm:h-14 sm:px-4">

        {/* LOGO */}

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5 transition-transform duration-300 active:scale-[0.97]"
        >
          <img
            src="/Logo JEBAG FEB.webp"
            alt="Jegeg Bagus FEB Unmas"
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />

          <div className="leading-tight">
            <p className="text-[10px] font-semibold tracking-[0.08em] sm:text-[11px] sm:tracking-wide">
              JEGEG BAGUS
            </p>

            <p className="text-[7px] uppercase tracking-[0.18em] text-black/50 sm:text-[8px]">
              FEB UNMAS
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden items-center gap-6 text-xs font-medium lg:flex">

          <a href="/#tentang" className="nav-link">
            Tentang
          </a>

          <a href="/#lentera" className="nav-link">
            Lentera
          </a>

          <a href="/#alur" className="nav-link">
            Alur
          </a>

          <Link
            href="/program"
            className="nav-link"
          >
            Program
          </Link>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-2">

          <Link
            href="/#registration"
            className="hidden rounded-full bg-[#170401] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] sm:block"
          >
            Daftar Sekarang
          </Link>

          {/* HAMBURGER */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen
                ? "Tutup menu"
                : "Buka menu"
            }
            aria-expanded={menuOpen}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/25 transition-all duration-300 active:scale-[0.88] lg:hidden"
          >
            <div className="relative h-[14px] w-[16px]">

              <span
                className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-500 ${
                  menuOpen
                    ? "top-[6px] rotate-45"
                    : "top-[2px]"
                }`}
              />

              <span
                className={`absolute left-0 top-[6px] h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-300 ${
                  menuOpen
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-500 ${
                  menuOpen
                    ? "top-[6px] -rotate-45"
                    : "top-[10px]"
                }`}
              />

            </div>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          absolute left-0 right-0 top-full mt-2
          overflow-hidden
          rounded-[24px]
          border border-white/40
          bg-[#f5f1e8]/95
          shadow-[0_20px_50px_rgba(23,4,1,0.12)]
          backdrop-blur-2xl
          transition-all duration-500
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="p-2">

          <a
            href="/#tentang"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Tentang
          </a>

          <a
            href="/#lentera"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Lentera
          </a>

          <a
            href="/#alur"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Alur
          </a>

          <Link
            href="/program"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Program
          </Link>

          <div className="my-1 h-px bg-black/[0.06]" />

          <Link
            href="/#registration"
            onClick={() =>
              setMenuOpen(false)
            }
            className="flex items-center justify-center rounded-[18px] bg-[#2a1616]/90 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Daftar Sekarang
          </Link>

        </div>
      </div>
    </nav>
  );
}

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
    <div className={`relative overflow-hidden ${dark ? "bg-[#12352e]" : "bg-[#e1e6dc]"}`}>
      <div className={`pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r ${dark ? "from-[#12352e]" : "from-[#e1e6dc]"} to-transparent sm:w-28`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l ${dark ? "from-[#12352e]" : "from-[#e1e6dc]"} to-transparent sm:w-28`} />

      <div className={`program-rail flex w-max gap-2.5 py-3 sm:gap-3 sm:py-4 ${speed === "slow" ? "program-rail-slow" : ""}`}>
        {duplicated.map((image, index) => (
          <div key={`${image}-${index}`} className="w-[190px] shrink-0 sm:w-[260px] md:w-[330px]">
            <div className={`group overflow-hidden rounded-[20px] border p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] ${dark ? "border-white/10 bg-white/[0.07]" : "border-white/70 bg-white/45"}`}>
              <div className="overflow-hidden rounded-[15px]">
                <img src={image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .program-rail { animation: programRail 36s linear infinite; will-change: transform; }
        .program-rail-slow { animation-duration: 44s; }
        @keyframes programRail { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 6px)); } }
        @media (max-width: 640px) { .program-rail { animation-duration: 31s; } .program-rail-slow { animation-duration: 38s; } }
        @media (prefers-reduced-motion: reduce) { .program-rail, .program-rail-slow { animation: none; } }
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

      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f1e8] pt-24 sm:pt-28">
        <div className="pointer-events-none absolute -right-28 top-8 h-80 w-80 rounded-full bg-[#315e50]/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />
        <div className="mx-auto max-w-7xl px-5 pb-9 md:px-8 md:pb-12">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
            <div>
              <p className="section-label !text-[#315e50]">Program</p>
              <h1 className="mt-2 font-serif text-[3.15rem] leading-[0.88] tracking-tight text-[#170401] sm:text-6xl md:text-7xl">
                Raksa Bhuana
                <br />
                <span className="text-[#315e50]">Jagadhita</span>
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="font-serif text-xl leading-7 text-[#2a1616]/80 sm:text-2xl">
                Bertumbuh, berkontribusi, dan mengambil peran.
              </p>
              <p className="mt-3 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
                Ruang untuk mengembangkan potensi anggota sekaligus memberi manfaat bagi lingkungan dan masyarakat.
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
              <p className="section-label !text-[#315e50]">Ruang Bertumbuh</p>
              <h2 className="mt-2 font-serif text-3xl leading-[0.98] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">
                Tumbuh bukan hanya <span className="text-[#315e50]">untuk diri sendiri.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
              Raksa Bhuana Jagadhita menghadirkan ruang untuk mengembangkan kemampuan, membangun pengalaman, dan memberi manfaat melalui berbagai bentuk kegiatan.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRI LOKA HARMONI */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f1e8] py-11 sm:py-14 md:py-16">
        <div className="pointer-events-none absolute -right-36 top-0 h-96 w-96 rounded-full bg-[#315e50]/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl text-[#315e50]/60">01</span>
                <span className="h-px w-8 bg-[#315e50]/30" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#315e50]">Program Utama</p>
              </div>
              <h2 className="mt-3 font-serif text-4xl leading-[0.9] tracking-tight text-[#170401] sm:text-5xl md:text-6xl">
                Tri Loka <span className="text-[#315e50]">Harmoni</span>
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="font-serif text-xl leading-7 text-[#2a1616]/80 sm:text-2xl">Trikarmadhikarit Sukha</p>
              <p className="mt-1 text-sm font-medium text-[#315e50]">Kebahagiaan atas tiga perbuatan.</p>
              <p className="mt-2 text-sm leading-6 text-black/50 sm:text-base sm:leading-7">
                Tiga ruang untuk menjaga keseimbangan hubungan dengan Tuhan, sesama, dan lingkungan.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <ProgramImage images={triLokaImages} />
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {[
              { n: "01", loka: "Swah Loka · Parhyangan", title: "Satya Jiwa", desc: "Membangun kesadaran spiritual melalui kegiatan yang mendekatkan diri pada nilai-nilai keagamaan.", examples: "Sembahyang bersama · Membersihkan area tempat suci" },
              { n: "02", loka: "Bwah Loka · Pawongan", title: "Sahaja Rasa", desc: "Menumbuhkan kepedulian, kehangatan, dan solidaritas melalui hubungan dengan sesama.", examples: "Kegiatan sosial · Berbagi bersama panti asuhan atau panti jompo" },
              { n: "03", loka: "Bhur Loka · Palemahan", title: "Bhumi Raksa", desc: "Menumbuhkan kepedulian terhadap lingkungan melalui aksi yang dilakukan secara berkelanjutan.", examples: "Aksi kebersihan · Kolaborasi volunteer · Kegiatan peduli lingkungan" },
            ].map((item) => (
              <article key={item.n} className="rounded-[20px] border border-black/[0.07] bg-white/35 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/55">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl text-[#315e50]/55">{item.n}</span>
                  <span className="text-right text-[8px] font-semibold uppercase tracking-[0.14em] text-[#315e50]">{item.loka}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#170401]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/50">{item.desc}</p>
                <div className="mt-4 border-t border-black/[0.07] pt-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#315e50]">Contoh kegiatan</p>
                  <p className="mt-1.5 text-xs leading-5 text-black/50">{item.examples}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KREAPRO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#12352e] py-11 text-white sm:py-14 md:py-16">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#b9d0c4]/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div className="order-2 lg:order-1"><ProgramImage images={kreaproImages} dark /></div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl text-[#d9e4dc]/50">02</span>
                <span className="h-px w-8 bg-white/20" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#b9d0c4]/80">Kreatif Promosi</p>
              </div>
              <h2 className="mt-3 font-serif text-4xl leading-[0.9] sm:text-5xl md:text-6xl">KREAPRO</h2>
              <p className="mt-3 font-serif text-xl leading-7 text-white/80 sm:text-2xl">Membantu UMKM lokal dikenal lebih luas.</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                Ruang kolaborasi untuk membantu UMKM memperkenalkan produk dan cerita di balik usahanya melalui pendekatan promosi yang kreatif.
              </p>

              <div className="mt-5 border-t border-white/10">
                <p className="py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b9d0c4]/75">Yang dilakukan</p>
                <div className="grid sm:grid-cols-2">
                  {[
                    "Membuat konten promosi",
                    "Memperkenalkan produk UMKM",
                    "Mengangkat cerita pelaku usaha",
                    "Memanfaatkan media sosial",
                    "Membuka peluang kolaborasi",
                  ].map((item, index) => (
                    <div key={item} className={`border-t border-white/10 py-2.5 ${index === 4 ? "sm:col-span-2" : ""}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] text-[#b9d0c4]/45">0{index + 1}</span>
                        <p className="text-xs leading-5 text-white/60 sm:text-sm">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 font-serif text-lg leading-6 text-white/75 sm:text-xl">Fokusnya sederhana: memberi ruang agar usaha lokal dapat dikenal lebih luas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* O BEYOND CAMPUS */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#e9e1d2] py-11 sm:py-14 md:py-16">
        <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#315e50]/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl text-[#315e50]/55">03</span>
                <span className="h-px w-8 bg-[#315e50]/30" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#315e50]">O Beyond Campus</p>
              </div>
              <h2 className="mt-3 font-serif text-4xl leading-[0.9] tracking-tight text-[#170401] sm:text-5xl md:text-6xl">
                Kesempatan <span className="text-[#315e50]">tidak berhenti</span> di kampus.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-black/50 sm:text-base sm:leading-7">Anggota didukung untuk membawa kemampuan mereka ke berbagai ruang di luar FEB Unmas.</p>

              <div className="mt-5">
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315e50]">Dukungan yang tersedia</p>
                <div className="overflow-hidden rounded-[20px] border border-black/[0.07] bg-white/25">
                  {[
                    "Informasi ajang dan kompetisi",
                    "Pendampingan persiapan",
                    "Coaching sebelum mengikuti ajang",
                    "Dukungan publikasi dan dokumentasi",
                    "Networking dan kolaborasi",
                    "Dukungan mengikuti pemilihan duta atau kompetisi eksternal",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-3 border-b border-black/[0.07] px-4 py-2.5 last:border-b-0">
                      <span className="pt-0.5 text-[9px] font-semibold tracking-[0.15em] text-[#315e50]">0{index + 1}</span>
                      <p className="text-xs leading-5 text-black/55 sm:text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <ProgramImage images={beyondCampusImages} />
              <div className="mt-3 rounded-[20px] border border-black/[0.07] bg-white/35 px-5 py-4 backdrop-blur-xl">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315e50]">Tujuan</p>
                <p className="mt-1.5 font-serif text-xl leading-6 text-[#2a1616] sm:text-2xl">Dari potensi menjadi prestasi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CLOSING */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#170401] py-14 text-white sm:py-18 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#315e50]/20 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#b9d0c4]/65 sm:text-xs">Raksa Bhuana Jagadhita</p>
          <h2 className="mt-3 font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">Bukan hanya menjadi<br /><span className="text-[#b9d0c4]">Jegeg Bagus.</span></h2>
          <p className="mx-auto mt-3 max-w-2xl font-serif text-lg leading-7 text-white/65 sm:text-2xl">Tetapi terus berkembang setelahnya.</p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-0">
            {["Kenali potensi", "Kembangkan", "Berani tampil", "Ambil kesempatan"].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-xl"><p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/60 sm:text-[10px]">{item}</p></div>
                {index < 3 && <span className="hidden text-[#b9d0c4]/45 sm:block">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#e9e1d2] py-11 sm:py-14">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="section-label !text-[#315e50]">Pemilihan Jegeg Bagus FEB Unmas 2027</p>
          <h2 className="mt-2 font-serif text-3xl leading-[0.98] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">Siap mengambil <span className="text-[#315e50]">peranmu?</span></h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-black/50">Kenali potensimu, kembangkan kemampuanmu, dan temukan ruang untuk terus bertumbuh.</p>
          <Link href="/pendaftaran" className="mt-5 inline-flex items-center justify-center rounded-full bg-[#12352e] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401]">Daftar Sekarang</Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-white/10 bg-[#2a1616] py-8 text-[#f5f1e8] sm:py-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between md:px-8">

          <div className="flex items-center gap-3">

            <img
              src="/Logo JEBAG FEB.webp"
              alt="Logo Jegeg Bagus FEB Unmas"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            />

            <div>

              <p className="text-sm font-semibold">
                Jegeg Bagus FEB Unmas
              </p>

              <p className="text-xs text-white/40">
                Pemilihan 2027
              </p>

            </div>

          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">

            <a
              href="https://www.instagram.com/sejebagfebunmas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Jegeg Bagus Unmas"
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/60 transition hover:border-white/20 hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@sejebagfebunmas?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Jegeg Bagus FEB Unmas"
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/60 transition hover:border-white/20 hover:text-white"
            >
              TikTok
            </a>

            <a
              href="https://www.youtube.com/@JegegBagusFEBUnmas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Jegeg Bagus FEB Unmas"
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/60 transition hover:border-white/20 hover:text-white"
            >
              YouTube
            </a>

          </div>

          <div className="text-xs text-white/40">
            © 2026 Jegeg Bagus FEB Unmas
          </div>

        </div>

      </footer>

    </main>
  );
}