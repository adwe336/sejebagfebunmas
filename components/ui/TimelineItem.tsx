"use client";

export default function TimelineItem({
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
        relative px-1
        transition-all duration-700
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

      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#f5d98a]/50 bg-[#170401] shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]">

        <div className="firefly-animation h-2 w-2 rounded-full bg-[#f5d98a] shadow-[0_0_12px_rgba(245,217,138,0.8)]" />

      </div>

      <div className="mt-7 pr-6 sm:pr-10">

        <p className="text-[10px] font-medium tracking-[0.25em] text-[#f5d98a]/70 sm:text-xs">
          {date}
        </p>

        <h3 className="mt-2 max-w-[150px] font-serif text-base leading-tight text-white sm:text-lg md:text-xl">
          {title}
        </h3>

      </div>
    </div>
  );
}
