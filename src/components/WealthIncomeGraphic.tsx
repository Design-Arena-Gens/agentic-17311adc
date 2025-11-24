export function WealthIncomeGraphic() {
  return (
    <svg
      viewBox="0 0 540 960"
      className="h-full w-full"
      role="img"
      aria-labelledby="wealth-income-title wealth-income-desc"
    >
      <title id="wealth-income-title">Wealth versus Income</title>
      <desc id="wealth-income-desc">
        Gold exponential curve labeled wealth rising above a flat blue income
        line.
      </desc>
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1d1d1d" />
          <stop offset="55%" stopColor="#030712" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="wealth-gradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#f7b733" />
          <stop offset="50%" stopColor="#f9a602" />
          <stop offset="100%" stopColor="#f1c40f" />
        </linearGradient>
        <linearGradient id="income-gradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
        <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="540" height="960" fill="url(#bg-glow)" />
      <g transform="translate(60 120)">
        <text
          x="0"
          y="0"
          fill="#9ca3af"
          fontSize="36"
          fontFamily="var(--font-geist-sans, 'Geist Sans', 'Inter', sans-serif)"
          letterSpacing="4"
          opacity="0.75"
        >
          ECONOMIC TRAJECTORIES
        </text>
        <text
          x="0"
          y="70"
          fill="#f4f4f5"
          fontSize="60"
          fontWeight="600"
          fontFamily="var(--font-geist-sans, 'Geist Sans', 'Inter', sans-serif)"
        >
          WEALTH vs. INCOME
        </text>
      </g>
      <g transform="translate(60 240)">
        <path
          d="M0 520 Q 160 400 220 320 T 320 200 T 380 120 T 420 60 T 440 0"
          stroke="url(#wealth-gradient)"
          strokeWidth="18"
          fill="none"
          filter="url(#soft-glow)"
        />
        <path
          d="M0 520 H 420"
          stroke="url(#income-gradient)"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          filter="url(#soft-glow)"
        />
        <g fontFamily="var(--font-geist-sans, 'Geist Sans', 'Inter', sans-serif)">
          <text
            x="420"
            y="84"
            fill="#f8fafc"
            fontSize="52"
            fontWeight="600"
            textAnchor="end"
          >
            WEALTH
          </text>
          <text
            x="420"
            y="560"
            fill="#bfdbfe"
            fontSize="44"
            fontWeight="500"
            textAnchor="end"
          >
            INCOME
          </text>
        </g>
      </g>
      <g transform="translate(60 240)">
        <path
          d="M80 520 C 120 360 180 280 260 240"
          stroke="rgba(247, 183, 51, 0.55)"
          strokeWidth="4"
          strokeDasharray="12 14"
          fill="none"
        />
        <circle cx="260" cy="240" r="10" fill="#f8fafc" opacity="0.8" />
        <circle cx="420" cy="0" r="18" fill="#f1c40f" opacity="0.85" />
        <circle cx="420" cy="520" r="16" fill="#38bdf8" opacity="0.85" />
      </g>
    </svg>
  );
}
