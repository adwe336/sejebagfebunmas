"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ========================================================= */
/* TYPES */
/* ========================================================= */

type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

/* ========================================================= */
/* COUNTDOWN TARGET */
/* ========================================================= */

const countdownTargets = [
  {
    title: "Grand Final",
    target: "2027-01-17T19:00:00+08:00",
  },
];

/* ========================================================= */
/* COUNTDOWN FUNCTION */
/* ========================================================= */

function getCountdown(target: string): CountdownValue {
  const difference =
    new Date(target).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: "000",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  return {
    days: String(days).padStart(3, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

/* ========================================================= */
/* MAIN PAGE */
/* ========================================================= */

export default function Home() {
  const [countdowns, setCountdowns] =
    useState<CountdownValue[]>(
      countdownTargets.map(() => ({
        days: "000",
        hours: "00",
        minutes: "00",
        seconds: "00",
      }))
    );

  const [menuOpen, setMenuOpen] = useState(false);

  const [timelineVisible, setTimelineVisible] =
    useState(false);

  const [showPanitiaPopup, setShowPanitiaPopup] =
    useState(false);

  const [activeRegistration, setActiveRegistration] =
    useState(0);

  const POPUP_SESSION_KEY =
    "jebag-feb-panitia-popup-shown";

  const registrationRef =
    useRef<HTMLDivElement>(null);

  const timelineRef =
    useRef<HTMLDivElement>(null);

  const navRef =
    useRef<HTMLElement>(null);

  /* ========================================================= */
  /* PANITIA POPUP */
  /* ========================================================= */

  useEffect(() => {
    if (
      sessionStorage.getItem(POPUP_SESSION_KEY) === "1"
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(
        POPUP_SESSION_KEY,
        "1"
      );

      setShowPanitiaPopup(true);
    }, 1800);

    return () =>
      window.clearTimeout(timer);
  }, []);

  /* ========================================================= */
  /* LOCK BODY WHEN POPUP OPEN */
  /* ========================================================= */

  useEffect(() => {
    if (!showPanitiaPopup) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setShowPanitiaPopup(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [showPanitiaPopup]);

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

    const interval = window.setInterval(
      updateCountdowns,
      1000
    );

    return () =>
      window.clearInterval(interval);
  }, []);

  /* ========================================================= */
  /* REGISTRATION SLIDER */
  /* ========================================================= */

  const handleRegistrationScroll = () => {
    const container =
      registrationRef.current;

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

    setActiveRegistration(
      closestIndex
    );
  };

  /* ========================================================= */
  /* MOBILE MENU — CLICK OUTSIDE */
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
  /* CLOSE MENU ON DESKTOP */
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
    const element =
      timelineRef.current;

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

    return () =>
      observer.disconnect();
  }, []);

  /* ========================================================= */
  /* SCROLL TO REGISTRATION */
  /* ========================================================= */

  const scrollToRegistration = () => {
    const section =
      document.getElementById(
        "registration"
      );

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ========================================================= */
  /* RETURN */
  /* ========================================================= */

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e1d2] text-[#191814]">

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav
        ref={navRef}
        className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 rounded-full border border-black/[0.08] bg-[#f5f1e8]/60 shadow-[0_8px_30px_rgba(23,4,1,0.08)] backdrop-blur-2xl backdrop-saturate-150"
      >
        <div className="flex h-12 items-center justify-between px-3 sm:h-14 sm:px-4">

          {/* LOGO */}

          <a
            href="#"
            onClick={() =>
              setMenuOpen(false)
            }
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

            <a
              href="#tentang"
              className="nav-link"
            >
              Tentang
            </a>

            <a
              href="#lentera"
              className="nav-link"
            >
              Lentera
            </a>

            <a
              href="#alur"
              className="nav-link"
            >
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
              href="#"
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
                src="/POSTER JEBAG FEB.webp"
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
              Pendaftaran Finalis

            </h1>

            <p className="mt-6 max-w-xl text-base leading-6 text-black/60 sm:text-base sm:leading-7 md:text-lg">
              Sebuah perjalanan untuk mengenal
              potensi, membangun karakter,
              memperluas wawasan, dan mengambil
              peran sebagai representasi
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
                Syarat & Ketentuan
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
