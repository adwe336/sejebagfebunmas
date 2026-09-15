export default function Footer() {
  return (
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
  );
}
