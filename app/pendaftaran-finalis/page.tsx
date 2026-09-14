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
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f1e8] pb-10 pt-24 sm:pb-14 sm:pt-28">
        {/* ambient glass glow */}

        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#f5b446]/15 blur-[100px] sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#315e50]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_0.9fr] md:gap-12">
            {/* TEXT */}

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a742f] sm:text-xs">
                Pemilihan Jegeg Bagus FEB Unmas 2027
              </p>

              <h1 className="mt-3 max-w-xl font-serif text-[3.2rem] leading-[0.9] tracking-tight text-[#2a1616] sm:text-6xl md:text-7xl">
                Panduan
                <br />
                Pendaftaran
                <br />
                <span className="text-[#9a742f]">Finalis</span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-black/55 sm:text-base">
                Siapkan berkas, lengkapi data diri, dan ikuti seluruh
                ketentuan sebelum melakukan pendaftaran
              </p>

              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2a1616] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401]"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* HERO PHOTO */}

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[34px] bg-white/40 blur-xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/20 p-2 shadow-[0_25px_70px_rgba(23,4,1,0.13)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[23px]">
                  <img
                    src="/Panduan.webp"
                    alt="Panduan Pendaftaran Finalis Jegeg Bagus FEB Unmas"
                    className="block aspect-[4/5] h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KELENGKAPAN BERKAS */}
      {/* ========================================================= */}

      <section id="tentang" className="bg-[#e9e1d2] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a742f] sm:text-xs">
                Kelengkapan Berkas
              </p>

              <h2 className="mt-2 font-serif text-4xl leading-none text-[#2a1616] sm:text-5xl">
                Siapkan sebelum daftar
              </h2>
            </div>

            <a
              href={DOCUMENT_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border border-black/10 bg-white/40 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2a1616] backdrop-blur-xl transition hover:bg-[#2a1616] hover:text-white"
            >
              Google Drive Berkas
            </a>
          </div>

          {/* STEPS */}

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* STEP 1 */}

            <div className="rounded-[24px] border border-white/60 bg-white/40 p-5 shadow-[0_12px_35px_rgba(23,4,1,0.05)] backdrop-blur-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a1616] text-[9px] font-semibold text-white">
                01
              </span>

              <h3 className="mt-4 font-serif text-xl text-[#2a1616]">
                Persiapkan
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-black/50">
                Siapkan semua kelengkapan yang dibutuhkan.
              </p>

              <a
                href={DOCUMENT_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a742f]"
              >
                Lihat berkas 
              </a>
            </div>

            {/* STEP 2 */}

            <div className="rounded-[24px] border border-white/60 bg-white/40 p-5 shadow-[0_12px_35px_rgba(23,4,1,0.05)] backdrop-blur-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a1616] text-[9px] font-semibold text-white">
                02
              </span>

              <h3 className="mt-4 font-serif text-xl text-[#2a1616]">
                Checklist
              </h3>

              <div className="mt-3 space-y-2">
                {documents.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs leading-5 text-black/55"
                  >
                    <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#315e50] text-[8px] text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 3 */}

            <div className="rounded-[24px] border border-white/60 bg-white/40 p-5 shadow-[0_12px_35px_rgba(23,4,1,0.05)] backdrop-blur-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a1616] text-[9px] font-semibold text-white">
                03
              </span>

              <h3 className="mt-4 font-serif text-xl text-[#2a1616]">
                Upload
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-black/50">
                Upload berkas dan isi data diri melalui Google Form.
              </p>

              <a
                href={REGISTRATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a742f]"
              >
                Link Formulir
              </a>
            </div>

            {/* STEP 4 */}

            <div className="rounded-[24px] border border-white/60 bg-white/40 p-5 shadow-[0_12px_35px_rgba(23,4,1,0.05)] backdrop-blur-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a1616] text-[9px] font-semibold text-white">
                04
              </span>

              <h3 className="mt-4 font-serif text-xl text-[#2a1616]">
                Group WhatsApp
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-black/50">
                Pastikan kamu sudah masuk ke group WhatsApp peserta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KETENTUAN FOTO */}
      {/* ========================================================= */}

      <section className="bg-[#f5f1e8] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[15px] font-semibold uppercase tracking-[0.25em] text-[#9a742f] sm:text-xs">
                Foto 4R
              </p>

              <h2 className="mt-2 font-serif text-4xl leading-none text-[#2a1616] sm:text-5xl">
                Close Up & Full Body
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-5 text-black/45 sm:text-right">
              Gunakan foto sesuai ketentuan dan pastikan file diberi nama
              dengan benar
            </p>
          </div>

          {/* BAGUS */}

          <div className="mt-7">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315e50]">
              Contoh Bagus
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/50 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/Close up_Bagus.webp"
                    alt="Contoh foto close up Bagus"
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-[10px] font-semibold text-[#2a1616]">
                    Close Up
                  </p>

                  <p className="mt-1 text-[9px] text-black/40">
                    Close Up_Bagus_[Nama Peserta]
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/50 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/Full body_Bagus.webp"
                    alt="Contoh foto full body Bagus"
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-[10px] font-semibold text-[#2a1616]">
                    Full Body
                  </p>

                  <p className="mt-1 text-[9px] text-black/40">
                    Full Body_Bagus_[Nama Peserta]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* JEGEG */}

          <div className="mt-7">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#315e50]">
              Contoh Jegeg
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/50 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/Close Up_Jegeg.webp"
                    alt="Contoh foto close up Jegeg"
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-[10px] font-semibold text-[#2a1616]">
                    Close Up
                  </p>

                  <p className="mt-1 text-[9px] text-black/40">
                    Close Up_Jegeg_[Nama Peserta]
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/50 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/Full Body_Jegeg.webp"
                    alt="Contoh foto full body Jegeg"
                    className="h-full w-full object-contain object-center"
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-[10px] font-semibold text-[#2a1616]">
                    Full Body
                  </p>

                  <p className="mt-1 text-[9px] text-black/40">
                    Full Body_Jegeg_[Nama Peserta]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PERSIAPAN SELEKSI */}
      {/* ========================================================= */}

      <section id="alur" className="bg-[#2a1616] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">

            <h2 className="mt-2 font-serif text-4xl leading-none sm:text-5xl">
              Datang siap dan ikuti seluruh ketentuan
            </h2>
          </div>

          {/* PELAKSANAAN */}

          <div className="mt-7 grid gap-3 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:p-7">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#b9d0c4]/55">
                Pelaksanaan Seleksi
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                    Hari, Tanggal
                  </p>

                  <p className="mt-1 font-serif text-xl">
                    Minggu, 25 Oktober 2026
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                    Waktu
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    08.00 – Selesai
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-white/35">
                    Tempat
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Ruangan Widya Sabha
                  </p>
                </div>
              </div>
            </div>

            {/* MEKANISME */}

            <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#b9d0c4]/55">
                Mekanisme Kegiatan
              </p>

              <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {mechanism.map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 text-[9px] font-semibold text-[#b9d0c4]/45">
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

          {/* LARANGAN */}

          <div className="mt-3 rounded-[26px] border border-white/10 bg-[#170401]/60 p-6 backdrop-blur-xl sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="shrink-0">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#b9d0c4]/55">
                  Larangan-Larangan
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  Mari jaga suasana seleksi bersama
                </h3>
              </div>

              <div className="grid gap-3 sm:max-w-3xl sm:grid-cols-3">
                {prohibitions.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4"
                  >
                  <p className="text-xs leading-5 text-white/60">
                   <span className="mr-2 text-[#b9d0c4]">*</span>
                     {item}
                 </p>
                </div>
               ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section
        id="registration"
        className="relative overflow-hidden bg-[#f5f1e8] py-14 sm:py-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b446]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">

          <h2 className="mt-3 font-serif text-4xl leading-none text-[#2a1616] sm:text-6xl">
            Siap menjadi
            <br />
            bagian dari perjalanan?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/50">
            Pastikan semua berkas sudah lengkap sebelum mengirimkan
            pendaftaran
          </p>

          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#2a1616] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401]"
          >
            Daftar Finalis 2027 
          </a>
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
    </main>
  );
}