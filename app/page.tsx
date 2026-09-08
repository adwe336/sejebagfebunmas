"use client";

import { useEffect, useState } from "react";
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

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#191814]">

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f1e8]/85 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8 md:py-4">

          {/* LOGO */}

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src="/Logo JEBAG FEB.png"
              alt="Jegeg Bagus FEB Unmas"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            />

            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-semibold tracking-wide">
                JEGEG BAGUS
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                FEB UNMAS
              </p>
            </div>
          </a>


          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-7 text-sm font-medium lg:flex">

            <a href="#tentang" className="nav-link">
              Tentang
            </a>

            <a href="#lentera" className="nav-link">
              Lentera
            </a>

            <a href="#alur" className="nav-link">
              Alur
            </a>

            <a href="#program" className="nav-link">
              Program
            </a>

          </div>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-2">

            {/* DESKTOP CTA */}

            <Link
              href="/pendaftaran"
              className="hidden rounded-full bg-[#2a1616] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b58b3b] sm:block"
            >
              Daftar Sekarang
            </Link>


            {/* MOBILE HAMBURGER */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Buka menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/30 transition hover:bg-black hover:text-white lg:hidden"
            >

              <div className="flex w-5 flex-col gap-1.5">

                <span
                  className={`block h-[1.5px] w-full bg-current transition duration-300 ${
                    menuOpen
                      ? "translate-y-[4px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`block h-[1.5px] w-full bg-current transition duration-300 ${
                    menuOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                <span
                  className={`block h-[1.5px] w-full bg-current transition duration-300 ${
                    menuOpen
                      ? "-translate-y-[4px] -rotate-45"
                      : ""
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
          className={`overflow-hidden border-t border-black/10 bg-[#f5f1e8]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">

            <div className="flex flex-col">

              <a
                href="#tentang"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-sm font-medium"
              >
                Tentang
              </a>

              <a
                href="#lentera"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-sm font-medium"
              >
                Lentera
              </a>

              <a
                href="#alur"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-sm font-medium"
              >
                Alur
              </a>

              <a
                href="#program"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-4 text-sm font-medium"
              >
                Program
              </a>


              {/* MOBILE CTA */}

              <Link
                href="/pendaftaran"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center rounded-full bg-[#2a1616] px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#b58b3b]"
              >
                Daftar Sekarang
              </Link>

            </div>

          </div>

        </div>

      </nav>


      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden pt-24 md:pt-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(181,139,59,0.16),transparent_35%)]" />


        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 md:px-8 md:pb-20 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">


          {/* ===================================================== */}
          {/* HERO IMAGE */}
          {/* ===================================================== */}

          <div className="order-1 relative mb-9 lg:order-2 lg:mb-0">

            <div className="absolute -inset-4 rounded-[2rem] bg-[#b58b3b]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/40 p-2 shadow-xl sm:rounded-[2rem] sm:p-3">

              <img
                src="/HERO.png"
                alt="Jegeg Bagus FEB Unmas 2027"
                className="h-auto w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]"
              />

            </div>


            {/* FLOATING LABEL */}

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-[#f5f1e8]/80 p-5 shadow-xl backdrop-blur md:block">

              <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Jegeg Bagus
              </p>

              <p className="mt-1 font-serif text-xl">
                FEB UNMAS 2027
              </p>

            </div>

          </div>


          {/* ===================================================== */}
          {/* HERO CONTENT */}
          {/* ===================================================== */}

          <div className="order-2 relative z-10 lg:order-1">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a742f] sm:text-xs sm:tracking-[0.1em]">
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
                className="flex items-center justify-center rounded-full bg-[#2a1616] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#a77c2f]"
              >
                Daftar Sekarang
              </Link>

              <a
                href="#tentang"
                className="flex items-center justify-center rounded-full border border-black/20 px-7 py-3.5 text-sm font-semibold transition duration-300 hover:bg-black hover:text-white"
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

<section
  className="relative overflow-hidden border-y border-white/10 bg-[#2A1616] py-7 text-[#f5f1e8] md:py-8"
>
  {/* GRADIENT SISI */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_left,rgba(245,217,138,0.12),transparent_70%)]" />

  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(245,217,138,0.08),transparent_70%)]" />

  <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">

    <p className="text-[10px] uppercase tracking-[0.25em] text-[#c29a4c] sm:text-xs sm:tracking-[0.3em]">
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
  className="scroll-mt-24 py-16 sm:py-20 md:py-24"
>

  <div className="mx-auto grid max-w-7xl gap-10 px-5 md:gap-12 md:px-8 lg:grid-cols-2 lg:items-start">

    {/* ===================================================== */}
    {/* KIRI — JUDUL + VIDEO */}
    {/* ===================================================== */}

    <div>

      {/* LABEL */}
      <p className="section-label">
        Pemilihan Jegeg Bagus
      </p>

      {/* JUDUL */}
<h2 className="mt-3 whitespace-nowrap font-serif text-3xl leading-[1.05] tracking-tight text-[#170401] sm:text-4xl md:text-5xl">
  Bukan hanya kompetisi
</h2>


      {/* VIDEO YOUTUBE */}
      <div className="mt-8 overflow-hidden rounded-2xl bg-black shadow-[0_15px_50px_rgba(23,4,1,0.15)] sm:mt-10">

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


    {/* ===================================================== */}
    {/* KANAN — PENJELASAN */}
    {/* ===================================================== */}

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


      {/* QUOTE */}
      <div className="border-l-2 border-[#b58b3b] pl-5 font-serif text-lg leading-7 text-black/80 sm:text-xl sm:leading-8">
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
  className="scroll-mt-24 relative overflow-hidden bg-[#170401] py-12 text-white sm:py-16 md:py-24"
>
  {/* ========================================================= */}
  {/* BACKGROUND CAHAYA */}
  {/* ========================================================= */}

  {/* Cahaya utama di sekitar logo */}
  <div
    className="pointer-events-none absolute left-[22%] top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d98a]/20 blur-[100px] sm:h-[520px] sm:w-[520px]"
  />

  {/* Cahaya lembut yang menyebar ke seluruh section */}
  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(245,217,138,0.18)_0%,rgba(245,180,70,0.08)_22%,rgba(23,4,1,0.75)_48%,#170401_75%)]"
  />

  {/* Bagian tepi tetap gelap */}
  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,2,1,0.35)_60%,rgba(5,1,0,0.8)_100%)]"
  />

  {/* ========================================================= */}
  {/* CONTENT */}
  {/* ========================================================= */}

  <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 md:gap-12 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

    {/* LOGO */}

<div className="relative flex items-center justify-center">

  {/* GLOW SILUET LENTERA */}
  <img
    src="/LOGO PEMILIHAN.png"
    alt=""
    aria-hidden="true"
    className="absolute z-0 w-[62%] max-w-[250px] scale-105 opacity-80 blur-xl drop-shadow-[0_0_35px_rgba(255,220,140,0.9)] sm:w-[70%] sm:max-w-[280px]"
  />

  {/* GLOW UTAMA */}
  <img
    src="/LOGO PEMILIHAN.png"
    alt=""
    aria-hidden="true"
    className="absolute z-0 w-[62%] max-w-[250px] opacity-70 blur-md drop-shadow-[0_0_25px_rgba(255,225,150,1)] sm:w-[70%] sm:max-w-[280px]"
  />

  {/* LOGO ASLI */}
  <img
    src="/LOGO PEMILIHAN.png"
    alt="Logo Pemilihan Jegeg Bagus FEB Unmas 2027"
    className="relative z-10 mx-auto w-[62%] max-w-[250px] object-contain drop-shadow-[0_0_18px_rgba(255,220,140,0.75)] sm:w-[70%] sm:max-w-[280px] lg:w-full"
  />

</div>

    {/* ========================================================= */}
    {/* CONTENT */}
    {/* ========================================================= */}

    <div>

      <p className="section-label text-[#d5ad61]">
        Filosofi
      </p>

      <h2 className="section-title text-white">
        LENTERA
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
        Lentera menjadi representasi cahaya yang
        membantu seseorang menemukan arah.
        Pemilihan kali ini, lentera menggambarkan
        semangat, harapan, dan dedikasi generasi
        muda FEB Unmas.
      </p>


      {/* ========================================================= */}
      {/* CONCEPT CARDS */}
      {/* ========================================================= */}

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

</section>

{/* ========================================================= */}
{/* ALUR */}
{/* ========================================================= */}

<section
  id="alur"
  className="scroll-mt-24 relative overflow-hidden bg-[#170401] py-20 text-white sm:py-24 md:py-28"
>

  {/* ======================================================= */}
  {/* BACKGROUND GLOW */}
  {/* ======================================================= */}

  {/* GLOW BESAR KIRI */}
  <div
    className="pointer-events-none absolute left-[8%] top-[45%] h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#f5d98a]/10 blur-[120px] sm:h-[500px] sm:w-[500px]"
  />

  {/* GLOW KANAN */}
  <div
    className="pointer-events-none absolute right-[-10%] top-[55%] h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#f5b446]/[0.06] blur-[110px] sm:h-[420px] sm:w-[420px]"
  />

  {/* GRADIENT SUASANA */}
  <div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,217,138,0.06)_0%,rgba(23,4,1,0.3)_45%,#170401_80%)]"
  />


  {/* ======================================================= */}
  {/* KUNANG-KUNANG */}
  {/* ======================================================= */}

  <div className="pointer-events-none absolute inset-0">

    <span className="absolute left-[8%] top-[22%] h-1 w-1 rounded-full bg-[#f5d98a]/40 blur-[1px]" />

    <span className="absolute left-[19%] top-[68%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 blur-[1px]" />

    <span className="absolute left-[34%] top-[30%] h-1 w-1 rounded-full bg-[#f5d98a]/30 blur-[1px]" />

    <span className="absolute left-[47%] top-[78%] h-1 w-1 rounded-full bg-[#f5d98a]/30 blur-[1px]" />

    <span className="absolute left-[61%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/25 blur-[1px]" />

    <span className="absolute left-[73%] top-[64%] h-1 w-1 rounded-full bg-[#f5d98a]/35 blur-[1px]" />

    <span className="absolute left-[84%] top-[28%] h-1 w-1 rounded-full bg-[#f5d98a]/30 blur-[1px]" />

    <span className="absolute left-[92%] top-[76%] h-1.5 w-1.5 rounded-full bg-[#f5d98a]/20 blur-[1px]" />

    <span className="absolute left-[27%] top-[88%] h-1 w-1 rounded-full bg-[#f5d98a]/20 blur-[1px]" />

    <span className="absolute left-[56%] top-[48%] h-1 w-1 rounded-full bg-[#f5d98a]/20 blur-[1px]" />

  </div>


  {/* ======================================================= */}
  {/* CONTENT */}
  {/* ======================================================= */}

  <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">


    {/* HEADER */}
    <div className="max-w-2xl">

      <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5d98a]/70 sm:text-xs sm:tracking-[0.35em]">
        Rangkaian Pemilihan
      </p>

      <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        Tahapan Perjalanan
      </h2>

    </div>


    {/* ===================================================== */}
    {/* TIMELINE */}
    {/* ===================================================== */}

    <div className="mt-16 overflow-x-auto px-3 pb-6 sm:mt-20 sm:px-0">

      <div className="relative min-w-[760px] px-2 sm:px-0">


        {/* GARIS UTAMA */}
        <div className="absolute left-2 right-2 top-3 h-px bg-[#f5d98a]/20" />


        {/* GARIS GLOW */}
        <div className="absolute left-2 top-3 h-px w-2/5 bg-gradient-to-r from-transparent via-[#f5d98a]/50 to-transparent blur-[1px]" />


        {/* ITEMS */}
        <div className="relative grid grid-cols-5">

          <TimelineItem
            number="01"
            title="Pendaftaran"
          />

          <TimelineItem
            number="02"
            title="Seleksi"
          />

          <TimelineItem
            number="03"
            title="Pra Karantina"
          />

          <TimelineItem
            number="04"
            title="Karantina"
          />

          <TimelineItem
            number="05"
            title="Grand Final"
          />

        </div>

      </div>

    </div>

  </div>

</section>

     {/* ========================================================= */}
{/* PROGRAM */}
{/* ========================================================= */}

<section
  id="program"
  className="scroll-mt-24 relative overflow-hidden py-20 sm:py-24 md:py-32"
>
  {/* ======================================================= */}
  {/* BACKGROUND FOTO */}
  {/* ======================================================= */}

  <div className="absolute inset-0">
    <img
      src="/PROGRAM.jpg"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-[#170401]/55" />

    {/* SOFT GRADIENT */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,217,138,0.16),transparent_35%),linear-gradient(to_bottom,rgba(23,4,1,0.35),rgba(23,4,1,0.7))]" />
  </div>


  {/* ======================================================= */}
  {/* CONTENT */}
  {/* ======================================================= */}

  <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#f5d98a]/75 sm:text-xs sm:tracking-[0.35em]">
          Program
        </p>

        <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Raksa Bhuana
          <br />
          <span className="text-[#f5d98a]">
            Jagadhita
          </span>
        </h2>
      </div>


      {/* DESKRIPSI GLASS */}
      <div className="max-w-md rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-xl sm:p-6">
        <p className="text-sm leading-6 text-white/75">
          Jegeg Bagus FEB Unmas tidak hanya hadir
          sebagai representasi, tetapi juga sebagai
          ruang untuk berkontribusi melalui berbagai
          program.
        </p>
      </div>

    </div>


    {/* ===================================================== */}
    {/* PROGRAM CARDS */}
    {/* ===================================================== */}

    <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">

      {/* KREAPRO */}
      <ProgramCard
        number="01"
        title="KREAPRO"
        text="Kreatif Promosi sebagai bentuk kontribusi dalam membantu memperkenalkan dan mengembangkan UMKM."
      />

      {/* GESAKA */}
      <ProgramCard
        number="02"
        title="GESAKA"
        text="Gerakan Usaha Lokal, mempromosikan UMKM yang sekiranya belum diketahui oleh masyarakat."
      />

      {/* TRI LOKA HARMONI */}
      <ProgramCard
        number="03"
        title="Tri Loka Harmoni"
        text="Aksi nyata melalui harmonisasi dari 3 unsur spiritual, sesama manusia, dan alam."
      />

    </div>

  </div>

</section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#2a1616] py-20 text-white sm:py-24 md:py-32">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />


        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">

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
            className="mt-7 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#191915] transition duration-300 hover:-translate-y-1 hover:bg-[#191915] hover:text-white sm:mt-9"
          >
            Mulai Pendaftaran
          </Link>

        </div>

      </section>


      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section className="py-20 sm:py-24 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">

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


            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">


              {/* CONTACT 01 */}

              <div className="rounded-2xl border border-black/10 p-5 sm:p-6">

                <p className="text-[10px] uppercase tracking-widest text-black/40">
                  Narahubung 01
                </p>

                <h3 className="mt-3 font-serif text-2xl">
                  Bagus Diki
                </h3>

                <p className="mt-2 text-sm text-black/50">
                  Ketua Panitia
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-semibold"
                >
                  Hubungi →
                </a>

              </div>


              {/* CONTACT 02 */}

              <div className="rounded-2xl border border-black/10 p-5 sm:p-6">

                <p className="text-[10px] uppercase tracking-widest text-black/40">
                  Narahubung 02
                </p>

                <h3 className="mt-3 font-serif text-2xl">
                  Jegeg Ayu
                </h3>

                <p className="mt-2 text-sm text-black/50">
                  Wakil Ketua
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-semibold"
                >
                  Hubungi →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-black/10 bg-[#191915] py-8 text-[#f5f1e8] sm:py-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between md:px-8">

          <div className="flex items-center gap-3">

            <img
              src="/Logo JEBAG FEB.png"
              alt="Logo Jegeg Bagus FEB Unmas"
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
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
/* COMPONENTS */
/* =============================================================== */


/* COUNTDOWN */

function CountdownItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-5 sm:rounded-2xl sm:px-4 sm:py-6 md:px-6 md:py-8">

      <p className="font-serif text-2xl sm:text-3xl md:text-5xl">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/40 sm:mt-2 sm:text-[9px] md:text-xs">
        {label}
      </p>

    </div>
  );
}


/* CONCEPT CARD */

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
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm sm:p-5">

      <h3 className="mt-1 font-serif text-base text-white sm:mt-2 sm:text-xl">
        {title}
      </h3>

      <p className="mt-2 text-[11px] leading-4 text-white/45 sm:text-xs sm:leading-5">
        {text}
      </p>

    </div>
  );
}


/* ========================================================= */
/* TIMELINE ITEM */
/* ========================================================= */

function TimelineItem({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="relative px-1">
      {/* TITIK */}
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#f5d98a]/50 bg-[#170401] shadow-[0_0_0_5px_#170401]">
        <div className="h-2 w-2 rounded-full bg-[#f5d98a] shadow-[0_0_12px_rgba(245,217,138,0.7)]" />
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

function ProgramCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.10] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.15] sm:p-7 md:p-8">

      {/* INNER LIGHT */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f5d98a]/10 blur-3xl transition-opacity duration-500 group-hover:bg-[#f5d98a]/20" />

      {/* TOP HIGHLIGHT */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />


      {/* CONTENT */}
      <div className="relative z-10">

        {/* NUMBER */}
        <p className="text-[10px] font-medium tracking-[0.25em] text-[#f5d98a]/75 sm:text-xs">
          {number}
        </p>


        {/* TITLE */}
        <h3 className="mt-8 font-serif text-2xl tracking-tight text-white sm:text-3xl">
          {title}
        </h3>


        {/* DESCRIPTION */}
        <p className="mt-4 text-sm leading-6 text-white/65">
          {text}
        </p>


        {/* BOTTOM LINE */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-[#f5d98a]/40 via-white/10 to-transparent" />

      </div>

    </div>
  );
}