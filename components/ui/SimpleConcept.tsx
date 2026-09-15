"use client";

export default function SimpleConcept({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#f5d98a]/20 hover:bg-white/[0.06] sm:p-6">

      {/* Concept content */}

      <h3 className="font-serif text-xl text-white sm:text-2xl">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-white/45 sm:text-sm">
        {text}
      </p>

    </div>
  );
}