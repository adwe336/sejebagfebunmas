"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const grandFinal = new Date("2027-01-17T00:00:00+08:00").getTime();

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "000",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);

  const timelineRef = useRef<HTMLDivElement>(null);

  /* ========================================================= */
  /* COUNTDOWN */
  /* ========================================================= */

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = grandFinal - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "000",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (distance / 1000) % 60
      );

      setTimeLeft({
        days: String(days).padStart(3, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ========================================================= */
  /* TIMELINE SCROLL REVEAL */
  /* ========================================================= */

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
    <main className="min-h-screen overflow-x-hidden bg-[#e9e1d2] text-[#191814]">

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-5xl -translate-x-1/2 rounded-full border border-black/[0.08] bg-[#f5f1e8]/60 shadow-[0_8px_30px_rgba(23,4,1,0.08)] backdrop-blur-2xl backdrop-saturate-150">

        <div className="flex h-12 items-center justify-between px-3 sm:h-14 sm:px-4">

          {/* LOGO */}

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 transition-transform duration-300 active:scale-[0.97]"
          >
            <img
              src="/Logo JEBAG FEB.webp"
              alt="Jegeg Bagus FEB Unmas"
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />

            <div className="hidden leading-tight sm:block">
              <p className="text-[11px] font-semibold tracking-wide">
                JEGEG BAGUS
              </p>

              <p className="text-[8px] uppercase tracking-[0.2em] text-black/50">
                FEB UNMAS
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-6 text-xs font-medium lg:flex">

            <a href="#tentang" className="nav-link">
              Tentang
            </a>

            <a href="#lentera" className="nav-link">
              Lentera
            </a>

            <a href="#alur" className="nav-link">
              Alur
            </a>

            <Link href="/program" className="nav-link">
              Program
            </Link>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-2">

            <Link
              href="/pendaftaran"
              className="hidden rounded-full bg-[#170401] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] active:scale-[0.96] sm:block"
            >
              Daftar Sekarang
            </Link>

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/25 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.88] lg:hidden"
            >
              <div className="relative h-[14px] w-[16px]">

                <span
                  className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen
                      ? "top-[6px] rotate-45"
                      : "top-[2px]"
                  }`}
                />

                <span
                  className={`absolute left-0 top-[6px] h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen
                      ? "scale-x-0 opacity-0"
                      : "scale-x-100 opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-[#170401] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
          className={`absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-[24px] border border-white/40 bg-[#f5f1e8]/65 shadow-[0_20px_50px_rgba(23,4,1,0.12)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="p-2">

            <a
              href="#tentang"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-[18px] px-4 py-3.5 text-sm transition-all duration-300 active:scale-[0.98] active:bg-white/30"
            >
              Tentang
            </a>

            <a
              href="#lentera"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-[18px] px-4 py-3.5 text-sm transition-all duration-300 active:scale-[0.98] active:bg-white/30"
            >
              Lentera
            </a>

            <a
              href="#alur"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-[18px] px-4 py-3.5 text-sm transition-all duration-300 active:scale-[0.98] active:bg-white/30"
            >
              Alur
            </a>

            <Link
              href="/program"
              onClick={() => setMenuOpen(false)}
              className="flex items-center rounded-[18px] px-4 py-3.5 text-sm transition-all duration-300 active:scale-[0.98] active:bg-white/30"
            >
              Program
            </Link>

            <div className="my-1 h-px bg-black/[0.06]" />

            <Link
              href="/pendaftaran"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-[18px] bg-[#170401]/90 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 active:scale-[0.98]"
            >
              Daftar Sekarang
            </Link>

          </div>
        </div>

      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#f5f1e8] pt-24 md:pt-28">

        {/* ATMOSPHERIC LIGHT */}

        <div className="pointer-events-none absolute right-[5%] top-[8%] h-[350px] w-[350px] rounded-full bg-[#f5d98a]/20 blur-[110px] sm:h-[500px] sm:w-[500px]" />

        <div className="pointer-events-none absolute left-[-10%] top-[40%] h-[280px] w-[280px] rounded-full bg-[#f5b446]/[0.06] blur-[100px]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 md:px-8 md:pb-20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">

          {/* HERO IMAGE */}

          <div className="order-1 relative mb-9 lg:order-2 lg:mb-0">

            <div className="absolute -inset-4 rounded-[2rem] bg-[#b58b3b]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-black/[0.08] bg-white/35 p-2 shadow-[0_20px_60px_rgba(23,4,1,0.10)] backdrop-blur-xl sm:rounded-[2rem] sm:p-3">

              <img
                src="/HERO.webp"
                alt="Jegeg Bagus FEB Unmas 2027"
                className="h-auto w-full rounded-[1.1rem] object-cover transition-transform duration-700 hover:scale-[1.015] sm:rounded-[1.5rem]"
              />

            </div>

            {/* FLOATING LABEL */}

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-[#f5f1e8]/70 p-5 shadow-xl backdrop-blur-xl md:block">

              <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Jegeg Bagus
              </p>

              <p className="mt-1 font-serif text-xl">
                FEB UNMAS 2027
              </p>

            </div>

          </div>

          {/* HERO CONTENT */}

          <div className="order-2 relative z-10 lg:order-1">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a742f] sm:text-xs">
              Pemilihan Jegeg Bagus FEB Unmas 2027
            </p>

            <h1 className="font-serif text-[3.4rem] leading-[0.88] tracking-tight text-[#2a1616] sm:text-6xl md:text-7xl lg:text-[5.8rem]">

              Anggakara

              <br />

              <span className="text-[#a77c2f]">
                Baswara
              </span>

              <br />

              Danirmala

            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7 md:text-lg">
              Sebuah perjalanan untuk mengenal potensi,
              membangun karakter, memperluas wawasan,
              dan mengambil peran sebagai representasi
              mahasiswa FEB Unmas.
            </p>

            {/* BUTTON */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/pendaftaran"
                className="flex items-center justify-center rounded-full bg-[#170401] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-[#f5b446] hover:text-[#170401] active:scale-[0.97]"
              >
                Daftar Sekarang
              </Link>

              <a
                href="#tentang"
                className="flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#170401] hover:text-white active:scale-[0.97]"
              >
                Kenali Pemilihan
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* COUNTDOWN */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#2a1616] py-8 text-[#f5f1e8] md:py-10">

        {/* INTERNAL LIGHT ONLY */}

        <div className="pointer-events-none absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f5d98a]/10 blur-[100px]" />

        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f5b446]/10 blur-[100px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d98a]/[0.035] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#f5d98a]/75 sm:text-xs">
            Menuju Grand Final
          </p>

          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl">
            17 Januari 2027
          </h2>

          <div className="mx-auto mt-5 grid max-w-3xl grid-cols-4 gap-2 sm:gap-3 md:mt-6 md:gap-6">

            <CountdownItem
              value={timeLeft.days}
              label="Hari"
            />

            <CountdownItem
              value={timeLeft.hours}
              label="Jam"
            />

            <CountdownItem
              value={timeLeft.minutes}
              label="Menit"
            />

            <CountdownItem
              value={timeLeft.seconds}
              label="Detik"
            />

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* TENTANG */}
      {/* ========================================================= */}

      <section
        id="tentang"
        className="relative scroll-mt-24 overflow-hidden bg-[#e9e1d2] py-16 sm:py-20 md:py-24"
      >

        {/* SOFT ATMOSPHERE */}

        <div className="pointer-events-none absolute left-[5%] top-[10%] h-64 w-64 rounded-full bg-[#f5d98a]/[0.07] blur-[100px]" />

        <div className="pointer-events-none absolute right-[10%] bottom-[20%] h-72 w-72 rounded-full bg-[#f5b446]/[0.05] blur-[110px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-2 lg:items-start">

          {/* KIRI */}

          <div>

            <p className="section-label">
              Pemilihan Jegeg Bagus
            </p>

            <h2 className="mt-3 whitespace-nowrap font-serif text-3xl leading-[1.05] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">
              Bukan hanya kompetisi
            </h2>

            {/* VIDEO */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-black shadow-[0_15px_50px_rgba(23,4,1,0.15)] sm:mt-10">

              <div className="relative aspect-video w-full">

                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/xdbuhE2Nz7c?start=62&autoplay=1&mute=1&rel=0"
                  title="Pemilihan Jegeg Bagus FEB Unmas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

          {/* KANAN */}

          <div className="space-y-5 text-sm leading-7 text-black/65 sm:text-base sm:leading-8 lg:pt-30">

            <p>
              Pemilihan Jegeg Bagus FEB Unmas merupakan
              ruang bagi mahasiswa untuk mengembangkan
              potensi diri, membangun karakter, dan
              memperluas wawasan.
            </p>

            <p>
              Lebih dari sekadar mencari seorang pemenang,
              pemilihan ini menjadi bagian dari perjalanan
              mahasiswa untuk belajar, bertumbuh, dan
              mengambil peran sebagai representasi Fakultas
              Ekonomi dan Bisnis Universitas Mahasaraswati
              Denpasar.
            </p>

            <div className="border-l-2 border-[#f5b446] pl-5 font-serif text-lg leading-7 text-black/80 sm:text-xl sm:leading-8">
              “Tumbuh menjadi pribadi yang mampu membawa
              nama fakultas dengan karakter, wawasan,
              dan tanggung jawab.”
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* LENTERA + ALUR */}
      {/* ========================================================= */}

      <section
        id="lentera"
        className="relative scroll-mt-24 overflow-hidden bg-[#170401] text-white"
      >

        {/* ===================================================== */}
        {/* ATMOSPHERE */}
        {/* ===================================================== */}

        <div className="pointer-events-none absolute left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#f5d98a]/15 blur-[120px] glow-animation" />

        <div className="pointer-events-none absolute right-[-10%] top-[45%] h-[400px] w-[400px] rounded-full bg-[#f5b446]/[0.06] blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,217,138,0.14)_0%,rgba(245,180,70,0.06)_20%,rgba(23,4,1,0.65)_48%,#170401_78%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,1,0,0.45)_65%,rgba(5,1,0,0.85)_100%)]" />

        {/* ===================================================== */}
        {/* FIREFLIES */}
        {/* ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          <span className="firefly-animation absolute left-[8%] top-[14%] h-1 w-1 rounded-full bg-[#f5d98a]/40 blur-[1px]" />

          <span className="firefly-animation absolute left-[18%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/30 blur-[1px] [animation-delay:1.4s]" />

          <span className="firefly-animation absolute left-[30%] top-[18%] h-1 w-1 rounded-full bg-[#f5d98a]/25 blur-[1px] [animation-delay:2.2s]" />

          <span className="firefly-animation absolute left-[42%] top-[55%] h-1 w-1 rounded-full bg-[#f5d98a]/35 blur-[1px] [animation-delay:0.8s]" />

          <span className="firefly-animation absolute left-[55%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 blur-[1px] [animation-delay:2.8s]" />

          <span className="firefly-animation absolute left-[68%] top-[16%] h-1 w-1 rounded-full bg-[#f5b446]/30 blur-[1px] [animation-delay:1.8s]" />

          <span className="firefly-animation absolute left-[78%] top-[45%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/30 blur-[1px] [animation-delay:3.2s]" />

          <span className="firefly-animation absolute left-[90%] top-[25%] h-1 w-1 rounded-full bg-[#f5d98a]/25 blur-[1px] [animation-delay:1.1s]" />

          <span className="firefly-animation absolute left-[12%] top-[72%] h-1 w-1 rounded-full bg-[#f5d98a]/20 blur-[1px] [animation-delay:2.5s]" />

          <span className="firefly-animation absolute left-[27%] top-[82%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 blur-[1px] [animation-delay:1.7s]" />

          <span className="firefly-animation absolute left-[58%] top-[78%] h-1 w-1 rounded-full bg-[#f5b446]/25 blur-[1px] [animation-delay:3.5s]" />

          <span className="firefly-animation absolute left-[84%] top-[80%] h-1 w-1 rounded-full bg-[#f5d98a]/20 blur-[1px] [animation-delay:0.5s]" />

        </div>

        {/* ===================================================== */}
        {/* LENTERA CONTENT */}
        {/* ===================================================== */}

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* LOGO */}

          <div className="relative flex items-center justify-center">

            <img
              src="/LOGO PEMILIHAN.webp"
              alt=""
              aria-hidden="true"
              className="absolute z-0 w-[62%] max-w-[250px] scale-105 opacity-80 blur-xl drop-shadow-[0_0_35px_rgba(255,220,140,0.9)] sm:w-[70%] sm:max-w-[280px]"
            />

            <img
              src="/LOGO PEMILIHAN.webp"
              alt=""
              aria-hidden="true"
              className="absolute z-0 w-[62%] max-w-[250px] opacity-70 blur-md drop-shadow-[0_0_25px_rgba(255,225,150,1)] sm:w-[70%] sm:max-w-[280px]"
            />

            <img
              src="/LOGO PEMILIHAN.webp"
              alt="Logo Pemilihan Jegeg Bagus FEB Unmas 2027"
              className="relative z-10 mx-auto w-[62%] max-w-[250px] object-contain drop-shadow-[0_0_18px_rgba(255,220,140,0.75)] transition-transform duration-700 hover:scale-[1.025] sm:w-[70%] sm:max-w-[280px] lg:w-full"
            />

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5d98a]/70 sm:text-xs">
              Filosofi
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              LENTERA
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
              Lentera menjadi representasi cahaya yang
              membantu seseorang menemukan arah.
              Pemilihan kali ini, lentera menggambarkan
              semangat, harapan, dan dedikasi generasi
              muda FEB Unmas.
            </p>

            {/* CONCEPT */}

            <div className="mt-7 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">

              <ConceptCard
                number="01"
                title="Anggakara"
                text="Berani melangkah"
              />

              <ConceptCard
                number="02"
                title="Baswara"
                text="Cahaya yang menginspirasi"
              />

              <ConceptCard
                number="03"
                title="Danirmala"
                text="Tulus dalam pengabdian"
              />

            </div>

          </div>

        </div>

        {/* ===================================================== */}
        {/* ALUR */}
        {/* ===================================================== */}

        <div
          id="alur"
          className="relative scroll-mt-24"
        >

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[60%] -translate-x-1/2 rounded-full bg-[#f5d98a]/[0.035] blur-[90px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-14 md:px-8 md:pb-32 md:pt-20">

            <div className="max-w-2xl">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5d98a]/70 sm:text-xs sm:tracking-[0.35em]">
                Rangkaian Pemilihan
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Tahapan Perjalanan
              </h2>

            </div>

            {/* TIMELINE */}

            <div
              ref={timelineRef}
              className="no-scrollbar -mx-5 mt-16 overflow-x-auto px-5 pb-8 sm:mx-0 sm:mt-20 sm:px-0"
            >

              <div className="relative min-w-[820px] px-4 sm:px-0">

                {/* BASE LINE */}

                <div className="absolute left-4 right-4 top-3 h-px bg-[#f5d98a]/15" />

                {/* ANIMATED LINE */}

                <div
                  className={`absolute left-4 top-3 h-px bg-gradient-to-r from-[#f5d98a] via-[#f5d98a] to-[#f5d98a]/20 shadow-[0_0_12px_rgba(245,217,138,0.8)] transition-all duration-[1800ms] ease-out ${
                    timelineVisible
                      ? "w-[calc(100%-32px)] opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                {/* ITEMS */}

                <div className="relative grid grid-cols-5">

                  <TimelineItem
                    number="01"
                    title="Pendaftaran"
                    visible={timelineVisible}
                    delay="0ms"
                  />

                  <TimelineItem
                    number="02"
                    title="Seleksi"
                    visible={timelineVisible}
                    delay="180ms"
                  />

                  <TimelineItem
                    number="03"
                    title="Pra Karantina"
                    visible={timelineVisible}
                    delay="360ms"
                  />

                  <TimelineItem
                    number="04"
                    title="Karantina"
                    visible={timelineVisible}
                    delay="540ms"
                  />

                  <TimelineItem
                    number="05"
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
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#170401] py-20 text-white sm:py-24 md:py-32">

        {/* INTERNAL ATMOSPHERE */}

        <div className="pointer-events-none absolute left-1/2 top-[20%] h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#f5d98a]/[0.035] blur-[100px]" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 sm:text-xs sm:tracking-[0.35em]">
            Saatnya mengambil peran
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">

            Siap menjadi

            <br />

            bagian dari perjalanan?

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7">
            Ikuti Pemilihan Jegeg Bagus FEB Unmas 2027
            dan temukan potensi yang ada dalam dirimu.
          </p>

          <Link
            href="/pendaftaran"
            className="mt-7 inline-flex rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white shadow-xl backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:text-[#170401] active:scale-[0.97] sm:mt-9"
          >
            Mulai Pendaftaran
          </Link>

        </div>

      </section>

      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#e9e1d2] py-20 sm:py-24 md:py-28">

        {/* SOFT LIGHT */}

        <div className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-[#f5d98a]/[0.07] blur-[100px]" />

        <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-72 w-72 rounded-full bg-[#f5b446]/[0.05] blur-[110px]" />

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">

            {/* TITLE */}

            <div>

              <p className="section-label">
                Narahubung
              </p>

              <h2 className="section-title">

                Ada yang ingin

                <br />

                <span className="text-[#a77c2f]">
                  ditanyakan?
                </span>

              </h2>

            </div>

            {/* CONTACT */}

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">

              <ContactCard
                number="Narahubung 01"
                name="Bagus Diki"
                role="Ketua Panitia"
              />

              <ContactCard
                number="Narahubung 02"
                name="Jegeg Ayu"
                role="Wakil Ketua"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-white/10 !bg-[#2a1616] py-8 text-[#f5f1e8] sm:py-10">

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

          <div className="text-xs text-white/40">
            © 2027 Jegeg Bagus FEB Unmas
          </div>

        </div>

      </footer>

    </main>
  );
}


/* =============================================================== */
/* COUNTDOWN ITEM */
/* =============================================================== */

function CountdownItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.08] px-2 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.11] sm:px-4 sm:py-5 md:px-6 md:py-7">

      <p className="font-serif text-2xl sm:text-3xl md:text-5xl">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/40 sm:mt-2 sm:text-[9px] md:text-xs">
        {label}
      </p>

    </div>
  );
}


/* =============================================================== */
/* CONCEPT CARD */
/* =============================================================== */

function ConceptCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white/[0.07] active:scale-[0.99] sm:p-5">

      <p className="text-[9px] tracking-[0.2em] text-[#f5d98a]/50">
        {number}
      </p>

      <h3 className="mt-2 font-serif text-base text-white sm:text-xl">
        {title}
      </h3>

      <p className="mt-2 text-[11px] leading-4 text-white/45 sm:text-xs sm:leading-5">
        {text}
      </p>

    </div>
  );
}


/* =============================================================== */
/* TIMELINE ITEM */
/* =============================================================== */

function TimelineItem({
  number,
  title,
  visible,
  delay,
}: {
  number: string;
  title: string;
  visible: boolean;
  delay: string;
}) {
  return (
    <div
      className={`relative px-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.96] opacity-0"
      }`}
      style={{
        transitionDelay: delay,
      }}
    >

      {/* DOT */}

      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#f5d98a]/50 bg-[#170401] shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]">

        <div className="firefly-animation h-2 w-2 rounded-full bg-[#f5d98a] shadow-[0_0_12px_rgba(245,217,138,0.8)]" />

      </div>

      {/* TEXT */}

      <div className="mt-7 pr-6 sm:pr-10">

        <p className="text-[10px] font-medium tracking-[0.25em] text-[#f5d98a]/70 sm:text-xs">
          {number}
        </p>

        <h3 className="mt-2 max-w-[150px] font-serif text-base leading-tight text-white sm:text-lg md:text-xl">
          {title}
        </h3>

      </div>

    </div>
  );
}


/* =============================================================== */
/* CONTACT CARD */
/* =============================================================== */

function ContactCard({
  number,
  name,
  role,
}: {
  number: string;
  name: string;
  role: string;
}) {
  return (
    <div className="group rounded-[24px] border border-black/[0.08] bg-white/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white/30 active:scale-[0.99] sm:p-6">

      <p className="text-[10px] uppercase tracking-widest text-black/40">
        {number}
      </p>

      <h3 className="mt-3 font-serif text-2xl">
        {name}
      </h3>

      <p className="mt-2 text-sm text-black/50">
        {role}
      </p>

      <a
        href="#"
        className="mt-5 inline-block text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
      >
        Hubungi →
      </a>

    </div>
  );
}