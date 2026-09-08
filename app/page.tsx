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

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
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
    <main className="min-h-screen bg-[#f5f1e8] text-[#191814]">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f1e8]/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

          <a href="#" className="flex items-center gap-3">
            <img
              src="/Logo JEBAG FEB.png"
              alt="Jegeg Bagus FEB Unmas"
              className="h-11 w-11 object-contain"
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
            <a href="#berita" className="nav-link">
              Berita
            </a>
          </div>

          <a
            href="/pendaftaran"
            className="rounded-full bg-[#2a1616]/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#b58b3b]"
          >
            Daftar Sekarang
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(181,139,59,0.16),transparent_30%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">

          <div className="relative z-10">

            <p className="mb-5 text-s font-semibold uppercase tracking-[0.2em] text-[#9a742f]">
              Pemilihan Jegeg Bagus FEB Unmas 2027
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.8rem] text-[#2a1616]">
              Anggakara
              <br />
              <span className="text-[#a77c2f]">
                Baswara
              </span>
              <br />
              Danirmala
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/65 md:text-lg">
              Sebuah perjalanan untuk mengenal potensi,
              membangun karakter, memperluas wawasan,
              dan mengambil peran sebagai representasi
              mahasiswa FEB Unmas.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/pendaftaran"
                className="rounded-full bg-[#2a1616] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#a77c2f]"
              >
                Daftar Sekarang
              </Link>

              <a
                href="#tentang"
                className="rounded-full border border-black/20 px-7 py-3.5 text-sm font-semibold transition hover:bg-black hover:text-white"
              >
                Kenali Pemilihan
              </a>
            </div>

            <div className="mt-12 flex gap-8 border-t border-black/10 pt-6">
              <div>
                <p className="font-serif text-2xl">2027</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest opacity-50">
                  Tahun Pemilihan
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl">FEB</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest opacity-50">
                  Fakultas Ekonomi & Bisnis
                </p>
              </div>
            </div>
          </div>

          <div className="relative">

            <div className="absolute -inset-5 rounded-[2rem] bg-[#b58b3b]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/40 p-3 shadow-2xl">
              <img
                src="/HERO.png"
                alt="Jegeg Bagus FEB Unmas 2027"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/10 bg-[#f5f1e8]/40 p-5 shadow-xl backdrop-blur md:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Jegeg Bagus
              </p>
              <p className="mt-1 font-serif text-xl">
                FEB UNMAS 2026
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= COUNTDOWN ================= */}
      <section className="border-y border-white/10 bg-[#2A1616] py-16 text-[#f5f1e8]">

        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">

          <p className="text-xs uppercase tracking-[0.3em] text-[#c29a4c]">
            Menuju Grand Final
          </p>

          <h2 className="mt-3 font-serif text-3xl md:text-4xl">
            17 Januari 2027
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-2 md:gap-6">

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

      {/* ================= TENTANG ================= */}
      <section id="tentang" className="scroll-mt-24 py-24 md:py-32">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="section-label">
              Pemilihan ini
            </p>

            <h2 className="section-title">
              Bukan hanya
              <br />
              <span className="text-[#a77c2f]">
                kompetisi.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-black/65">
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

            <div className="border-l-2 border-[#b58b3b] pl-5 font-serif text-xl leading-8 text-black/80">
              “Tumbuh menjadi pribadi yang mampu membawa
              nama fakultas dengan karakter, wawasan,
              dan tanggung jawab.”
            </div>
          </div>

        </div>
      </section>

      {/* ================= LENTERA ================= */}
      <section
        id="lentera"
        className="scroll-mt-24 overflow-hidden bg-[#e9e1d2] py-24 md:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div className="flex justify-center">
            <img
              src="/LOGO PEMILIHAN.png"
              alt="Logo Pemilihan Jegeg Bagus FEB Unmas 2027"
              className="w-full max-w-md object-contain"
            />
          </div>

          <div>
            <p className="section-label">
              Logo kami
            </p>

            <h2 className="section-title">
              LENTERA
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Lentera menjadi representasi cahaya yang
              membantu seseorang menemukan arah.
              Pemilihan kali ini, lentera
              menggambarkan semangat, harapan, dan
              dedikasi generasi muda FEB Unmas.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <ConceptCard
                number="01"
                title="Anggakara"
                text="Berani melangkah."
              />

              <ConceptCard
                number="02"
                title="Baswara"
                text="Cahaya yang menginspirasi."
              />

              <ConceptCard
                number="03"
                title="Danirmala"
                text="Tulus dalam pengabdian."
              />

            </div>
          </div>

        </div>
      </section>

      {/* ================= ALUR ================= */}
      <section id="alur" className="scroll-mt-24 py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="max-w-2xl">
            <p className="section-label">
              Rangkaian Pemilihan
            </p>

            <h2 className="section-title">
              Tahapan Perjalanan
            </h2>
          </div>

          <div className="mt-16 grid border-t border-black/10 md:grid-cols-4">

            <TimelineItem
              number="01"
              title="Pendaftaran"
              text="Peserta melakukan pendaftaran dan mempersiapkan diri untuk mengikuti rangkaian seleksi."
            />

            <TimelineItem
              number="02"
              title="Seleksi"
              text="Peserta mengikuti berbagai tahapan untuk melihat potensi, karakter, wawasan, dan kemampuan."
            />

            <TimelineItem
              number="03"
              title="Karantina"
              text="Finalis mendapatkan pembekalan dan menjalani proses persiapan menuju puncak grand final."
            />

            <TimelineItem
              number="04"
              title="Grand Final"
              text="Grand Final puncak pemilihan Jegeg Bagus FEB Unmas 2027."
            />

          </div>
        </div>
      </section>

      {/* ================= JEGEG & BAGUS ================= */}
      <section className="bg-[#9b7637] py-24 text-[#f5f1e8] md:py-32">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="group min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#24241e]/80 p-8 transition hover:-translate-y-1">

              <p className="text-xs uppercase tracking-[0.3em] text-[#c29a4c]">
                Finalis
              </p>

              <h3 className="mt-16 font-serif text-5xl">
                JEGEG
              </h3>

              <p className="mt-5 max-w-md leading-7 text-white/55">
                Representasi perempuan muda yang memiliki
                karakter, wawasan, percaya diri, dan mampu
                membawa nilai positif bagi lingkungan.
              </p>

            </div>

            <div className="group min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#24241e]/80 p-8 transition hover:-translate-y-1">

              <p className="text-xs uppercase tracking-[0.3em] text-[#c29a4c]">
                Finalis
              </p>

              <h3 className="mt-16 font-serif text-5xl">
                BAGUS
              </h3>

              <p className="mt-5 max-w-md leading-7 text-white/55">
                Representasi laki-laki muda yang memiliki
                integritas, wawasan, kemampuan komunikasi,
                dan kesiapan untuk mengambil peran.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PROGRAM ================= */}
      <section id="program" className="scroll-mt-24 py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="section-label">
                Program
              </p>

              <h2 className="section-title !text-[#12362a]">
                Raksa Bhuana
                <br />
                <span className="text-[#12362a]">
                  Jagadhita
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-black/50">
              Jegeg Bagus FEB Unmas tidak hanya hadir
              sebagai representasi, tetapi juga sebagai
              ruang untuk berkontribusi melalui berbagai
              program .
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <ProgramCard
              number="01"
              title="KREAPRO"
              text="Kreatif Promosi sebagai bentuk kontribusi dalam membantu memperkenalkan dan mengembangkan UMKM."
            />

            <ProgramCard
              number="02"
              title="GESAKA"
              text="Gerakan Usaha Lokal, mempromosikan UMKM yang sekiranya belum diketahui oleh masyarakat."
            />

            <ProgramCard
              number="03"
              title="Tri Loka Harmoni"
              text="Aksi nyata melalui harmonisasi dari 3 unsur spiritual, sesama manusia, dan alam."
            />

          </div>

        </div>
      </section>

      {/* ================= BERITA ================= */}
      <section id="berita" className="scroll-mt-24 bg-[#e9e1d2] py-24 md:py-32">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="section-label">
                Berita & Kegiatan
              </p>

              <h2 className="section-title">
                Ikuti perjalanan
                <br />
                <span className="text-[#a77c2f]">
                  kami.
                </span>
              </h2>
            </div>

            <a
              href="/berita"
              className="text-sm font-semibold underline underline-offset-4"
            >
              Lihat semua berita →
            </a>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <NewsCard
              category="PEMILIHAN"
              title="Menuju Pemilihan Jegeg Bagus FEB Unmas 2027"
            />

            <NewsCard
              category="KEGIATAN"
              title="Jegeg Bagus FEB Unmas dalam berbagai kegiatan"
            />

            <NewsCard
              category="PROGRAM"
              title="Kreapro: Langkah kecil untuk UMKM Bali"
            />

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#2a1616] py-24 text-white md:py-32">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">

          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Saatnya mengambil peran
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
            Siap menjadi
            <br />
            bagian dari perjalanan?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/75">
            Ikuti Pemilihan Jegeg Bagus FEB Unmas 2027
            dan temukan potensi yang ada dalam dirimu.
          </p>

          <a
            href="/pendaftaran"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#191915] transition hover:-translate-y-1 hover:bg-[#191915] hover:text-white"
          >
            Mulai Pendaftaran
          </a>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-24 md:py-28">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-10 md:grid-cols-2">

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

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-xs uppercase tracking-widest text-black/40">
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

              <div className="rounded-2xl border border-black/10 p-6">
                <p className="text-xs uppercase tracking-widest text-black/40">
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

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-black/10 bg-[#191915] py-10 text-[#f5f1e8]">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">

          <div className="flex items-center gap-3">
            <img
              src="/Logo JEBAG FEB.png"
              alt="Logo Jegeg Bagus FEB Unmas"
              className="h-12 w-12 object-contain"
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


/* ================= COMPONENTS ================= */

function CountdownItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-6 md:px-6 md:py-8">
      <p className="font-serif text-3xl md:text-5xl">
        {value}
      </p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
        {label}
      </p>
    </div>
  );
}

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
    <div className="rounded-2xl border border-black/10 bg-white/30 p-5">
      <p className="text-xs text-[#a77c2f]">
        {number}
      </p>

      <h3 className="mt-6 font-serif text-xl">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-black/50">
        {text}
      </p>
    </div>
  );
}

function TimelineItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">

      <p className="text-xs font-semibold tracking-widest text-[#a77c2f]">
        {number}
      </p>

      <h3 className="mt-8 font-serif text-3xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-black/55">
        {text}
      </p>

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
    <div className="group rounded-[1.5rem] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex items-center justify-between">
        <span className="text-xs text-black/30">
          {number}
        </span>

        <span className="text-xl text-[#a77c2f] transition group-hover:translate-x-1">
          ↗
        </span>
      </div>

      <h3 className="mt-16 font-serif text-3xl">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-black/55">
        {text}
      </p>

    </div>
  );
}

function NewsCard({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] bg-[#191915] text-white">

      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#a77c2f] via-[#6f5528] to-[#25251f]">

        <span className="font-serif text-5xl text-white/15">
          JEBAG
        </span>

        <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-white/50">
          Photo Placeholder
        </span>

      </div>

      <div className="p-6">

        <p className="text-[10px] font-semibold tracking-[0.25em] text-[#c29a4c]">
          {category}
        </p>

        <h3 className="mt-4 font-serif text-2xl leading-tight">
          {title}
        </h3>

        <a
          href="/berita"
          className="mt-6 inline-block text-xs font-semibold text-white/60 transition group-hover:text-white"
        >
          Baca selengkapnya →
        </a>

      </div>

    </article>
  );
}