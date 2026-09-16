"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareUpRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import narahubung from "@/components/home/Narahubung";
import Narahubung from "@/components/home/Narahubung";
/* ========================================================= */
/* LINKS */
/* ========================================================= */

const DAFTAR1_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf34sc2CrbGSgDq8cGrUe7JyucxC5oOI172ZqIWgv_ZMrXbMA/viewform?usp=preview";

const DOCUMENT_FOLDER_URL =
  "https://drive.google.com/drive/folders/1fxDRsS7WMNIXHUxk5UZP_NjPQVLxQncg";

  const DAFTAR2_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHJTYMzn5AWWzkvKjyDwPvUadwnrFUwo7LEI3qNu6dUh9MfQ/viewform?usp=preview";

/* ========================================================= */
/* DATA */
/* ========================================================= */

const documents = [
  "CV",
  "Foto 4R Full Body & Close Up",
  "Formulir Kesiapan",
];

const mechanism = [
  "Peserta wajib hadir tepat waktu dan melakukan absensi pada pukul 08.00–09.00.",
  "Peserta memakai pakaian yang sudah ditentukan.",
  "Peserta wajib membawa tumbler air masing-masing.",
  "Acara berlangsung mulai pukul 08.00–16.00 WITA.",
  "Peserta wajib mengikuti seluruh rangkaian acara dengan tertib dan rapi.",
  "Peserta tidak diperbolehkan meninggalkan acara sebelum acara selesai.",
  "Waktu istirahat diberikan selama satu jam, pukul 12.00–13.00.",
  "Seleksi akan dilanjutkan kembali hingga selesai.",
];

const prohibitions = [
  "Peserta dilarang meninggalkan tempat sebelum acara selesai.",
  "Peserta dilarang mengganggu peserta lain.",
  "Peserta dilarang membuat keributan pada saat seleksi dimulai.",
];

/* ========================================================= */
/* PAGE */
/* ========================================================= */

export default function PendaftaranFinalisPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const navRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

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
  /* BOOK TRACKING */
  /* ========================================================= */

  useEffect(() => {
    const container = bookRef.current;

    if (!container) return;

    const handleScroll = () => {
      const width = container.clientWidth;

      if (!width) return;

      const index = Math.round(container.scrollLeft / width);

      setActivePage(Math.max(0, Math.min(index, 5)));
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================================= */
  /* BOOK NAVIGATION */
  /* ========================================================= */

  const goToPage = (page: number) => {
    const container = bookRef.current;

    if (!container) return;

    const target = Math.max(0, Math.min(page, 5));

    container.scrollTo({
      left: container.clientWidth * target,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e1d2] text-[#191814]">
      <Navbar />

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <section className="bg-[#f5f1e8] px-5 pb-3 pt-[78px] sm:px-8 sm:pb-4 sm:pt-28">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9a742f] sm:text-[9px]">
              Finalis 2027
            </p>

            <p className="mt-1 text-[11px] text-black/45 sm:text-xs">
              Panduan Pendaftaran
            </p>
          </div>

          {/* PAGE INDICATOR */}

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-mono text-[8px] text-black/35 sm:text-[9px]">
              {String(activePage + 1).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPage(index)}
                  aria-label={`Halaman ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activePage === index
                      ? "w-4 bg-[#2a1616] sm:w-5"
                      : "w-1.5 bg-black/15"
                  }`}
                />
              ))}
            </div>

            <span className="font-mono text-[8px] text-black/25 sm:text-[9px]">
              06
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOOK */}
      {/* ========================================================= */}

      <div
        ref={bookRef}
        className="flex h-[calc(100dvh-106px)] w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:h-[calc(100dvh-118px)]"
      >
        {/* ======================================================= */}
        {/* PAGE 01 — COVER */}
        {/* ======================================================= */}

        <section className="relative h-full min-w-full snap-start bg-[#f5f1e8] px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="mx-auto flex h-full max-w-7xl items-center">
            <div className="grid w-full items-center gap-5 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
              {/* LEFT */}

              <div>
                <div className="mb-4 flex items-center gap-3 sm:mb-5">
                  <span className="h-px w-7 bg-[#9a742f] sm:w-8" />

                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9a742f] sm:text-[9px]">
                    01 / Cover
                  </p>
                </div>

                <h1 className="max-w-xl font-serif text-[3rem] leading-[0.88] tracking-[-0.04em] text-[#2a1616] sm:text-6xl md:text-7xl">
                  Panduan
                  <br />
                  Pendaftaran
                  <br />
                  <span className="text-[#9a742f]">Finalis</span>
                </h1>

                <p className="mt-5 max-w-md text-[12px] leading-5 text-black/50 sm:mt-6 sm:text-base sm:leading-6">
                  Siapkan berkas, lengkapi data diri, dan pahami seluruh
                  ketentuan sebelum mengikuti proses seleksi.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
                  <a
                    href={DAFTAR1_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#2a1616] px-5 py-3 text-[10px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] sm:px-6 sm:py-3.5 sm:text-xs"
                  >
                    Daftar Sekarang
                  </a>

                  <button
                    type="button"
                    onClick={() => goToPage(1)}
                    className="inline-flex items-center gap-2"
>
  Mulai Panduan
  <FontAwesomeIcon icon={faArrowRight} />

                  </button>
                </div>
              </div>

              {/* IMAGE */}

              <div className="flex items-center justify-center">
                    <img
                      src="/HEROFINALIS.webp"
                      alt="Panduan Pendaftaran Finalis Jegeg Bagus FEB Unmas"
                      className=" h-150% w-150% object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center justify-between px-2.5 py-2.5 sm:px-3 sm:py-3">
                    <p className="text-[8px] uppercase tracking-[0.14em] text-black/35 sm:text-[9px] sm:tracking-[0.18em]">
                      Jegeg Bagus FEB Unmas
                    </p>

                    <p className="font-mono text-[8px] text-black/25 sm:text-[9px]">
                      2027
                    </p>
                  </div>
                </div>
              </div>
        </section>

        {/* ======================================================= */}
        {/* PAGE 02 — BERKAS */}
        {/* ======================================================= */}

        <section className="h-full min-w-full snap-start bg-[#e9e1d2] px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="mx-auto flex h-full max-w-7xl items-center">
            <div className="w-full">
              <div className="mb-4 flex items-end justify-between gap-3 sm:mb-6">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9a742f] sm:text-[9px]">
                    02 / Preparation
                  </p>

                  <h2 className="mt-1.5 font-serif text-3xl leading-none text-[#2a1616] sm:mt-2 sm:text-5xl">
                    Kelengkapan
                    <br />
                    Berkas
                  </h2>
                </div>

                <a
                  href={DOCUMENT_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 bg-white/40 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#2a1616] backdrop-blur-xl transition hover:bg-[#2a1616] hover:text-white sm:px-4 sm:py-2.5 sm:text-[9px]"
                >
                  Drive
                  <FontAwesomeIcon icon={faSquareUpRight} /> 
                </a>
              </div>

              {/* 2 x 2 ON MOBILE */}

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
                {/* CARD 1 */}

                <div className="rounded-[20px] border border-white/60 bg-white/40 p-3.5 shadow-[0_12px_30px_rgba(23,4,1,0.05)] backdrop-blur-xl sm:rounded-[25px] sm:p-5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2a1616] text-[8px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[9px]">
                    01
                  </span>

                  <h3 className="mt-3 font-serif text-lg text-[#2a1616] sm:mt-5 sm:text-xl">
                    Pendaftaran tahap 1
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-4 text-black/50 sm:mt-2 sm:text-xs sm:leading-5">
                    Daftar dan masuk grup wa peserta melalui Google Form tahap 1, Informasi lebih lanjut akan dikirimkan melalui email dan grup wa peserta.
                  </p>

                  <a
                    href={DAFTAR1_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[8px] font-semibold uppercase tracking-[0.12em] text-[#9a742f] sm:mt-5 sm:text-[9px]"
                  >
                    Daftar dan masuk grup wa
                    <FontAwesomeIcon icon={faSquareUpRight} /> 
                  </a>
                </div>

{/* CARD 2 */}

<div className="rounded-[20px] border border-white/60 bg-white/40 p-3.5 shadow-[0_12px_30px_rgba(23,4,1,0.05)] backdrop-blur-xl sm:rounded-[25px] sm:p-5">
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2a1616] text-[8px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[9px]">
    02
  </span>

  <h3 className="mt-3 font-serif text-lg text-[#2a1616] sm:mt-5 sm:text-xl">
    Checklist
  </h3>

  <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
    {documents.map((item) => (
      <div
        key={item}
        className="flex items-start gap-1 text-[9px] leading-4 text-black/55 sm:gap-1.5 sm:text-xs sm:leading-5"
      >
        <span className="mt-0.5 flex h-4 w-2 shrink-0 items-center justify-center rounded-full bg-[#315e50] text-[7px] text-white sm:h-3.5 sm:w-3.5 sm:text-[8px]">
          ✓
        </span>

        <span>{item}</span>
      </div>
    ))}

    <a
      href={DOCUMENT_FOLDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 inline-block text-[8px] font-semibold uppercase tracking-[0.08em] text-[#9a742f] sm:mt-2 sm:text-[9px]"
    >
      Panduan berkas{" "}
      <FontAwesomeIcon icon={faSquareUpRight} />
    </a>
  </div>
</div>

                {/* CARD 3 */}

                <div className="rounded-[20px] border border-white/60 bg-white/40 p-3.5 shadow-[0_12px_30px_rgba(23,4,1,0.05)] backdrop-blur-xl sm:rounded-[25px] sm:p-5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2a1616] text-[8px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[9px]">
                    03
                  </span>

                  <h3 className="mt-3 font-serif text-lg text-[#2a1616] sm:mt-5 sm:text-xl">
                    Pendaftaran tahap 2
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-4 text-black/50 sm:mt-2 sm:text-xs sm:leading-5">
                    Upload berkas dan isi data diri melalui Google Form.
                  </p>

                  <a
                    href={DAFTAR2_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[8px] font-semibold uppercase tracking-[0.12em] text-[#9a742f] sm:mt-5 sm:text-[9px]"
                  >
                    Link formulir
                    <FontAwesomeIcon icon={faSquareUpRight} /> 
                  </a>
                </div>

                {/* CARD 4 */}

                <div className="rounded-[20px] border border-white/60 bg-white/40 p-3.5 shadow-[0_12px_30px_rgba(23,4,1,0.05)] backdrop-blur-xl sm:rounded-[25px] sm:p-5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2a1616] text-[8px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[9px]">
                    04
                  </span>

                  <h3 className="mt-3 font-serif text-lg text-[#2a1616] sm:mt-5 sm:text-xl">
                    Persiapan Seleksi
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-4 text-black/50 sm:mt-2 sm:text-xs sm:leading-5">
                    Pastikan kamu sudah melakukan pendaftaran tahap 2 dan membawa seluruh berkas yang dibutuhkan.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex justify-between sm:mt-4">
                <button
                  type="button"
                  onClick={() => goToPage(0)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-black/35 sm:text-[9px]"
                >
                  ← Cover
                </button>

                <button
                  type="button"
                  onClick={() => goToPage(2)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#9a742f] sm:text-[9px]"
                >
                  Foto →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* PAGE 03 — FOTO */}
        {/* ======================================================= */}

        <section className="h-full min-w-full snap-start bg-[#f5f1e8] px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="mx-auto flex h-full max-w-7xl items-center">
            <div className="w-full">
              <div className="mb-3.5 sm:mb-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9a742f] sm:text-[9px]">
                  03 / Photo Guide
                </p>

                <div className="mt-1.5 flex flex-col justify-between gap-1.5 sm:mt-2 sm:flex-row sm:items-end sm:gap-2">
                  <h2 className="font-serif text-3xl leading-none text-[#2a1616] sm:text-5xl">
                    Foto 4R
                  </h2>

                  <p className="max-w-sm text-[10px] leading-4 text-black/45 sm:text-right sm:text-xs sm:leading-5">
                    Full Body & Close Up. Pastikan penamaan file sesuai
                    ketentuan.
                  </p>
                </div>
              </div>

              <div className="grid gap-2.5 lg:grid-cols-2 lg:gap-4">
                {/* BAGUS */}

                <div className="rounded-[20px] border border-black/[0.07] bg-white/45 p-2.5 shadow-[0_14px_35px_rgba(23,4,1,0.06)] backdrop-blur-xl sm:rounded-[26px] sm:p-4">
                  <div className="mb-2 flex items-center justify-between px-1 sm:mb-3">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#315e50] sm:text-[9px] sm:tracking-[0.18em]">
                      Bagus
                    </p>

                    <span className="text-[8px] text-black/25 sm:text-[9px]">
                      01 — 02
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {/* CLOSE UP */}

                    <div className="overflow-hidden rounded-[15px] bg-white/60 sm:rounded-[19px]">
                      <div className="aspect-[4/3]">
                        <img
                          src="/Closeup_Bagus.webp"
                          alt="Contoh foto close up Bagus"
                          className="h-full w-full object-contain object-center"
                        />
                      </div>

                      <div className="border-t border-black/[0.05] p-2 sm:p-3">
                        <p className="text-[9px] font-semibold text-[#2a1616] sm:text-[10px]">
                          Close Up
                        </p>

                        <p className="mt-0.5 break-words font-mono text-[7px] leading-3 text-black/40 sm:mt-1 sm:text-[8px] sm:leading-4">
                          Close Up_Bagus_[Nama Peserta]
                        </p>
                      </div>
                    </div>

                    {/* FULL BODY */}

                    <div className="overflow-hidden rounded-[15px] bg-white/60 sm:rounded-[19px]">
                      <div className="aspect-[4/3]">
                        <img
                          src="/Fullbody_Bagus.webp"
                          alt="Contoh foto full body Bagus"
                          className="h-full w-full object-contain object-center"
                        />
                      </div>

                      <div className="border-t border-black/[0.05] p-2 sm:p-3">
                        <p className="text-[9px] font-semibold text-[#2a1616] sm:text-[10px]">
                          Full Body
                        </p>

                        <p className="mt-0.5 break-words font-mono text-[7px] leading-3 text-black/40 sm:mt-1 sm:text-[8px] sm:leading-4">
                          Full Body_Bagus_[Nama Peserta]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* JEGEG */}

                <div className="rounded-[20px] border border-black/[0.07] bg-white/45 p-2.5 shadow-[0_14px_35px_rgba(23,4,1,0.06)] backdrop-blur-xl sm:rounded-[26px] sm:p-4">
                  <div className="mb-2 flex items-center justify-between px-1 sm:mb-3">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#315e50] sm:text-[9px] sm:tracking-[0.18em]">
                      Jegeg
                    </p>

                    <span className="text-[8px] text-black/25 sm:text-[9px]">
                      03 — 04
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {/* CLOSE UP */}

                    <div className="overflow-hidden rounded-[15px] bg-white/60 sm:rounded-[19px]">
                      <div className="aspect-[4/3]">
                        <img
                          src="/Close Up_Jegeg.webp"
                          alt="Contoh foto close up Jegeg"
                          className="h-full w-full object-contain object-center"
                        />
                      </div>

                      <div className="border-t border-black/[0.05] p-2 sm:p-3">
                        <p className="text-[9px] font-semibold text-[#2a1616] sm:text-[10px]">
                          Close Up
                        </p>

                        <p className="mt-0.5 break-words font-mono text-[7px] leading-3 text-black/40 sm:mt-1 sm:text-[8px] sm:leading-4">
                          Close Up_Jegeg_[Nama Peserta]
                        </p>
                      </div>
                    </div>

                    {/* FULL BODY */}

                    <div className="overflow-hidden rounded-[15px] bg-white/60 sm:rounded-[19px]">
                      <div className="aspect-[4/3]">
                        <img
                          src="/Full Body_Jegeg.webp"
                          alt="Contoh foto full body Jegeg"
                          className="h-full w-full object-contain object-center"
                        />
                      </div>

                      <div className="border-t border-black/[0.05] p-2 sm:p-3">
                        <p className="text-[9px] font-semibold text-[#2a1616] sm:text-[10px]">
                          Full Body
                        </p>

                        <p className="mt-0.5 break-words font-mono text-[7px] leading-3 text-black/40 sm:mt-1 sm:text-[8px] sm:leading-4">
                          Full Body_Jegeg_[Nama Peserta]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-between sm:mt-4">
                <button
                  type="button"
                  onClick={() => goToPage(1)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-black/35 sm:text-[9px]"
                >
                  ← Berkas
                </button>

                <button
                  type="button"
                  onClick={() => goToPage(3)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#9a742f] sm:text-[9px]"
                >
                  Seleksi →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* PAGE 04 — SELEKSI */}
        {/* ======================================================= */}

        <section className="h-full min-w-full snap-start bg-[#1A0300] px-5 pb-6 text-white sm:px-8 sm:pb-8">
          <div className="mx-auto flex h-full max-w-7xl items-center">
            <div className="w-full">
              <div className="mb-3.5 sm:mb-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#b9d0c4]/60 sm:text-[9px]">
                  04 / Selection
                </p>

                <h2 className="mt-1.5 max-w-2xl font-serif text-3xl leading-[0.95] sm:mt-2 sm:text-5xl">
                  Persiapan
                  <br />
                  Seleksi
                </h2>
              </div>

              <div className="grid gap-2.5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-3">
                {/* INFO */}

                <div className="rounded-[22px] border border-white/10 bg-white/2% p-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:rounded-[27px] sm:p-7">
                  <p className="text-[8px] uppercase tracking-[0.18em] text-[#b9d0c4]/50 sm:text-[9px] sm:tracking-[0.2em]">
                    Pelaksanaan Seleksi
                  </p>

                  {/* MOBILE 3 COLUMNS */}

                  <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:block sm:space-y-5">
                    <div>
                      <p className="text-[7px] uppercase tracking-[0.1em] text-white/30 sm:text-[8px] sm:tracking-[0.15em]">
                        Hari, Tanggal
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-white sm:mt-1.5 sm:font-serif sm:text-xl">
                        Minggu,
                        <br className="sm:hidden" /> 25 Oktober 2026
                      </p>
                    </div>

                    <div>
                      <p className="text-[7px] uppercase tracking-[0.1em] text-white/30 sm:text-[8px] sm:tracking-[0.15em]">
                        Waktu
                      </p>

                      <p className="mt-1 text-[10px] text-white/70 sm:mt-1.5 sm:text-sm">
                        08.00 –
                        <br className="sm:hidden" /> Selesai
                      </p>
                    </div>

                    <div>
                      <p className="text-[7px] uppercase tracking-[0.1em] text-white/30 sm:text-[8px] sm:tracking-[0.15em]">
                        Tempat
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-white/70 sm:mt-1.5 sm:text-sm">
                        Ruangan
                        <br className="sm:hidden" /> TBD
                      </p>
                    </div>
                  </div>
                </div>

                {/* MEKANISME */}

                <div className="rounded-[22px] border border-white/10 bg-white/2% p-4 backdrop-blur-xl sm:rounded-[27px] sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.18em] text-[#b9d0c4]/50 sm:text-[9px] sm:tracking-[0.2em]">
                        Mekanisme Kegiatan
                      </p>

                      <h3 className="mt-1 font-serif text-base sm:text-xl">
                        Yang perlu diperhatikan
                      </h3>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[7px] text-white/30 sm:px-3 sm:py-1.5 sm:text-[8px]">
                      08:00 — 16:00
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 sm:mt-5 sm:gap-x-7 sm:gap-y-4">
                    {mechanism.map((item, index) => (
                      <div
                        key={item}
                        className="flex gap-1.5 border-b border-white/[0.06] pb-2 sm:gap-3 sm:pb-3"
                      >
                        <span className="shrink-0 font-mono text-[7px] text-[#b9d0c4]/45 sm:text-[8px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-[8px] leading-4 text-white/55 sm:text-[11px] sm:leading-5">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-between sm:mt-4">
                <button
                  type="button"
                  onClick={() => goToPage(2)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/30 sm:text-[9px]"
                >
                  ← Foto
                </button>

                <button
                  type="button"
                  onClick={() => goToPage(4)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#b9d0c4] sm:text-[9px]"
                >
                  Larangan →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* PAGE 05 — LARANGAN */}
        {/* ======================================================= */}

        <section className="h-full min-w-full snap-start bg-[#170401] px-5 pb-6 text-white sm:px-8 sm:pb-8">
          <div className="mx-auto flex h-full max-w-7xl items-center">
            <div className="w-full">
              <div className="grid items-center gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
                {/* TITLE */}

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#b9d0c4]/60 sm:text-[9px]">
                    05 / Reminder
                  </p>

                  <h2 className="mt-2 font-serif text-4xl leading-[0.92] sm:mt-3 sm:text-5xl md:text-6xl">
                    Larangan-
                    <br />
                    larangan
                  </h2>

                  <p className="mt-4 max-w-sm text-[11px] leading-5 text-white/40 sm:mt-5 sm:text-xs sm:leading-6">
                    Mari menjaga suasana seleksi agar tetap tertib,
                    nyaman, dan kondusif bagi seluruh peserta.
                  </p>
                </div>

                {/* PROHIBITIONS */}

                <div className="grid gap-2.5 sm:gap-3">
                  {prohibitions.map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/[0.055] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:bg-white/[0.08] sm:rounded-[25px] sm:p-5"
                    >
                      <p className="flex text-[11px] leading-5 text-white/65 sm:text-sm sm:leading-6">
                        <span className="mr-2.5 shrink-0 text-base leading-5 text-[#b9d0c4] sm:mr-3 sm:text-lg">
                          *
                        </span>

                        <span>{item}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex justify-between sm:mt-7">
                <button
                  type="button"
                  onClick={() => goToPage(3)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-white/30 sm:text-[9px]"
                >
                  ← Seleksi
                </button>

                <button
                  type="button"
                  onClick={() => goToPage(5)}
                  className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#b9d0c4] sm:text-[9px]"
                >
                  Selesai →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}
        {/* PAGE 06 — CLOSING */}
        {/* ======================================================= */}

        <section className="relative h-full min-w-full snap-start overflow-hidden bg-[#f5f1e8] px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b446]/10 blur-[80px] sm:h-80 sm:w-80 sm:blur-[100px]" />

          <div className="relative mx-auto flex h-full max-w-5xl items-center justify-center text-center">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9a742f] sm:text-[9px] sm:tracking-[0.3em]">
                06 / End
              </p>

              <h2 className="mt-3 font-serif text-[2.8rem] leading-[0.9] tracking-[-0.04em] text-[#2a1616] sm:mt-4 sm:text-6xl md:text-7xl">
                Siap menjadi
                <br />
                bagian dari
                <br />
                <span className="text-[#9a742f]">perjalanan?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-[11px] leading-5 text-black/45 sm:mt-6 sm:text-sm sm:leading-6">
                Pastikan semua berkas sudah lengkap sebelum mengirimkan
                pendaftaran.
              </p>

              <a
                href={DAFTAR1_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#2a1616] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401] sm:mt-7 sm:gap-3 sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.12em]"
              >
                Daftar Finalis 2027
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8 sm:gap-3">
                <button
                  type="button"
                  onClick={() => goToPage(4)}
                  className="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-black/40 backdrop-blur-xl transition hover:bg-white sm:px-4 sm:text-[9px] sm:tracking-[0.12em]"
                >
                  ← Kembali
                </button>

                <a
                  href={DOCUMENT_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-black/40 backdrop-blur-xl transition hover:bg-white sm:px-4 sm:text-[9px] sm:tracking-[0.12em]"
                >
                  Google Drive
                  <FontAwesomeIcon icon={faSquareUpRight} /> 
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* SWIPE HINT */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed bottom-3 left-1/2 z-30 -translate-x-1/2 sm:bottom-4">
        <div className="flex items-center gap-1.5 rounded-full border border-black/[0.07] bg-[#f5f1e8]/75 px-2.5 py-1.5 shadow-lg backdrop-blur-xl sm:gap-2 sm:px-3">
          <span className="text-[7px] text-black/35 sm:text-[8px]">
            Geser untuk membuka halaman
          </span>

          <span className="text-[9px] text-[#9a742f] sm:text-[10px]">
            →
          </span>
        </div>
      </div>

      
      <Narahubung />
      <Footer />
    </main>
  );
}