"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* =============================================================== */
/* REVEAL ANIMATION */
/* =============================================================== */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =============================================================== */
/* NAVBAR */
/* =============================================================== */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Lentera", href: "/#lentera" },
    { label: "Alur", href: "/#alur" },
    { label: "Program", href: "/program" },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between rounded-full border border-[#170401]/10 bg-[#f5f1e8]/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src="/Logo JEBAG FEB.webp"
                alt="Jegeg Bagus FEB Unmas"
                className="h-9 w-auto object-contain sm:h-10"
              />

              <div className="hidden leading-none sm:block">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#170401]/55">
                  Pemilihan
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#170401]">
                  Jegeg Bagus FEB
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    link.label === "Program"
                      ? "text-[#a77c2f]"
                      : "text-[#170401]/65 hover:text-[#170401]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/pendaftaran"
                className="rounded-full bg-[#170401] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f5f1e8] transition-transform hover:scale-[1.03]"
              >
                Daftar Sekarang
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#170401] text-[#f5f1e8] md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex w-4 flex-col gap-1">
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform ${
                    menuOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-current transition-opacity ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-current transition-transform ${
                    menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </nav>

          {/* MOBILE MENU */}
          <div
            className={`mt-2 overflow-hidden rounded-[28px] border border-[#170401]/10 bg-[#f5f1e8]/95 shadow-lg backdrop-blur-xl transition-all duration-300 md:hidden ${
              menuOpen
                ? "max-h-[500px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col p-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.13em] ${
                    link.label === "Program"
                      ? "bg-[#e9e1d2] text-[#a77c2f]"
                      : "text-[#170401]/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/pendaftaran"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-2xl bg-[#170401] px-5 py-4 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[#f5f1e8]"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/* =============================================================== */
/* PAGE */
/* =============================================================== */

export default function ProgramPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e8] text-[#170401]">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative flex min-h-[88vh] items-end px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:min-h-screen lg:px-12">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute right-[-15%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#f5b446]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-[#a77c2f] sm:text-xs">
              Program
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="max-w-5xl font-serif text-[clamp(4rem,11vw,9rem)] font-medium leading-[0.84] tracking-[-0.055em]">
              Raksa Bhuana
              <br />
              <span className="text-[#a77c2f]">Jagadhita.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex max-w-2xl flex-col gap-5 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-sm leading-7 text-[#170401]/60 sm:text-base">
                Ruang untuk bertumbuh, berkarya, dan mengambil peran.
                Program yang dirancang agar Jegeg Bagus tidak berhenti
                setelah pemilihan.
              </p>

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#170401]/35">
                01 — 03
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO */}
      {/* ========================================================= */}

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a77c2f]">
                  Raksa Bhuana Jagadhita
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Bertumbuh bersama,
                  <br />
                  <span className="text-[#a77c2f]">
                    memberi arti lebih luas.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-[#170401]/55 sm:text-base">
                  Raksa Bhuana Jagadhita menjadi payung program yang
                  menghubungkan pengembangan diri, kepedulian sosial,
                  budaya, lingkungan, dan potensi mahasiswa.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRI LOKA HARMONI */}
      {/* ========================================================= */}

      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a77c2f]">
                  Program 01
                </p>

                <h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Tri Loka Harmoni
                </h2>
              </div>

              <span className="hidden text-[9px] font-bold uppercase tracking-[0.25em] text-[#170401]/30 sm:block">
                Swah · Bwah · Bhur
              </span>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {/* SATYA JIWA */}
            <Reveal delay={50}>
              <article className="group flex min-h-[370px] flex-col justify-between rounded-[32px] bg-[#e9e1d2] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a77c2f]">
                    01
                  </span>

                  <h3 className="mt-12 font-serif text-4xl tracking-[-0.03em]">
                    Satya Jiwa
                  </h3>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#170401]/40">
                    Swah Loka · Parhyangan
                  </p>
                </div>

                <p className="max-w-xs text-sm leading-6 text-[#170401]/55">
                  Menumbuhkan kesadaran spiritual dan hubungan dengan
                  nilai-nilai ketuhanan.
                </p>
              </article>
            </Reveal>

            {/* SAHAJA RASA */}
            <Reveal delay={120}>
              <article className="group flex min-h-[370px] flex-col justify-between rounded-[32px] border border-[#170401]/10 bg-[#f5f1e8] p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#a77c2f]">
                    02
                  </span>

                  <h3 className="mt-12 font-serif text-4xl tracking-[-0.03em]">
                    Sahaja Rasa
                  </h3>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#170401]/40">
                    Bwah Loka · Pawongan
                  </p>
                </div>

                <p className="max-w-xs text-sm leading-6 text-[#170401]/55">
                  Membangun kepedulian, kehangatan, dan rasa solidaritas
                  antarsesama.
                </p>
              </article>
            </Reveal>

            {/* BHUMI RAKSA */}
            <Reveal delay={190}>
              <article className="group flex min-h-[370px] flex-col justify-between rounded-[32px] bg-[#170401] p-7 text-[#f5f1e8] transition-transform duration-500 hover:-translate-y-1 sm:p-9">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#f5b446]">
                    03
                  </span>

                  <h3 className="mt-12 font-serif text-4xl tracking-[-0.03em]">
                    Bhumi Raksa
                  </h3>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5f1e8]/35">
                    Bhur Loka · Palemahan
                  </p>
                </div>

                <p className="max-w-xs text-sm leading-6 text-[#f5f1e8]/55">
                  Menjaga lingkungan melalui aksi nyata dan kepedulian
                  terhadap keberlanjutan.
                </p>
              </article>
            </Reveal>
          </div>

          {/* SMALL EXAMPLES */}
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Sembahyang bersama",
                "Membersihkan tempat suci",
                "Aksi sosial",
                "Berbagi",
                "Aksi lingkungan",
                "Volunteer",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#170401]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#170401]/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KREAPRO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#170401] px-5 py-28 text-[#f5f1e8] sm:px-8 sm:py-36 lg:px-12">
        {/* Glow */}
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#f5b446]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24">
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5b446]">
                  Program 02
                </p>

                <h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                  KREA
                  <br />
                  <span className="text-[#f5b446]">PRO.</span>
                </h2>

                <p className="mt-8 max-w-xl text-sm leading-7 text-[#f5f1e8]/55 sm:text-base">
                  Kreatif Promosi untuk membantu UMKM lokal dikenal lebih
                  luas melalui ide, konten, dan kolaborasi.
                </p>
              </div>

              <div>
                <div className="border-t border-[#f5f1e8]/15 pt-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#f5b446]">
                    Fokus
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      "Promosi produk lokal",
                      "Cerita pelaku usaha",
                      "Konten media sosial",
                      "Kolaborasi kreatif",
                      "Memperluas exposure",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-[#f5f1e8]/10 pb-4"
                      >
                        <span className="text-sm text-[#f5f1e8]/70">
                          {item}
                        </span>

                        <span className="text-[9px] font-bold text-[#f5f1e8]/25">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* JEBAG BERKARYA */}
      {/* ========================================================= */}

      <section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a77c2f]">
                  Program 03
                </p>

                <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                  Jegeg Bagus
                  <br />
                  <span className="text-[#a77c2f]">Berkarya.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-7 text-[#170401]/60 sm:text-base">
                  Setelah pemilihan selesai, perjalanan tetap berjalan.
                  Jegeg Bagus Berkarya menjadi ruang bagi anggota untuk
                  mengembangkan minat, bakat, dan kemampuan yang mereka
                  miliki.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-0 sm:grid-cols-3">
                  {[
                    "Public Speaking",
                    "Catwalk & Modeling",
                    "Master of Ceremony",
                    "Content Creation",
                    "Photography & Videography",
                    "Design & Creative",
                    "Seni & Budaya",
                    "Leadership & Organisasi",
                    "Entrepreneurship",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="border-t border-[#170401]/10 py-5"
                    >
                      <span className="mr-2 text-[9px] font-bold text-[#a77c2f]">
                        0{index + 1}
                      </span>

                      <span className="text-[11px] font-semibold leading-5 text-[#170401]/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GO BEYOND CAMPUS */}
      {/* ========================================================= */}

      <section className="px-5 pb-28 sm:px-8 sm:pb-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[40px] bg-[#e9e1d2] px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#f5b446]/15 blur-3xl" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
                <div>
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#a77c2f]">
                    Go Beyond Campus
                  </p>

                  <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                    Berani mengambil
                    <br />
                    <span className="text-[#a77c2f]">kesempatan.</span>
                  </h2>
                </div>

                <div>
                  <p className="text-sm leading-7 text-[#170401]/60 sm:text-base">
                    Membuka akses bagi anggota untuk berkembang di luar
                    kampus melalui kompetisi, duta, event, kolaborasi,
                    dan berbagai kesempatan lainnya.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Competition",
                      "Duta",
                      "Event",
                      "Collaboration",
                      "Networking",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#170401]/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#170401]/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CLOSING */}
      {/* ========================================================= */}

      <section className="bg-[#170401] px-5 py-28 text-[#f5f1e8] sm:px-8 sm:py-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5b446]">
                Lebih dari sekadar pemilihan
              </p>

              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Kenali.
                <br />
                Kembangkan.
                <br />
                <span className="text-[#f5b446]">Berani Tampil.</span>
              </h2>

              <p className="mt-10 max-w-xl text-sm leading-7 text-[#f5f1e8]/50 sm:text-base">
                Karena menjadi Jegeg Bagus bukanlah titik akhir.
                Perjalanan sebenarnya dimulai setelahnya.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="bg-[#170401] px-5 pb-8 text-[#f5f1e8] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-[#f5f1e8]/10 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#f5f1e8]/35">
                Jegeg Bagus FEB Unmas
              </p>

              <p className="mt-2 text-xs text-[#f5f1e8]/40">
                Pemilihan Jegeg Bagus FEB Unmas 2027
              </p>
            </div>

            <Link
              href="/"
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5b446] transition-opacity hover:opacity-70"
            >
              Kembali ke Beranda →
            </Link>
          </div>

          <p className="mt-10 text-[8px] uppercase tracking-[0.2em] text-[#f5f1e8]/20">
            © 2027 Jegeg Bagus FEB Unmas
          </p>
        </div>
      </footer>
    </main>
  );
}