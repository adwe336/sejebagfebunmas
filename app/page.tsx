"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =============================================================== */
/* COUNTDOWN TARGETS */
/* =============================================================== */

const countdownTargets = [
  {
    title: "Grand Final",
    dateLabel: "17 Januari 2027",
    target: new Date("2027-01-17T00:00:00+08:00").getTime(),
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
  const [countdowns, setCountdowns] = useState<CountdownValue[]>(
    countdownTargets.map((item) => getCountdown(item.target))
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);

  const timelineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

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

    const interval = setInterval(updateCountdowns, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ========================================================= */
  /* CLOSE MOBILE MENU OUTSIDE */
  /* ========================================================= */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
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

  /* ========================================================= */
  /* CLOSE MENU DESKTOP */
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

      <nav
        ref={navRef}
        className="
          fixed left-1/2 top-3 z-50
          w-[calc(100%-24px)]
          max-w-5xl
          -translate-x-1/2
          rounded-full
          border border-black/[0.08]
          bg-[#f5f1e8]/60
          shadow-[0_8px_30px_rgba(23,4,1,0.08)]
          backdrop-blur-2xl
          backdrop-saturate-150
        "
      >
        <div className="flex h-12 items-center justify-between px-3 sm:h-14 sm:px-4">

          {/* LOGO */}

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="
              flex items-center gap-2.5
              transition-transform duration-300
              active:scale-[0.97]
            "
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

            <Link href="/program" className="nav-link">
              Program
            </Link>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-2">

            <Link
              href="/pendaftaran"
              onClick={() => setMenuOpen(false)}
              className="
                hidden rounded-full
                bg-[#170401]
                px-4 py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:bg-[#f5b446]
                hover:text-[#170401]
                sm:block
              "
            >
              Daftar Sekarang
            </Link>

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen ? "Tutup menu" : "Buka menu"
              }
              aria-expanded={menuOpen}
              className="
                group relative
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-white/25
                transition-all
                duration-300
                active:scale-[0.88]
                lg:hidden
              "
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
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Tentang
            </a>

            <a
              href="#lentera"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Lentera
            </a>

            <a
              href="#alur"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Alur
            </a>

            <Link
              href="/program"
              onClick={() => setMenuOpen(false)}
              className="flex rounded-[18px] px-4 py-3.5 text-sm"
            >
              Program
            </Link>

            <div className="my-1 h-px bg-black/[0.06]" />

            <Link
              href="/pendaftaran"
              onClick={() => setMenuOpen(false)}
              className="
                flex items-center justify-center
                rounded-[18px]
                bg-[#2a1616]/90
                px-5 py-3.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
              "
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
          className="
            pointer-events-none
            absolute
            right-[-5%]
            top-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#f5d98a]/25
            blur-[120px]
            sm:h-[600px]
            sm:w-[600px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-15%]
            top-[45%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#e5b45b]/10
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[35%]
            h-[400px]
            w-[65%]
            -translate-x-1/2
            rounded-full
            bg-white/40
            blur-[120px]
          "
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 md:px-8 md:pb-20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">

          {/* IMAGE */}

          <div className="order-1 relative mb-9 lg:order-2 lg:mb-0">

            <div className="absolute -inset-4 rounded-[2rem] bg-[#b58b3b]/10 blur-3xl" />

            <div className="
              relative overflow-hidden
              rounded-[1.5rem]
              border border-black/[0.08]
              bg-white/35
              p-2
              shadow-[0_20px_60px_rgba(23,4,1,0.10)]
              backdrop-blur-xl
              sm:rounded-[2rem]
              sm:p-3
            ">

              <img
                src="/HERO.webp"
                alt="Jegeg Bagus FEB Unmas 2027"
                className="
                  h-auto w-full
                  rounded-[1.1rem]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.015]
                  sm:rounded-[1.5rem]
                "
              />

            </div>

            <div className="
              absolute -bottom-5 -left-4
              hidden rounded-2xl
              border border-black/10
              bg-[#f5f1e8]/70
              p-5 shadow-xl
              backdrop-blur-xl
              md:block
            ">

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

            <h1 className="
              font-serif
              text-[3.4rem]
              leading-[0.88]
              tracking-tight
              text-[#2a1616]
              sm:text-6xl
              md:text-7xl
              lg:text-[5.8rem]
            ">
              Anggakara

              <br />

              <span className="text-[#a77c2f]">
                Baswara
              </span>

              <br />

              Danirmala
            </h1>

            <p className="
              mt-6
              max-w-xl
              text-base
              leading-6
              text-black/60
              sm:text-base
              sm:leading-7
              md:text-lg
            ">
              Sebuah perjalanan untuk mengenal potensi,
              membangun karakter, memperluas wawasan,
              dan mengambil peran sebagai representasi
              mahasiswa FEB Unmas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/pendaftaran"
                className="
                  flex items-center justify-center
                  rounded-full
                  bg-[#2a1616]
                  px-7 py-3.5
                  text-sm font-semibold text-white
                  shadow-lg
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:bg-[#e8e2da]
                  hover:text-[#9b7637]
                "
              >
                Daftar Sekarang
              </Link>

              <a
                href="#tentang"
                className="
                  flex items-center justify-center
                  rounded-full
                  border border-black/15
                  px-7 py-3.5
                  text-sm font-semibold
                  transition-all duration-500
                  hover:bg-[#9b7637]
                  hover:text-white
                "
              >
                Kenali Pemilihan
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* APPLE LOCKSCREEN STYLE COUNTDOWN */}
      {/* ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#21100d]
          py-12
          text-[#f5f1e8]
          sm:py-14
          md:py-16
        "
      >

        {/* ===================================================== */}
        {/* IPHONE WALLPAPER */}
        {/* ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_15%,rgba(245,217,138,0.16),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(184,126,48,0.15),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(116,35,26,0.30),transparent_40%),linear-gradient(135deg,#170401_0%,#351812_45%,#21100d_100%)]
          "
        />

        {/* SOFT CENTER LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[70%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#f5d98a]/[0.035]
            blur-[120px]
          "
        />

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

          <div className="mb-8 text-center sm:mb-10">

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#f5d98a]/65
                sm:text-[10px]
              "
            >
              Perjalanan menuju
            </p>

            <h2
              className="
                mt-2
                font-serif
                text-3xl
                tracking-tight
                sm:text-4xl
              "
            >
              Hitung Mundur
            </h2>

          </div>

          {/* ===================================================== */}
          {/* CARDS */}
          {/* ===================================================== */}

          <div
            className="
              no-scrollbar
              -mx-5
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              px-5
              pb-3
              sm:mx-0
              sm:px-0
              md:grid
              md:grid-cols-3
              md:gap-5
              md:overflow-visible
            "
          >

            {/* ================================================= */}
            {/* PANITIA LEPAS */}
            {/* ================================================= */}

            <RegistrationCard
              type="Panitia Pelaksana"
              badge="OPEN RECRUITMENT • PENDAFTARAN PANITIA LEPAS"
              title="Mari ikut menjadi bagian dari perjalanan."
              date="11–26 September 2026"
              image="/Ayu.webp"
              buttonText="Daftar Panitia"
              href="https://forms.google.com/"
              description="Bergabung sebagai bagian dari panitia pelaksana dan ambil peran di balik perjalanan Pemilihan Jegeg Bagus FEB Unmas 2027."
              imagePosition="center"
            />

            {/* ================================================= */}
            {/* FINALIS */}
            {/* ================================================= */}

            <FinalistCard />

            {/* ================================================= */}
            {/* GRAND FINAL */}
            {/* ================================================= */}

            <CountdownCard
              title="Grand Final"
              dateLabel="17 Januari 2027"
              countdown={countdowns[0]}
            />

          </div>

          {/* MOBILE INDICATOR */}

          <div className="mt-4 flex justify-center gap-1.5 md:hidden">

            <span className="h-1.5 w-5 rounded-full bg-[#f5d98a]" />

            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TENTANG */}
      {/* ========================================================= */}

      <section
        id="tentang"
        className="
          relative
          scroll-mt-24
          overflow-hidden
          bg-[#e9e1d2]
          py-16
          sm:py-20
          md:py-24
        "
      >

        <div className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_10%_15%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_90%_75%,rgba(245,217,138,0.14),transparent_32%),linear-gradient(135deg,#eee7da_0%,#e5dac8_48%,#dcd0bc_100%)]
        " />

        <div className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-[400px]
          w-[60%]
          -translate-x-1/2
          rounded-full
          bg-white/30
          blur-[120px]
        " />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-2 lg:items-start">

          <div>

            <p className="section-label !text-[#9b7637]">
              Pemilihan Jegeg Bagus
            </p>

            <h2 className="
              mt-3
              font-serif
              text-3xl
              leading-[1.05]
              tracking-tight
              text-[#170401]
              sm:text-4xl
              md:text-5xl
            ">
              Bukan hanya kompetisi
            </h2>

            <div className="
              mt-8
              overflow-hidden
              rounded-2xl
              border border-black/10
              bg-black
              shadow-[0_15px_50px_rgba(23,4,1,0.15)]
              sm:mt-10
            ">

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

          <div className="
            space-y-5
            text-base
            leading-7
            text-black/65
            sm:text-base
            sm:leading-8
            lg:pt-40
            md:text-lg
          ">

            <p>
              Lebih dari sekadar mencari seorang pemenang,
              pemilihan ini menjadi bagian dari perjalanan
              mahasiswa untuk belajar, bertumbuh, dan
              mengambil peran sebagai representasi Fakultas
              Ekonomi dan Bisnis Universitas Mahasaraswati
              Denpasar.
            </p>

            <div className="
              border-l-2
              border-[#f5b446]
              pl-5
              font-serif
              text-lg
              leading-7
              text-black/80
              sm:text-xl
              sm:leading-8
            ">
              “Tumbuh menjadi pribadi yang mampu membawa
              nama fakultas dengan karakter, wawasan,
              dan tanggung jawab.”
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* LENTERA */}
      {/* ========================================================= */}

      <section
        id="lentera"
        className="
          relative
          overflow-hidden
          bg-[#170401]
          text-white
        "
      >

        <div className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_28%,rgba(255,248,226,0.13),transparent_22%),radial-gradient(circle_at_15%_20%,rgba(245,217,138,0.12),transparent_28%),radial-gradient(circle_at_90%_65%,rgba(245,180,70,0.07),transparent_30%),linear-gradient(135deg,#170401_0%,#29100b_42%,#170401_100%)]
        " />

        <div className="
          pointer-events-none
          absolute
          left-1/2
          top-[12%]
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-[#fff6df]/[0.045]
          blur-[120px]
        " />

        <div className="
          pointer-events-none
          absolute
          left-[5%]
          top-[35%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#f5d98a]/[0.07]
          blur-[130px]
        " />

        <div className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[50%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#f5b446]/[0.055]
          blur-[130px]
        " />

        <div className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,1,0,0.35)_62%,rgba(5,1,0,0.8)_100%)]
        " />

        {/* FIREFLIES */}

        <div className="pointer-events-none absolute inset-0">

          <span className="firefly-animation absolute left-[8%] top-[14%] h-1 w-1 rounded-full bg-[#fff6df]/35 blur-[1px]" />

          <span className="firefly-animation absolute left-[18%] top-[34%] h-1.5 w-1.5 rounded-full bg-[#fff6df]/25 blur-[1px] [animation-delay:1.4s]" />

          <span className="firefly-animation absolute left-[30%] top-[18%] h-1 w-1 rounded-full bg-[#f5d98a]/25 blur-[1px] [animation-delay:2.2s]" />

          <span className="firefly-animation absolute left-[42%] top-[55%] h-1 w-1 rounded-full bg-[#fff6df]/30 blur-[1px] [animation-delay:0.8s]" />

          <span className="firefly-animation absolute left-[55%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#fff6df]/25 blur-[1px] [animation-delay:2.8s]" />

          <span className="firefly-animation absolute left-[68%] top-[16%] h-1 w-1 rounded-full bg-[#f5b446]/25 blur-[1px] [animation-delay:1.8s]" />

          <span className="firefly-animation absolute left-[78%] top-[45%] h-1.5 w-1.5 rounded-full bg-[#fff6df]/25 blur-[1px] [animation-delay:3.2s]" />

          <span className="firefly-animation absolute left-[90%] top-[25%] h-1 w-1 rounded-full bg-[#fff6df]/20 blur-[1px] [animation-delay:1.1s]" />

        </div>

        {/* LENTERA CONTENT */}

        <div className="
          relative z-10
          mx-auto
          max-w-7xl
          px-5
          py-12
          md:px-8
          md:py-24
        ">

          <div className="
            lg:grid
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-12
          ">

            {/* MOBILE HEADING */}

            <div className="lg:hidden">

              <p className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#f5d98a]/70
                sm:text-xs
              ">
                Filosofi
              </p>

              <h2 className="
                mt-3
                font-serif
                text-4xl
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
              ">
                LENTERA
              </h2>

            </div>

            {/* LOGO */}

            <div className="
              relative
              mt-8
              flex
              items-center
              justify-center
              lg:mt-0
            ">

              <div className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-0
                h-[58%]
                w-[58%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#fff8e8]/[0.18]
                blur-[70px]
              " />

              <div className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-0
                h-[42%]
                w-[42%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#fffdf4]/[0.16]
                blur-[45px]
              " />

              <img
                src="/LOGO PEMILIHAN.webp"
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  z-0
                  w-[62%]
                  max-w-[250px]
                  scale-110
                  opacity-45
                  blur-2xl
                  drop-shadow-[0_0_30px_rgba(255,248,226,0.5)]
                  sm:w-[70%]
                  sm:max-w-[280px]
                "
              />

              <img
                src="/LOGO PEMILIHAN.webp"
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  z-0
                  w-[62%]
                  max-w-[250px]
                  opacity-60
                  blur-lg
                  drop-shadow-[0_0_22px_rgba(255,248,226,0.55)]
                  sm:w-[70%]
                  sm:max-w-[280px]
                "
              />

              <img
                src="/LOGO PEMILIHAN.webp"
                alt="Logo Pemilihan Jegeg Bagus FEB Unmas 2027"
                className="
                  relative
                  z-10
                  mx-auto
                  w-[62%]
                  max-w-[250px]
                  object-contain
                  drop-shadow-[0_0_16px_rgba(255,248,226,0.45)]
                  transition-transform
                  duration-700
                  hover:scale-[1.025]
                  sm:w-[70%]
                  sm:max-w-[280px]
                  lg:w-full
                "
              />

            </div>

            {/* CONTENT */}

            <div className="lg:col-start-2 lg:row-start-1">

              <div className="hidden lg:block">

                <p className="
                  text-xs
                  uppercase
                  tracking-[0.28em]
                  text-[#f5d98a]/70
                ">
                  Filosofi
                </p>

                <h2 className="
                  mt-3
                  font-serif
                  text-6xl
                  leading-tight
                  tracking-tight
                  text-white
                ">
                  LENTERA
                </h2>

              </div>

              <p className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/60
                sm:text-lg
                sm:leading-8
                lg:mt-5
              ">
                Lentera menjadi representasi cahaya yang
                membantu seseorang menemukan arah.
                Pemilihan kali ini, lentera menggambarkan
                semangat, harapan, dan dedikasi generasi
                muda FEB Unmas.
              </p>

              <div className="
                mt-7
                grid
                grid-cols-3
                gap-2
                sm:mt-10
                sm:gap-4
              ">

                <ConceptCard
                  title="Anggakara"
                  text="Berani melangkah"
                />

                <ConceptCard
                  title="Baswara"
                  text="Cahaya yang menginspirasi"
                />

                <ConceptCard
                  title="Danirmala"
                  text="Tulus dalam pengabdian"
                />

              </div>

            </div>

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

          <div className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-40
            w-[60%]
            -translate-x-1/2
            rounded-full
            bg-[#fff6df]/[0.025]
            blur-[90px]
          " />

          <div className="
            relative z-10
            mx-auto
            mt-10
            max-w-7xl
            px-5
            pb-24
            md:px-8
            md:pb-32
            md:pt-10
          ">

            <div className="max-w-2xl">

              <h2 className="
                mt-1
                font-serif
                text-3xl
                leading-tight
                tracking-tight
                text-[#e8e2da]
                sm:text-5xl
                md:text-6xl
              ">
                Rangkaian Pemilihan
              </h2>

              <p className="
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-white/45
                sm:text-base
                sm:leading-7
              ">
                Setiap tahapan menjadi bagian dari perjalanan
                untuk mengenal diri dan berkembang.
              </p>

            </div>

            {/* MOBILE */}

            <div className="relative mt-14 sm:hidden">

              <div className="
                absolute
                bottom-3
                left-1/2
                top-3
                w-px
                -translate-x-1/2
                bg-[#f5d98a]/15
              " />

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
                  date="21 SEP 2026"
                  title="Pendaftaran"
                  visible={timelineVisible}
                  delay="0ms"
                  side="left"
                />

                <MobileTimelineItem
                  date="12 OKT 2026"
                  title="Seleksi"
                  visible={timelineVisible}
                  delay="180ms"
                  side="right"
                />

                <MobileTimelineItem
                  date="24 OKT 2026"
                  title="Pra Karantina"
                  visible={timelineVisible}
                  delay="360ms"
                  side="left"
                />

                <MobileTimelineItem
                  date="14–16 JAN 2027"
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

            <div className="
              no-scrollbar
              mt-16
              hidden
              overflow-x-auto
              pb-8
              sm:block
              sm:mt-20
            ">

              <div className="relative min-w-[820px] px-4">

                <div className="
                  absolute
                  left-4
                  right-4
                  top-3
                  h-px
                  bg-[#f5d98a]/15
                " />

                <div
                  className={`
                    absolute
                    left-4
                    top-3
                    h-px
                    bg-gradient-to-r
                    from-[#f5d98a]
                    via-[#f5d98a]
                    to-[#f5d98a]/20
                    shadow-[0_0_12px_rgba(245,217,138,0.8)]
                    transition-all
                    duration-[1800ms]
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
                    date="21 SEP 2026"
                    title="Pendaftaran"
                    visible={timelineVisible}
                    delay="0ms"
                  />

                  <TimelineItem
                    date="12 OKT 2026"
                    title="Seleksi"
                    visible={timelineVisible}
                    delay="180ms"
                  />

                  <TimelineItem
                    date="24 OKT 2026"
                    title="Pra Karantina"
                    visible={timelineVisible}
                    delay="360ms"
                  />

                  <TimelineItem
                    date="14–16 JAN 2027"
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
      {/* CTA */}
      {/* ========================================================= */}

      <section className="
        relative
        overflow-hidden
        bg-[#170401]
        py-20
        text-white
        sm:py-24
        md:py-32
      ">

        <div className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_15%,rgba(245,217,138,0.1),transparent_25%),radial-gradient(circle_at_85%_80%,rgba(245,180,70,0.06),transparent_30%),linear-gradient(135deg,#170401,#2a0d08,#170401)]
        " />

        <div className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-64
          w-[70%]
          -translate-x-1/2
          rounded-full
          bg-[#fff6df]/[0.025]
          blur-[100px]
        " />

        <div className="
          relative z-10
          mx-auto
          max-w-5xl
          px-5
          text-center
          md:px-8
        ">

          <p className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/70
            sm:text-xs
            sm:tracking-[0.35em]
          ">
            Saatnya mengambil peran
          </p>

          <h2 className="
            mt-4
            font-serif
            text-4xl
            leading-tight
            sm:text-5xl
            md:text-7xl
          ">
            Siap menjadi

            <br />

            bagian dari perjalanan?
          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-xl
            text-sm
            leading-6
            text-white/75
            sm:mt-6
            sm:text-base
            sm:leading-7
          ">
            Ikuti Pemilihan Jegeg Bagus FEB Unmas 2027
            dan temukan potensi yang ada dalam dirimu.
          </p>

          <Link
            href="/pendaftaran"
            className="
              mt-7
              inline-flex
              rounded-full
              border border-white/20
              bg-white/10
              px-8 py-4
              text-sm
              font-semibold
              text-white
              shadow-xl
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-1
              hover:bg-white
              hover:text-[#170401]
              sm:mt-9
            "
          >
            Mulai Pendaftaran
          </Link>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section className="
        relative
        overflow-hidden
        bg-[#e9e1d2]
        py-20
        sm:py-24
        md:py-28
      ">

        <div className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_85%_85%,rgba(245,217,138,0.13),transparent_30%),linear-gradient(135deg,#eee7da,#e4d9c7,#dcd0bd)]
        " />

        <div className="
          relative z-10
          mx-auto
          max-w-7xl
          px-5
          md:px-8
        ">

          <div className="
            grid
            gap-8
            md:grid-cols-2
            md:gap-10
          ">

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

            <div className="
              grid
              gap-3
              sm:grid-cols-2
              sm:gap-4
            ">

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

      <footer className="
        border-t
        border-white/10
        bg-[#2a1616]
        py-8
        text-[#f5f1e8]
        sm:py-10
      ">

        <div className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-6
          px-5
          sm:flex-row
          sm:items-center
          sm:justify-between
          md:px-8
        ">

          <div className="flex items-center gap-3">

            <img
              src="/Logo JEBAG FEB.png"
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
            © 2026 Jegeg Bagus FEB Unmas
          </div>

        </div>
      </footer>

    </main>
  );
}

/* =============================================================== */
/* REGISTRATION CARD */
/* =============================================================== */

function RegistrationCard({
  type,
  badge,
  title,
  date,
  image,
  buttonText,
  href,
  description,
}: {
  type: string;
  badge: string;
  title: string;
  date: string;
  image: string;
  buttonText: string;
  href: string;
  description: string;
}) {
  return (
    <div
      className="
        relative
        min-w-[86vw]
        snap-center
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.13]
        bg-black
        shadow-[0_25px_70px_rgba(0,0,0,0.25)]
        sm:min-w-[500px]
        md:min-w-0
      "
    >

      {/* PHOTO */}

      <div className="absolute inset-0">

        <img
          src={image}
          alt={type}
          className="
            h-full
            min-h-[430px]
            w-full
            object-cover
          "
        />

        {/* DARK GRADIENT */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(15,3,1,0.18)_25%,rgba(15,3,1,0.70)_68%,rgba(10,2,1,0.96)_100%)]
          "
        />

        {/* WARM LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[-5%]
            h-64
            w-64
            rounded-full
            bg-[#f5d98a]/20
            blur-[90px]
          "
        />

      </div>

      {/* CONTENT */}

      <div className="
        relative
        z-10
        flex
        min-h-[430px]
        flex-col
        justify-between
        p-5
        sm:p-6
      ">

        {/* TOP */}

        <div>

          <div className="
            inline-flex
            max-w-full
            rounded-full
            border
            border-white/15
            bg-black/25
            px-3
            py-2
            backdrop-blur-xl
          ">

            <p className="
              max-w-[300px]
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#f5d98a]
              sm:text-[9px]
            ">
              {badge}
            </p>

          </div>

          <p className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/55
          ">
            {type}
          </p>

        </div>

        {/* BOTTOM */}

        <div>

          <p className="
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-[#f5d98a]
          ">
            {date}
          </p>

          <h3 className="
            mt-2
            max-w-[330px]
            font-serif
            text-2xl
            leading-tight
            text-white
            sm:text-3xl
          ">
            {title}
          </h3>

          <p className="
            mt-3
            max-w-[390px]
            text-xs
            leading-5
            text-white/55
            sm:text-sm
            sm:leading-6
          ">
            {description}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-[#f5d98a]
              hover:text-[#170401]
            "
          >
            {buttonText} →
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
    <div
      className="
        relative
        min-w-[86vw]
        snap-center
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.13]
        bg-[#120302]
        shadow-[0_25px_70px_rgba(0,0,0,0.25)]
        sm:min-w-[500px]
        md:min-w-0
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_18%,rgba(245,217,138,0.16),transparent_28%),linear-gradient(145deg,#170401,#30100b,#110202)]
        "
      />

      {/* ===================================================== */}
      {/* LOCKSCREEN PHOTOS */}
      {/* ===================================================== */}

      <div className="
        relative
        flex
        min-h-[430px]
        items-center
        justify-center
        overflow-hidden
      ">

        {/* BAGUS */}

        <div
          className="
            absolute
            left-[8%]
            top-[12%]
            h-[260px]
            w-[43%]
            rotate-[-7deg]
            overflow-hidden
            rounded-[24px]
            border
            border-white/15
            bg-white/10
            shadow-[0_25px_50px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            sm:left-[9%]
            sm:h-[300px]
          "
        >

          <img
            src="/Bagus.webp"
            alt="Bagus"
            className="
              h-full
              w-full
              object-cover
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-black/60
          " />

        </div>

        {/* JEGEG */}

        <div
          className="
            absolute
            right-[8%]
            top-[18%]
            h-[260px]
            w-[43%]
            rotate-[7deg]
            overflow-hidden
            rounded-[24px]
            border
            border-white/15
            bg-white/10
            shadow-[0_25px_50px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            sm:right-[9%]
            sm:h-[300px]
          "
        >

          <img
            src="/Jegeg.webp"
            alt="Jegeg"
            className="
              h-full
              w-full
              object-cover
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-black/60
          " />

        </div>

        {/* SOFT LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-52
            w-52
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#f5d98a]/10
            blur-[80px]
          "
        />

        {/* CONTENT OVERLAY */}

        <div className="
          absolute
          inset-x-5
          bottom-5
          z-20
          sm:inset-x-6
          sm:bottom-6
        ">

          <p className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#f5d98a]
          ">
            01–12 Oktober 2026
          </p>

          <h3 className="
            mt-2
            font-serif
            text-2xl
            leading-tight
            text-white
            sm:text-3xl
          ">
            Pendaftaran Finalis
          </h3>

          <p className="
            mt-2
            max-w-[350px]
            text-xs
            leading-5
            text-white/55
            sm:text-sm
          ">
            Saatnya mengambil langkah dan menjadi bagian
            dari perjalanan Jegeg Bagus FEB Unmas 2027.
          </p>

          <Link
            href="/pendaftaran-finalis"
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:bg-[#f5d98a]
              hover:text-[#170401]
            "
          >
            Daftar Finalis →
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
    <div
      className="
        relative
        min-w-[86vw]
        snap-center
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.12]
        bg-white/[0.075]
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)]
        backdrop-blur-2xl
        sm:min-w-[500px]
        sm:p-6
        md:min-w-0
        md:p-6
      "
    >

      {/* CARD LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[#fff6df]/10
          blur-[70px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-48
          w-48
          rounded-full
          bg-[#f5b446]/[0.07]
          blur-[70px]
        "
      />

      <div className="relative z-10">

        {/* TOP */}

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#f5d98a]/65
            ">
              Puncak Acara
            </p>

            <h3 className="
              mt-2
              font-serif
              text-2xl
              leading-tight
              text-white
              sm:text-3xl
            ">
              {title}
            </h3>

          </div>

          <div className="
            shrink-0
            rounded-full
            border
            border-white/10
            bg-white/[0.06]
            px-3
            py-1.5
            text-[9px]
            uppercase
            tracking-[0.12em]
            text-white/45
          ">
            {dateLabel}
          </div>

        </div>

        {/* COUNTDOWN */}

        <div className="
          mt-6
          grid
          grid-cols-4
          gap-2
        ">

          <LockscreenTime
            value={countdown.days}
            label="Hari"
          />

          <LockscreenTime
            value={countdown.hours}
            label="Jam"
          />

          <LockscreenTime
            value={countdown.minutes}
            label="Menit"
          />

          <LockscreenTime
            value={countdown.seconds}
            label="Detik"
          />

        </div>

        {/* BOTTOM */}

        <div className="
          mt-5
          flex
          flex-col
          gap-4
          border-t
          border-white/[0.08]
          pt-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <p className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/30
          ">
            Menuju malam puncak
          </p>

          <Link
            href="/grand-final"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-4
              py-2.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white/70
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:bg-[#f5d98a]
              hover:text-[#170401]
            "
          >
            Selengkapnya →
          </Link>

        </div>

      </div>
    </div>
  );
}

/* =============================================================== */
/* LOCKSCREEN TIME */
/* =============================================================== */

function LockscreenTime({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="
      rounded-[18px]
      border
      border-white/[0.09]
      bg-black/[0.12]
      px-2
      py-3
      text-center
      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
      sm:px-3
      sm:py-4
    ">

      <p className="
        font-serif
        text-2xl
        leading-none
        tracking-tight
        text-white
        sm:text-3xl
      ">
        {value}
      </p>

      <p className="
        mt-2
        text-[7px]
        uppercase
        tracking-[0.18em]
        text-white/30
        sm:text-[8px]
      ">
        {label}
      </p>

    </div>
  );
}

/* =============================================================== */
/* CONCEPT CARD */
/* =============================================================== */

function ConceptCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="
      rounded-2xl
      border border-white/10
      bg-white/[0.045]
      p-4
      shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-1
      hover:bg-white/[0.07]
      sm:p-5
    ">

      <h3 className="
        mt-2
        font-serif
        text-base
        text-white
        sm:text-xl
      ">
        {title}
      </h3>

      <p className="
        mt-2
        text-[11px]
        leading-4
        text-white/45
        sm:text-xs
        sm:leading-5
      ">
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
        relative
        px-1
        transition-all
        duration-700
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

      <div className="
        relative
        z-10
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        border
        border-[#f5d98a]/50
        bg-[#170401]
        shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]
      ">

        <div className="
          firefly-animation
          h-2
          w-2
          rounded-full
          bg-[#f5d98a]
          shadow-[0_0_12px_rgba(245,217,138,0.8)]
        " />

      </div>

      <div className="mt-7 pr-6 sm:pr-10">

        <p className="
          text-[10px]
          font-medium
          tracking-[0.25em]
          text-[#f5d98a]/70
          sm:text-xs
        ">
          {date}
        </p>

        <h3 className="
          mt-2
          max-w-[150px]
          font-serif
          text-base
          leading-tight
          text-white
          sm:text-lg
          md:text-xl
        ">
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
        transition-all
        duration-700
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

      <div className="
        absolute
        left-1/2
        top-0
        z-10
        flex
        h-6
        w-6
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#f5d98a]/50
        bg-[#170401]
        shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]
      ">

        <div className="
          firefly-animation
          h-2
          w-2
          rounded-full
          bg-[#f5d98a]
          shadow-[0_0_12px_rgba(245,217,138,0.8)]
        " />

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

        <p className="
          text-[9px]
          font-medium
          tracking-[0.22em]
          text-[#f5d98a]/60
        ">
          {date}
        </p>

        <h3 className="
          mt-1
          font-serif
          text-lg
          leading-tight
          text-white
        ">
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
    <div className="
      group
      rounded-[24px]
      border border-black/[0.08]
      bg-white/20
      p-5
      shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-1
      hover:bg-white/30
      sm:p-6
    ">

      <p className="
        text-[10px]
        uppercase
        tracking-widest
        text-black/40
      ">
        {number}
      </p>

      <h3 className="
        mt-3
        font-serif
        text-2xl
      ">
        {name}
      </h3>

      <p className="
        mt-2
        text-sm
        text-black/50
      ">
        {role}
      </p>

      <a
        href="#"
        className="
          mt-5
          inline-block
          text-sm
          font-semibold
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        Hubungi →
      </a>

    </div>
  );
}