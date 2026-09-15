"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ========================================================= */
/* LINKS */
/* ========================================================= */

const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/155kimHzV3kAFZIVXgF_V0CMqdcdjy7u59bTYTU9e1Rw/preview?edit_requested=true";

const DOCUMENT_FOLDER_URL =
  "https://drive.google.com/drive/folders/1fxDRsS7WMNIXHUxk5UZP_NjPQVLxQncg";

/* ========================================================= */
/* DATA */
/* ========================================================= */

const documents = [
  "CV",
  "Foto 4R Full Body & Close Up",
  "Formulir Kesiapan",
];

const mechanism = [
  "Peserta wajib hadir tepat waktu dan melakukan absensi secara offline pada pukul 08.00–09.00.",
  "Peserta memakai pakaian yang sudah ditentukan.",
  "Peserta wajib membawa tumbler air masing-masing.",
  "Acara berlangsung selama 8 jam, pukul 08.00–16.00 WITA.",
  "Peserta wajib mengikuti seluruh rangkaian acara dengan tertib dan rapi.",
  "Peserta tidak diperbolehkan meninggalkan acara sebelum acara selesai.",
  "Waktu istirahat diberikan selama 1 jam, pukul 12.00–13.00.",
  "Seleksi akan dilanjutkan kembali hingga selesai.",
];

const prohibitions = [
  "Peserta dilarang meninggalkan tempat sebelum acara selesai.",
  "Peserta dilarang mengganggu peserta lain.",
  "Peserta dilarang membuat keributan pada saat seleksi dimulai.",
];

/* ========================================================= */
/* COMPONENT */
/* ========================================================= */

export default function PendaftaranFinalisPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const bookRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  /* ========================================================= */
  /* MOBILE MENU */
  /* ========================================================= */

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
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  /* ========================================================= */
  /* BOOK SCROLL */
  /* ========================================================= */

  const handleBookScroll = () => {
    const container = bookRef.current;

    if (!container) return;

    const pageWidth = container.clientWidth;

    if (!pageWidth) return;

    const index = Math.round(container.scrollLeft / pageWidth);

    setActivePage(index);
  };

  const goToPage = (index: number) => {
    const container = bookRef.current;

    if (!container) return;

    container.scrollTo({
      left: index * container.clientWidth,
      behavior: "smooth",
    });

    setActivePage(index);
  };

  const pages = [
    "Berkas",
    "Foto",
    "Seleksi",
    "Larangan",
    "Daftar",
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#e9e1d2] text-[#191814]">
      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav
        ref={navRef}
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
              alt="Logo Jegeg Bagus FEB Unmas"
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
            <Link href="/#tentang" className="nav-link">
              Tentang
            </Link>

            <Link href="/#lentera" className="nav-link">
              Lentera
            </Link>

            <Link href="/#alur" className="nav-link">
              Alur
            </Link>

            <Link href="/program" className="nav-link">
              Program
            </Link>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-2">
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#170401] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] sm:block"
            >
              Daftar Sekarang
            </a>

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/25 transition-all duration-300 active:scale-[0.88] lg:hidden"
            >
              <div className="relative h-[14px] w-[16px]">
                <span
                  className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-500 ${
                    menuOpen ? "top-[6px] rotate-45" : "top-[2px]"
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
                    menuOpen ? "top-[6px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE MENU */}
        {/* ========================================================= */}

        <div
          className={`absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-[24px] border border-white/40 bg-[#f5f1e8]/95 shadow-[0_20px_50px_rgba(23,4,1,0.12)] backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="p-2">
            <Link
              href="/#tentang"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Tentang
            </Link>

            <Link
              href="/#lentera"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Lentera
            </Link>

            <Link
              href="/#alur"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Alur
            </Link>

            <Link
              href="/program"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Program
            </Link>

            <div className="my-1 h-px bg-black/[0.06]" />

            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-[18px] bg-[#2a1616] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO / BOOK INTRO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f1e8] pb-8 pt-24 sm:pb-10 sm:pt-28">
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#f5b446]/15 blur-[100px] sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#315e50]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a742f] sm:text-xs">
              Panduan Finalis
            </p>

            <h1 className="mt-3 max-w-3xl font-serif text-[3rem] leading-[0.9] tracking-tight text-[#2a1616] sm:text-6xl md:text-7xl">
              Buku Panduan
              <br />
              <span className="text-[#9a742f]">Finalis 2027</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-black/50 sm:text-base">
              Geser ke samping untuk membaca panduan pendaftaran,
              kelengkapan berkas, ketentuan foto, hingga persiapan seleksi.
            </p>

            <div className="mt-6 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35">
              <span className="text-base">←</span>
              Geser halaman
              <span className="text-base">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOOK NAVIGATION */}
      {/* ========================================================= */}

      <section className="sticky top-[60px] z-30 bg-[#e9e1d2]/80 py-3 backdrop-blur-xl sm:top-[68px]">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="overflow-hidden rounded-full border border-white/60 bg-white/35 p-1 shadow-[0_8px_30px_rgba(23,4,1,0.05)] backdrop-blur-xl">
            <div className="flex gap-1 overflow-x-auto scrollbar-none">
              {pages.map((page, index) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(index)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 sm:px-5 ${
                    activePage === index
                      ? "bg-[#2a1616] text-white shadow-sm"
                      : "text-black/45 hover:bg-white/50 hover:text-[#2a1616]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")} {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOOK */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#e9e1d2] py-5 sm:py-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b446]/5 blur-[120px]" />

        <div
          ref={bookRef}
          onScroll={handleBookScroll}
          className="no-scrollbar relative flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {/* ===================================================== */}
          {/* PAGE 01 — BERKAS */}
          {/* ===================================================== */}

          <article className="w-full shrink-0 snap-center px-5 sm:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/45 p-5 shadow-[0_25px_80px_rgba(23,4,1,0.08)] backdrop-blur-2xl sm:p-8 md:p-10">
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#f5b446]/10 blur-[80px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9a742f]">
                        01 / Kelengkapan
                      </p>

                      <h2 className="mt-2 font-serif text-4xl leading-none text-[#2a1616] sm:text-5xl">
                        Siapkan sebelum daftar
                      </h2>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-black/45">
                        Pastikan seluruh kelengkapan sudah tersedia sebelum
                        mengisi formulir pendaftaran.
                      </p>
                    </div>

                    <span className="hidden rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[9px] font-semibold text-black/40 sm:block">
                      01 / 05
                    </span>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <BookStep
                      number="01"
                      title="Persiapkan"
                      text="Siapkan semua kelengkapan yang dibutuhkan."
                    />

                    <BookStep
                      number="02"
                      title="Checklist"
                      text="CV, foto 4R Full Body & Close Up, serta Formulir Kesiapan."
                    />

                    <BookStep
                      number="03"
                      title="Upload"
                      text="Upload berkas dan isi data diri melalui Google Form."
                    />

                    <BookStep
                      number="04"
                      title="WhatsApp"
                      text="Pastikan kamu sudah masuk ke group WhatsApp peserta."
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {documents.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/70 bg-white/45 px-3 py-2 text-[9px] text-black/50"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={DOCUMENT_FOLDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full border border-black/10 bg-white/45 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#2a1616] backdrop-blur-xl transition hover:bg-[#2a1616] hover:text-white"
                  >
                    Lihat Google Drive Berkas
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================== */}
          {/* PAGE 02 — FOTO */}
          {/* ===================================================== */}

          <article className="w-full shrink-0 snap-center px-5 sm:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/45 p-5 shadow-[0_25px_80px_rgba(23,4,1,0.08)] backdrop-blur-2xl sm:p-8 md:p-10">
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9a742f]">
                        02 / Foto 4R
                      </p>

                      <h2 className="mt-2 font-serif text-4xl leading-none text-[#2a1616] sm:text-5xl">
                        Close Up & Full Body
                      </h2>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-black/45">
                        Gunakan foto sesuai ketentuan dan pastikan file diberi
                        nama dengan benar.
                      </p>
                    </div>

                    <span className="hidden rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[9px] font-semibold text-black/40 sm:block">
                      02 / 05
                    </span>
                  </div>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    {/* BAGUS */}

                    <div>
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315e50]">
                        Contoh Bagus
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <PhotoCard
                          src="/Closeup_Bagus.webp"
                          alt="Contoh foto close up Bagus"
                          title="Close Up"
                          filename="Close Up_Bagus_[Nama Peserta]"
                        />

                        <PhotoCard
                          src="/Fullbody_Bagus.webp"
                          alt="Contoh foto full body Bagus"
                          title="Full Body"
                          filename="Full Body_Bagus_[Nama Peserta]"
                        />
                      </div>
                    </div>

                    {/* JEGEG */}

                    <div>
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315e50]">
                        Contoh Jegeg
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        <PhotoCard
                          src="/Close Up_Jegeg.webp"
                          alt="Contoh foto close up Jegeg"
                          title="Close Up"
                          filename="Close Up_Jegeg_[Nama Peserta]"
                        />

                        <PhotoCard
                          src="/Full Body_Jegeg.webp"
                          alt="Contoh foto full body Jegeg"
                          title="Full Body"
                          filename="Full Body_Jegeg_[Nama Peserta]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================== */}
          {/* PAGE 03 — SELEKSI */}
          {/* ===================================================== */}

          <article className="w-full shrink-0 snap-center px-5 sm:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[#2a1616] p-5 text-white shadow-[0_25px_80px_rgba(23,4,1,0.16)] sm:p-8 md:p-10">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#f5b446]/10 blur-[90px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b9d0c4]/55">
                        03 / Seleksi
                      </p>

                      <h2 className="mt-2 max-w-3xl font-serif text-4xl leading-none sm:text-5xl">
                        Datang siap dan ikuti seluruh ketentuan
                      </h2>
                    </div>

                    <span className="hidden rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[9px] font-semibold text-white/40 sm:block">
                      03 / 05
                    </span>
                  </div>

                  <div className="mt-7 grid gap-3 lg:grid-cols-[0.7fr_1.3fr]">
                    {/* PELAKSANAAN */}

                    <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#b9d0c4]/55">
                        Pelaksanaan Seleksi
                      </p>

                      <div className="mt-5 space-y-4">
                        <InfoItem
                          label="Hari, Tanggal"
                          value="Minggu, 25 Oktober 2026"
                          serif
                        />

                        <InfoItem
                          label="Waktu"
                          value="08.00 – Selesai"
                        />

                        <InfoItem
                          label="Tempat"
                          value="Ruangan Widya Sabha"
                        />
                      </div>
                    </div>

                    {/* MEKANISME */}

                    <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#b9d0c4]/55">
                        Mekanisme Kegiatan
                      </p>

                      <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                        {mechanism.map((item, index) => (
                          <div key={item} className="flex gap-3">
                            <span className="mt-0.5 text-[9px] font-semibold text-[#b9d0c4]/45">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="text-xs leading-5 text-white/55">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================== */}
          {/* PAGE 04 — LARANGAN */}
          {/* ===================================================== */}

          <article className="w-full shrink-0 snap-center px-5 sm:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[#2a1616] p-5 text-white shadow-[0_25px_80px_rgba(23,4,1,0.16)] sm:p-8 md:p-10">
                <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#315e50]/15 blur-[90px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b9d0c4]/55">
                        04 / Larangan
                      </p>

                      <h2 className="mt-2 max-w-3xl font-serif text-4xl leading-none sm:text-5xl">
                        Jaga suasana seleksi bersama
                      </h2>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
                        Seluruh peserta diharapkan menjaga ketertiban dan
                        menghargai proses seleksi bersama.
                      </p>
                    </div>

                    <span className="hidden rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[9px] font-semibold text-white/40 sm:block">
                      04 / 05
                    </span>
                  </div>

                  <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {prohibitions.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[9px] font-semibold text-[#b9d0c4]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-5 text-sm leading-6 text-white/60">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================== */}
          {/* PAGE 05 — FINAL CTA */}
          {/* ===================================================== */}

          <article
            id="registration"
            className="w-full shrink-0 snap-center px-5 sm:px-8"
          >
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/45 p-7 text-center shadow-[0_25px_80px_rgba(23,4,1,0.08)] backdrop-blur-2xl sm:p-12 md:p-16">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b446]/10 blur-[100px]" />

                <div className="relative">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#2a1616] text-[9px] font-semibold text-white">
                    05
                  </span>

                  <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9a742f]">
                    Langkah terakhir
                  </p>

                  <h2 className="mt-3 font-serif text-4xl leading-none text-[#2a1616] sm:text-6xl">
                    Siap menjadi
                    <br />
                    <span className="text-[#9a742f]">
                      bagian dari perjalanan?
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-black/50">
                    Pastikan semua berkas sudah lengkap sebelum mengirimkan
                    pendaftaran.
                  </p>

                  <a
                    href={REGISTRATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex rounded-full bg-[#2a1616] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401]"
                  >
                    Daftar Finalis 2027
                  </a>

                  <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-black/30">
                    Jegeg Bagus FEB Unmas 2027
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ========================================================= */}
        {/* PAGE INDICATOR */}
        {/* ========================================================= */}

        <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center gap-2 px-5">
          {pages.map((page, index) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(index)}
              aria-label={`Buka halaman ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activePage === index
                  ? "w-8 bg-[#2a1616]"
                  : "w-1.5 bg-black/15"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.18em] text-black/25">
          Geser untuk membuka halaman
        </p>
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
              aria-label="Instagram Jegeg Bagus FEB Unmas"
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

      {/* ========================================================= */}
      {/* GLOBAL STYLE */}
      {/* ========================================================= */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          position: relative;
          color: rgba(25, 24, 20, 0.65);
          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .nav-link:hover {
          color: #2a1616;
          transform: translateY(-1px);
        }

        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </main>
  );
}

/* ========================================================= */
/* BOOK STEP */
/* ========================================================= */

function BookStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/65 bg-white/35 p-5 shadow-[0_12px_35px_rgba(23,4,1,0.05)] backdrop-blur-xl">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a1616] text-[9px] font-semibold text-white">
        {number}
      </span>

      <h3 className="mt-4 font-serif text-xl text-[#2a1616]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-black/50">
        {text}
      </p>
    </div>
  );
}

/* ========================================================= */
/* PHOTO CARD */
/* ========================================================= */

function PhotoCard({
  src,
  alt,
  title,
  filename,
}: {
  src: string;
  alt: string;
  title: string;
  filename: string;
}) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-white/70 bg-white/45 shadow-sm backdrop-blur-xl">
      <div className="aspect-[4/3] overflow-hidden bg-white/25">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-[10px] font-semibold text-[#2a1616]">
          {title}
        </p>

        <p className="mt-1 text-[8px] leading-4 text-black/40">
          {filename}
        </p>
      </div>
    </div>
  );
}

/* ========================================================= */
/* INFO ITEM */
/* ========================================================= */

function InfoItem({
  label,
  value,
  serif = false,
}: {
  label: string;
  value: string;
  serif?: boolean;
}) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.15em] text-white/35">
        {label}
      </p>

      <p
        className={`mt-1 text-white/70 ${
          serif ? "font-serif text-xl text-white" : "text-sm"
        }`}
      >
        {value}
      </p>
    </div>
  );
}