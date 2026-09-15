"use client";

export default function Tentang() {
  return (
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
  );
}
