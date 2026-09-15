"use client";

import Link from "next/link";

export default function Hero() {
  return (
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
                  document.getElementById("registration")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  );
}
