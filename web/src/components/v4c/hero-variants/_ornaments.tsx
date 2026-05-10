type SvgProps = { className?: string; stroke: string; strokeWidth?: number };

const base = (s: string, w = 1) => ({ stroke: s, strokeWidth: w, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const });

export function EngravedRing({ className, stroke, strokeWidth = 1 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <ellipse cx="60" cy="78" rx="36" ry="14" {...s} />
      <ellipse cx="60" cy="78" rx="36" ry="6" {...s} opacity="0.5" />
      <path d="M60 64 L52 50 L60 38 L68 50 Z" {...s} />
      <path d="M52 50 L68 50" {...s} />
      <circle cx="60" cy="46" r="2.5" {...s} fill={stroke ?? "currentColor"} />
      <path d="M30 78 Q30 60 60 60 Q90 60 90 78" {...s} opacity="0.6" />
    </svg>
  );
}

export function HeraldicCrest({ className, stroke, strokeWidth = 1 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true">
      <path d="M14 38 L14 24 Q14 20 18 18 L36 12 Q40 11 44 12 L62 18 Q66 20 66 24 L66 38" {...s} />
      <path d="M40 12 L40 4" {...s} />
      <circle cx="40" cy="3" r="1.6" {...s} fill={stroke ?? "currentColor"} />
      <path d="M14 38 Q14 70 40 88 Q66 70 66 38 Z" {...s} />
      <text x="40" y="62" textAnchor="middle" fontSize="22" fontStyle="italic" fontFamily="serif" fill={stroke ?? "currentColor"} stroke="none">P</text>
      <path d="M22 28 L58 28" {...s} opacity="0.5" />
      <path d="M22 80 Q40 92 58 80" {...s} opacity="0.4" />
    </svg>
  );
}

export function GuillochePattern({ className, stroke, strokeWidth = 0.6 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  const circles = Array.from({ length: 18 }, (_, i) => i * 28);
  return (
    <svg viewBox="0 0 500 24" className={className} aria-hidden preserveAspectRatio="none">
      {circles.map((x, i) => (
        <g key={i} opacity="0.7">
          <circle cx={x + 14} cy="12" r="10" {...s} />
          <circle cx={x + 14} cy="12" r="6" {...s} />
          <circle cx={x + 14} cy="12" r="2" {...s} />
        </g>
      ))}
      <line x1="0" y1="12" x2="500" y2="12" {...s} opacity="0.3" />
    </svg>
  );
}

export function HallmarkStamps({ className, stroke }: SvgProps) {
  const s = base(stroke, 0.8);
  return (
    <svg viewBox="0 0 130 26" className={className} aria-hidden="true">
      <g>
        <rect x="2" y="2" width="36" height="22" {...s} />
        <text x="20" y="17" textAnchor="middle" fontSize="9" fontFamily="serif" fontStyle="italic" fill={stroke ?? "currentColor"} stroke="none">750</text>
      </g>
      <g>
        <rect x="46" y="2" width="36" height="22" {...s} />
        <path d="M64 6 L72 13 L64 20 L56 13 Z" {...s} />
      </g>
      <g>
        <rect x="90" y="2" width="36" height="22" {...s} />
        <text x="108" y="17" textAnchor="middle" fontSize="8" fontFamily="serif" fontStyle="italic" fill={stroke ?? "currentColor"} stroke="none">℘ Lx</text>
      </g>
    </svg>
  );
}

export function ArtNouveauVine({ className, stroke, strokeWidth = 1 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 240 80" className={className} aria-hidden="true">
      <path d="M4 40 Q40 4 80 40 Q120 76 160 40 Q200 4 236 40" {...s} />
      <path d="M30 28 Q26 14 36 12 Q42 22 30 28 Z" {...s} />
      <path d="M86 50 Q90 64 80 66 Q74 56 86 50 Z" {...s} />
      <path d="M150 28 Q146 14 156 12 Q162 22 150 28 Z" {...s} />
      <path d="M206 50 Q210 64 200 66 Q194 56 206 50 Z" {...s} />
      <circle cx="120" cy="58" r="2" {...s} fill={stroke ?? "currentColor"} />
    </svg>
  );
}

export function ArtNouveauWhip({ className, stroke, strokeWidth = 1.2 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 60 200" className={className} aria-hidden="true">
      <path d="M30 4 Q12 40 30 80 Q48 120 30 160 Q18 188 30 196" {...s} />
      <circle cx="30" cy="4" r="2" {...s} fill={stroke ?? "currentColor"} />
      <circle cx="30" cy="196" r="2" {...s} fill={stroke ?? "currentColor"} />
    </svg>
  );
}

export function ArtNouveauFleur({ className, stroke, strokeWidth = 1 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true">
      <path d="M40 8 Q24 30 40 50 Q56 30 40 8 Z" {...s} />
      <path d="M40 50 Q14 56 14 80 Q40 76 40 50 Z" {...s} />
      <path d="M40 50 Q66 56 66 80 Q40 76 40 50 Z" {...s} />
      <path d="M40 50 L40 96" {...s} />
      <circle cx="40" cy="50" r="3" {...s} fill={stroke ?? "currentColor"} />
    </svg>
  );
}

export function ArtDecoFrieze({ className, stroke, strokeWidth = 0.8 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  const tiles = Array.from({ length: 24 }, (_, i) => i * 24);
  return (
    <svg viewBox="0 0 576 24" className={className} aria-hidden preserveAspectRatio="none">
      <line x1="0" y1="2" x2="576" y2="2" {...s} />
      <line x1="0" y1="22" x2="576" y2="22" {...s} />
      {tiles.map((x, i) => (
        <g key={i}>
          <path d={`M${x + 12} 4 L${x + 22} 12 L${x + 12} 20 L${x + 2} 12 Z`} {...s} />
          <line x1={x + 12} y1="4" x2={x + 12} y2="20" {...s} opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

export function SunburstFan({ className, stroke, strokeWidth = 0.8 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  const rays = Array.from({ length: 13 }, (_, i) => -60 + i * 10);
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <g transform="translate(100 110)">
        {rays.map((deg) => (
          <line key={deg} x1="0" y1="0" x2="0" y2="-100" {...s} transform={`rotate(${deg})`} opacity="0.65" />
        ))}
        <path d="M-100 0 A100 100 0 0 1 100 0" {...s} />
        <path d="M-70 0 A70 70 0 0 1 70 0" {...s} opacity="0.5" />
        <circle cx="0" cy="0" r="4" {...s} fill={stroke ?? "currentColor"} />
      </g>
    </svg>
  );
}

export function DecoCornerFrame({ className, stroke, strokeWidth = 1 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M4 30 L4 4 L30 4" {...s} />
      <path d="M10 22 L10 10 L22 10" {...s} opacity="0.6" />
      <path d="M16 14 L16 16 L24 16" {...s} opacity="0.4" />
      <path d="M14 16 L20 22" {...s} opacity="0.5" />
      <circle cx="14" cy="14" r="1.5" {...s} fill={stroke ?? "currentColor"} />
    </svg>
  );
}

export function BrilliantCutScheme({ className, stroke, strokeWidth = 0.7 }: SvgProps) {
  const s = base(stroke, strokeWidth);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <polygon points="60,8 108,42 90,108 30,108 12,42" {...s} />
      <polygon points="60,8 90,42 60,68 30,42" {...s} />
      <line x1="12" y1="42" x2="108" y2="42" {...s} opacity="0.6" />
      <line x1="60" y1="8" x2="60" y2="68" {...s} opacity="0.5" />
      <line x1="30" y1="42" x2="60" y2="68" {...s} opacity="0.5" />
      <line x1="90" y1="42" x2="60" y2="68" {...s} opacity="0.5" />
      <line x1="30" y1="108" x2="60" y2="68" {...s} opacity="0.4" />
      <line x1="90" y1="108" x2="60" y2="68" {...s} opacity="0.4" />
    </svg>
  );
}
