"use client";


export default function ContactCard({
  name,
  role,
  image,
  href,
}: {
  name: string;
  role: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block min-w-0 overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(23,4,1,0.18)] transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      <img
        src={image}
        alt={name}
        className="relative h-full min-h-[180px] w-full object-cover object-center"
      />

      {/* iOS-style glass highlight + shadow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170401]/80 via-[#170401]/10 to-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2a1616]/20 to-transparent blur-[2px]" />

      <div className="absolute inset-x-0 bottom-0 p-3.5 text-white sm:p-5">

        <h3 className="mt-1 font-serif text-xl leading-none sm:text-2xl">
          {name}
        </h3>

        <p className="mt-1 text-[9px] text-white/65 sm:text-xs">
          {role}
        </p>
      </div>
    </a>
  );
}
