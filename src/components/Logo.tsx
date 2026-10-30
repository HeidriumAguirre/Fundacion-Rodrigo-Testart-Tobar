import Link from "next/link";

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Fundación Dr. Rodrigo Testart Tobar"
    >
      <defs>
        <linearGradient id="fdt-heart" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="55%" stopColor="#33B3A6" />
          <stop offset="100%" stopColor="#1A5A53" />
        </linearGradient>
      </defs>
      <path
        d="M24 42.5C8.8 33.4 4 26.3 4 19.3 4 12.9 8.9 8 15 8c3.6 0 6.9 1.7 9 4.6C26.1 9.7 29.4 8 33 8c6.1 0 11 4.9 11 11.3 0 7-4.8 14.1-20 23.2Z"
        fill="url(#fdt-heart)"
      />
      <path
        d="M11.5 23.5h5.2l2.8-6.4 4.4 12.1 3.2-5.7h5.2"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-turq-600">
          Fundación
        </span>
        <span className="mt-1 font-display text-[0.95rem] font-bold leading-tight text-turq-800 sm:text-base">
          Dr. Rodrigo Testart Tobar
        </span>
      </span>
    </span>
  );
}

export function LogoLink() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Ir al inicio">
      <Logo />
    </Link>
  );
}
