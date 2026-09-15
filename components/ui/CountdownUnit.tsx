"use client";

export default function CountdownUnit({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[15px] border border-white/[0.09] bg-black/[0.12] px-1.5 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:rounded-[18px] sm:px-3 sm:py-4">
      <p className="font-serif text-xl leading-none tracking-tight text-white sm:text-3xl">
        {value}
      </p>

      <p className="mt-1.5 text-[6px] uppercase tracking-[0.16em] text-white/30 sm:mt-2 sm:text-[8px]">
        {label}
      </p>
    </div>
  );
}