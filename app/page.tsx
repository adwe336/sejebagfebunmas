"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =============================================================== */
/* LINKS */
/* =============================================================== */

const PANITIA_FORM_URL = "https://forms.gle/Nt1ehuB7dHEGAkGM9";

/* =============================================================== */
/* WHATSAPP */
/* =============================================================== */
/*
  Isi dengan nomor WhatsApp menggunakan format internasional
  tanpa tanda + dan tanpa spasi.

  Contoh:
  081234567890
  menjadi:
  6281234567890
*/

const WHATSAPP_AYU = "+6285956682525";
const WHATSAPP_DIKI = "+6287700571658";

function whatsappLink(
  number: string,
  message: string
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message
  )}`;
}

/* =============================================================== */
/* COUNTDOWN TARGETS */
/* =============================================================== */

const countdownTargets = [
  {
    title: "Grand Final",
    dateLabel: "17 Januari 2027",
    target: new Date(
      "2027-01-17T00:00:00+08:00"
    ).getTime(),
  },
];

/* =============================================================== */
/* TYPES */
/* =============================================================== */

type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

/* =============================================================== */
/* HELPERS */
/* =============================================================== */

function getCountdown(target: number): CountdownValue {
  const now = new Date().getTime();
  const distance = target - now;

  if (distance <= 0) {
    return {
      days: "000",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
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

  return {
    days: String(days).padStart(3, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

/* =============================================================== */
/* MAIN PAGE */
/* =============================================================== */

export default function Home() {
  const [countdowns, setCountdowns] = useState<
    CountdownValue[]
  >(
    countdownTargets.map((item) =>
      getCountdown(item.target)
    )
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [timelineVisible, setTimelineVisible] =
    useState(false);

  /* REGISTRATION SLIDER */

  const [activeRegistration, setActiveRegistration] =
    useState(0);

  const registrationRef =
    useRef<HTMLDivElement>(null);

  const timelineRef =
    useRef<HTMLDivElement>(null);

  const navRef =
    useRef<HTMLElement>(null);

  /* ========================================================= */
  /* COUNTDOWN */
  /* ========================================================= */

  useEffect(() => {
    const updateCountdowns = () => {
      setCountdowns(
        countdownTargets.map((item) =>
          getCountdown(item.target)
        )
      );
    };

    updateCountdowns();

    const interval = setInterval(
      updateCountdowns,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  /* ========================================================= */
  /* REGISTRATION SLIDER */
  /* ========================================================= */

  const handleRegistrationScroll = () => {
    const container = registrationRef.current;

    if (!container) return;

    const cards = Array.from(
      container.children
    ) as HTMLElement[];

    if (!cards.length) return;

    const containerCenter =
      container.scrollLeft +
      container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.offsetLeft +
        card.offsetWidth / 2;

      const distance = Math.abs(
        containerCenter - cardCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveRegistration(closestIndex);
  };

  /* ========================================================= */
  /* CLOSE MOBILE MENU OUTSIDE */
  /* ========================================================= */

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(
          event.target as Node
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  /* ========================================================= */
  /* CLOSE MENU DESKTOP */
  /* ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* ========================================================= */
  /* TIMELINE SCROLL REVEAL */
  /* ========================================================= */

  useEffect(() => {
    const element = timelineRef.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
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

  const scrollToRegistration = () => {
    const section = document.getElementById("registration");

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e1d2] text-[#191814]">

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav
        ref={navRef}
        className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-5xl -translate-x-1/2 rounded-full border border-black/[0.08] bg-[#f5f1e8]/60 shadow-[0_8px_30px_rgba(23,4,1,0.08)] backdrop-blur-2xl backdrop-saturate-150"
      >
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

            <div className="leading-tight">
              <p className="text-[10px] font-semibold tracking-[0.08em] sm:text-[11px] sm:tracking-wide">
                JEGEG BAGUS
              </p>

              <p className="text-[7px] uppercase tracking-[0.18em] text-black/50 sm:text-[8px]">
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
              href="#registration"
              onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                scrollToRegistration();
              }}
              className="hidden rounded-full bg-[#170401] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] sm:block"
            >
              Daftar Sekarang
            </Link>

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen(
                  (prev) => !prev
                )
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
              href="#tentang"
              onClick={() =>
                setMenuOpen(false)
              }
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Tentang
            </a>

            <a
              href="#lentera"
              onClick={() =>
                setMenuOpen(false)
              }
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Lentera
            </a>

            <a
              href="#alur"
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
              href="#registration"
              onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                scrollToRegistration();
              }}
              className="flex items-center justify-center rounded-[18px] bg-[#2a1616]/90 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
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

        <div
          className="pointer-events-none absolute right-[-5%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#f5d98a]/25 blur-[120px] sm:h-[600px] sm:w-[600px]"
        />

        <div
          className="pointer-events-none absolute left-[-15%] top-[45%] h-[350px] w-[350px] rounded-full bg-[#e5b45b]/10 blur-[120px]"
        />

        <div
          className="pointer-events-none absolute left-1/2 top-[35%] h-[400px] w-[65%] -translate-x-1/2 rounded-full bg-white/40 blur-[120px]"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 md:px-8 md:pb-20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">

          {/* IMAGE */}

          <div className="order-1 relative mb-9 lg:order-2 lg:mb-0">

            <div className="absolute -inset-4 rounded-[2rem] bg-[#b58b3b]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-black/[0.08] bg-white/35 p-2 shadow-[0_20px_60px_rgba(23,4,1,0.10)] backdrop-blur-xl sm:rounded-[2rem] sm:p-3">

              <img
                src="/HERO.webp"
                alt="Jegeg Bagus FEB Unmas 2027"
                className="h-auto w-full rounded-[1.1rem] object-cover transition-transform duration-700 hover:scale-[1.015] sm:rounded-[1.5rem]"
              />

            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-[#f5f1e8]/70 p-5 shadow-xl backdrop-blur-xl md:block">

              <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Jegeg Bagus
              </p>

              <p className="mt-1 font-serif text-xl">
                FEB UNMAS 2027
              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div className="order-2 relative z-10 lg:order-1">

            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a742f] sm:text-xs md:text-[13.5px]">
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

            <p className="mt-6 max-w-xl text-base leading-6 text-black/60 sm:text-base sm:leading-7 md:text-lg">
              Sebuah perjalanan untuk mengenal potensi,
              membangun karakter, memperluas wawasan,
              dan mengambil peran sebagai representasi
              mahasiswa FEB Unmas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                href="#registration"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToRegistration();
                }}
                className="flex items-center justify-center rounded-full bg-[#2a1616] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-[#e8e2da] hover:text-[#9b7637]"
              >
                Daftar Sekarang
              </Link>

              <a
                href="#tentang"
                className="flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold transition-all duration-500 hover:bg-[#9b7637] hover:text-white"
              >
                Kenali Pemilihan
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* COUNTDOWN / REGISTRATION */}
      {/* ========================================================= */}

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
              badge="PENDAFTARAN DIPERPANJANG"
              title="Daftar Menjadi Panitia Pelaksana"
              date="11–26 September 2026"
              image="/Ayu.webp"
              buttonText="Daftar Panitia"
              href={PANITIA_FORM_URL}
              description="Terbuka bagi mahasiswa FEB Unmas."
            />

            <FinalistCard />

            <CountdownCard
              title="Grand Final"
              dateLabel="17 Januari 2027"
              countdown={countdowns[0]}
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

      {/* ========================================================= */}
      {/* TENTANG */}
      {/* ========================================================= */}

      <section
        id="tentang"
        className="relative scroll-mt-24 overflow-hidden bg-[#e9e1d2] py-16 sm:py-20 md:py-24"
      >

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.65),transparent_28%),radial-gradient(circle_at_90%_75%,rgba(245,217,138,0.18),transparent_32%),linear-gradient(135deg,#eee7da_0%,#e5dac8_48%,#dcd0bc_100%)]" />

        <div className="pointer-events-none absolute left-1/2 top-[20%] h-[400px] w-[60%] -translate-x-1/2 rounded-full bg-white/35 blur-[120px]" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-2 lg:items-start">

          <div>

            <p className="section-label !text-[#9b7637]">
              Pemilihan Jegeg Bagus
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-[1.05] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">
              Bukan Hanya Kompetisi
            </h2>

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

          <div className="space-y-5 text-base leading-7 text-black/65 sm:text-base sm:leading-8 lg:pt-40 md:text-lg">

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
        className="relative overflow-hidden bg-[#170401] text-white"
      >

        {/* ===================================================== */}
        {/* LIGHT BACKGROUND */}
        {/* ===================================================== */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(245,217,138,0.18),transparent_24%),radial-gradient(circle_at_15%_42%,rgba(245,217,138,0.045),transparent_23%),radial-gradient(circle_at_85%_62%,rgba(245,217,138,0.045),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(255,238,188,0.035),transparent_35%),linear-gradient(135deg,#170401_0%,#25100b_50%,#170401_100%)]" />

        {/* SMALL LIGHTS */}

        <div className="pointer-events-none absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-[#f5d98a]/30 shadow-[0_0_25px_rgba(245,217,138,0.55)] blur-[1px]" />

        <div className="pointer-events-none absolute right-[15%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/35 shadow-[0_0_22px_rgba(245,217,138,0.6)]" />

        <div className="pointer-events-none absolute left-[24%] top-[66%] h-1 w-1 rounded-full bg-white/35 shadow-[0_0_20px_rgba(255,255,255,0.55)]" />

        <div className="pointer-events-none absolute right-[26%] top-[73%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 shadow-[0_0_22px_rgba(245,217,138,0.6)]" />

        {/* ===================================================== */}
        {/* LENTERA CONTENT */}
        {/* ===================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">

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

          {/* =================================================== */}
          {/* LENTERA LOGO - BRIGHTER GLOW */}
          {/* =================================================== */}

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
              className="lantern-logo-glow relative z-10 w-[65%] max-w-[250px] object-contain transition-transform duration-700 hover:scale-[1.025] sm:w-[60%]"
            />

          </div>

          {/* =================================================== */}
          {/* CONCEPT CARDS */}
          {/* =================================================== */}

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">

            <SimpleConcept
              title="Anggakara"
              text="Berani melangkah."
            />

            <SimpleConcept
              title="Baswara"
              text="Menjadi cahaya."
            />

            <SimpleConcept
              title="Danirmala"
              text="Tulus dalam pengabdian."
            />

          </div>

          <div className="mx-auto mt-10 max-w-xl border-t border-white/10 pt-8 text-center sm:mt-14">

            <p className="font-serif text-lg leading-7 text-white/75 sm:text-xl">
              “Berani melangkah, menjadi cahaya,
              dan tumbuh dengan niat yang tulus.”
            </p>

          </div>

        </div>

        {/* ===================================================== */}
        {/* ALUR */}
        {/* ===================================================== */}

        <div
          ref={timelineRef}
          id="alur"
          className="relative scroll-mt-24"
        >

          <div className="relative z-10 mx-auto mt-2 max-w-7xl px-5 pb-24 md:px-8 md:pb-32 md:pt-10">

            <div className="max-w-2xl">

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5d98a]/60">
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

            {/* MOBILE */}

            <div className="relative mt-14 sm:hidden">

              <div className="absolute bottom-3 left-1/2 top-3 w-px -translate-x-1/2 bg-[#f5d98a]/15" />

              <div
                className={`
                  absolute
                  left-1/2
                  top-3
                  w-px
                  -translate-x-1/2
                  bg-[#f5d98a]
                  shadow-[0_0_12px_rgba(245,217,138,0.8)]
                  transition-all
                  duration-[1800ms]
                  ease-out
                  ${
                    timelineVisible
                      ? "h-[calc(100%-24px)] opacity-100"
                      : "h-0 opacity-0"
                  }
                `}
              />

              <div className="relative flex flex-col gap-9">

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

            {/* DESKTOP */}

            <div className="no-scrollbar mt-16 hidden overflow-x-auto pb-8 sm:block sm:mt-20">

              <div className="relative min-w-[820px] px-4">

                <div className="absolute left-4 right-4 top-3 h-px bg-[#f5d98a]/15" />

                <div
                  className={`
                    absolute left-4 top-3 h-px
                    bg-gradient-to-r
                    from-[#f5d98a]
                    via-[#f5d98a]
                    to-[#f5d98a]/20
                    shadow-[0_0_12px_rgba(245,217,138,0.8)]
                    transition-all duration-[1800ms]
                    ease-out
                    ${
                      timelineVisible
                        ? "w-[calc(100%-32px)] opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />

                <div className="relative grid grid-cols-5">

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
      {/* CONTACT / NARAHUBUNG */}
      {/* ========================================================= */}

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
                Unmas 2027.
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

      {/* ========================================================= */}
      {/* CUSTOM ANIMATIONS */}
      {/* ========================================================= */}

      <style jsx global>{`
        @keyframes lanternGlow {
          0%,
          100% {
            filter:
              drop-shadow(
                0 0 16px
                rgba(255, 246, 223, 0.28)
              )
              drop-shadow(
                0 0 38px
                rgba(245, 217, 138, 0.20)
              );
          }

          50% {
            filter:
              drop-shadow(
                0 0 24px
                rgba(255, 246, 223, 0.50)
              )
              drop-shadow(
                0 0 60px
                rgba(245, 217, 138, 0.34)
              );
          }
        }

        .lantern-logo-glow {
          animation:
            lanternGlow
            4s
            ease-in-out
            infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .lantern-logo-glow {
            animation: none;
          }
        }
      `}</style>

    </main>
  );
}

/* =============================================================== */
/* REGISTRATION CARD */
/* =============================================================== */

function RegistrationCard({
  badge,
  title,
  date,
  image,
  buttonText,
  href,
  description,
}: {
  badge: string;
  title: string;
  date: string;
  image: string;
  buttonText: string;
  href: string;
  description: string;
}) {
  return (
    <div className="group relative aspect-[4/5] min-w-[86vw] snap-center overflow-hidden rounded-[30px] border border-white/[0.14] bg-white/[0.055] shadow-[0_25px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl sm:min-w-[500px] md:min-w-0">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025)_45%,rgba(0,0,0,0.20))]" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f5d98a]/[0.10] blur-[90px]" />

      <div className="absolute left-5 right-5 top-5 h-[70%] overflow-hidden rounded-[24px] shadow-[0_20px_45px_rgba(0,0,0,0.28)] transition-transform duration-700 group-hover:-translate-y-1 sm:left-6 sm:right-6 sm:top-6">

        <div className="relative h-full w-full overflow-hidden rounded-[24px]">

          <img
            src={image}
            alt="Jegeg Bagus FEB Unmas"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170401]/30 via-transparent to-transparent" />

        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[63%] bg-gradient-to-t from-[#100201] via-[#170401]/90 to-transparent" />

      <div className="relative z-20 flex h-full flex-col p-5 sm:p-6">

        <div className="relative z-20">

          <div className="inline-flex items-center rounded-full border border-[#f5d98a]/5 bg-[#E30000]/80 px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">

            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#f5d98a] shadow-[0_0_8px_rgba(245,217,138,0.8)]" />

            <p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-[#f5d98a] sm:text-[8px]">
              {badge}
            </p>

          </div>

        </div>

        <div className="relative z-20 mt-auto pt-4">

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5d98a]">
            {date}
          </p>

          <h3 className="mt-2 max-w-[360px] font-serif text-[1.45rem] leading-[1.05] text-white sm:text-3xl">
            {title}
          </h3>

          <p className="mt-2.5 max-w-[390px] text-[11px] leading-[1.45] text-white/55 sm:text-sm sm:leading-6">
            {description}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[10px] font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5d98a] hover:text-[#170401] sm:text-xs"
          >
            {buttonText}
          </a>

        </div>
      </div>
    </div>
  );
}

/* =============================================================== */
/* FINALIST CARD */
/* =============================================================== */

function FinalistCard() {
  return (
    <div className="group relative aspect-[4/5] min-w-[86vw] snap-center overflow-hidden rounded-[30px] border border-white/[0.14] bg-white/[0.055] shadow-[0_25px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl sm:min-w-[500px] md:min-w-0">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(245,217,138,0.14),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025)_45%,rgba(0,0,0,0.20))]" />

      <div className="pointer-events-none absolute left-1/2 top-[-15%] h-60 w-60 -translate-x-1/2 rounded-full bg-[#f5d98a]/10 blur-[90px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#100201] via-[#170401]/90 to-transparent" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">

        <div className="relative z-30">

          <div className="inline-flex items-center rounded-full border border-white/15 bg-[#008A6D]/50 px-3 py-1.5 backdrop-blur-xl">

            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FFDC0F] shadow-[0_0_8px_rgba(245,217,138,0.8)]" />

            <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-[#f5d98a] sm:text-[8px]">
              SEGERA HADIR
            </p>

          </div>

        </div>

        <div className="relative mx-auto mt-4 h-[41%] w-full max-w-[310px] shrink-0">

          {/* BAGUS */}

          <div className="absolute left-[4%] top-2 h-[92%] w-[46%] rotate-[-7deg] overflow-hidden rounded-[25px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:-translate-x-1">

            <div className="relative h-full w-full overflow-hidden rounded-[25px]">

              <img
                src="/Bagus.webp"
                alt="Bagus"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <p className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.2em] text-white/75">
                BAGUS ARIPTA
              </p>

            </div>
          </div>

          {/* JEGEG */}

          <div className="absolute right-[4%] top-7 h-[92%] w-[46%] rotate-[7deg] overflow-hidden rounded-[25px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:translate-x-1">

            <div className="relative h-full w-full overflow-hidden rounded-[25px]">

              <img
                src="/Jegeg.webp"
                alt="Jegeg"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <p className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.2em] text-white/75">
                JEGEG DIAN
              </p>

            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d98a]/10 blur-[70px]" />

        </div>

        <div className="relative z-30 mt-auto pt-3">

          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f5d98a]">
            01–12 Oktober 2026
          </p>

          <h3 className="mt-2 font-serif text-[1.45rem] leading-[1.05] text-white sm:text-3xl">
            Tunjukkan Potensi dan Persiapkan Dirimu!
          </h3>

          <p className="mt-2.5 max-w-[390px] text-[11px] leading-[1.45] text-white/55 sm:text-sm sm:leading-6">
            Terbuka bagi mahasiswa FEB Unmas Semester 1–3.
          </p>

          <Link
            href="/pendaftaran-finalis"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[10px] font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5d98a] hover:text-[#170401] sm:text-xs"
          >
            Daftar Finalis
          </Link>

        </div>
      </div>
    </div>
  );
}

/* =============================================================== */
/* GRAND FINAL COUNTDOWN CARD */
/* =============================================================== */

function CountdownCard({
  title,
  dateLabel,
  countdown,
}: {
  title: string;
  dateLabel: string;
  countdown: CountdownValue;
}) {
  return (
    <div className="relative aspect-[4/5] min-w-[86vw] snap-center overflow-hidden rounded-[30px] border border-white/[0.12] bg-white/[0.075] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl sm:min-w-[500px] sm:p-6 md:min-w-0 md:p-6">

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#fff6df]/10 blur-[70px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#f5b446]/[0.07] blur-[70px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#100201]/80 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col">

        <div className="flex items-start justify-between gap-3">

          <div>

            <p className="text-[8px] uppercase tracking-[0.25em] text-[#f5d98a]/65 sm:text-[9px]">
              Puncak Acara
            </p>

            <h3 className="mt-1.5 font-serif text-[1.45rem] leading-tight text-white sm:text-3xl">
              {title}
            </h3>

          </div>

          <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[7px] uppercase tracking-[0.1em] text-white/45 sm:px-3 sm:text-[9px]">
            {dateLabel}
          </div>

        </div>

        <div className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2">

          <CountdownUnit
            value={countdown.days}
            label="Hari"
          />

          <CountdownUnit
            value={countdown.hours}
            label="Jam"
          />

          <CountdownUnit
            value={countdown.minutes}
            label="Menit"
          />

          <CountdownUnit
            value={countdown.seconds}
            label="Detik"
          />

        </div>

        <div className="mt-auto border-t border-white/[0.08] pt-4">

          <Link
            href="/grand-final"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5d98a] hover:text-[#170401]"
          >
            Selengkapnya
          </Link>

          <div className="relative mt-4 overflow-hidden rounded-[20px] border border-white/10 bg-black/20 p-1 shadow-[0_20px_45px_rgba(0,0,0,0.22)]">

            <div className="relative overflow-hidden rounded-[16px]">

              <img
                src="/Grand Final.webp"
                alt="Grand Final Jegeg Bagus FEB Unmas 2027"
                className="h-[165px] w-full object-cover transition-transform duration-700 hover:scale-[1.025] sm:h-[180px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170401]/60 via-transparent to-transparent" />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* =============================================================== */
/* COUNTDOWN UNIT */
/* =============================================================== */

function CountdownUnit({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[15px] border border-white/[0.09] bg-black/[0.12] px-1.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:rounded-[18px] sm:px-3 sm:py-4">

      <p className="font-serif text-xl leading-none tracking-tight text-white sm:text-3xl">
        {value}
      </p>

      <p className="mt-1.5 text-[6px] uppercase tracking-[0.16em] text-white/30 sm:mt-2 sm:text-[8px]">
        {label}
      </p>

    </div>
  );
}

/* =============================================================== */
/* SIMPLE CONCEPT */
/* =============================================================== */

function SimpleConcept({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#f5d98a]/20 hover:bg-white/[0.06] sm:p-6">

      {/* NUMBER DIHAPUS */}

      <h3 className="font-serif text-xl text-white sm:text-2xl">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">
        {text}
      </p>

    </div>
  );
}

/* =============================================================== */
/* TIMELINE ITEM */
/* =============================================================== */

function TimelineItem({
  date,
  title,
  visible,
  delay,
}: {
  date: string;
  title: string;
  visible: boolean;
  delay: string;
}) {
  return (
    <div
      className={`
        relative px-1
        transition-all duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-[0.96] opacity-0"
        }
      `}
      style={{
        transitionDelay: delay,
      }}
    >

      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#f5d98a]/50 bg-[#170401] shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]">

        <div className="firefly-animation h-2 w-2 rounded-full bg-[#f5d98a] shadow-[0_0_12px_rgba(245,217,138,0.8)]" />

      </div>

      <div className="mt-7 pr-6 sm:pr-10">

        <p className="text-[10px] font-medium tracking-[0.25em] text-[#f5d98a]/70 sm:text-xs">
          {date}
        </p>

        <h3 className="mt-2 max-w-[150px] font-serif text-base leading-tight text-white sm:text-lg md:text-xl">
          {title}
        </h3>

      </div>
    </div>
  );
}

/* =============================================================== */
/* MOBILE TIMELINE ITEM */
/* =============================================================== */

function MobileTimelineItem({
  date,
  title,
  visible,
  delay,
  side,
}: {
  date: string;
  title: string;
  visible: boolean;
  delay: string;
  side: "left" | "right";
}) {
  const isLeft = side === "left";

  return (
    <div
      className={`
        relative
        min-h-[92px]
        transition-all duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-[0.96] opacity-0"
        }
      `}
      style={{
        transitionDelay: delay,
      }}
    >

      <div
        className={`
          absolute
          top-3
          h-px
          bg-[#f5d98a]/25
          ${
            isLeft
              ? "right-1/2 mr-3 w-[calc(50%-24px)]"
              : "left-1/2 ml-3 w-[calc(50%-24px)]"
          }
        `}
      />

      <div className="absolute left-1/2 top-0 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[#f5d98a]/50 bg-[#170401] shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]">

        <div className="firefly-animation h-2 w-2 rounded-full bg-[#f5d98a] shadow-[0_0_12px_rgba(245,217,138,0.8)]" />

      </div>

      <div
        className={`
          w-[42%]
          ${
            isLeft
              ? "mr-auto pr-2 text-right"
              : "ml-auto pl-2 text-left"
          }
        `}
      >

        <p className="text-[9px] font-medium tracking-[0.22em] text-[#f5d98a]/60">
          {date}
        </p>

        <h3 className="mt-1 font-serif text-lg leading-tight text-white">
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
  name,
  role,
  image,
  href,
}: {
  name: string;
  role: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block min-w-0 overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(23,4,1,0.18)] transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      <img
        src={image}
        alt={name}
        className="relative h-full min-h-[180px] w-full object-contain object-center ..."
      />

      {/* iOS-style glass highlight + shadow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170401]/80 via-[#170401]/10 to-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2a1616]/20 to-transparent blur-[2px]" />

      <div className="absolute inset-x-0 bottom-0 p-3.5 text-white sm:p-5">

        <h3 className="mt-1 font-serif text-xl leading-none sm:text-2xl">
          {name}
        </h3>

        <p className="mt-1 text-[9px] text-white/65 sm:text-xs">
          {role}
        </p>
      </div>
    </a>
  );
}
