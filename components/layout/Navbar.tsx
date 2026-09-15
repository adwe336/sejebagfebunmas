"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* ========================================================= */
  /* CLOSE MENU WHEN CLICKING OUTSIDE */
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
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  /* ========================================================= */
  /* CLOSE MOBILE MENU ON DESKTOP */
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

  return (
    <nav
      ref={navRef}
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 rounded-full border border-black/[0.08] bg-[#f5f1e8]/60 shadow-[0_8px_30px_rgba(23,4,1,0.08)] backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="flex h-12 items-center justify-between px-3 sm:h-14 sm:px-4">

        {/* ===================================================== */}
        {/* LOGO */}
        {/* ===================================================== */}

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

        {/* ===================================================== */}
        {/* DESKTOP MENU */}
        {/* ===================================================== */}

        <div className="hidden items-center gap-6 text-xs font-medium lg:flex">

          <Link
            href="/#tentang"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Tentang
          </Link>

          <Link
            href="/#lentera"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Lentera
          </Link>

          <Link
            href="/#alur"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Alur
          </Link>

          <Link
            href="/program"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Program
          </Link>

        </div>

        {/* ===================================================== */}
        {/* RIGHT */}
        {/* ===================================================== */}

        <div className="flex items-center gap-2">

          {/* DAFTAR SEKARANG */}

          <Link
            href="/#registration"
            onClick={() => setMenuOpen(false)}
            className="hidden rounded-full bg-[#170401] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#f5b446] hover:text-[#170401] sm:block"
          >
            Daftar Sekarang
          </Link>

          {/* =================================================== */}
          {/* HAMBURGER */}
          {/* =================================================== */}

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

      {/* ======================================================= */}
      {/* MOBILE MENU */}
      {/* ======================================================= */}

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

          {/* TENTANG */}

          <Link
            href="/#tentang"
            onClick={() => setMenuOpen(false)}
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Tentang
          </Link>

          {/* LENTERA */}

          <Link
            href="/#lentera"
            onClick={() => setMenuOpen(false)}
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Lentera
          </Link>

          {/* ALUR */}

          <Link
            href="/#alur"
            onClick={() => setMenuOpen(false)}
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Alur
          </Link>

          {/* PROGRAM */}

          <Link
            href="/program"
            onClick={() => setMenuOpen(false)}
            className="flex rounded-[18px] px-4 py-3.5 text-sm"
          >
            Program
          </Link>

          <div className="my-1 h-px bg-black/[0.06]" />

          {/* DAFTAR SEKARANG */}

          <Link
            href="/#registration"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center rounded-[18px] bg-[#2a1616]/90 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
          >
            Daftar Sekarang
          </Link>

        </div>
      </div>

      {/* ======================================================= */}
      {/* NAV LINK STYLE */}
      {/* ======================================================= */}

      <style jsx>{`
        .nav-link {
          position: relative;
          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 1px;
          background: #170401;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 300ms ease;
        }

        .nav-link:hover {
          color: #8b5e2b;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
}