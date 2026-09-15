"use client";


export default function MobileTimelineItem({
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

      <div className="absolute left-1/2 top-0 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[#f5d98a]/50 bg-[#170401] shadow-[0_0_0_5px_#170401,0_0_18px_rgba(245,217,138,0.15)]">

        <div className="firefly-animation h-2 w-2 rounded-full bg-[#f5d98a] shadow-[0_0_12px_rgba(245,217,138,0.8)]" />

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

        <p className="text-[9px] font-medium tracking-[0.22em] text-[#f5d98a]/60">
          {date}
        </p>

        <h3 className="mt-1 font-serif text-lg leading-tight text-white">
          {title}
        </h3>

      </div>
    </div>
  );
}
