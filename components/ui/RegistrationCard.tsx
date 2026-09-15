"use client";


export default function RegistrationCard({
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

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f5d98a]/[0.10] blur-[90px]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[72%] overflow-hidden">


          <img
            src={image}
            alt="Jegeg Bagus FEB Unmas"
            className="h-[130%] w-9/10 object-cover object-[center_70%] transition-transform duration-700 group-hover:scale-[1.025]"
          />


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
